const menuToggle = document.getElementById('menuToggle');
const closeSideMenu = document.getElementById('closeSideMenu');
const sideMenu = document.getElementById('sideMenu');
const sideMenuOverlay = document.getElementById('sideMenuOverlay');
const videosView = document.getElementById('videosView');
const openVideos = document.getElementById('openVideos');
const backHomeFromVideos = document.getElementById('backHomeFromVideos');
const resetVideoProgress = document.getElementById('resetVideoProgress');
const videoCategoryTabs = document.getElementById('videoCategoryTabs');
const youtubePlayer = document.getElementById('youtubePlayer');
const videoTitle = document.getElementById('videoTitle');
const videoMeta = document.getElementById('videoMeta');
const videoCategoryBadge = document.getElementById('videoCategoryBadge');
const videoCounter = document.getElementById('videoCounter');
const prevVideo = document.getElementById('prevVideo');
const nextVideo = document.getElementById('nextVideo');
const favoriteVideo = document.getElementById('favoriteVideo');
const watchedVideo = document.getElementById('watchedVideo');
const openVideoYoutube = document.getElementById('openVideoYoutube');
const videoSearch = document.getElementById('videoSearch');
const videosList = document.getElementById('videosList');
const videosProgress = document.getElementById('videosProgress');
const videosWeekTitle = document.getElementById('videosWeekTitle');
const videosWeekSubtitle = document.getElementById('videosWeekSubtitle');
const maternityView = document.getElementById('maternityView');
const openMaternity = document.getElementById('openMaternity');
const backHomeFromMaternity = document.getElementById('backHomeFromMaternity');
const printMaternity = document.getElementById('printMaternity');
const calcMaternity = document.getElementById('calcMaternity');
const eddInput = document.getElementById('eddInput');
const actualBirthInput = document.getElementById('actualBirthInput');
const annualLeaveBeforeDypa = document.getElementById('annualLeaveBeforeDypa');
const equalLeaveMonths = document.getElementById('equalLeaveMonths');
const parentalLeaveMonths = document.getElementById('parentalLeaveMonths');
const maternityResults = document.getElementById('maternityResults');
const homeView = document.getElementById('homeView');
const examsView = document.getElementById('examsView');
const weightView = document.getElementById('weightView');
const appointmentsView = document.getElementById('appointmentsView');

const openExams = document.getElementById('openExams');
const openWeight = document.getElementById('openWeight');
const openAppointments = document.getElementById('openAppointments');
const backHome = document.getElementById('backHome');
const backHomeFromWeight = document.getElementById('backHomeFromWeight');
const backHomeFromAppointments = document.getElementById('backHomeFromAppointments');

const refreshExams = document.getElementById('refreshExams');
const statusEl = document.getElementById('status');
const timeline = document.getElementById('timeline');
const searchInput = document.getElementById('searchInput');
const uploadCard = document.getElementById('uploadCard');
const fileInput = document.getElementById('fileInput');

const dashboardPregnancyWeek = document.getElementById('dashboardPregnancyWeek');
const dashboardDueDate = document.getElementById('dashboardDueDate');
const dashboardLastWeight = document.getElementById('dashboardLastWeight');
const dashboardWeightDiff = document.getElementById('dashboardWeightDiff');
const dashboardNextAppointment = document.getElementById('dashboardNextAppointment');
const dashboardNextAppointmentDate = document.getElementById('dashboardNextAppointmentDate');
const dashboardNutritionProgress = document.getElementById('dashboardNutritionProgress');
const dashboardExamCount = document.getElementById('dashboardExamCount');

const weightForm = document.getElementById('weightForm');
const weightInput = document.getElementById('weightInput');
const weekInput = document.getElementById('weekInput');
const weightTableBody = document.getElementById('weightTableBody');
const weightCount = document.getElementById('weightCount');
const weightSummary = document.getElementById('weightSummary');
const clearWeightEntries = document.getElementById('clearWeightEntries');
const weightChartCanvas = document.getElementById('weightChart');

const appointmentForm = document.getElementById('appointmentForm');
const toggleAppointmentForm = document.getElementById('toggleAppointmentForm');
const appointmentFormPanel = document.getElementById('appointmentFormPanel');
const prevAppointmentMonth = document.getElementById('prevAppointmentMonth');
const nextAppointmentMonth = document.getElementById('nextAppointmentMonth');
const appointmentCalendarTitle = document.getElementById('appointmentCalendarTitle');
const appointmentsCalendar = document.getElementById('appointmentsCalendar');
const calendarDayAppointments = document.getElementById('calendarDayAppointments');
const appointmentDate = document.getElementById('appointmentDate');
const appointmentTime = document.getElementById('appointmentTime');
const appointmentTitle = document.getElementById('appointmentTitle');
const appointmentDoctor = document.getElementById('appointmentDoctor');
const appointmentType = document.getElementById('appointmentType');
const appointmentStatus = document.getElementById('appointmentStatus');
const appointmentNotes = document.getElementById('appointmentNotes');
const appointmentSearch = document.getElementById('appointmentSearch');
const appointmentsList = document.getElementById('appointmentsList');
const appointmentCount = document.getElementById('appointmentCount');
const clearAppointments = document.getElementById('clearAppointments');
const nextAppointmentTitle = document.getElementById('nextAppointmentTitle');
const nextAppointmentMeta = document.getElementById('nextAppointmentMeta');
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

const shoppingView = document.getElementById('shoppingView');
const openShopping = document.getElementById('openShopping');
const backHomeFromShopping = document.getElementById('backHomeFromShopping');
const clearShoppingItems = document.getElementById('clearShoppingItems');
const shoppingForm = document.getElementById('shoppingForm');
const toggleShoppingForm = document.getElementById('toggleShoppingForm');
const shoppingFormPanel = document.getElementById('shoppingFormPanel');
const shoppingUrl = document.getElementById('shoppingUrl');
const shoppingCategory = document.getElementById('shoppingCategory');
const shoppingTitle = document.getElementById('shoppingTitle');
const shoppingPrice = document.getElementById('shoppingPrice');
const shoppingPriority = document.getElementById('shoppingPriority');
const shoppingStatus = document.getElementById('shoppingStatus');
const shoppingImage = document.getElementById('shoppingImage');
const shoppingNotes = document.getElementById('shoppingNotes');
const fetchShoppingMeta = document.getElementById('fetchShoppingMeta');
const shoppingSearch = document.getElementById('shoppingSearch');
const shoppingCategoryFilter = document.getElementById('shoppingCategoryFilter');
const shoppingList = document.getElementById('shoppingList');
const shoppingTotal = document.getElementById('shoppingTotal');
const shoppingTotalItems = document.getElementById('shoppingTotalItems');
const shoppingPurchasedTotal = document.getElementById('shoppingPurchasedTotal');
const shoppingPurchasedItems = document.getElementById('shoppingPurchasedItems');
const shoppingPendingTotal = document.getElementById('shoppingPendingTotal');
const shoppingPendingItems = document.getElementById('shoppingPendingItems');

let activeVideoCategory = 'Suggested';
let currentVideoIndex = 0;
let exams = [];
let weightEntries = [];
let appointments = [];
let appointmentCalendarMonth = new Date();
let selectedAppointmentDate = '';
let weightChart = null;
let currentWeightPage = 1;
let activeMealKey = 'breakfast';
let shoppingItems = [];

const VIDEO_PROGRESS_STORAGE_KEY = 'birthApp.videoProgress.v1';
const YOUTUBE_VIDEOS = [{"id": "azFEJq6vn6g", "title": "25 Weeks Pregnant - What to Expect", "channel": "Diana In The Pink", "category": "Pregnancy week by week", "weekMin": 24, "weekMax": 26, "subtitles": "Auto-translate likely"}, {"id": "F00k_m7_lfw", "title": "24 Weeks Pregnant - What to Expect", "channel": "What To Expect", "category": "Pregnancy week by week", "weekMin": 23, "weekMax": 25, "subtitles": "Auto-translate likely"}, {"id": "BWLdj-2Xe58", "title": "27 Weeks Pregnant - What to Expect", "channel": "What To Expect", "category": "Pregnancy week by week", "weekMin": 26, "weekMax": 28, "subtitles": "Auto-translate likely"}, {"id": "EjnJWB9ZuzU", "title": "30 Weeks Pregnant - What to Expect", "channel": "What To Expect", "category": "Pregnancy week by week", "weekMin": 29, "weekMax": 31, "subtitles": "Auto-translate likely"}, {"id": "IaO8jfqQ9Uk", "title": "32 Weeks Pregnant - What to Expect", "channel": "What To Expect", "category": "Pregnancy week by week", "weekMin": 31, "weekMax": 33, "subtitles": "Auto-translate likely"}, {"id": "YBFvZoECv1M", "title": "Pregnancy: Weeks 25-28", "channel": "BabyCenter", "category": "Pregnancy week by week", "weekMin": 25, "weekMax": 28, "subtitles": "Auto-translate likely"}, {"id": "TF0DJXMP9YY", "title": "Pregnancy: Weeks 29-32", "channel": "BabyCenter", "category": "Pregnancy week by week", "weekMin": 29, "weekMax": 32, "subtitles": "Auto-translate likely"}, {"id": "KHzRsls5bbk", "title": "What to Pack in Your Hospital Bag", "channel": "Labor & Delivery nurse-led", "category": "Hospital Bag", "weekMin": 30, "weekMax": 40, "subtitles": "Auto-translate likely"}, {"id": "lLQk72acMig", "title": "Hospital Bag for Mom, Partner and Baby", "channel": "The Doctors Bjorkman", "category": "Hospital Bag", "weekMin": 30, "weekMax": 40, "subtitles": "Auto-translate likely"}, {"id": "-WesZIBPTi8", "title": "10 Things Your Labor Nurse Wants You to Pack", "channel": "Nurse Zabe", "category": "Hospital Bag", "weekMin": 30, "weekMax": 40, "subtitles": "Auto-translate likely"}, {"id": "hpgjwK_oQe0", "title": "Newborn Care: Pediatrician Guide to Week 1", "channel": "The Doctors Bjorkman", "category": "Newborn Care", "weekMin": 32, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "CXWzqbe1i9c", "title": "Guide To Taking Care Of a Newborn Baby", "channel": "Baby care guide", "category": "Newborn Care", "weekMin": 32, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "7yxd25nZMaE", "title": "Complete Guide to Bathing a Newborn Baby", "channel": "Baby care guide", "category": "Newborn Care", "weekMin": 32, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "8mfZK0l8RNg", "title": "How to Play With a Newborn", "channel": "Baby development", "category": "Newborn Care", "weekMin": 35, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "qYYTMun-S4I", "title": "Breastfeeding: Latch & Positioning", "channel": "EvergreenHealth", "category": "Breastfeeding", "weekMin": 28, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "su_0xl8HI6Q", "title": "Getting a Deeper Latch", "channel": "Breastfeeding support", "category": "Breastfeeding", "weekMin": 28, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "JjKztwxkT7g", "title": "Best Position to Get a Deep and Correct Latch", "channel": "Breastfeeding education", "category": "Breastfeeding", "weekMin": 28, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "8kTKnZOmJXU", "title": "Breastfeeding How To", "channel": "NYU Langone", "category": "Breastfeeding", "weekMin": 28, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "wVRLDJcVKxk", "title": "14 Life-Changing Tips For First Time Moms & Dads", "channel": "New parent tips", "category": "Dad Academy", "weekMin": 30, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "GdP-1bwuu94", "title": "Realistic Day in the Life With a Newborn Baby", "channel": "Newborn life", "category": "Dad Academy", "weekMin": 34, "weekMax": 42, "subtitles": "Auto-translate likely"}, {"id": "YZbgcHz5TC8", "title": "How To Dress a Newborn", "channel": "Baby Care Basics", "category": "Baby Shopping", "weekMin": 30, "weekMax": 42, "subtitles": "Auto-translate likely"}];
const WEIGHT_STORAGE_KEY = 'birthApp.weightEntries.v1';
const APPOINTMENTS_STORAGE_KEY = 'birthApp.appointments.v1';
const WEIGHT_PAGE_SIZE = 10;
const NUTRITION_STORAGE_KEY = 'birthApp.nutritionChecklist.v1';
const SHOPPING_STORAGE_KEY = 'birthApp.shoppingItems.v1';
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



