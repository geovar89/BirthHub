const homeView = document.getElementById('homeView');
const examsView = document.getElementById('examsView');
const weightView = document.getElementById('weightView');

const openExams = document.getElementById('openExams');
const openWeight = document.getElementById('openWeight');
const backHome = document.getElementById('backHome');
const backHomeFromWeight = document.getElementById('backHomeFromWeight');

const refreshExams = document.getElementById('refreshExams');
const statusEl = document.getElementById('status');
const timeline = document.getElementById('timeline');
const searchInput = document.getElementById('searchInput');
const uploadCard = document.getElementById('uploadCard');
const fileInput = document.getElementById('fileInput');

const weightForm = document.getElementById('weightForm');
const weightInput = document.getElementById('weightInput');
const weekInput = document.getElementById('weekInput');
const weightTableBody = document.getElementById('weightTableBody');
const weightCount = document.getElementById('weightCount');
const weightSummary = document.getElementById('weightSummary');
const clearWeightEntries = document.getElementById('clearWeightEntries');
const weightChartCanvas = document.getElementById('weightChart');
const prevWeightPage = document.getElementById('prevWeightPage');
const nextWeightPage = document.getElementById('nextWeightPage');
const weightPageInfo = document.getElementById('weightPageInfo');

const nutritionView = document.getElementById('nutritionView');
const openNutrition = document.getElementById('openNutrition');
const backHomeFromNutrition = document.getElementById('backHomeFromNutrition');
const resetNutritionDay = document.getElementById('resetNutritionDay');
const mealChecklist = document.getElementById('mealChecklist');
const nutritionTabs = document.getElementById('nutritionTabs');
const nutritionContent = document.getElementById('nutritionContent');
const nutritionProgressText = document.getElementById('nutritionProgressText');
const nutritionProgressPercent = document.getElementById('nutritionProgressPercent');

let exams = [];
let weightEntries = [];
let weightChart = null;
let currentWeightPage = 1;
let activeMealKey = 'breakfast';

const WEIGHT_STORAGE_KEY = 'birthApp.weightEntries.v1';
const WEIGHT_PAGE_SIZE = 10;
const NUTRITION_STORAGE_KEY = 'birthApp.nutritionChecklist.v1';
const PREGNANCY_IMPORT_DATA = {
  "lastMenstruationDate": "2026-01-12",
  "momWeightBeforePregnancy": 82.5,
  "momHeight": 1.5699999,
  "weights": [
    {
      "date": "2026-07-01",
      "weight": 89.8
    },
    {
      "date": "2026-06-27",
      "weight": 89.2
    },
    {
      "date": "2026-06-18",
      "weight": 88.3
    },
    {
      "date": "2026-06-17",
      "weight": 87.8
    },
    {
      "date": "2026-06-16",
      "weight": 87.5
    },
    {
      "date": "2026-06-15",
      "weight": 87.8
    },
    {
      "date": "2026-06-13",
      "weight": 87.3
    },
    {
      "date": "2026-06-12",
      "weight": 87.8
    },
    {
      "date": "2026-06-11",
      "weight": 87.0
    },
    {
      "date": "2026-06-10",
      "weight": 87.2
    },
    {
      "date": "2026-06-08",
      "weight": 87.2
    },
    {
      "date": "2026-06-07",
      "weight": 86.5
    },
    {
      "date": "2026-06-05",
      "weight": 86.4
    },
    {
      "date": "2026-06-03",
      "weight": 86.0
    },
    {
      "date": "2026-06-01",
      "weight": 85.5
    },
    {
      "date": "2026-05-31",
      "weight": 85.1
    },
    {
      "date": "2026-05-30",
      "weight": 85.7
    },
    {
      "date": "2026-05-29",
      "weight": 85.7
    },
    {
      "date": "2026-05-28",
      "weight": 85.5
    },
    {
      "date": "2026-05-26",
      "weight": 85.8
    },
    {
      "date": "2026-05-25",
      "weight": 85.7
    },
    {
      "date": "2026-05-24",
      "weight": 85.3
    },
    {
      "date": "2026-05-23",
      "weight": 84.8
    },
    {
      "date": "2026-05-22",
      "weight": 84.8
    },
    {
      "date": "2026-05-21",
      "weight": 85.3
    },
    {
      "date": "2026-05-17",
      "weight": 84.8
    },
    {
      "date": "2026-05-16",
      "weight": 84.0
    },
    {
      "date": "2026-05-13",
      "weight": 83.9
    },
    {
      "date": "2026-05-12",
      "weight": 84.2
    },
    {
      "date": "2026-05-08",
      "weight": 83.4
    },
    {
      "date": "2026-05-07",
      "weight": 83.7
    },
    {
      "date": "2026-05-05",
      "weight": 83.5
    },
    {
      "date": "2026-05-04",
      "weight": 83.4
    },
    {
      "date": "2026-05-03",
      "weight": 83.3
    },
    {
      "date": "2026-05-01",
      "weight": 82.9
    },
    {
      "date": "2026-04-28",
      "weight": 83.7
    },
    {
      "date": "2026-04-27",
      "weight": 83.3
    },
    {
      "date": "2026-04-26",
      "weight": 82.9
    },
    {
      "date": "2026-04-25",
      "weight": 83.1
    },
    {
      "date": "2026-04-24",
      "weight": 83.6
    },
    {
      "date": "2026-04-23",
      "weight": 82.4
    },
    {
      "date": "2026-04-21",
      "weight": 82.7
    },
    {
      "date": "2026-04-20",
      "weight": 83.4
    },
    {
      "date": "2026-04-19",
      "weight": 83.6
    },
    {
      "date": "2026-04-18",
      "weight": 82.8
    },
    {
      "date": "2026-04-17",
      "weight": 82.9
    },
    {
      "date": "2026-04-16",
      "weight": 83.3
    },
    {
      "date": "2026-04-15",
      "weight": 82.8
    },
    {
      "date": "2026-04-05",
      "weight": 81.7
    },
    {
      "date": "2026-03-28",
      "weight": 81.8
    },
    {
      "date": "2026-03-22",
      "weight": 81.0
    },
    {
      "date": "2026-03-21",
      "weight": 81.8
    },
    {
      "date": "2026-03-19",
      "weight": 81.7
    },
    {
      "date": "2026-03-15",
      "weight": 81.2
    },
    {
      "date": "2026-03-14",
      "weight": 81.3
    },
    {
      "date": "2026-03-11",
      "weight": 82.1
    },
    {
      "date": "2026-03-10",
      "weight": 82.1
    },
    {
      "date": "2026-03-09",
      "weight": 81.8
    },
    {
      "date": "2026-03-08",
      "weight": 82.3
    },
    {
      "date": "2026-02-23",
      "weight": 82.6
    }
  ],
  "notes": [
    {
      "date": "2026-05-12",
      "text": "Εξέταση d dimers"
    }
  ]
};
const WEIGHT_IMPORT_FLAG_KEY = 'birthApp.weightImportDone.v1';


