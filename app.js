const homeView = document.getElementById("homeView");
const examsView = document.getElementById("examsView");
const openExams = document.getElementById("openExams");
const backHome = document.getElementById("backHome");
const refreshExams = document.getElementById("refreshExams");
const statusEl = document.getElementById("status");
const timeline = document.getElementById("timeline");
const searchInput = document.getElementById("searchInput");
const uploadCard = document.getElementById("uploadCard");
const fileInput = document.getElementById("fileInput");

let exams = [];

openExams.addEventListener("click", async () => {
  showView("exams");
  if (!exams.length) await loadFromConfiguredExcel();
});

backHome.addEventListener("click", () => showView("home"));
refreshExams.addEventListener("click", loadFromConfiguredExcel);
searchInput.addEventListener("input", renderExams);
fileInput.addEventListener("change", handleFileUpload);

function showView(view) {
  homeView.classList.toggle("active", view === "home");
  examsView.classList.toggle("active", view === "exams");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function loadFromConfiguredExcel() {
  const excelUrl = window.BIRTH_APP_CONFIG?.EXCEL_URL?.trim();
  excelUrl = "https://script.google.com/macros/s/AKfycbxwT3q6lRpsO5EFg3RVNPp2ujIasaT_P9jVRczPldXYU_hj5JTd1hUH-Oql72vwKkys/exec";
  timeline.innerHTML = "";

  if (!excelUrl) {
    uploadCard.style.display = "block";
    statusEl.textContent =
      "Περιμένω Excel αρχείο ή ρύθμιση EXCEL_URL στο config.js.";
    return;
  }

  uploadCard.style.display = "none";
  statusEl.textContent = "Φόρτωση δεδομένων...";

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

    const response = await fetch(excelUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const rows = await response.json();
      setExamsFromRows(rows);
      return;
    }

    if (contentType.includes("text/html")) {
      throw new Error(
        "Το URL επέστρεψε HTML σελίδα και όχι Excel/CSV δεδομένα."
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    parseWorkbook(arrayBuffer);
  } catch (error) {
    uploadCard.style.display = "block";
    statusEl.textContent =
      "Δεν μπόρεσα να διαβάσω τα δεδομένα. Έλεγξε ότι το Google Sheet ή το Apps Script είναι public.";
    console.error(error);
  }
}

function isAppsScriptUrl(url) {
  return /script\.google\.com\/macros\/s\//.test(url);
}

async function loadAppsScriptRows(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Apps Script HTTP ${response.status}`);

  const data = await response.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.data)) return data.data;
  if (Array.isArray(data.rows)) return data.rows;

  throw new Error("Το Apps Script δεν επέστρεψε array δεδομένων.");
}

function isGoogleSheetUrl(url) {
  return /docs\.google\.com\/spreadsheets\/d\//.test(url);
}

function extractGoogleSheetInfo(url) {
  const idMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  const gidMatch = url.match(/[?#&]gid=(\d+)/);

  if (!idMatch) throw new Error("Δεν βρέθηκε Google Sheet ID.");

  return {
    id: idMatch[1],
    gid: gidMatch ? gidMatch[1] : "0",
  };
}

function loadGoogleSheetRows(url) {
  const { id, gid } = extractGoogleSheetInfo(url);
  const callbackName = `birthAppSheetCallback_${Date.now()}`;

  const gvizUrl =
    `https://docs.google.com/spreadsheets/d/${id}/gviz/tq` +
    `?gid=${gid}&tqx=out:json;responseHandler:${callbackName}`;

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("Timeout while loading Google Sheet."));
    }, 15000);

    function cleanup() {
      clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = (data) => {
      cleanup();

      try {
        const cols = data.table.cols.map((c) =>
          normalizeHeader(c.label || c.id)
        );

        const rows = data.table.rows.map((row) => {
          const obj = {};

          cols.forEach((header, index) => {
            const cell = row.c[index];
            obj[header] = cell ? cell.f || cell.v || "" : "";
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
      reject(new Error("Google Sheet script load failed."));
    };

    script.src = gvizUrl;
    document.body.appendChild(script);
  });
}

function handleFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => parseWorkbook(e.target.result);
  reader.readAsArrayBuffer(file);
}

function parseWorkbook(arrayBuffer) {
  const workbook = XLSX.read(arrayBuffer, {
    type: "array",
    cellDates: true,
  });

  const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

  const rows = XLSX.utils.sheet_to_json(firstSheet, {
    defval: "",
    raw: false,
  });

  setExamsFromRows(rows);
}

function setExamsFromRows(rows) {
  exams = rows
    .map(normalizeRow)
    .filter(
      (row) =>
        row.date.label !== "Χωρίς ημερομηνία" ||
        row.event !== "Χωρίς τίτλο" ||
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
    normalized["επισσυναπτομενα"] ||
    normalized["επισυναπτομενα"] ||
    normalized["attachments"] ||
    normalized["attachment"] ||
    "";

  return {
    id: index + 1,
    date: normalizeDate(normalized["ημερομηνια"] || normalized["date"]),
    event: normalized["γεγονος"] || normalized["event"] || "Χωρίς τίτλο",
    comments: normalized["σχολια"] || normalized["comments"] || "",
    attachments: parseAttachments(attachmentsValue),
  };
}

function normalizeHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "")
    .replace(/[,:;]/g, "");
}

function normalizeDate(value) {
  if (!value) {
    return {
      label: "Χωρίς ημερομηνία",
      raw: "",
    };
  }

  if (typeof value === "string") {
    const greekDate = value.match(
      /^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/
    );

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

  if (Number.isNaN(date.getTime()) && typeof value === "number") {
    const parsed = XLSX.SSF.parse_date_code(value);
    date = new Date(parsed.y, parsed.m - 1, parsed.d);
  }

  if (Number.isNaN(date.getTime())) {
    return {
      label: String(value),
      raw: "",
    };
  }

  return dateResult(date, value);
}

function dateResult(date, fallback) {
  if (Number.isNaN(date.getTime())) {
    return {
      label: String(fallback),
      raw: "",
    };
  }

  return {
    label: date.toLocaleDateString("el-GR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    raw: date.toISOString(),
  };
}

function parseAttachments(value) {
  if (!value) return [];

  let items = [];

  if (Array.isArray(value)) {
    items = value;
  } else if (typeof value === "object") {
    items = Object.values(value);
  } else {
    const text = String(value)
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/div>\s*<div>/gi, "\n")
      .replace(/<\/?[^>]+(>|$)/g, " ")
      .replace(/\s+(https?:\/\/)/g, "\n$1");

    items = text.split(/[\n\r,;|]+/);
  }

  return items
    .flatMap((item) => splitAttachmentItem(item))
    .map((item) => normalizeAttachmentUrl(item))
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
  let cleanUrl = String(url || "").trim();

  if (!cleanUrl) return "";

  cleanUrl = cleanUrl.replace(/^["']|["']$/g, "").replace(/&amp;/g, "&");

  const hrefMatch = cleanUrl.match(/href=["']([^"']+)["']/i);
  if (hrefMatch) {
    cleanUrl = hrefMatch[1];
  }

  try {
    cleanUrl = decodeURIComponent(cleanUrl);
  } catch {
    // Keep original URL if decoding fails
  }

  const driveFileMatch = cleanUrl.match(
    /drive\.google\.com\/file\/d\/([^/?#]+)/
  );
  if (driveFileMatch) {
    return `https://drive.google.com/file/d/${driveFileMatch[1]}/view`;
  }

  const driveIdMatch = cleanUrl.match(/[?&]id=([^&#]+)/);
  if (cleanUrl.includes("drive.google.com") && driveIdMatch) {
    return `https://drive.google.com/file/d/${driveIdMatch[1]}/view`;
  }

  return cleanUrl;
}

function renderExams() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = exams.filter(
    (exam) =>
      exam.event.toLowerCase().includes(query) ||
      exam.comments.toLowerCase().includes(query) ||
      exam.date.label.toLowerCase().includes(query)
  );

  statusEl.textContent = filtered.length
    ? `${filtered.length} εγγραφές`
    : "Δεν βρέθηκαν εξετάσεις.";

  timeline.innerHTML = filtered.map(renderExamCard).join("");
}

function renderExamCard(exam) {
  const attachments = exam.attachments.length
    ? ` <div class="attachments"> ${exam.attachments.map((url, i) => renderAttachment(url, i)).join("")} </div> `
    : ` <div class="attachments"> <span class="attachment">Χωρίς αρχείο</span> </div> `;

  return ` <article class="exam-card"> <div class="exam-date">${escapeHtml(exam.date.label)}</div> <h3>${escapeHtml(exam.event)}</h3> ${exam.comments ? `<p>${escapeHtml(exam.comments)}</p>` : ""} ${attachments} </article> `;
}

function renderAttachment(url, index) {
  const lower = url.toLowerCase();

  let icon = "🔗";
  let label = `Αρχείο ${index + 1}`;

  if (lower.includes(".pdf")) {
    icon = "📄";
    label = `PDF ${index + 1}`;
  } else if (lower.match(/\.(jpg|jpeg|png|webp)(\?|#|$)/)) {
    icon = "🖼️";
    label = `Εικόνα ${index + 1}`;
  } else if (lower.includes("drive.google.com")) {
    icon = "📎";
    label = `Αρχείο ${index + 1}`;
  }

  return ` <a class="attachment" href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer"> ${icon} ${label} </a> `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