menuToggle?.addEventListener('click', openSideMenu);
closeSideMenu?.addEventListener('click', closeMenu);
sideMenuOverlay?.addEventListener('click', closeMenu);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelectorAll('[data-view]').forEach(item => {
  item.addEventListener('click', async () => {
    const view = item.dataset.view;
    closeMenu();
    showView(view);
    if (view === 'exams' && !exams.length) await loadFromConfiguredExcel();
    if (view === 'weight') { const loadedFromSheet = await withAppLoader('Φόρτωση βάρους...', () => loadWeightEntriesFromSheet()); if (!loadedFromSheet) importPregnancyWeightsIfNeeded(); renderWeightApp(); renderDashboardWeight(); }
    if (view === 'nutrition') renderNutritionApp();
    if (view === 'appointments') { await withAppLoader('Φόρτωση ραντεβού...', () => loadAppointmentsFromSheet()); renderAppointments(); }
    if (view === 'shopping') { await withAppLoader('Φόρτωση shopping list...', () => loadShoppingItemsFromSheet()); renderShoppingApp(); }
    if (view === 'videos') renderVideoApp();
    if (view === 'maternity') { prefillMaternityEdd(); calculateMaternityLeave(); }
  });
});

openVideos?.addEventListener('click', () => { showView('videos'); renderVideoApp(); });

openMaternity?.addEventListener('click', () => {
  showView('maternity');
  prefillMaternityEdd();
  calculateMaternityLeave();
});
backHomeFromMaternity?.addEventListener('click', () => showView('home'));
calcMaternity?.addEventListener('click', calculateMaternityLeave);
printMaternity?.addEventListener('click', () => window.print());
[eddInput, actualBirthInput, annualLeaveBeforeDypa, equalLeaveMonths, parentalLeaveMonths].forEach(el => {
  el?.addEventListener('change', calculateMaternityLeave);
});
backHomeFromVideos?.addEventListener('click', () => showView('home'));
prevVideo?.addEventListener('click', () => moveVideo(-1));
nextVideo?.addEventListener('click', () => moveVideo(1));
favoriteVideo?.addEventListener('click', () => toggleVideoFlag('favorite'));
watchedVideo?.addEventListener('click', () => toggleVideoFlag('watched'));
videoSearch?.addEventListener('input', () => { currentVideoIndex = 0; renderVideoApp(); });
resetVideoProgress?.addEventListener('click', () => { if(confirm('Να διαγραφεί η πρόοδος watched/favorites;')){ localStorage.removeItem(VIDEO_PROGRESS_STORAGE_KEY); renderVideoApp(); }});


openExams?.addEventListener('click', async () => {
  showView('exams');
  if (!exams.length) await loadFromConfiguredExcel();
});

openWeight?.addEventListener('click', async () => {
  showView('weight');
  const loadedFromSheet = await withAppLoader('Φόρτωση βάρους...', () => loadWeightEntriesFromSheet());
  if (!loadedFromSheet) importPregnancyWeightsIfNeeded();
  renderWeightApp();
  renderDashboardWeight();
});

openNutrition?.addEventListener('click', () => {
  showView('nutrition');
  renderNutritionApp();
});

backHome?.addEventListener('click', () => showView('home'));
backHomeFromWeight?.addEventListener('click', () => showView('home'));
openAppointments?.addEventListener('click', async () => {
  showView('appointments');
  await withAppLoader('Φόρτωση ραντεβού...', () => loadAppointmentsFromSheet());
  renderAppointments();
});
backHomeFromAppointments?.addEventListener('click', () => showView('home'));
backHomeFromNutrition?.addEventListener('click', () => showView('home'));
refreshExams?.addEventListener('click', loadFromConfiguredExcel);
searchInput?.addEventListener('input', renderExams);
fileInput?.addEventListener('change', handleFileUpload);

weightForm?.addEventListener('submit', handleWeightSubmit);
toggleAppointmentForm?.addEventListener('click', () => toggleAppointmentFormPanel());
prevAppointmentMonth?.addEventListener('click', () => {
  appointmentCalendarMonth.setMonth(appointmentCalendarMonth.getMonth() - 1);
  renderAppointmentsCalendar();
});
nextAppointmentMonth?.addEventListener('click', () => {
  appointmentCalendarMonth.setMonth(appointmentCalendarMonth.getMonth() + 1);
  renderAppointmentsCalendar();
});
appointmentForm?.addEventListener('submit', handleAppointmentSubmit);
appointmentSearch?.addEventListener('input', renderAppointments);
clearAppointments?.addEventListener('click', clearAllAppointments);
clearWeightEntries?.addEventListener('click', clearAllWeightEntries);
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
openShopping?.addEventListener('click', async () => { showView('shopping'); await withAppLoader('Φόρτωση shopping list...', () => loadShoppingItemsFromSheet()); renderShoppingApp(); });
backHomeFromShopping?.addEventListener('click', () => showView('home'));
toggleShoppingForm?.addEventListener('click', () => {
  toggleShoppingFormPanel();
});
shoppingForm?.addEventListener('submit', handleShoppingSubmit);
shoppingSearch?.addEventListener('input', renderShoppingApp);
shoppingCategoryFilter?.addEventListener('change', renderShoppingApp);
clearShoppingItems?.addEventListener('click', clearAllShoppingItems);
fetchShoppingMeta?.addEventListener('click', fetchShoppingMetadata);

resetNutritionDay?.addEventListener('click', () => {
  localStorage.removeItem(NUTRITION_STORAGE_KEY);
  renderNutritionApp();
});


function openSideMenu() {
  sideMenu?.classList.add('open');
  sideMenuOverlay?.classList.add('open');
  document.body.classList.add('menu-open');
  sideMenu?.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  sideMenu?.classList.remove('open');
  sideMenuOverlay?.classList.remove('open');
  document.body.classList.remove('menu-open');
  sideMenu?.setAttribute('aria-hidden', 'true');
}