openExams.addEventListener('click', async () => {
  showView('exams');
  if (!exams.length) await loadFromConfiguredExcel();
});

openWeight.addEventListener('click', () => {
  showView('weight');
  loadWeightEntries();
  importPregnancyWeightsIfNeeded();
  renderWeightApp();
});

openNutrition?.addEventListener('click', () => {
  showView('nutrition');
  renderNutritionApp();
});

backHome.addEventListener('click', () => showView('home'));
backHomeFromWeight.addEventListener('click', () => showView('home'));
backHomeFromNutrition?.addEventListener('click', () => showView('home'));
refreshExams.addEventListener('click', loadFromConfiguredExcel);
searchInput.addEventListener('input', renderExams);
fileInput.addEventListener('change', handleFileUpload);

weightForm.addEventListener('submit', handleWeightSubmit);
clearWeightEntries.addEventListener('click', clearAllWeightEntries);
prevWeightPage?.addEventListener('click', () => {
  if (currentWeightPage > 1) {
    currentWeightPage -= 1;
    renderWeightApp();
  }
});
nextWeightPage?.addEventListener('click', () => {
  const pages = Math.max(1, Math.ceil(weightEntries.length / WEIGHT_PAGE_SIZE));
  if (currentWeightPage < pages) {
    currentWeightPage += 1;
    renderWeightApp();
  }
});
resetNutritionDay?.addEventListener('click', () => {
  localStorage.removeItem(NUTRITION_STORAGE_KEY);
  renderNutritionApp();
});

