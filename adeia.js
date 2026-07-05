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

    render();
}
)();