function showView(view) {
  if (view === 'home') renderDashboard();
  homeView.classList.toggle('active', view === 'home');
  examsView.classList.toggle('active', view === 'exams');
  weightView?.classList.toggle('active', view === 'weight');
  appointmentsView?.classList.toggle('active', view === 'appointments');
  nutritionView?.classList.toggle('active', view === 'nutrition');
  shoppingView?.classList.toggle('active', view === 'shopping');
  videosView?.classList.toggle('active', view === 'videos');
  maternityView?.classList.toggle('active', view === 'maternity');
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

  if (/script\.google\.com\/macros\/s\//.test(excelUrl)) {
    try {
      const rows = await withAppLoader('Φόρτωση εξετάσεων...', () => apiGetSheet(getExamsSheetName()));
      setExamsFromRows(rows);
      return;
    } catch (error) {
      uploadCard.style.display = 'block';
      statusEl.textContent = 'Δεν μπόρεσα να διαβάσω τις εξετάσεις από το Apps Script.';
      console.error(error);
      return;
    }
  }

  try {
    if (isAppsScriptUrl(excelUrl)) {
      const rows = await loadAppsScriptRows(excelUrl);
      setExamsFromRows(rows);
      return;
    }

    if (isGoogleSheetUrl(excelUrl)) {
      if (/script\.google\.com\/macros\/s\//.test(excelUrl)) {
        const rows = await withAppLoader('Φόρτωση εξετάσεων...', () => apiGetSheet(getExamsSheetName()));
        setExamsFromRows(rows);
        return;
      }

      const rows = await withAppLoader('Φόρτωση εξετάσεων...', () => loadGoogleSheetRows(excelUrl));
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
  renderDashboardExams();
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




function showAppLoader(text = 'Φόρτωση...') {
  const loader = document.getElementById('appLoader');
  const label = document.getElementById('appLoaderText');
  if (label) label.textContent = text;
  loader?.classList.add('open');
  loader?.setAttribute('aria-hidden', 'false');
}

function hideAppLoader() {
  const loader = document.getElementById('appLoader');
  loader?.classList.remove('open');
  loader?.setAttribute('aria-hidden', 'true');
}

async function withAppLoader(text, task) {
  showAppLoader(text);
  try {
    return await task();
  } finally {
    hideAppLoader();
  }
}

function getExamsSheetName() {
  return window.BIRTH_APP_CONFIG?.EXAMS_SHEET_NAME || 'Exams';
}


function getBirthHubApiUrl() {
  return window.BIRTH_APP_CONFIG?.BIRTHHUB_API_URL?.trim()
    || window.BIRTH_APP_CONFIG?.EXCEL_URL?.trim()
    || 'https://script.google.com/macros/s/AKfycbxwT3q6lRpsO5EFg3RVNPp2ujIasaT_P9jVRczPldXYU_hj5JTd1hUH-Oql72vwKkys/exec';
}

function getWeightSheetName() {
  return window.BIRTH_APP_CONFIG?.WEIGHT_SHEET_NAME || 'Weight';
}

async function apiGetSheet(sheetName) {
  const apiUrl = getBirthHubApiUrl();
  if (!apiUrl) throw new Error('BirthHub API URL missing.');
  const url = `${apiUrl}?sheet=${encodeURIComponent(sheetName)}&_=${Date.now()}`;
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`GET ${sheetName} HTTP ${response.status}`);
  const data = await response.json();
  if (data && data.success === false) throw new Error(data.error || `GET ${sheetName} failed`);
  return Array.isArray(data) ? data : (data.data || data.rows || []);
}

async function apiPost(payload) {
  const apiUrl = getBirthHubApiUrl();
  if (!apiUrl) throw new Error('BirthHub API URL missing.');
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`POST HTTP ${response.status}`);
  const data = await response.json();
  if (data && data.success === false) throw new Error(data.error || 'POST failed');
  return data;
}

async function apiInsertRow(sheetName, row) {
  return apiPost({ action: 'insert', sheet: sheetName, row });
}

async function apiDeleteRow(sheetName, rowId) {
  return apiPost({ action: 'delete', sheet: sheetName, rowId });
}


async function handleWeightSubmit(event) {
  event.preventDefault();

  const weight = Number(String(weightInput.value).replace(',', '.'));
  const pregnancyWeek = Number(weekInput.value);

  if (!weight || !pregnancyWeek) return;

  const now = new Date();
  const calculated = calculatePregnancyInfo(now.toISOString().slice(0, 10));
  const pregnancyLabel = `${pregnancyWeek}+${calculated.days}`;

  const entry = {
    id: createId(),
    date: now.toISOString(),
    pregnancyWeek,
    pregnancyDays: calculated.days,
    pregnancyLabel,
    weight
  };

  try {
    await withAppLoader('Αποθήκευση βάρους...', () => apiInsertRow(getWeightSheetName(), {
      'Ημερομηνία': now.toISOString().slice(0, 10),
      'Εβδομάδα': pregnancyLabel,
      'Βάρος': String(weight).replace('.', ','),
      'Σχόλια': ''
    }));

    await withAppLoader('Φόρτωση βάρους...', () => loadWeightEntriesFromSheet());
  } catch (error) {
    console.error('Weight cloud insert failed, falling back to localStorage', error);
    weightEntries.push(entry);
    saveWeightEntries();
  }

  currentWeightPage = 1;
  renderWeightApp();
  renderDashboardWeight();

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


async function loadWeightEntriesFromSheet() {
  try {
    const rows = await apiGetSheet(getWeightSheetName());
    weightEntries = rows.map(normalizeWeightSheetRow).filter(item => item.date && item.weight);
    saveWeightEntries();
    return true;
  } catch (error) {
    console.error('Weight cloud load failed, using localStorage', error);
    loadWeightEntries();
    return false;
  }
}

function normalizeWeightSheetRow(row, index) {
  const dateValue = row['Ημερομηνία'] || row['Ημερομηνια'] || row['Date'] || row['date'] || '';
  const weekValue = row['Εβδομάδα'] || row['Εβδομαδα'] || row['Week'] || row['week'] || '';
  const weightValue = row['Βάρος'] || row['Βαρος'] || row['Weight'] || row['weight'] || '';
  const date = normalizeWeightDateValue(dateValue);
  const pregnancy = parsePregnancyWeekValue(weekValue, date);
  const weight = Number(String(weightValue).replace(',', '.'));

  return {
    id: `sheet-${row._rowId || index + 2}`,
    rowId: row._rowId,
    date,
    pregnancyWeek: pregnancy.week,
    pregnancyDays: pregnancy.days,
    pregnancyLabel: pregnancy.label,
    weight,
    comments: row['Σχόλια'] || row['Σχολια'] || row['Comments'] || '',
    source: 'sheet'
  };
}

function normalizeWeightDateValue(value) {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString();

  if (typeof value === 'string') {
    const trimmed = value.trim();
    const greekDate = trimmed.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (greekDate) {
      const day = Number(greekDate[1]);
      const month = Number(greekDate[2]) - 1;
      const year = Number(greekDate[3].length === 2 ? `20${greekDate[3]}` : greekDate[3]);
      return new Date(year, month, day, 12, 0, 0).toISOString();
    }

    const parsed = new Date(trimmed);
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  }

  return String(value);
}

function parsePregnancyWeekValue(value, dateValue) {
  const text = String(value || '').trim();
  const match = text.match(/(\d{1,2})(?:\+(\d))?/);

  if (match) {
    const week = Number(match[1]);
    const days = match[2] !== undefined ? Number(match[2]) : 0;
    return { week, days, label: `${week}+${days}` };
  }

  if (dateValue) return calculatePregnancyInfo(String(dateValue).slice(0, 10));

  return { week: '', days: '', label: '' };
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

async function deleteWeightEntry(id) {
  const entry = weightEntries.find(item => item.id === id);

  try {
    if (entry?.rowId) {
      await apiDeleteRow(getWeightSheetName(), entry.rowId);
      await withAppLoader('Φόρτωση βάρους...', () => loadWeightEntriesFromSheet());
    } else {
      weightEntries = weightEntries.filter(item => item.id !== id);
      saveWeightEntries();
    }
  } catch (error) {
    console.error('Weight cloud delete failed, deleting locally only', error);
    weightEntries = weightEntries.filter(item => item.id !== id);
    saveWeightEntries();
  }

  currentWeightPage = 1;
  renderWeightApp();
  renderDashboardWeight();
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







function toggleShoppingFormPanel(forceOpen) {
  if (!shoppingFormPanel || !toggleShoppingForm) return;

  const shouldOpen =
    typeof forceOpen === 'boolean'
      ? forceOpen
      : !shoppingFormPanel.classList.contains('open');

  shoppingFormPanel.classList.toggle('open', shouldOpen);
  toggleShoppingForm.classList.toggle('open', shouldOpen);

  toggleShoppingForm.innerHTML = shouldOpen
    ? '<span>×</span><strong>Κλείσιμο φόρμας</strong>'
    : '<span>＋</span><strong>Προσθήκη προϊόντος</strong>';

  if (shouldOpen) {
    setTimeout(() => shoppingUrl?.focus(), 180);
  }
}


function getShoppingSheetName() {
  return window.BIRTH_APP_CONFIG?.SHOPPING_SHEET_NAME || 'Shopping';
}

async function loadShoppingItemsFromSheet() {
  try {
    const rows = await apiGetSheet(getShoppingSheetName());
    shoppingItems = rows
      .map(normalizeShoppingSheetRow)
      .filter(item => item.title);

    saveShoppingItems();
    return true;
  } catch (error) {
    console.error('Shopping cloud load failed, using localStorage', error);
    loadShoppingItems();
    return false;
  }
}

function normalizeShoppingSheetRow(row, index) {
  return {
    id: `sheet-${row._rowId || index + 2}`,
    rowId: row._rowId,
    date: row['Ημερομηνία'] || row['Ημερομηνια'] || row['Date'] || '',
    category: row['Κατηγορία'] || row['Κατηγορια'] || row['Category'] || 'Άλλο',
    title: row['Προϊόν'] || row['Προιον'] || row['Τίτλος'] || row['Τιτλος'] || row['Product'] || row['Title'] || '',
    url: row['Link'] || row['URL'] || row['Url'] || '',
    image: row['ImageUrl'] || row['ImageURL'] || row['Image'] || '',
    price: Number(String(row['Τιμή'] || row['Τιμη'] || row['Price'] || 0).replace(',', '.')) || 0,
    priority: row['Priority'] || 'Must have',
    status: row['Status'] || 'Υπό σκέψη',
    notes: row['Σχόλια'] || row['Σχολια'] || row['Σημειώσεις'] || row['Σημειωσεις'] || row['Notes'] || '',
    source: 'sheet'
  };
}

function toShoppingSheetRow(item) {
  return {
    'Ημερομηνία': item.date || new Date().toISOString().slice(0, 10),
    'Κατηγορία': item.category || '',
    'Προϊόν': item.title || '',
    'Link': item.url || '',
    'ImageUrl': item.image || '',
    'Τιμή': String(item.price || 0).replace('.', ','),
    'Priority': item.priority || '',
    'Status': item.status || '',
    'Σχόλια': item.notes || ''
  };
}


function loadShoppingItems() {
  try { shoppingItems = JSON.parse(localStorage.getItem(SHOPPING_STORAGE_KEY)) || []; }
  catch { shoppingItems = []; }
}
function saveShoppingItems() { localStorage.setItem(SHOPPING_STORAGE_KEY, JSON.stringify(shoppingItems)); }
async function handleShoppingSubmit(event) {
  event.preventDefault();

  const title = shoppingTitle.value.trim();
  if (!title) return;

  const item = {
    id: createId(),
    date: new Date().toISOString().slice(0, 10),
    url: shoppingUrl.value.trim(),
    category: shoppingCategory.value,
    title,
    price: Number(String(shoppingPrice.value || '0').replace(',', '.')) || 0,
    priority: shoppingPriority.value,
    status: shoppingStatus.value,
    image: shoppingImage.value.trim(),
    notes: shoppingNotes.value.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    await withAppLoader('Αποθήκευση προϊόντος...', () => apiInsertRow(getShoppingSheetName(), toShoppingSheetRow(item)));
    await withAppLoader('Φόρτωση shopping list...', () => loadShoppingItemsFromSheet());
  } catch (error) {
    console.error('Shopping cloud insert failed, falling back to localStorage', error);
    shoppingItems.unshift(item);
    saveShoppingItems();
  }

  renderShoppingApp();
  shoppingForm.reset();
  shoppingPriority.value = 'Must have';
  shoppingStatus.value = 'Υπό σκέψη';

  if (typeof toggleShoppingFormPanel === 'function') {
    toggleShoppingFormPanel(false);
  }
}

async function fetchShoppingMetadata() {
  const url = shoppingUrl?.value?.trim();
  if (!url) { alert('Βάλε πρώτα link προϊόντος.'); return; }
  if (fetchShoppingMeta) fetchShoppingMeta.textContent = 'Ανάκτηση...';
  try {
    const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    const data = result?.data || {};
    if (data.title && !shoppingTitle.value) shoppingTitle.value = data.title;
    if (data.image?.url && !shoppingImage.value) shoppingImage.value = data.image.url;
    if (data.description && !shoppingNotes.value) shoppingNotes.value = data.description;
    if (!data.title && !data.image?.url) alert('Δεν βρέθηκαν αυτόματα στοιχεία. Συμπλήρωσέ τα χειροκίνητα.');
  } catch (error) {
    console.error(error);
    alert('Δεν μπόρεσα να διαβάσω metadata από το link. Συμπλήρωσε τίτλο/εικόνα χειροκίνητα.');
  } finally {
    if (fetchShoppingMeta) fetchShoppingMeta.textContent = 'Ανάκτηση στοιχείων από link';
  }
}
function clearAllShoppingItems() { // clears local cache only; delete rows individually to remove from Google Sheet
  if (!shoppingItems.length) return;
  if (!confirm('Θέλεις σίγουρα να διαγραφεί όλη η shopping list από αυτή τη συσκευή;')) return;
  shoppingItems = [];
  saveShoppingItems();
  renderShoppingApp();
}
async function deleteShoppingItem(id) {
  const item = shoppingItems.find(entry => entry.id === id);

  try {
    if (item?.rowId) {
      await apiDeleteRow(getShoppingSheetName(), item.rowId);
      await withAppLoader('Φόρτωση shopping list...', () => loadShoppingItemsFromSheet());
    } else {
      shoppingItems = shoppingItems.filter(entry => entry.id !== id);
      saveShoppingItems();
    }
  } catch (error) {
    console.error('Shopping cloud delete failed, deleting locally only', error);
    shoppingItems = shoppingItems.filter(entry => entry.id !== id);
    saveShoppingItems();
  }

  renderShoppingApp();
}

async function toggleShoppingStatus(id) {
  const item = shoppingItems.find(entry => entry.id === id);
  if (!item) return;

  const nextStatus = item.status === 'Αγοράστηκε' ? 'Υπό σκέψη' : 'Αγοράστηκε';

  try {
    if (item.rowId) {
      await apiUpdateRow(getShoppingSheetName(), item.rowId, { 'Status': nextStatus });
      await withAppLoader('Φόρτωση shopping list...', () => loadShoppingItemsFromSheet());
    } else {
      shoppingItems = shoppingItems.map(entry =>
        entry.id === id ? { ...entry, status: nextStatus } : entry
      );
      saveShoppingItems();
    }
  } catch (error) {
    console.error('Shopping cloud update failed, updating locally only', error);
    shoppingItems = shoppingItems.map(entry =>
      entry.id === id ? { ...entry, status: nextStatus } : entry
    );
    saveShoppingItems();
  }

  renderShoppingApp();
}

function renderShoppingApp() {
  renderShoppingSummary();
  const query = (shoppingSearch?.value || '').trim().toLowerCase();
  const category = shoppingCategoryFilter?.value || 'all';
  const filtered = shoppingItems.filter(item => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesQuery = item.title.toLowerCase().includes(query) || (item.category || '').toLowerCase().includes(query) || (item.notes || '').toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
  if (!shoppingList) return;
  if (!filtered.length) { shoppingList.innerHTML = `<div class="empty">Δεν υπάρχουν προϊόντα στη λίστα.</div>`; return; }
  const groups = filtered.reduce((acc, item) => {
    const key = item.category || 'Άλλο';
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
  shoppingList.innerHTML = Object.entries(groups).map(([categoryName, items]) => `
    <section class="shopping-category-group">
      <div class="shopping-category-title"><h3>${escapeHtml(categoryName)}</h3><span>${items.length} προϊόντα</span></div>
      <div class="shopping-items">${items.map(renderShoppingItem).join('')}</div>
    </section>
  `).join('');
}
function renderShoppingSummary() {
  const total = shoppingItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const purchased = shoppingItems.filter(item => item.status === 'Αγοράστηκε');
  const pending = shoppingItems.filter(item => item.status !== 'Αγοράστηκε' && item.status !== 'Απορρίφθηκε');
  const purchasedTotal = purchased.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const pendingTotal = pending.reduce((sum, item) => sum + Number(item.price || 0), 0);
  if (shoppingTotal) shoppingTotal.textContent = formatCurrency(total);
  if (shoppingTotalItems) shoppingTotalItems.textContent = `${shoppingItems.length} προϊόντα`;
  if (shoppingPurchasedTotal) shoppingPurchasedTotal.textContent = formatCurrency(purchasedTotal);
  if (shoppingPurchasedItems) shoppingPurchasedItems.textContent = `${purchased.length} προϊόντα`;
  if (shoppingPendingTotal) shoppingPendingTotal.textContent = formatCurrency(pendingTotal);
  if (shoppingPendingItems) shoppingPendingItems.textContent = `${pending.length} προϊόντα`;
}
function renderShoppingItem(item) {
  const statusClass = item.status === 'Αγοράστηκε' ? 'shopping-status-done' : item.status === 'Απορρίφθηκε' ? 'shopping-status-rejected' : '';
  const imageHtml = item.image ? `<img src="${escapeAttribute(item.image)}" alt="" loading="lazy" onerror="this.remove();" />` : `<span>🛍️</span>`;
  return `
    <article class="shopping-item ${item.status === 'Αγοράστηκε' ? 'purchased' : ''}">
      <div class="shopping-thumb">${imageHtml}</div>
      <div class="shopping-info">
        <div class="shopping-item-top">
          <div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.category)} · ${escapeHtml(item.priority)}</p></div>
          <strong>${formatCurrency(item.price || 0)}</strong>
        </div>
        ${item.notes ? `<p class="shopping-notes">${escapeHtml(item.notes)}</p>` : ''}
        <div class="shopping-actions">
          <span class="shopping-status ${statusClass}">${escapeHtml(item.status)}</span>
          ${item.url ? `<a class="small-btn" href="${escapeAttribute(item.url)}" target="_blank" rel="noopener noreferrer">Άνοιγμα</a>` : ''}
          <button class="small-btn" type="button" onclick="toggleShoppingStatus('${escapeAttribute(item.id)}')">${item.status === 'Αγοράστηκε' ? 'Undo' : 'Αγοράστηκε'}</button>
          <button class="small-btn danger" type="button" onclick="deleteShoppingItem('${escapeAttribute(item.id)}')">Διαγραφή</button>
        </div>
      </div>
    </article>
  `;
}
function formatCurrency(value) {
  return Number(value || 0).toLocaleString('el-GR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 });
}
window.deleteShoppingItem = deleteShoppingItem;
window.toggleShoppingStatus = toggleShoppingStatus;


function getVideoProgress(){try{return JSON.parse(localStorage.getItem(VIDEO_PROGRESS_STORAGE_KEY))||{}}catch{return {}}}
function saveVideoProgress(p){localStorage.setItem(VIDEO_PROGRESS_STORAGE_KEY,JSON.stringify(p))}
function getVideoCategories(){return ['Suggested','Favorites','Pregnancy week by week','Hospital Bag','Newborn Care','Breastfeeding','Baby Shopping','Dad Academy']}
function getSuggestedVideos(){const p=calculatePregnancyInfo(new Date().toISOString().slice(0,10));const w=Number(p.week||0);const s=YOUTUBE_VIDEOS.filter(v=>w>=v.weekMin&&w<=v.weekMax);return s.length?s:YOUTUBE_VIDEOS.slice(0,8)}
function getFilteredVideos(){const p=getVideoProgress();const q=(videoSearch?.value||'').trim().toLowerCase();let items=activeVideoCategory==='Suggested'?getSuggestedVideos():activeVideoCategory==='Favorites'?YOUTUBE_VIDEOS.filter(v=>p[v.id]?.favorite):YOUTUBE_VIDEOS.filter(v=>v.category===activeVideoCategory);if(q)items=items.filter(v=>v.title.toLowerCase().includes(q)||v.channel.toLowerCase().includes(q)||v.category.toLowerCase().includes(q));return items}
function renderVideoApp(){renderVideoTabs();renderVideoWeekSummary();const vids=getFilteredVideos();const p=getVideoProgress();const wc=YOUTUBE_VIDEOS.filter(v=>p[v.id]?.watched).length;if(videosProgress)videosProgress.textContent=`${wc}/${YOUTUBE_VIDEOS.length}`;if(!vids.length){if(youtubePlayer)youtubePlayer.removeAttribute('src');if(videoTitle)videoTitle.textContent='Δεν βρέθηκαν videos';if(videoMeta)videoMeta.textContent='Άλλαξε κατηγορία ή αναζήτηση.';if(videoCounter)videoCounter.textContent='0 / 0';if(videosList)videosList.innerHTML='<div class="empty">Δεν υπάρχουν videos.</div>';return}currentVideoIndex=Math.min(Math.max(0,currentVideoIndex),vids.length-1);renderCurrentVideo(vids[currentVideoIndex],vids.length);renderVideosList(vids)}
function renderVideoTabs(){if(!videoCategoryTabs)return;videoCategoryTabs.innerHTML=getVideoCategories().map(c=>`<button class="video-category-tab ${c===activeVideoCategory?'active':''}" type="button" data-video-category="${escapeAttribute(c)}">${escapeHtml(c)}</button>`).join('');videoCategoryTabs.querySelectorAll('[data-video-category]').forEach(b=>b.addEventListener('click',()=>{activeVideoCategory=b.dataset.videoCategory;currentVideoIndex=0;renderVideoApp()}))}
function renderVideoWeekSummary(){const p=calculatePregnancyInfo(new Date().toISOString().slice(0,10));if(videosWeekTitle)videosWeekTitle.textContent=`Εβδομάδα ${p.label||'κύησης'}`;if(videosWeekSubtitle)videosWeekSubtitle.textContent='Προτεινόμενα videos με βάση την εβδομάδα κύησης και το στάδιο προετοιμασίας.'}
function renderCurrentVideo(v,total){const p=getVideoProgress();const s=p[v.id]||{};if(youtubePlayer)youtubePlayer.src=`https://www.youtube-nocookie.com/embed/${v.id}`;if(videoTitle)videoTitle.textContent=v.title;if(videoMeta)videoMeta.textContent=`${v.channel} · ${v.category} · ${v.subtitles}`;if(videoCategoryBadge)videoCategoryBadge.textContent=v.category;if(videoCounter)videoCounter.textContent=`${currentVideoIndex+1} / ${total}`;if(openVideoYoutube)openVideoYoutube.href=`https://www.youtube.com/watch?v=${v.id}`;if(favoriteVideo){favoriteVideo.textContent=s.favorite?'⭐ Favorite':'☆ Favorite';favoriteVideo.classList.toggle('active',!!s.favorite)}if(watchedVideo){watchedVideo.textContent=s.watched?'✓ Watched':'○ Mark watched';watchedVideo.classList.toggle('active',!!s.watched)}}
function moveVideo(d){const vids=getFilteredVideos();if(!vids.length)return;currentVideoIndex=(currentVideoIndex+d+vids.length)%vids.length;renderVideoApp()}
function toggleVideoFlag(flag){const vids=getFilteredVideos();const v=vids[currentVideoIndex];if(!v)return;const p=getVideoProgress();p[v.id]=p[v.id]||{};p[v.id][flag]=!p[v.id][flag];saveVideoProgress(p);renderVideoApp()}
function renderVideosList(vids){if(!videosList)return;const p=getVideoProgress();videosList.innerHTML=vids.map((v,i)=>{const s=p[v.id]||{};return `<button class="video-list-item ${i===currentVideoIndex?'active':''}" type="button" data-video-index="${i}"><img src="https://img.youtube.com/vi/${escapeAttribute(v.id)}/hqdefault.jpg" alt="" loading="lazy" /><div><strong>${escapeHtml(v.title)}</strong><span>${escapeHtml(v.channel)} · ${escapeHtml(v.category)}</span><em>${s.favorite?'⭐ ':''}${s.watched?'✓ Watched':'Not watched'}</em></div></button>`}).join('');videosList.querySelectorAll('[data-video-index]').forEach(b=>b.addEventListener('click',()=>{currentVideoIndex=Number(b.dataset.videoIndex);renderVideoApp();youtubePlayer?.scrollIntoView({behavior:'smooth',block:'center'})}))}


function prefillMaternityEdd() {
  if (!eddInput || eddInput.value) return;
  const lmpDate = new Date('2026-01-12T12:00:00');
  const edd = addDaysForMaternity(lmpDate, 280);
  eddInput.value = toInputDateForMaternity(edd);
}

function calculateMaternityLeave() {
  if (!maternityResults || !eddInput?.value) return;

  const edd = parseMaternityInputDate(eddInput.value);
  const actualBirth = actualBirthInput?.value ? parseMaternityInputDate(actualBirthInput.value) : null;

  const pregnancyLeaveStart = addDaysForMaternity(edd, -56);
  const expectedPregnancyLeaveEnd = addDaysForMaternity(edd, -1);
  const birthDate = actualBirth || edd;

  let unusedPregnancyDays = 0;
  if (actualBirth && actualBirth.getTime() < edd.getTime()) {
    unusedPregnancyDays = diffMaternityDays(actualBirth, edd);
  }

  const maternityLeaveStart = birthDate;
  const maternityLeaveEnd = addDaysForMaternity(birthDate, 63 + unusedPregnancyDays);

  const annualDays = Number(annualLeaveBeforeDypa?.value || 0);
  const annualLeaveStart = annualDays > 0 ? addDaysForMaternity(maternityLeaveEnd, 1) : null;
  const annualLeaveEnd = annualDays > 0 ? addDaysForMaternity(annualLeaveStart, annualDays - 1) : null;

  const dypaStart = annualLeaveEnd ? addDaysForMaternity(annualLeaveEnd, 1) : addDaysForMaternity(maternityLeaveEnd, 1);
  const dypaEnd = addMonthsForMaternity(dypaStart, 9);
  dypaEnd.setDate(dypaEnd.getDate() - 1);

  const equalMonths = Number(equalLeaveMonths?.value || 0);
  const equalLeaveStart = equalMonths > 0 ? addDaysForMaternity(dypaEnd, 1) : null;
  const equalLeaveEnd = equalMonths > 0 ? addDaysForMaternity(addMonthsForMaternity(equalLeaveStart, equalMonths), -1) : null;

  const parentalMonths = Number(parentalLeaveMonths?.value || 0);
  const parentalLeaveStart = equalLeaveEnd ? addDaysForMaternity(equalLeaveEnd, 1) : addDaysForMaternity(dypaEnd, 1);
  const parentalLeaveEnd = parentalMonths > 0 ? addDaysForMaternity(addMonthsForMaternity(parentalLeaveStart, parentalMonths), -1) : null;

  const finalReturnDate = parentalLeaveEnd
    ? addDaysForMaternity(parentalLeaveEnd, 1)
    : equalLeaveEnd
      ? addDaysForMaternity(equalLeaveEnd, 1)
      : addDaysForMaternity(dypaEnd, 1);

  const today = new Date();
  const daysUntilPregnancyLeave = diffMaternityDays(today, pregnancyLeaveStart);
  const daysUntilEdd = diffMaternityDays(today, edd);

  const cards = [
    ['Έναρξη κυοφορίας', pregnancyLeaveStart, '56 ημέρες πριν την ΠΗΤ'],
    ['ΠΗΤ', edd, actualBirth ? 'Αρχική πιθανή ημερομηνία' : 'Υπολογισμένη ημερομηνία τοκετού'],
    ['Πραγματικός τοκετός', birthDate, actualBirth ? 'Δηλωμένη ημερομηνία τοκετού' : 'Ίδια με ΠΗΤ'],
    ['Λήξη λοχείας', maternityLeaveEnd, unusedPregnancyDays ? `+${unusedPregnancyDays} ημέρες μεταφορά` : '63 ημέρες μετά'],
    ['Έναρξη 9μήνου ΔΥΠΑ', dypaStart, annualDays ? `μετά από ${annualDays} ημέρες κανονικής` : 'αμέσως μετά τη λοχεία'],
    ['Λήξη 9μήνου ΔΥΠΑ', dypaEnd, 'ενδεικτικά 9 μήνες'],
    ['Επιστροφή / επόμενη φάση', finalReturnDate, 'με βάση τις επιλογές σου']
  ];

  const timelineItems = [
    { title: 'Άδεια κυοφορίας', start: pregnancyLeaveStart, end: expectedPregnancyLeaveEnd, icon: '🤰' },
    { title: 'Άδεια λοχείας', start: maternityLeaveStart, end: maternityLeaveEnd, icon: '👶' },
    ...(annualDays ? [{ title: 'Κανονική άδεια', start: annualLeaveStart, end: annualLeaveEnd, icon: '🏖️' }] : []),
    { title: '9μηνο ΔΥΠΑ', start: dypaStart, end: dypaEnd, icon: '🍼' },
    ...(equalMonths ? [{ title: 'Ισόχρονη άδεια', start: equalLeaveStart, end: equalLeaveEnd, icon: '⏳' }] : []),
    ...(parentalMonths ? [{ title: 'Γονική άδεια', start: parentalLeaveStart, end: parentalLeaveEnd, icon: '👪' }] : [])
  ];

  maternityResults.innerHTML = `
    <div class="maternity-countdown-card">
      <div>
        <span>Countdown</span>
        <strong>${daysUntilEdd >= 0 ? daysUntilEdd : 0} ημέρες μέχρι την ΠΗΤ</strong>
        <p>${daysUntilPregnancyLeave >= 0 ? `${daysUntilPregnancyLeave} ημέρες μέχρι την έναρξη άδειας κυοφορίας` : 'Η άδεια κυοφορίας έχει ήδη ξεκινήσει ή παρέλθει.'}</p>
      </div>
    </div>

    <div class="maternity-cards-grid">
      ${cards.map(([title, date, note]) => `
        <div class="shopping-summary-card maternity-result-card">
          <span>${escapeHtml(title)}</span>
          <strong>${formatMaternityDateLong(date)}</strong>
          <small>${escapeHtml(note)}</small>
        </div>
      `).join('')}
    </div>

    <div class="maternity-timeline-card">
      <h3>Timeline</h3>
      <div class="maternity-timeline">
        ${timelineItems.map(item => `
          <div class="maternity-timeline-item">
            <div class="timeline-dot">${item.icon}</div>
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${formatMaternityDateLong(item.start)} – ${formatMaternityDateLong(item.end)}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="maternity-explanation-card">
      <h3>Ανάλυση</h3>
      <p><strong>Άδεια κυοφορίας:</strong> ${formatMaternityDateLong(pregnancyLeaveStart)} έως ${formatMaternityDateLong(expectedPregnancyLeaveEnd)}.</p>
      <p><strong>Άδεια λοχείας:</strong> ${formatMaternityDateLong(maternityLeaveStart)} έως ${formatMaternityDateLong(maternityLeaveEnd)}.</p>
      ${unusedPregnancyDays ? `<p><strong>Πρόωρος τοκετός:</strong> ${unusedPregnancyDays} ημέρες μεταφέρθηκαν από την κυοφορία στη λοχεία.</p>` : ''}
      ${annualDays ? `<p><strong>Κανονική άδεια:</strong> ${annualDays} ημέρες πριν την έναρξη του 9μήνου ΔΥΠΑ.</p>` : ''}
      ${equalMonths ? `<p><strong>Ισόχρονη άδεια:</strong> υπολογίστηκε ως ${String(equalMonths).replace('.', ',')} μήνες μετά το 9μηνο.</p>` : ''}
      ${parentalMonths ? `<p><strong>Γονική άδεια:</strong> υπολογίστηκε ως ${parentalMonths} μήνες μετά την προηγούμενη φάση.</p>` : ''}
    </div>
  `;
}

function parseMaternityInputDate(value) {
  return new Date(`${value}T12:00:00`);
}

function toInputDateForMaternity(date) {
  return date.toISOString().slice(0, 10);
}

function addDaysForMaternity(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function addMonthsForMaternity(date, months) {
  const copy = new Date(date);
  const wholeMonths = Math.floor(months);
  const extraDays = Math.round((months - wholeMonths) * 30);
  copy.setMonth(copy.getMonth() + wholeMonths);
  copy.setDate(copy.getDate() + extraDays);
  return copy;
}

function diffMaternityDays(from, to) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.ceil((end - start) / 86400000);
}

function formatMaternityDateLong(date) {
  if (!date || Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('el-GR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}



function loadMamaChatHistory() {
  try {
    mamaChatHistory = JSON.parse(localStorage.getItem(MAMA_CHAT_STORAGE_KEY)) || [];
  } catch {
    mamaChatHistory = [];
  }

  if (!mamaChatHistory.length) {
    mamaChatHistory = [{
      role: 'assistant',
      content: 'Γεια σου 🩵 Είμαι εδώ για ήρεμες απαντήσεις, οργάνωση και καθημερινή υποστήριξη. Πώς μπορώ να βοηθήσω σήμερα;'
    }];
  }
}

function saveMamaChatHistory() {
  localStorage.setItem(MAMA_CHAT_STORAGE_KEY, JSON.stringify(mamaChatHistory));
}

function renderMamaChat() {
  if (!mamaChatMessages) return;

  mamaChatMessages.innerHTML = mamaChatHistory.map(message => `
    <div class="chat-message ${message.role === 'user' ? 'user' : 'assistant'}">
      <div>${escapeHtml(message.content)}</div>
    </div>
  `).join('');

  mamaChatMessages.scrollTop = mamaChatMessages.scrollHeight;
}

async function handleMamaChatSubmit(event) {
  event.preventDefault();

  const text = mamaChatInput.value.trim();
  if (!text) return;

  mamaChatHistory.push({ role: 'user', content: text });
  mamaChatInput.value = '';
  renderMamaChat();
  saveMamaChatHistory();

  mamaChatHistory.push({ role: 'assistant', content: 'Γράφω απάντηση...' });
  renderMamaChat();

  try {
    const reply = await callMamaChatAgent(text);
    mamaChatHistory[mamaChatHistory.length - 1] = { role: 'assistant', content: reply };
  } catch (error) {
    console.error('Mama Chat API failed', error);
    mamaChatHistory[mamaChatHistory.length - 1] = { role: 'assistant', content: getMamaChatFallback(text) };
  }

  saveMamaChatHistory();
  renderMamaChat();
}

async function callMamaChatAgent(userMessage) {
  const endpoint =
    window.BIRTH_APP_CONFIG?.MAMA_CHAT_API_URL?.trim() ||
    window.BIRTH_APP_CONFIG?.BIRTHHUB_API_URL?.trim();

  if (!endpoint) throw new Error('MAMA_CHAT_API_URL missing');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      action: 'mamaChat',
      message: userMessage,
      history: mamaChatHistory
        .filter(m => m.content !== 'Γράφω απάντηση...')
        .slice(-12),
      context: {
        app: 'BirthHub',
        lmp: '2026-01-12',
        language: 'el-GR'
      }
    })
  });

  if (!response.ok) throw new Error(`Mama Chat HTTP ${response.status}`);

  const data = await response.json();
  if (data.success === false) throw new Error(data.error || 'Mama Chat backend failed');

  return data.reply || data.message || data.content || 'Δεν μπόρεσα να βρω απάντηση.';
}

function getMamaChatFallback(text) {
  const lower = text.toLowerCase();

  if (lower.includes('πονά') || lower.includes('αιμορ') || lower.includes('ζαλά') || lower.includes('πίεση')) {
    return 'Αυτό που περιγράφεις μπορεί να χρειάζεται άμεση αξιολόγηση. Καλύτερα επικοινώνησε τώρα με τον γιατρό ή το μαιευτήριο, ειδικά αν υπάρχει πόνος, αιμορραγία, έντονη ζάλη ή υψηλή πίεση.';
  }

  if (lower.includes('βαλίτσα') || lower.includes('μαιευτήριο')) {
    return 'Καλή ιδέα να το οργανώσεις σε λίστα: έγγραφα/εξετάσεις, ρούχα μαμάς, είδη υγιεινής, φορτιστή, ρούχα μωρού, πάνες και κάτι για τον συνοδό.';
  }

  if (lower.includes('άγχος') || lower.includes('φοβάμαι')) {
    return 'Είναι πολύ φυσιολογικό να υπάρχει άγχος. Πάρε μια ανάσα, γράψε τι σε ανησυχεί σε 2-3 bullets και κράτα μόνο το επόμενο μικρό βήμα. Αν το άγχος γίνεται έντονο ή καθημερινό, αξίζει να το συζητήσεις με τον γιατρό/μαία.';
  }

  return 'Μπορώ να βοηθήσω με οργάνωση, λίστες, ήρεμες εξηγήσεις και ερωτήσεις για το τι να ρωτήσεις τον γιατρό. Για ιατρική απόφαση ή έντονο σύμπτωμα, μίλησε με τον γιατρό σου.';
}


function renderDashboard() {
  try { renderDashboardPregnancyInfo(); } catch (e) { console.error(e); }
  try { renderDashboardWeight(); } catch (e) { console.error(e); }
  try { renderDashboardAppointments(); } catch (e) { console.error(e); }
  try { renderDashboardNutrition(); } catch (e) { console.error(e); }
  try { renderDashboardExams(); } catch (e) { console.error(e); }
}

function renderDashboardPregnancyInfo() {
  try {
    const lmpDate = new Date('2026-01-12T00:00:00');
    const today = new Date();

    const diffDays = Math.max(
      0,
      Math.floor((today.getTime() - lmpDate.getTime()) / 86400000)
    );

    const week = Math.floor(diffDays / 7);
    const days = diffDays % 7;

    if (dashboardPregnancyWeek) {
      dashboardPregnancyWeek.textContent = `Εβδομάδα κύησης ${week}+${days}`;
    }

    if (dashboardDueDate) {
      const dueDate = new Date(lmpDate);
      dueDate.setDate(dueDate.getDate() + 280);

      dashboardDueDate.textContent =
        `Πιθανή ημερομηνία τοκετού: ${dueDate.toLocaleDateString('el-GR')}`;
    }
  } catch (e) {
    console.error('Dashboard pregnancy error', e);

    if (dashboardPregnancyWeek) {
      dashboardPregnancyWeek.textContent = 'Εβδομάδα κύησης';
    }

    if (dashboardDueDate) {
      dashboardDueDate.textContent = 'ΤΕΡ 12/01/2026';
    }
  }
}

function renderDashboardWeight() {
  loadWeightEntries();
  importPregnancyWeightsIfNeeded();

  const sorted = getSortedWeightEntries();

  if (!sorted.length) {
    if (dashboardLastWeight) dashboardLastWeight.textContent = '—';
    if (dashboardWeightDiff) dashboardWeightDiff.textContent = 'Δεν υπάρχουν μετρήσεις';
    return;
  }

  const last = sorted[sorted.length - 1];
  const diff = Number(last.weight) - Number(PREGNANCY_IMPORT_DATA.momWeightBeforePregnancy);
  const sign = diff > 0 ? '+' : '';

  if (dashboardLastWeight) dashboardLastWeight.textContent = `${formatNumber(last.weight)} kg`;
  if (dashboardWeightDiff) dashboardWeightDiff.textContent = `${sign}${formatNumber(diff)} kg από αρχικό`;
}

function renderDashboardAppointments() {
  loadAppointments();

  const now = new Date();
  const sorted = [...appointments].sort((a, b) => {
    const aDate = new Date(`${a.date}T${a.time || '00:00'}`).getTime();
    const bDate = new Date(`${b.date}T${b.time || '00:00'}`).getTime();
    return aDate - bDate;
  });

  const next = sorted.find(item => {
    if (item.status !== 'Προγραμματισμένο') return false;
    const dt = new Date(`${item.date}T${item.time || '23:59'}`);
    return dt.getTime() >= now.getTime();
  });

  if (!next) {
    if (dashboardNextAppointment) dashboardNextAppointment.textContent = '—';
    if (dashboardNextAppointmentDate) dashboardNextAppointmentDate.textContent = 'Δεν υπάρχει προγραμματισμένο';
    return;
  }

  if (dashboardNextAppointment) dashboardNextAppointment.textContent = next.title;
  if (dashboardNextAppointmentDate) {
    dashboardNextAppointmentDate.textContent =
      `${formatAppointmentDate(next.date)}${next.time ? ' · ' + next.time : ''}`;
  }
}

function renderDashboardNutrition() {
  try {
    const nutritionKeys = Object.keys(localStorage).filter(key =>
      key.toLowerCase().includes('nutrition') ||
      key.toLowerCase().includes('meal')
    );

    let checked = 0;

    nutritionKeys.forEach(key => {
      const value = localStorage.getItem(key);
      if (!value) return;
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) checked += parsed.filter(Boolean).length;
        else if (typeof parsed === 'object') checked += Object.values(parsed).filter(Boolean).length;
      } catch {
        if (value === 'true') checked += 1;
      }
    });

    checked = Math.min(5, checked);

    if (dashboardNutritionProgress) {
      dashboardNutritionProgress.textContent = `${checked}/5`;
    }
  } catch {
    if (dashboardNutritionProgress) dashboardNutritionProgress.textContent = '0/5';
  }
}

function renderDashboardExams() {
  if (dashboardExamCount) {
    dashboardExamCount.textContent = exams?.length ? String(exams.length) : '—';
  }
}





function toggleAppointmentFormPanel(forceOpen) {
  if (!appointmentFormPanel || !toggleAppointmentForm) return;

  const shouldOpen =
    typeof forceOpen === 'boolean'
      ? forceOpen
      : !appointmentFormPanel.classList.contains('open');

  appointmentFormPanel.classList.toggle('open', shouldOpen);
  toggleAppointmentForm.classList.toggle('open', shouldOpen);
  toggleAppointmentForm.innerHTML = shouldOpen
    ? '<span>×</span><strong>Κλείσιμο φόρμας</strong>'
    : '<span>＋</span><strong>Προσθήκη ραντεβού</strong>';

  if (shouldOpen) {
    setTimeout(() => appointmentDate?.focus(), 180);
  }
}

function renderAppointmentsCalendar() {
  if (!appointmentsCalendar || !appointmentCalendarTitle) return;

  const year = appointmentCalendarMonth.getFullYear();
  const month = appointmentCalendarMonth.getMonth();

  appointmentCalendarTitle.textContent = appointmentCalendarMonth.toLocaleDateString('el-GR', {
    month: 'long',
    year: 'numeric'
  });

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday first
  const totalCells = Math.ceil((startOffset + lastDay.getDate()) / 7) * 7;

  const byDate = appointments.reduce((acc, item) => {
    if (!item.date) return acc;
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {});

  const todayKey = new Date().toISOString().slice(0, 10);
  let html = '';

  for (let cell = 0; cell < totalCells; cell++) {
    const dayNum = cell - startOffset + 1;
    const inMonth = dayNum >= 1 && dayNum <= lastDay.getDate();

    if (!inMonth) {
      html += '<button class="calendar-day empty" type="button" disabled></button>';
      continue;
    }

    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    const items = byDate[key] || [];
    const isSelected = selectedAppointmentDate === key;
    const isToday = todayKey === key;

    html += `
      <button class="calendar-day ${items.length ? 'has-events' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}" type="button" data-date="${key}">
        <span>${dayNum}</span>
        ${items.length ? `<em>${items.length}</em>` : ''}
      </button>
    `;
  }

  appointmentsCalendar.innerHTML = html;

  appointmentsCalendar.querySelectorAll('[data-date]').forEach(button => {
    button.addEventListener('click', () => {
      selectedAppointmentDate = button.dataset.date;
      renderAppointmentsCalendar();
      renderSelectedCalendarDay();
    });
  });

  if (!selectedAppointmentDate) {
    const firstWithAppointment = Object.keys(byDate).find(date => date.startsWith(`${year}-${String(month + 1).padStart(2, '0')}`));
    selectedAppointmentDate = firstWithAppointment || todayKey;
  }

  renderSelectedCalendarDay();
}

function renderSelectedCalendarDay() {
  if (!calendarDayAppointments) return;

  const items = appointments
    .filter(item => item.date === selectedAppointmentDate)
    .sort((a, b) => `${a.time || '99:99'}`.localeCompare(`${b.time || '99:99'}`));

  const label = selectedAppointmentDate
    ? new Date(`${selectedAppointmentDate}T12:00:00`).toLocaleDateString('el-GR', {
        weekday: 'long',
        day: '2-digit',
        month: 'long'
      })
    : 'Επιλεγμένη ημέρα';

  if (!items.length) {
    calendarDayAppointments.innerHTML = `
      <div class="calendar-day-empty">
        <strong>${escapeHtml(label)}</strong>
        <p>Δεν υπάρχουν ραντεβού για αυτή την ημέρα.</p>
      </div>
    `;
    return;
  }

  calendarDayAppointments.innerHTML = `
    <div class="calendar-day-list">
      <strong>${escapeHtml(label)}</strong>
      ${items.map(item => `
        <div class="calendar-day-event">
          <span>${escapeHtml(item.time || '--:--')}</span>
          <div>
            <b>${escapeHtml(item.title)}</b>
            <small>${escapeHtml(item.doctor || item.type || '')}</small>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}


function getAppointmentsSheetName() {
  return window.BIRTH_APP_CONFIG?.APPOINTMENTS_SHEET_NAME || 'Appointments';
}

async function loadAppointmentsFromSheet() {
  try {
    const rows = await apiGetSheet(getAppointmentsSheetName());

    appointments = rows
      .map(normalizeAppointmentSheetRow)
      .filter(item => item.date && item.title);

    saveAppointments();
    return true;
  } catch (error) {
    console.error('Appointments cloud load failed, using localStorage', error);
    loadAppointments();
    return false;
  }
}

function normalizeAppointmentSheetRow(row, index) {
  return {
    id: `sheet-${row._rowId || index + 2}`,
    rowId: row._rowId,
    date: normalizeAppointmentDateValue(row['Ημερομηνία'] || row['Ημερομηνια'] || row['Date'] || ''),
    time: normalizeAppointmentTimeValue(row['Ώρα'] || row['Ωρα'] || row['Time'] || ''),
    title: row['Τίτλος'] || row['Τιτλος'] || row['Title'] || '',
    doctor: row['Γιατρός'] || row['Γιατρος'] || row['Doctor'] || '',
    type: row['Τύπος'] || row['Τυπος'] || row['Type'] || 'Επίσκεψη',
    status: row['Status'] || row['Κατάσταση'] || row['Κατασταση'] || 'Προγραμματισμένο',
    notes: row['Σημειώσεις'] || row['Σημειωσεις'] || row['Σχόλια'] || row['Σχολια'] || row['Notes'] || '',
    source: 'sheet'
  };
}

function normalizeAppointmentDateValue(value) {
  if (!value) return '';

  if (typeof value === 'string') {
    const trimmed = value.trim();

    const iso = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})T/);
    if (iso) {
      const parsed = new Date(trimmed);
      if (!Number.isNaN(parsed.getTime())) {
        return new Intl.DateTimeFormat('en-CA', {
          timeZone: 'Europe/Athens',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).format(parsed);
      }
      return `${iso[1]}-${iso[2]}-${iso[3]}`;
    }

    const isoDateOnly = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoDateOnly) return trimmed;

    const greekDate = trimmed.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (greekDate) {
      const day = String(greekDate[1]).padStart(2, '0');
      const month = String(greekDate[2]).padStart(2, '0');
      const year = greekDate[3].length === 2 ? `20${greekDate[3]}` : greekDate[3];
      return `${year}-${month}-${day}`;
    }
  }

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Athens',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(parsed);
  }

  return String(value);
}

function normalizeAppointmentTimeValue(value) {
  if (!value) return '';

  if (typeof value === 'string') {
    const trimmed = value.trim();

    const isoTime = trimmed.match(/T(\d{2}):(\d{2})/);
    if (isoTime) return `${isoTime[1]}:${isoTime[2]}`;

    const simpleTime = trimmed.match(/^(\d{1,2}):(\d{2})/);
    if (simpleTime) {
      return `${String(simpleTime[1]).padStart(2, '0')}:${simpleTime[2]}`;
    }
  }

  if (typeof value === 'number') {
    const totalMinutes = Math.round(value * 24 * 60);
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return new Intl.DateTimeFormat('el-GR', {
      timeZone: 'UTC',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(parsed);
  }

  return String(value);
}

function toAppointmentSheetRow(item) {
  return {
    'Ημερομηνία': item.date || '',
    'Ώρα': item.time || '',
    'Τίτλος': item.title || '',
    'Γιατρός': item.doctor || '',
    'Τύπος': item.type || '',
    'Status': item.status || '',
    'Σημειώσεις': item.notes || ''
  };
}


async function handleAppointmentSubmit(event) {
  event.preventDefault();

  const date = appointmentDate.value;
  const time = appointmentTime.value || '';
  const title = appointmentTitle.value.trim();
  if (!date || !title) return;

  const entry = {
    id: createId(),
    date,
    time,
    title,
    doctor: appointmentDoctor.value.trim(),
    type: appointmentType.value,
    status: appointmentStatus.value,
    notes: appointmentNotes.value.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    await withAppLoader('Αποθήκευση ραντεβού...', () => apiInsertRow(getAppointmentsSheetName(), toAppointmentSheetRow(entry)));
    await withAppLoader('Φόρτωση ραντεβού...', () => loadAppointmentsFromSheet());
  } catch (error) {
    console.error('Appointment cloud insert failed, falling back to localStorage', error);
    appointments.push(entry);
    saveAppointments();
  }

  renderAppointments();
  renderDashboardAppointments();
  appointmentForm.reset();
  appointmentDate.focus();
  toggleAppointmentFormPanel(false);
}

function loadAppointments() {
  try {
    const saved = localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
    appointments = saved ? JSON.parse(saved) : [];
  } catch {
    appointments = [];
  }
}

function saveAppointments() {
  localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
}

function clearAllAppointments() { // clears local cache only; delete rows individually to remove from Google Sheet
  if (!appointments.length) return;
  const confirmed = confirm('Θέλεις σίγουρα να διαγραφούν όλα τα ραντεβού από αυτή τη συσκευή;');
  if (!confirmed) return;
  appointments = [];
  saveAppointments();
  renderAppointments();
}

async function deleteAppointment(id) {
  const item = appointments.find(entry => entry.id === id);

  try {
    if (item?.rowId) {
      await apiDeleteRow(getAppointmentsSheetName(), item.rowId);
      await withAppLoader('Φόρτωση ραντεβού...', () => loadAppointmentsFromSheet());
    } else {
      appointments = appointments.filter(entry => entry.id !== id);
      saveAppointments();
    }
  } catch (error) {
    console.error('Appointment cloud delete failed, deleting locally only', error);
    appointments = appointments.filter(entry => entry.id !== id);
    saveAppointments();
  }

  renderAppointments();
  renderDashboardAppointments();
}

async function toggleAppointmentStatus(id) {
  const item = appointments.find(entry => entry.id === id);
  if (!item) return;

  const nextStatus = item.status === 'Ολοκληρώθηκε' ? 'Προγραμματισμένο' : 'Ολοκληρώθηκε';

  try {
    if (item.rowId) {
      await apiUpdateRow(getAppointmentsSheetName(), item.rowId, { 'Status': nextStatus });
      await withAppLoader('Φόρτωση ραντεβού...', () => loadAppointmentsFromSheet());
    } else {
      appointments = appointments.map(entry =>
        entry.id === id ? { ...entry, status: nextStatus } : entry
      );
      saveAppointments();
    }
  } catch (error) {
    console.error('Appointment cloud update failed, updating locally only', error);
    appointments = appointments.map(entry =>
      entry.id === id ? { ...entry, status: nextStatus } : entry
    );
    saveAppointments();
  }

  renderAppointments();
  renderDashboardAppointments();
}

function renderAppointments() {
  const query = (appointmentSearch?.value || '').trim().toLowerCase();
  const sorted = [...appointments].sort((a, b) => {
    const aDate = new Date(`${a.date}T${a.time || '00:00'}`).getTime();
    const bDate = new Date(`${b.date}T${b.time || '00:00'}`).getTime();
    return aDate - bDate;
  });

  const filtered = sorted.filter(item =>
    item.title.toLowerCase().includes(query) ||
    (item.doctor || '').toLowerCase().includes(query) ||
    (item.notes || '').toLowerCase().includes(query) ||
    (item.type || '').toLowerCase().includes(query)
  );

  if (appointmentCount) {
    appointmentCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'εγγραφή' : 'εγγραφές'}`;
  }

  renderNextAppointment(sorted);

  if (!appointmentsList) return;

  if (!filtered.length) {
    appointmentsList.innerHTML = `<div class="empty">Δεν υπάρχουν ραντεβού.</div>`;
    return;
  }

  appointmentsList.innerHTML = filtered.map(renderAppointmentItem).join('');
}

function renderNextAppointment(items) {
  const now = new Date();

  const next = items.find(item => {
    if (item.status !== 'Προγραμματισμένο') return false;
    const dt = new Date(`${item.date}T${item.time || '23:59'}`);
    return dt.getTime() >= now.getTime();
  });

  if (!next) {
    if (nextAppointmentTitle) nextAppointmentTitle.textContent = 'Δεν υπάρχει επόμενο ραντεβού';
    if (nextAppointmentMeta) nextAppointmentMeta.textContent = 'Πρόσθεσε ή κράτησε ως προγραμματισμένο το επόμενο ραντεβού.';
    return;
  }

  if (nextAppointmentTitle) nextAppointmentTitle.textContent = next.title;
  if (nextAppointmentMeta) {
    nextAppointmentMeta.textContent =
      `${formatAppointmentDate(next.date)}${next.time ? ' · ' + next.time : ''}` +
      `${next.doctor ? ' · ' + next.doctor : ''}` +
      ` · ${next.type}`;
  }
}

function renderAppointmentItem(item) {
  const statusClass =
    item.status === 'Ολοκληρώθηκε'
      ? 'status-done'
      : item.status === 'Ακυρώθηκε'
        ? 'status-cancelled'
        : '';

  return `
    <article class="appointment-item">
      <div class="appointment-top">
        <div>
          <div class="appointment-date">${escapeHtml(formatAppointmentDate(item.date))}${item.time ? ' · ' + escapeHtml(item.time) : ''}</div>
          <h4>${escapeHtml(item.title)}</h4>
          <div class="appointment-meta">
            ${escapeHtml(item.type || 'Ραντεβού')}
            ${item.doctor ? ' · ' + escapeHtml(item.doctor) : ''}
          </div>
        </div>
        <span class="status-pill ${statusClass}">${escapeHtml(item.status || 'Προγραμματισμένο')}</span>
      </div>
      ${item.notes ? `<p class="appointment-notes">${escapeHtml(item.notes)}</p>` : ''}
      <div class="item-actions">
        <button class="small-btn" type="button" onclick="toggleAppointmentStatus('${escapeAttribute(item.id)}')">
          ${item.status === 'Ολοκληρώθηκε' ? 'Άνοιγμα ξανά' : 'Ολοκληρώθηκε'}
        </button>
        <button class="small-btn danger" type="button" onclick="deleteAppointment('${escapeAttribute(item.id)}')">Διαγραφή</button>
      </div>
    </article>
  `;
}

function formatAppointmentDate(value) {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return String(value || '');
  return date.toLocaleDateString('el-GR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

window.deleteAppointment = deleteAppointment;
window.toggleAppointmentStatus = toggleAppointmentStatus;

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


document.addEventListener('DOMContentLoaded', () => {
  try {
    renderDashboard();
  } catch (e) {
    console.error('Initial dashboard render failed', e);
  }
});

window.deleteWeightEntry = typeof deleteWeightEntry !== 'undefined' ? deleteWeightEntry : window.deleteWeightEntry;
window.deleteAppointment = typeof deleteAppointment !== 'undefined' ? deleteAppointment : window.deleteAppointment;
window.toggleAppointmentStatus = typeof toggleAppointmentStatus !== 'undefined' ? toggleAppointmentStatus : window.toggleAppointmentStatus;


/* Paymaster maternity calculator integration */
(function () {
    const $ = id => document.getElementById(id);
    const PRE = 56;
    const POST = 63;
    const DYPAMONTHS = 9;

    const fixedHolidayKeys = new Set(['01-01', '01-06', '03-25', '05-01', '08-15', '10-28', '12-25', '12-26']);

    function parseDate(value) {
        if (!value)
            return null;
        const d = new Date(value + 'T00:00:00');
        return isNaN(d.getTime()) ? null : d;
    }

    function fmt(d) {
        if (!d || isNaN(d.getTime()))
            return '—';
        return d.toLocaleDateString('el-GR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    function addDays(date, days) {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        d.setUTCDate(d.getUTCDate() + days);
        return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
    }

    function addMonths(date, months) {
        const y = date.getFullYear();
        const m = date.getMonth();
        const day = date.getDate();
        const d = new Date(y, m + months, day);
        if (d.getDate() !== day) {
            d.setDate(0);
        }
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }

    function inclusiveEndByMonths(start, months) {
        return addDays(addMonths(start, months), -1);
    }

    function diffDays(a, b) {
        const ms = new Date(b.getFullYear(), b.getMonth(), b.getDate()) - new Date(a.getFullYear(), a.getMonth(), a.getDate());
        return Math.round(ms / 86400000);
    }

    function diffDaysInclusive(a, b) {
        if (!a || !b || b < a)
            return 0;
        return diffDays(a, b) + 1;
    }

    function isFixedHoliday(d) {
        const key = String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        return fixedHolidayKeys.has(key);
    }

    function isWorkingDay(d, opts) {
        const day = d.getDay();
        if (opts.workweek === 5 && (day === 0 || day === 6))
            return false;
        if (opts.workweek === 6 && day === 0)
            return false;
        if (opts.excludeFixedHolidays && isFixedHoliday(d))
            return false;
        return true;
    }

    function countWorkingDays(start, end, opts) {
        if (!start || !end || end < start)
            return 0;
        let count = 0;
        let d = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        while (d <= end) {
            if (isWorkingDay(d, opts))
                count++;
            d = addDays(d, 1);
        }
        return Math.max(0, count);
    }

    function addWorkingDaysInclusive(start, workingDays, opts) {
        const target = Math.ceil(Math.max(0, workingDays));
        if (target <= 0)
            return addDays(start, -1);
        let count = 0;
        let d = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        let guard = 0;
        while (guard < 2000) {
            if (isWorkingDay(d, opts)) {
                count++;
                if (count >= target)
                    return d;
            }
            d = addDays(d, 1);
            guard++;
        }
        return d;
    }

    function numberValue(id, fallback) {
        const v = parseFloat($(id).value);
        return Number.isFinite(v) ? v : fallback;
    }

    function getOptions() {
        return {
            workweek: parseInt($('pmWorkweek').value, 10),
            dailyHours: Math.max(1, numberValue('pmDailyHours', 8)),
            extraNonWorking: Math.max(0, Math.round(numberValue('pmExtraNonWorking', 0))),
            excludeFixedHolidays: $('pmExcludeFixedHolidays').checked
        };
    }

    function childcareSegments(start, opts) {
        const pattern = $('pmChildcarePattern').value;
        const rows = [];
        let totalHours = 0;
        let totalWorkingDaysRaw = 0;

        if (pattern === 'alternative') {
            const seg1Start = start;
            const seg1End = inclusiveEndByMonths(seg1Start, 12);
            const seg2Start = addDays(seg1End, 1);
            const seg2End = inclusiveEndByMonths(seg2Start, 6);
            const w1 = countWorkingDays(seg1Start, seg1End, opts);
            const w2 = countWorkingDays(seg2Start, seg2End, opts);
            totalWorkingDaysRaw = w1 + w2;
            totalHours = (w1 * 2) + (w2 * 1);

            rows.push({
                phase: 'Μειωμένο ωράριο · 1η περίοδος',
                from: seg1Start,
                to: seg1End,
                duration: `${w1} εργάσιμες ημέρες`,
                note: 'Μείωση 2 ωρών ημερησίως για 12 μήνες.'
            });
            rows.push({
                phase: 'Μειωμένο ωράριο · 2η περίοδος',
                from: seg2Start,
                to: seg2End,
                duration: `${w2} εργάσιμες ημέρες`,
                note: 'Μείωση 1 ώρας ημερησίως για 6 μήνες.'
            });

            return {
                rows,
                end: seg2End,
                totalHours,
                totalWorkingDaysRaw,
                patternLabel: '2 ώρες/ημέρα για 12 μήνες + 1 ώρα/ημέρα για 6 μήνες'
            };
        }

        const end = inclusiveEndByMonths(start, 30);
        const w = countWorkingDays(start, end, opts);
        totalWorkingDaysRaw = w;
        totalHours = w;
        rows.push({
            phase: 'Μειωμένο ωράριο',
            from: start,
            to: end,
            duration: `${w} εργάσιμες ημέρες`,
            note: 'Μείωση 1 ώρας ημερησίως για 30 μήνες.'
        });

        return {
            rows,
            end,
            totalHours,
            totalWorkingDaysRaw,
            patternLabel: '1 ώρα/ημέρα για 30 μήνες'
        };
    }

    function equivalentLeave(start, opts) {
        const seg = childcareSegments(start, opts);
        const adjustedHours = Math.max(0, seg.totalHours - opts.extraNonWorking);
        const exactDays = adjustedHours / opts.dailyHours;
        const fullDays = Math.floor(exactDays);
        const remHours = +(adjustedHours - (fullDays * opts.dailyHours)).toFixed(2);
        const calendarEnd = addWorkingDaysInclusive(start, exactDays, opts);

        let duration = `${adjustedHours.toFixed(2).replace('.00', '')} ώρες / ${exactDays.toFixed(2)} εργάσιμες ημέρες`;
        let note = `Ισόχρονη αντί για: ${seg.patternLabel}. Υπολογισμός με ${opts.dailyHours} ώρες πλήρους ημερήσιου ωραρίου.`;
        if (remHours > 0) {
            note += ` Πρακτικά: ${fullDays} πλήρεις εργάσιμες ημέρες και περίπου ${remHours} ώρες.`;
        }
        if (opts.extraNonWorking > 0) {
            note += ` Έχει γίνει χειροκίνητη αφαίρεση ${opts.extraNonWorking} ωρών/ημερών από το συνολικό αποτέλεσμα, σύμφωνα με την παράμετρο που δήλωσες.`;
        }

        return {
            phase: 'Ισόχρονη άδεια φροντίδας παιδιού',
            from: start,
            to: calendarEnd,
            duration,
            note,
            end: calendarEnd,
            totalHours: adjustedHours,
            exactDays
        };
    }

    function maternityCalculation(due, actual) {
        let plannedStart = addDays(due, -PRE);
        let birth = actual || due;
        let start = plannedStart;
        let preFrom = plannedStart;
        let preTo = addDays(birth, -1);
        let postFrom = birth;
        let postDays = POST;
        let note = 'Βασικός υπολογισμός με βάση την ΠΗΤ.';

        if (actual) {
            if (actual < due) {
                if (actual < plannedStart) {
                    start = actual;
                    preFrom = actual;
                    preTo = addDays(actual, -1);
                }
                const usedPre = Math.max(0, diffDays(preFrom, actual));
                const remainingPre = Math.max(0, PRE - usedPre);
                postDays = POST + remainingPre;
                note = `Πρόωρος τοκετός: ${remainingPre} ημέρες από το προγεννητικό τμήμα μεταφέρονται μετά τον τοκετό.`;
            } else if (actual > due) {
                note = 'Ο τοκετός έγινε μετά την ΠΗΤ: η λοχεία μετρά από την πραγματική ημερομηνία και η συνολική περίοδος παρατείνεται.';
            } else {
                note = 'Η πραγματική ημερομηνία τοκετού είναι ίδια με την ΠΗΤ.';
            }
        }

        const postTo = addDays(postFrom, postDays - 1);
        const end = postTo;

        return {
            start,
            end,
            birth,
            note,
            preFrom,
            preTo,
            postFrom,
            postTo,
            preDays: diffDaysInclusive(preFrom, preTo),
            postDays: diffDaysInclusive(postFrom, postTo),
            totalDays: diffDaysInclusive(start, end)
        };
    }

    function pushRow(rows, phase, from, to, duration, note) {
        rows.push({
            phase,
            from,
            to,
            duration,
            note
        });
    }

    function rowHtml(row) {
        return `
      <tr>
        <td><b>${row.phase}</b>${row.note ? `<span class="phase-note">${row.note}</span>` : ''}</td>
        <td>${fmt(row.from)}</td>
        <td>${fmt(row.to)}</td>
        <td>${row.duration}</td>
      </tr>`;
    }

    function render() {
        const due = parseDate($('pmDue').value);
        const actual = $('pmUseActual').checked ? parseDate($('pmActual').value) : null;
        const box = $('pmMotherhoodResults');

        $('pmActualWrap').style.display = $('pmUseActual').checked ? 'block' : 'none';

        if (!due) {
            box.innerHTML = '<em class="muted">Συμπλήρωσε την ΠΗΤ για να εμφανιστεί το πλήρες ημερολόγιο.</em>';
            return;
        }

        const opts = getOptions();
        const mat = maternityCalculation(due, actual);
        const rows = [];

        if (mat.preDays > 0) {
            pushRow(rows, 'Άδεια κυοφορίας · πριν τον τοκετό', mat.preFrom, mat.preTo, `${mat.preDays} ημερολογιακές ημέρες`, 'Προγεννητικό τμήμα άδειας μητρότητας.');
        } else {
            pushRow(rows, 'Άδεια κυοφορίας · πριν τον τοκετό', mat.birth, addDays(mat.birth, -1), '0 ημέρες', 'Ο τοκετός έγινε πριν ξεκινήσει πρακτικά το προγεννητικό τμήμα.');
        }

        pushRow(rows, 'Ημερομηνία τοκετού', mat.birth, mat.birth, '1 ημέρα', actual ? 'Πραγματική ημερομηνία τοκετού.' : 'Χρησιμοποιείται η ΠΗΤ ως ημερομηνία τοκετού για τον υπολογισμό.');
        pushRow(rows, 'Άδεια λοχείας · μετά τον τοκετό', mat.postFrom, mat.postTo, `${mat.postDays} ημερολογιακές ημέρες`, 'Μεταγεννητικό τμήμα άδειας μητρότητας.');

        let current = addDays(mat.end, 1);
        let lastLeaveEnd = mat.end;
        let dypaRow = null;
        let childcareResult = null;
        let parentalRows = [];

        const annualDays = Math.max(0, Math.round(numberValue('pmAnnualDays', 0)));
        if (annualDays > 0) {
            const annualEnd = addWorkingDaysInclusive(current, annualDays, opts);
            pushRow(rows, 'Ετήσια κανονική άδεια', current, annualEnd, `${annualDays} εργάσιμες ημέρες`, 'Προαιρετική τοποθέτηση πριν από την επόμενη άδεια/παροχή.');
            current = addDays(annualEnd, 1);
            lastLeaveEnd = annualEnd;
        }

        const childcareUse = $('pmChildcareUse').value;
        const includeDypa = $('pmIncludeDypa').checked;
        const parentalMode = $('pmParentalMode').value;
        const parentalMonths = Math.min(4, Math.max(0, numberValue('pmParentalMonths', 4)));

        if (childcareUse === 'eq-before-dypa') {
            childcareResult = equivalentLeave(current, opts);
            pushRow(rows, childcareResult.phase, childcareResult.from, childcareResult.to, childcareResult.duration, childcareResult.note);
            current = addDays(childcareResult.end, 1);
            lastLeaveEnd = childcareResult.end;
        }

        if (includeDypa) {
            const dypaStart = current;
            const dypaEnd = inclusiveEndByMonths(dypaStart, DYPAMONTHS);
            dypaRow = {
                from: dypaStart,
                to: dypaEnd
            };
            pushRow(rows, 'Ειδική παροχή προστασίας μητρότητας ΔΥΠΑ', dypaStart, dypaEnd, '9 μήνες', 'Η γνωστή ειδική άδεια/παροχή μητρότητας της ΔΥΠΑ.');
            current = addDays(dypaEnd, 1);
            lastLeaveEnd = dypaEnd;
        }

        if (parentalMode === 'after-dypa-before-childcare' && parentalMonths > 0) {
            const pStart = current;
            const pEnd = inclusiveEndByMonths(pStart, parentalMonths);
            const paidMonths = Math.min(2, parentalMonths);
            pushRow(rows, 'Γονική άδεια ανατροφής', pStart, pEnd, `${parentalMonths} μήνες`, `Προαιρετική ένταξη στο ημερολόγιο. Οι πρώτοι ${paidMonths} μήνες μπορούν να επιδοτηθούν από ΔΥΠΑ, εφόσον πληρούνται οι προϋποθέσεις.`);
            parentalRows.push({
                from: pStart,
                to: pEnd
            });
            current = addDays(pEnd, 1);
            lastLeaveEnd = pEnd;
        }

        if (childcareUse === 'eq-after-dypa') {
            childcareResult = equivalentLeave(current, opts);
            pushRow(rows, childcareResult.phase, childcareResult.from, childcareResult.to, childcareResult.duration, childcareResult.note);
            current = addDays(childcareResult.end, 1);
            lastLeaveEnd = childcareResult.end;
        }

        if (childcareUse === 'hours-after') {
            const reduced = childcareSegments(current, opts);
            reduced.rows.forEach(r => pushRow(rows, r.phase, r.from, r.to, r.duration, r.note));
            childcareResult = {
                from: current,
                to: reduced.end,
                totalHours: reduced.totalHours,
                exactDays: reduced.totalHours / opts.dailyHours,
                isReducedHours: true
            };
            current = addDays(reduced.end, 1);
        }

        if (parentalMode === 'after-childcare' && parentalMonths > 0) {
            const pStart = current;
            const pEnd = inclusiveEndByMonths(pStart, parentalMonths);
            const paidMonths = Math.min(2, parentalMonths);
            pushRow(rows, 'Γονική άδεια ανατροφής', pStart, pEnd, `${parentalMonths} μήνες`, `Προαιρετική ένταξη στο ημερολόγιο. Οι πρώτοι ${paidMonths} μήνες μπορούν να επιδοτηθούν από ΔΥΠΑ, εφόσον πληρούνται οι προϋποθέσεις.`);
            parentalRows.push({
                from: pStart,
                to: pEnd
            });
            current = addDays(pEnd, 1);
            lastLeaveEnd = pEnd;
        }

        const finalDate = addDays(current, -1);
        const returnDate = current;
        const totalAbsenceDays = diffDaysInclusive(mat.start, lastLeaveEnd);
        const dypaText = dypaRow ? `${fmt(dypaRow.from)} → ${fmt(dypaRow.to)}` : 'Δεν έχει επιλεγεί';
        const childcareText = childcareResult ? (childcareResult.isReducedHours ? `${fmt(childcareResult.from)} → ${fmt(childcareResult.to)}` : `${childcareResult.totalHours.toFixed(2).replace('.00', '')} ώρες`) : 'Δεν έχει επιλεγεί';
        const parentalText = parentalRows.length ? `${fmt(parentalRows[0].from)} → ${fmt(parentalRows[0].to)}` : 'Δεν έχει επιλεγεί';

        box.innerHTML = `
      <div class="result-top">
        <div class="hero-box">
          <div class="eyebrow-result">Συνολική εικόνα</div>
          <div class="amount">${fmt(mat.start)} → ${fmt(finalDate)}</div>
          <div class="sub">${mat.note}<br>Ενδεικτική επόμενη πλήρης ημέρα εργασίας/επιστροφής: <b>${fmt(returnDate)}</b></div>
        </div>

        <div class="stat-grid">
          <div class="stat">
            <div class="label">Μητρότητα</div>
            <div class="value">${mat.totalDays} ημέρες</div>
          </div>
          <div class="stat">
            <div class="label">9μηνο ΔΥΠΑ</div>
            <div class="value">${dypaText}</div>
          </div>
          <div class="stat">
            <div class="label">Μειωμένο / Ισόχρονη</div>
            <div class="value">${childcareText}</div>
          </div>
          <div class="stat">
            <div class="label">Γονική άδεια</div>
            <div class="value">${parentalText}</div>
          </div>
        </div>
      </div>

      <div class="card-title" style="margin-top:0;">Αναλυτικό ημερολόγιο</div>
      <table>
        <tr>
          <th style="width:34%">Περίοδος</th>
          <th>Από</th>
          <th>Έως</th>
          <th>Διάρκεια</th>
        </tr>
        ${rows.map(rowHtml).join('')}
      </table>

      <div class="notice">
        <p>
          <strong>Γρήγορος έλεγχος:</strong> Η άδεια μητρότητας εμφανίζεται σε ημερολογιακές ημέρες. Η κανονική άδεια και η ισόχρονη εμφανίζονται σε εργάσιμες ημέρες με βάση ${opts.workweek}ήμερο και ${opts.dailyHours} ώρες/ημέρα.
          ${opts.excludeFixedHolidays ? 'Αφαιρούνται οι βασικές σταθερές αργίες όταν πέφτουν σε εργάσιμη ημέρα.' : 'Δεν γίνεται αυτόματη αφαίρεση σταθερών αργιών.'}
        </p>
      </div>
    `;
    }

    const inputs = ['pmDue', 'pmUseActual', 'pmActual', 'pmAnnualDays', 'pmIncludeDypa', 'pmChildcareUse', 'pmChildcarePattern', 'pmParentalMode', 'pmParentalMonths', 'pmWorkweek', 'pmDailyHours', 'pmExtraNonWorking', 'pmExcludeFixedHolidays'];

    inputs.forEach(id => {
        const el = $(id);
        if (!el)
            return;
        el.addEventListener('input', render);
        el.addEventListener('change', render);
    }
    );

    window.renderPaymasterMaternity = render;

    const dueInput = $('pmDue');
    if (dueInput && !dueInput.value) {
        const lmp = new Date('2026-01-12T00:00:00');
        dueInput.value = addDays(lmp, 280).toISOString().slice(0, 10);
    }

    render();
}
)();