function showView(view) {
  homeView.classList.toggle('active', view === 'home');
  examsView.classList.toggle('active', view === 'exams');
  weightView.classList.toggle('active', view === 'weight');
  nutritionView?.classList.toggle('active', view === 'nutrition');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadFromConfiguredExcel() {
  const excelUrl = window.BIRTH_APP_CONFIG?.EXCEL_URL?.trim();
  timeline.innerHTML = '';

  if (!excelUrl) {
    uploadCard.style.display = 'block';
    statusEl.textContent = 'Περιμένω Excel αρχείο ή ρύθμιση EXCEL_URL στο config.js.';
    return;
  }

  uploadCard.style.display = 'none';
  statusEl.textContent = 'Φόρτωση δεδομένων...';

  try {
    if (isAppsScriptUrl(excelUrl)) {
      const rows = await loadAppsScriptRows(excelUrl);
      setExamsFromRows(rows);
      return;
    }

    if (isGoogleSheetUrl(excelUrl)) {
      const rows = await loadGoogleSheetRows(excelUrl);
      setExamsFromRows(rows);
      return;
    }

    const response = await fetch(excelUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const rows = await response.json();
      setExamsFromRows(rows);
      return;
    }

    if (contentType.includes('text/html')) {
      throw new Error('Το URL επέστρεψε HTML σελίδα και όχι Excel/CSV δεδομένα.');
    }

    const arrayBuffer = await response.arrayBuffer();
    parseWorkbook(arrayBuffer);
  } catch (error) {
    uploadCard.style.display = 'block';
    statusEl.textContent = 'Δεν μπόρεσα να διαβάσω τα δεδομένα. Έλεγξε ότι το Google Sheet ή το Apps Script είναι public.';
    console.error(error);
  }
}

function isAppsScriptUrl(url) {
  return /script\.google\.com\/macros\/s\//.test(url);
}

async function loadAppsScriptRows(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Apps Script HTTP ${response.status}`);

  const data = await response.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.data)) return data.data;
  if (Array.isArray(data.rows)) return data.rows;

  throw new Error('Το Apps Script δεν επέστρεψε array δεδομένων.');
}

function isGoogleSheetUrl(url) {
  return /docs\.google\.com\/spreadsheets\/d\//.test(url);
}

function extractGoogleSheetInfo(url) {
  const idMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  const gidMatch = url.match(/[?#&]gid=(\d+)/);

  if (!idMatch) throw new Error('Δεν βρέθηκε Google Sheet ID.');

  return {
    id: idMatch[1],
    gid: gidMatch ? gidMatch[1] : '0'
  };
}

function loadGoogleSheetRows(url) {
  const { id, gid } = extractGoogleSheetInfo(url);
  const callbackName = `birthAppSheetCallback_${Date.now()}`;

  const gvizUrl =
    `https://docs.google.com/spreadsheets/d/${id}/gviz/tq` +
    `?gid=${gid}&tqx=out:json;responseHandler:${callbackName}`;

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error('Timeout while loading Google Sheet.'));
    }, 15000);

    function cleanup() {
      clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = data => {
      cleanup();

      try {
        const cols = data.table.cols.map(c => normalizeHeader(c.label || c.id));

        const rows = data.table.rows.map(row => {
          const obj = {};

          cols.forEach((header, index) => {
            const cell = row.c[index];
            obj[header] = cell ? cell.f || cell.v || '' : '';
          });

          return obj;
        });

        resolve(rows);
      } catch (error) {
        reject(error);
      }
    };

    script.onerror = () => {
      cleanup();
      reject(new Error('Google Sheet script load failed.'));
    };

    script.src = gvizUrl;
    document.body.appendChild(script);
  });
}

function handleFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => parseWorkbook(e.target.result);
  reader.readAsArrayBuffer(file);
}

function parseWorkbook(arrayBuffer) {
  const workbook = XLSX.read(arrayBuffer, {
    type: 'array',
    cellDates: true
  });

  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

  const rows = XLSX.utils.sheet_to_json(firstSheet, {
    defval: '',
    raw: false
  });

  setExamsFromRows(rows);
}

function setExamsFromRows(rows) {
  exams = rows
    .map(normalizeRow)
    .filter(row =>
      row.date.label !== 'Χωρίς ημερομηνία' ||
      row.event !== 'Χωρίς τίτλο' ||
      row.comments ||
      row.attachments.length
    )
    .sort((a, b) => {
      const dateA = new Date(a.date.raw || 0).getTime();
      const dateB = new Date(b.date.raw || 0).getTime();
      return dateB - dateA;
    });

  renderExams();
}

function normalizeRow(row, index) {
  const normalized = {};

  Object.entries(row || {}).forEach(([key, value]) => {
    normalized[normalizeHeader(key)] = value;
  });

  const attachmentsValue =
    normalized['επισσυναπτομενα'] ||
    normalized['επισυναπτομενα'] ||
    normalized['attachments'] ||
    normalized['attachment'] ||
    '';

  return {
    id: index + 1,
    date: normalizeDate(normalized['ημερομηνια'] || normalized['date']),
    event: normalized['γεγονος'] || normalized['event'] || 'Χωρίς τίτλο',
    comments: normalized['σχολια'] || normalized['comments'] || '',
    attachments: parseAttachments(attachmentsValue)
  };
}

