/**
 * BirthHub Backend v2.2.0
 *
 * Features:
 * - Generic Google Sheet datastore: get / insert / update / delete
 * - Mama Chat GPT backend using OpenAI Responses API
 *
 * Required Script Properties:
 * - OPENAI_API_KEY: your OpenAI API key
 *
 * Optional Script Properties:
 * - OPENAI_MODEL: default gpt-5.5
 * - SPREADSHEET_ID: override spreadsheet ID if needed
 */

const DEFAULT_SPREADSHEET_ID = '1JAYPYsxKZsPfM3i8nbw-DVleQMWRsil8st7-nAcb6dw';
const DEFAULT_OPENAI_MODEL = 'gpt-5.5';
const AUTH_TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60;

const ALLOWED_SHEETS = new Set([
  'Exams',
  'Weight',
  'Shopping',
  'Appointments',
  'MaternityLeave',
  'Journal',
  'Nutrition',
  'Videos',
  'Settings'
]);

function doGet(e) {
  try {
    const sheetName = e.parameter.sheet || e.parameter.app;

    const auth = verifyRequestToken(e.parameter.token);
    if (!auth.success) return jsonOutput(auth);

    if (!sheetName) {
      return jsonOutput({
        success: false,
        error: 'sheet parameter missing'
      });
    }

    return getSheetRows(sheetName);
  } catch (error) {
    return jsonOutput({
      success: false,
      error: String(error && error.message ? error.message : error)
    });
  }
}

function doPost(e) {
  try {
    const body = parseBody(e);
    const action = body.action;

    if (action === 'login') return handleLogin(body);
    if (action === 'verifyToken') return jsonOutput(verifyRequestToken(body.token));

    const auth = verifyRequestToken(body.token);
    if (!auth.success) return jsonOutput(auth);

    if (action === 'mamaChat') {
      return handleMamaChat(body);
    }

    if (action === 'get') {
      return getSheetRows(body.sheet);
    }

    if (action === 'insert') {
      return insertSheetRow(body.sheet, body.row);
    }

    if (action === 'update') {
      return updateSheetRow(body.sheet, body.rowId, body.row);
    }

    if (action === 'delete') {
      return deleteSheetRow(body.sheet, body.rowId);
    }

    return jsonOutput({
      success: false,
      error: 'unknown action'
    });
  } catch (error) {
    return jsonOutput({
      success: false,
      error: String(error && error.message ? error.message : error)
    });
  }
}

function parseBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  return JSON.parse(e.postData.contents);
}

function getSpreadsheet() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SPREADSHEET_ID') || DEFAULT_SPREADSHEET_ID;
  return SpreadsheetApp.openById(id);
}

function getSheetOrThrow(sheetName) {
  if (!sheetName) throw new Error('sheet missing');

  if (!ALLOWED_SHEETS.has(sheetName)) {
    throw new Error(`sheet not allowed: ${sheetName}`);
  }

  const sheet = getSpreadsheet().getSheetByName(sheetName);

  if (!sheet) {
    throw new Error(`sheet not found: ${sheetName}`);
  }

  return sheet;
}

function getSheetRows(sheetName) {
  const sheet = getSheetOrThrow(sheetName);
  const values = sheet.getDataRange().getValues();

  if (!values.length) {
    return jsonOutput([]);
  }

  const headers = values[0];

  const data = values.slice(1).map((row, index) => {
    const obj = {
      _rowId: index + 2
    };

    headers.forEach((header, colIndex) => {
      obj[header] = normalizeCellValue(row[colIndex]);
    });

    return obj;
  });

  return jsonOutput(data);
}

function insertSheetRow(sheetName, row) {
  const sheet = getSheetOrThrow(sheetName);
  const headers = getHeaders(sheet);
  const values = headers.map(header => row && row[header] !== undefined ? row[header] : '');

  sheet.appendRow(values);

  return jsonOutput({
    success: true,
    rowId: sheet.getLastRow()
  });
}

function updateSheetRow(sheetName, rowId, row) {
  const sheet = getSheetOrThrow(sheetName);
  const safeRowId = Number(rowId);

  if (!safeRowId || safeRowId < 2 || safeRowId > sheet.getLastRow()) {
    throw new Error('invalid rowId');
  }

  const headers = getHeaders(sheet);
  const existing = sheet.getRange(safeRowId, 1, 1, headers.length).getValues()[0];

  headers.forEach((header, index) => {
    if (row && row[header] !== undefined) {
      existing[index] = row[header];
    }
  });

  sheet.getRange(safeRowId, 1, 1, headers.length).setValues([existing]);

  return jsonOutput({
    success: true,
    rowId: safeRowId
  });
}

function deleteSheetRow(sheetName, rowId) {
  const sheet = getSheetOrThrow(sheetName);
  const safeRowId = Number(rowId);

  if (!safeRowId || safeRowId < 2 || safeRowId > sheet.getLastRow()) {
    throw new Error('invalid rowId');
  }

  sheet.deleteRow(safeRowId);

  return jsonOutput({
    success: true
  });
}

function getHeaders(sheet) {
  const lastColumn = sheet.getLastColumn();

  if (!lastColumn) {
    throw new Error('sheet has no headers');
  }

  return sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
}

function normalizeCellValue(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss");
  }

  return value;
}


