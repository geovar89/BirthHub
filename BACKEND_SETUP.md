# BirthHub Backend Setup

## 1. Αντικατάσταση Google Apps Script

Στο υπάρχον Apps Script project, αντικατέστησε όλο τον κώδικα με το περιεχόμενο του:

`birthhub-appsscript-backend.js`

## 2. Script Properties

Στο Apps Script:
Project Settings → Script Properties

Πρόσθεσε:

- `OPENAI_API_KEY` = το OpenAI API key σου
- προαιρετικά `OPENAI_MODEL` = `gpt-5.5`
- προαιρετικά `SPREADSHEET_ID` = `1JAYPYsxKZsPfM3i8nbw-DVleQMWRsil8st7-nAcb6dw`

## 3. Deploy

Deploy → Manage deployments → Edit → New version → Deploy

Κράτα το Web app URL:
https://script.google.com/macros/s/AKfycbxwT3q6lRpsO5EFg3RVNPp2ujIasaT_P9jVRczPldXYU_hj5JTd1hUH-Oql72vwKkys/exec

Το frontend είναι ήδη ρυθμισμένο να χρησιμοποιεί αυτό το URL για `MAMA_CHAT_API_URL`.

## 4. Tabs στο Google Sheet

Το backend υποστηρίζει:
- Exams
- Weight
- Shopping
- Appointments
- MaternityLeave
- Journal
- Nutrition
- Videos
- Settings