function normalizeHeader(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .replace(/[,:;]/g, '');
}

function normalizeDate(value) {
  if (!value) {
    return {
      label: 'Χωρίς ημερομηνία',
      raw: ''
    };
  }

  if (typeof value === 'string') {
    const greekDate = value.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);

    if (greekDate) {
      const day = Number(greekDate[1]);
      const month = Number(greekDate[2]) - 1;
      const year = Number(
        greekDate[3].length === 2 ? `20${greekDate[3]}` : greekDate[3]
      );

      const date = new Date(year, month, day);
      return dateResult(date, value);
    }
  }

  let date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime()) && typeof value === 'number') {
    const parsed = XLSX.SSF.parse_date_code(value);
    date = new Date(parsed.y, parsed.m - 1, parsed.d);
  }

  if (Number.isNaN(date.getTime())) {
    return {
      label: String(value),
      raw: ''
    };
  }

  return dateResult(date, value);
}

function dateResult(date, fallback) {
  if (Number.isNaN(date.getTime())) {
    return {
      label: String(fallback),
      raw: ''
    };
  }

  return {
    label: date.toLocaleDateString('el-GR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    raw: date.toISOString()
  };
}

function parseAttachments(value) {
  if (!value) return [];

  let items = [];

  if (Array.isArray(value)) {
    items = value;
  } else if (typeof value === 'object') {
    items = Object.values(value);
  } else {
    const text = String(value)
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/div>\s*<div>/gi, '\n')
      .replace(/<\/?[^>]+(>|$)/g, ' ')
      .replace(/\s+(https?:\/\/)/g, '\n$1');

    items = text.split(/[\n\r,;|]+/);
  }

  return items
    .flatMap(item => splitAttachmentItem(item))
    .map(item => normalizeAttachmentUrl(item))
    .filter(Boolean)
    .filter((url, index, arr) => arr.indexOf(url) === index);
}

function splitAttachmentItem(item) {
  if (!item) return [];

  const text = String(item).trim();

  const urls = text.match(/https?:\/\/[^\s,;|]+/g);
  if (urls && urls.length) return urls;

  return [text];
}

