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

let exams = [];
let weightEntries = [];
let weightChart = null;

const WEIGHT_STORAGE_KEY = 'birthApp.weightEntries.v1';
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

backHome.addEventListener('click', () => showView('home'));
backHomeFromWeight.addEventListener('click', () => showView('home'));
refreshExams.addEventListener('click', loadFromConfiguredExcel);
searchInput.addEventListener('input', renderExams);
fileInput.addEventListener('change', handleFileUpload);

weightForm.addEventListener('submit', handleWeightSubmit);
clearWeightEntries.addEventListener('click', clearAllWeightEntries);

function showView(view) {
  homeView.classList.toggle('active', view === 'home');
  examsView.classList.toggle('active', view === 'exams');
  weightView.classList.toggle('active', view === 'weight');
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
  saveWeightEntries();
  localStorage.removeItem(WEIGHT_IMPORT_FLAG_KEY);
  renderWeightApp();
}

function deleteWeightEntry(id) {
  weightEntries = weightEntries.filter(entry => entry.id !== id);
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
    return;
  }

  weightTableBody.innerHTML = entries
    .slice()
    .reverse()
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