function handleLogin(body){
  const pin=String(body.pin||'').trim();
  const props=PropertiesService.getScriptProperties();
  const expected=String(props.getProperty('APP_PIN')||'').trim();
  if(!expected)return jsonOutput({success:false,error:'APP_PIN script property missing'});
  if(pin!==expected)return jsonOutput({success:false,error:'invalid pin'});
  const now=Math.floor(Date.now()/1000);
  const expiresAt=now+AUTH_TOKEN_TTL_SECONDS;
  const token=createAuthToken(expiresAt);
  return jsonOutput({success:true,token,expiresAt});
}
function verifyRequestToken(token){
  if(!token)return {success:false,error:'not authenticated'};
  const parts=String(token).split('.');
  if(parts.length!==3)return {success:false,error:'invalid token'};
  const payload=parts[0], expiresAt=Number(parts[1]), sig=parts[2];
  if(!expiresAt || Math.floor(Date.now()/1000)>expiresAt)return {success:false,error:'token expired'};
  if(sig!==signAuthPayload(`${payload}.${expiresAt}`))return {success:false,error:'invalid token signature'};
  return {success:true};
}
function createAuthToken(expiresAt){
  const payload=Utilities.base64EncodeWebSafe(JSON.stringify({app:'BirthHub',iat:Math.floor(Date.now()/1000)}));
  const toSign=`${payload}.${expiresAt}`;
  return `${toSign}.${signAuthPayload(toSign)}`;
}
function signAuthPayload(value){
  const secret=PropertiesService.getScriptProperties().getProperty('AUTH_SECRET')||'CHANGE_ME_BIRTHHUB_AUTH_SECRET';
  return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(value,secret));
}

/**
 * Mama Chat
 */
function handleMamaChat(body) {
  const message = String(body.message || '').trim();

  if (!message) {
    return jsonOutput({
      success: false,
      error: 'message missing'
    });
  }

  const key = PropertiesService.getScriptProperties().getProperty('OPENAI_API_KEY');

  if (!key) {
    return jsonOutput({
      success: false,
      error: 'OPENAI_API_KEY script property missing'
    });
  }

  const model =
    PropertiesService.getScriptProperties().getProperty('OPENAI_MODEL') ||
    DEFAULT_OPENAI_MODEL;

  const history = Array.isArray(body.history) ? body.history.slice(-12) : [];

  const input = buildMamaChatInput(message, history);

  const payload = {
    model,
    instructions: getMamaChatInstructions(),
    input,
    temperature: 0.4,
    max_output_tokens: 650
  };

  const response = UrlFetchApp.fetch('https://api.openai.com/v1/responses', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: `Bearer ${key}`
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const status = response.getResponseCode();
  const text = response.getContentText();

  if (status < 200 || status >= 300) {
    return jsonOutput({
      success: false,
      error: `OpenAI HTTP ${status}: ${text}`
    });
  }

  const data = JSON.parse(text);
  const reply = extractOpenAIText(data);

  return jsonOutput({
    success: true,
    reply,
    model
  });
}

function buildMamaChatInput(message, history) {
  const input = [];

  history.forEach(item => {
    if (!item || !item.content) return;

    input.push({
      role: item.role === 'assistant' ? 'assistant' : 'user',
      content: [
        {
          type: item.role === 'assistant' ? 'output_text' : 'input_text',
          text: String(item.content).slice(0, 2000)
        }
      ]
    });
  });

  input.push({
    role: 'user',
    content: [
      {
        type: 'input_text',
        text: message
      }
    ]
  });

  return input;
}

function getMamaChatInstructions() {
  return `
Είσαι το Mama Chat, ένας ήρεμος, υποστηρικτικός βοηθός μέσα στο BirthHub.
Απαντάς πάντα στα ελληνικά, απλά και πρακτικά.

Ρόλος:
- Βοηθάς με οργάνωση εγκυμοσύνης, λίστες, προετοιμασία, ιδέες ερωτήσεων για γιατρό/μαία, ήρεμες εξηγήσεις και συναισθηματική υποστήριξη.
- Δεν αντικαθιστάς γιατρό, μαία, φαρμακοποιό ή επείγουσα βοήθεια.
- Δεν κάνεις διάγνωση και δεν δίνεις ιατρικές οδηγίες υψηλού ρίσκου.
- Όταν υπάρχουν συμπτώματα όπως αιμορραγία, έντονος πόνος, λιποθυμία, δύσπνοια, υψηλή πίεση, μειωμένες κινήσεις μωρού, έντονος πονοκέφαλος, οπτικές διαταραχές ή οτιδήποτε επείγον, προτρέπεις άμεση επικοινωνία με γιατρό/μαιευτήριο/επείγοντα.

Στυλ:
- Ζεστό, καθησυχαστικό, χωρίς υπερβολές.
- Σύντομες απαντήσεις.
- Όταν βοηθά, δώσε bullets ή mini checklist.
- Κλείσε με ένα πρακτικό επόμενο βήμα.

Context:
- ΤΕΡ: 12/01/2026.
- Το app χρησιμοποιείται από οικογένεια στην Ελλάδα.
`;
}

function extractOpenAIText(data) {
  if (data.output_text) return data.output_text;

  if (!Array.isArray(data.output)) {
    return 'Δεν μπόρεσα να πάρω απάντηση από το μοντέλο.';
  }

  const chunks = [];

  data.output.forEach(item => {
    if (!Array.isArray(item.content)) return;

    item.content.forEach(content => {
      if (content.text) chunks.push(content.text);
    });
  });

  return chunks.join('\n').trim() || 'Δεν μπόρεσα να πάρω απάντηση από το μοντέλο.';
}

function jsonOutput(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