function normalizeAttachmentUrl(url) {
  let cleanUrl = String(url || '').trim();

  if (!cleanUrl) return '';

  cleanUrl = cleanUrl
    .replace(/^["']|["']$/g, '')
    .replace(/&amp;/g, '&');

  const hrefMatch = cleanUrl.match(/href=["']([^"']+)["']/i);
  if (hrefMatch) {
    cleanUrl = hrefMatch[1];
  }

  try {
    cleanUrl = decodeURIComponent(cleanUrl);
  } catch {
    // Keep original URL if decoding fails
  }

  const driveFileMatch = cleanUrl.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
  if (driveFileMatch) {
    return `https://drive.google.com/file/d/${driveFileMatch[1]}/view`;
  }

  const driveIdMatch = cleanUrl.match(/[?&]id=([^&#]+)/);
  if (cleanUrl.includes('drive.google.com') && driveIdMatch) {
    return `https://drive.google.com/file/d/${driveIdMatch[1]}/view`;
  }

  return cleanUrl;
}

function renderExams() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = exams.filter(exam =>
    exam.event.toLowerCase().includes(query) ||
    exam.comments.toLowerCase().includes(query) ||
    exam.date.label.toLowerCase().includes(query)
  );

  statusEl.textContent = filtered.length
    ? `${filtered.length} εγγραφές`
    : 'Δεν βρέθηκαν εξετάσεις.';

  timeline.innerHTML = filtered.map(renderExamCard).join('');
}

function renderExamCard(exam) {
  const attachments = exam.attachments.length
    ? `
      <div class="attachments">
        ${exam.attachments.map((url, i) => renderAttachment(url, i)).join('')}
      </div>
    `
    : `
      <div class="attachments">
        <span class="attachment">Χωρίς αρχείο</span>
      </div>
    `;

  return `
    <article class="exam-card">
      <div class="exam-date">${escapeHtml(exam.date.label)}</div>
      <h3>${escapeHtml(exam.event)}</h3>
      ${exam.comments ? `<p>${escapeHtml(exam.comments)}</p>` : ''}
      ${attachments}
    </article>
  `;
}

function renderAttachment(url, index) {
  const lower = url.toLowerCase();

  let icon = '🔗';
  let label = `Αρχείο ${index + 1}`;

  if (lower.includes('.pdf')) {
    icon = '📄';
    label = `PDF ${index + 1}`;
  } else if (lower.match(/\.(jpg|jpeg|png|webp)(\?|#|$)/)) {
    icon = '🖼️';
    label = `Εικόνα ${index + 1}`;
  } else if (lower.includes('drive.google.com')) {
    icon = '📎';
    label = `Αρχείο ${index + 1}`;
  }

  return `
    <a class="attachment"
       href="${escapeAttribute(url)}"
       target="_blank"
       rel="noopener noreferrer">
      ${icon} ${label}
    </a>
  `;
}


function handleWeightSubmit(event) {
  event.preventDefault();

  const weight = Number(String(weightInput.value).replace(',', '.'));
  const pregnancyWeek = Number(weekInput.value);

  if (!weight || !pregnancyWeek) return;

  const now = new Date();
  const calculated = calculatePregnancyInfo(now.toISOString().slice(0, 10));

  const entry = {
    id: createId(),
    date: now.toISOString(),
    pregnancyWeek,
    pregnancyDays: calculated.days,
    pregnancyLabel: `${pregnancyWeek}+${calculated.days}`,
    weight
  };

  weightEntries.push(entry);
  currentWeightPage = 1;
  saveWeightEntries();
  renderWeightApp();

  weightInput.value = '';
  weekInput.value = '';
  weightInput.focus();
}

function loadWeightEntries() {
  try {
    const saved = localStorage.getItem(WEIGHT_STORAGE_KEY);
    weightEntries = saved ? JSON.parse(saved) : [];
  } catch {
    weightEntries = [];
  }
}

function saveWeightEntries() {
  localStorage.setItem(WEIGHT_STORAGE_KEY, JSON.stringify(weightEntries));
}

function importPregnancyWeightsIfNeeded() {
  const alreadyImported = localStorage.getItem(WEIGHT_IMPORT_FLAG_KEY) === 'true';
  if (alreadyImported || weightEntries.length) return;

  weightEntries = PREGNANCY_IMPORT_DATA.weights.map(item => {
    const pregnancy = calculatePregnancyInfo(item.date);

    return {
      id: `import-${item.date}-${String(item.weight).replace('.', '-')}`,
      date: new Date(`${item.date}T12:00:00`).toISOString(),
      pregnancyWeek: pregnancy.week,
      pregnancyDays: pregnancy.days,
      pregnancyLabel: pregnancy.label,
      weight: Number(item.weight),
      imported: true
    };
  });

  saveWeightEntries();
  localStorage.setItem(WEIGHT_IMPORT_FLAG_KEY, 'true');
}

function clearAllWeightEntries() {
  if (!weightEntries.length) return;

  const confirmed = confirm('Θέλεις σίγουρα να διαγραφούν όλες οι μετρήσεις βάρους από αυτή τη συσκευή;');
  if (!confirmed) return;

  weightEntries = [];
  currentWeightPage = 1;
  saveWeightEntries();
  localStorage.removeItem(WEIGHT_IMPORT_FLAG_KEY);
  renderWeightApp();
}

function deleteWeightEntry(id) {
  weightEntries = weightEntries.filter(entry => entry.id !== id);
  currentWeightPage = 1;
  saveWeightEntries();
  renderWeightApp();
}

function renderWeightApp() {
  const sorted = getSortedWeightEntries();
  renderWeightTable(sorted);
  renderWeightSummary(sorted);
  renderWeightChart(sorted);

  if (!weightInput.value) {
    weightInput.placeholder = sorted.length
      ? `Τελευταίο: ${formatNumber(sorted[sorted.length - 1].weight)} kg`
      : `Αρχικό: ${formatNumber(PREGNANCY_IMPORT_DATA.momWeightBeforePregnancy)} kg`;
  }
}

function getSortedWeightEntries() {
  return [...weightEntries].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function renderWeightTable(entries) {
  weightCount.textContent = `${entries.length} ${entries.length === 1 ? 'εγγραφή' : 'εγγραφές'}`;

  if (!entries.length) {
    weightTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="empty-row">Δεν υπάρχουν ακόμα μετρήσεις.</td>
      </tr>
    `;
    if (weightPageInfo) weightPageInfo.textContent = '0 / 0';
    if (prevWeightPage) prevWeightPage.disabled = true;
    if (nextWeightPage) nextWeightPage.disabled = true;
    return;
  }

  const reversed = entries.slice().reverse();
  const pages = Math.max(1, Math.ceil(reversed.length / WEIGHT_PAGE_SIZE));
  currentWeightPage = Math.min(Math.max(1, currentWeightPage), pages);
  const start = (currentWeightPage - 1) * WEIGHT_PAGE_SIZE;
  const pageItems = reversed.slice(start, start + WEIGHT_PAGE_SIZE);

  if (weightPageInfo) weightPageInfo.textContent = `${currentWeightPage} / ${pages}`;
  if (prevWeightPage) prevWeightPage.disabled = currentWeightPage === 1;
  if (nextWeightPage) nextWeightPage.disabled = currentWeightPage === pages;

  weightTableBody.innerHTML = pageItems
    .map(entry => `
      <tr>
        <td>${formatDateShort(entry.date)}</td>
        <td>${escapeHtml(getPregnancyLabel(entry))}</td>
        <td><strong>${formatNumber(entry.weight)} kg</strong></td>
        <td>
          <button class="delete-row" type="button" onclick="deleteWeightEntry('${escapeAttribute(entry.id)}')">×</button>
        </td>
      </tr>
    `)
    .join('');
}

function renderWeightSummary(entries) {
  if (!entries.length) {
    weightSummary.textContent = 'Δεν υπάρχουν ακόμα μετρήσεις.';
    return;
  }

  const first = entries[0];
  const last = entries[entries.length - 1];
  const diffFromFirst = Number(last.weight) - Number(first.weight);
  const diffFromInitial = Number(last.weight) - Number(PREGNANCY_IMPORT_DATA.momWeightBeforePregnancy);
  const signFirst = diffFromFirst > 0 ? '+' : '';
  const signInitial = diffFromInitial > 0 ? '+' : '';

  weightSummary.textContent =
    `Τελευταία μέτρηση: ${formatNumber(last.weight)} kg στην εβδ. ${getPregnancyLabel(last)}. ` +
    `Μεταβολή από την πρώτη μέτρηση: ${signFirst}${formatNumber(diffFromFirst)} kg. ` +
    `Από αρχικό βάρος ${formatNumber(PREGNANCY_IMPORT_DATA.momWeightBeforePregnancy)} kg: ${signInitial}${formatNumber(diffFromInitial)} kg.`;
}

function renderWeightChart(entries) {
  if (!weightChartCanvas || !window.Chart) return;

  const labels = entries.map(entry => `${formatDateShort(entry.date)} · ${getPregnancyLabel(entry)}`);
  const data = entries.map(entry => Number(entry.weight));

  if (weightChart) {
    weightChart.destroy();
  }

  weightChart = new Chart(weightChartCanvas, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Βάρος (kg)',
        data,
        tension: 0.32,
        fill: false,
        pointRadius: entries.length > 35 ? 2 : 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: context => `${formatNumber(context.parsed.y)} kg`
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        },
        y: {
          ticks: {
            callback: value => `${value} kg`
          }
        }
      }
    }
  });
}

function calculatePregnancyInfo(dateValue) {
  const lmp = new Date(`${PREGNANCY_IMPORT_DATA.lastMenstruationDate}T12:00:00`);
  const date = new Date(`${String(dateValue).slice(0, 10)}T12:00:00`);

  if (Number.isNaN(lmp.getTime()) || Number.isNaN(date.getTime())) {
    return { week: '', days: '', label: '' };
  }

  const diffDays = Math.max(0, Math.floor((date - lmp) / 86400000));
  const week = Math.floor(diffDays / 7);
  const days = diffDays % 7;

  return {
    week,
    days,
    label: `${week}+${days}`
  };
}

function getPregnancyLabel(entry) {
  if (entry.pregnancyLabel) return entry.pregnancyLabel;
  if (entry.pregnancyWeek && entry.pregnancyDays !== undefined) return `${entry.pregnancyWeek}+${entry.pregnancyDays}`;
  if (entry.pregnancyWeek) return String(entry.pregnancyWeek);
  return '';
}

function createId() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
}

function formatDateShort(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value || '');

  return date.toLocaleDateString('el-GR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function formatNumber(value) {
  return Number(value).toLocaleString('el-GR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  });
}


const NUTRITION_MEALS = [
  {
    key: 'breakfast',
    title: 'Πρωινό',
    icon: '🌅',
    options: [
      { title: 'Τοστ', emoji: '🥪', items: ['2 φέτες τυρί', '1 αυγό βραστό', 'ντομάτα'] },
      { title: 'Ομελέτα', emoji: '🍳', items: ['1 αυγό και 3 ασπράδια', 'λαχανικά', '60γρ τυρί', '1 φέτα ψωμί ολικής άλεσης'] },
      { title: 'Τυρόπιτα τοστιέρας', emoji: '🫓', items: ['Σύμφωνα με τη δοσμένη συνταγή'] },
      { title: 'Porridge', emoji: '🥣', items: ['1 φλιτζάνι ρόφημα αμυγδάλου', '4 κ.σ. βρώμη', '1 κλειστή χούφτα ανάλατοι ξηροί καρποί', '2 κ.γλ. σταφίδες'] },
      { title: 'Κρίτσινια με τυρί', emoji: '🧀', items: ['4 κρίτσινια', '90γρ τυρί', 'ντοματίνια'] }
    ]
  },
  {
    key: 'snack1',
    title: 'Δεκατιανό',
    icon: '🍎',
    options: [
      { title: 'Φρούτα + ξηροί καρποί', emoji: '🍏', items: ['2 φρούτα', '10 αμύγδαλα ανάλατα ή 3 καρύδια ή 10 κάσιους ή 10 φουντούκια ή 15 φυστίκια'] },
      { title: 'Φρούτα + κρίτσινι', emoji: '🥖', items: ['2 φρούτα', '1 κρίτσινι', '1 κ.γλ. μέλι ή μαρμελάδα'] },
      { title: 'Smoothie', emoji: '🥤', items: ['1/2 φλιτζάνι ρόφημα αμυγδάλου', '1 μικρή μπανάνα ή φράουλες'] },
      { title: 'Φρούτα + τυρί', emoji: '🧀', items: ['2 φρούτα', '1 κρίτσινι', '1 μερίδα τυρί'] }
    ],
    note: 'Τις φράουλες να τις βάζεις για 30 λεπτά στη σόδα.'
  },
  {
    key: 'lunch',
    title: 'Μεσημεριανό',
    icon: '🍽️',
    options: [
      { title: 'Κοτόπουλο', emoji: '🍗', tag: 'βασική επιλογή', items: ['200γρ μπούτι ή 1/2 στήθος χωρίς δέρμα', 'σαλάτα + 2 κ.σ. λάδι', '4 κομμάτια πατάτες'] },
      { title: 'Μπιφτέκι', emoji: '🥩', tag: '2 φορές/εβδομάδα', items: ['200γρ μπιφτέκι', 'σαλάτα + 1 κ.σ. λάδι', '3/4 φλιτζάνι πλιγούρι ή 1 μικρή πατάτα βραστή/ψητή'] },
      { title: 'Μακαρόνια', emoji: '🍝', items: ['2 φλιτζάνια μακαρόνια ολικής, μετρημένα αφού έχουν βράσει', '4 κ.σ. κιμά', '4 κ.σ. τυρί τριμμένο', 'σαλάτα + 2 κ.σ. λάδι'] },
      { title: 'Λαδερό', emoji: '🥔', tag: '2 φορές/εβδομάδα', items: ['1 μερίδα λαδερό', 'χωρίς κρεμμύδι ή μπάμια', '4 κομμάτια πατάτες ή 1 φέτα ψωμί ολικής ή 2 φρυγανιές ολικής', '60γρ τυρί χαμηλό σε λιπαρά'] },
      { title: 'Όσπρια', emoji: '🫘', items: ['1 βαθύ πιάτο φακές ή φασόλια ή ρεβίθια ή γίγαντες ή ρεβιθορυζομάκαρονα', '60γρ τυρί ή 2 σπιρτόκουτα φέτα', 'σαλάτα + 1 κ.σ. λάδι', '1 φέτα ψωμί ολικής άλεσης'] },
      { title: 'Ψάρι', emoji: '🐟', items: ['1 μερίδα ψάρι ψητό ή βραστό', 'σαλάτα + 1 κ.σ. λάδι', '1 φέτα ψωμί ολικής ή 90γρ πατάτα βραστή'] }
    ],
    note: 'Ρύζι = basmati = πλιγούρι. Μπορείς να προσθέσεις οποιοδήποτε φαγητό επιθυμείς, με ποσότητες βάσει κορεσμού.'
  },
  {
    key: 'snack2',
    title: 'Απογευματινό',
    icon: '☕',
    options: [
      { title: 'Γιαούρτι + φρούτα', emoji: '🥛', items: ['1 γιαούρτι 2%', '2 φρούτα ή smoothie'] },
      { title: 'Ψωμί + τυρί', emoji: '🍞', items: ['1 φέτα ψωμί ολικής ή 2 κρίτσινια', '1 μερίδα τυρί', 'ντοματίνια', '1 φρούτο'] },
      { title: 'Αυγό + τυρί', emoji: '🥚', items: ['1 αυγό βραστό', '1 μερίδα τυρί', '1 κρίτσινι'] },
      { title: 'Παγωτό μπανάνα', emoji: '🍌', items: ['Σύμφωνα με τη δοσμένη συνταγή'] }
    ]
  },
  {
    key: 'dinner',
    title: 'Βραδινό',
    icon: '🌙',
    options: [
      { title: 'Σαλάτα + αυγό', emoji: '🥗', items: ['Σαλάτα + 2 κ.σ. λάδι', '1 αυγό βραστό', '60γρ τυρί', '2 παξιμαδάκια krispies'] },
      { title: 'Σαλάτα + κοτόπουλο', emoji: '🍗', items: ['Σαλάτα + 2 κ.σ. λάδι', '100γρ μπιφτέκι ή κοτόπουλο', '1 παξιμαδάκι krispie'] },
      { title: 'Πιάτο τυριών', emoji: '🧀', items: ['10 ελιές', '2–3 κριτσίνια', 'λαχανικά'] },
      { title: 'Σαλάτα + avocado', emoji: '🥑', items: ['Σαλάτα + 2 κ.σ. λάδι', '1 avocado', '10 κάσιους ή 3 καρύδια ή 10 φουντούκια ή 10 αμύγδαλα', '90γρ τυρί', '2 κρίτσινια'] }
    ],
    note: 'Με το βραδινό να πάρεις το ασβέστιο.'
  }
];

function renderNutritionApp() {
  if (!nutritionTabs || !nutritionContent || !mealChecklist) return;
  const checklist = getNutritionChecklist();
  renderNutritionProgress(checklist);
  renderMealChecklist(checklist);
  renderNutritionTabs();
  renderNutritionContent();
}

function getNutritionChecklist() {
  try {
    return JSON.parse(localStorage.getItem(NUTRITION_STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveNutritionChecklist(checklist) {
  localStorage.setItem(NUTRITION_STORAGE_KEY, JSON.stringify(checklist));
}

function renderNutritionProgress(checklist) {
  const done = NUTRITION_MEALS.filter(meal => checklist[meal.key]).length;
  const total = NUTRITION_MEALS.length;
  const percent = Math.round((done / total) * 100);
  if (nutritionProgressText) nutritionProgressText.textContent = `${done}/${total} γεύματα`;
  if (nutritionProgressPercent) nutritionProgressPercent.textContent = `${percent}%`;
}

function renderMealChecklist(checklist) {
  mealChecklist.innerHTML = NUTRITION_MEALS.map(meal => `
    <button class="meal-check ${checklist[meal.key] ? 'done' : ''}" type="button" data-meal-check="${meal.key}">
      <span>${meal.icon}</span>
      <strong>${meal.title}</strong>
      <em>${checklist[meal.key] ? '✓' : '○'}</em>
    </button>
  `).join('');

  mealChecklist.querySelectorAll('[data-meal-check]').forEach(button => {
    button.addEventListener('click', () => {
      const next = getNutritionChecklist();
      const key = button.dataset.mealCheck;
      next[key] = !next[key];
      saveNutritionChecklist(next);
      renderNutritionApp();
    });
  });
}

function renderNutritionTabs() {
  nutritionTabs.innerHTML = NUTRITION_MEALS.map(meal => `
    <button class="nutrition-tab ${meal.key === activeMealKey ? 'active' : ''}" type="button" data-meal-tab="${meal.key}">
      ${meal.icon} ${meal.title}
    </button>
  `).join('');

  nutritionTabs.querySelectorAll('[data-meal-tab]').forEach(button => {
    button.addEventListener('click', () => {
      activeMealKey = button.dataset.mealTab;
      renderNutritionApp();
    });
  });
}

function renderNutritionContent() {
  const meal = NUTRITION_MEALS.find(item => item.key === activeMealKey) || NUTRITION_MEALS[0];
  nutritionContent.innerHTML = `
    <div class="meal-header-card">
      <div class="meal-header-icon">${meal.icon}</div>
      <div>
        <span class="mini-label">Γεύμα</span>
        <h3>${escapeHtml(meal.title)}</h3>
        ${meal.note ? `<p>${escapeHtml(meal.note)}</p>` : ''}
      </div>
    </div>
    <div class="food-options">
      ${meal.options.map(option => renderFoodOption(option)).join('')}
    </div>
  `;
}

function renderFoodOption(option) {
  return `
    <article class="food-card">
      <div class="food-card-title">
        <span>${option.emoji || '🍽️'}</span>
        <div>
          <h4>${escapeHtml(option.title)}</h4>
          ${option.tag ? `<em>${escapeHtml(option.tag)}</em>` : ''}
        </div>
      </div>
      <ul>
        ${option.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
