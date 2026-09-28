# JING: Qi Guardian — Sprint Progress Log

## Session 1 (7/26/2026)

### Sprint 1 — Core PWA Shell & Dashboard
- [x] Single-file HTML PWA (`index.html`) — all HTML, CSS, JS inline
- [x] PWA manifest (data URI) + inline service worker (Blob URL registration)
- [x] Offline-capable via service worker cache
- [x] Mobile-first, touch-friendly, dark theme (`#0f0e13` bg, `#d4a373` accent, `#e4e0e8` text)
- [x] Glass-morphism cards (`rgba(30,27,45,0.75)` with backdrop blur)
- [x] Header: JING logo + full 12-meridian TCM clock (updates every 30s)
- [x] Weekly Essence load meter (localStorage, 20pt cap, auto-rotating weekly keys)
- [x] Morning Soreness slider (1–10) with dynamic status pill (Green/Yellow/Red)
- [x] Action card with routine recommendations per status
- [x] Load system: Qi=1pt, Blood=2pts, Jing=3pts
- [x] Start routine button blocked at 20+ pts with depletion message
- [x] Routine overlay (full-screen modal) with exercise name, timer, next/finish, close
- [x] 60s exercise timer + 60s rest timer with breath prompt
- [x] 528Hz beep (Web Audio API) + vibration (navigator.vibrate) on timer end
- [x] Resume support: close saves step index to localStorage
- [x] Routine completion awards load points and shows recovery message
- [x] Bottom navigation: Today, Library, Acupressure, History (Today functional)

### Sprint 2 — Animations, Breathing, Library, History
- [x] GIF animations from ExerciseDB open dataset (`static.exercisedb.dev/media/`)
- [x] Cache-first service worker for GIFs (`jing-gifs-v1` cache)
- [x] Accessibility fallback: text description if GIF unavailable
- [x] Breath prompts during rest: Box Breathing (4-4-4-4) & 4-7-8 Calm
- [x] Animated breath circle (scales up/down with inhale/exhale cues)
- [x] Movement Library tab: searchable, filterable by category
- [x] Exercise metadata: target area, equipment, difficulty, routine label
- [x] History tab: completed routines with timestamp, routine name, load points
- [x] Clear history button with confirmation
- [x] Library attribution: "Exercises powered by ExerciseDB / AscendAPI"

### Sprint 2.5 — Restructured Routines & Acupressure
- [x] **Green (1-3) → Sciatica Flow (Midday)** — 7 exercises, 3 pts
- [x] **Yellow (4-6) → The 5-Floor Ascent (Morning)** — 2 exercises, 1 pt
- [x] **Red (7-10) → The Fascial Unwind (Evening)** — 4 exercises, 0 pts → Acupressure
- [x] Clear load logic: button routes Evening directly to Acupressure, 0 pts
- [x] Restorative note displayed for Evening routine explaining no load points
- [x] Inline SVG body diagrams with highlighted target area for exercises without GIFs
- [x] Step-by-step instructions in routine overlay for all exercises
- [x] Acupressure First-Aid Library: 6 points with location, description, technique
- [x] Acupressure medical disclaimer included
- [x] ExerciseDB integration changed to `static.exercisedb.dev/media/` for verified GIFs

## Session 2 (7/28/2026)

### Sprint 3.5/4 — Recovery Intelligence & UX Polish

#### 1. Recover Tab (Replaces Acupressure)
- [x] **Breath Pacer** — full-screen overlay with selectable patterns (Box Breathing, 4-7-8, 4-2-6), animated circle, 5-min session timer
- [x] **Flare-Up Mode** — black-screen emergency overlay with 4 auto-advancing phases (Calm Breathing → Comfortable Positions → Nerve Glides → Acupressure), SVG diagrams per phase, timer, disclaimer
- [x] **Acupressure Library** (reused) — 6 points with location, technique, disclaimer
- [x] **Relaxation Flow** — 3-minute guided practice (Fascia Release → Spinal Mobility → Breath Sync) with timer and phase text cues
- [x] "I'm Having a Flare-Up" button always visible in Recover tab
- [x] Flare-up count tracked in localStorage (monthly counter)

#### 2. Check-In Enhancements
- [x] **10 tappable soreness circles** (replaced range slider) with visual selection + localStorage persistence
- [x] **Sleep Quality** — 5 tappable stars (☆→★), saved to localStorage per day
- [x] **Energy Level** — 5 tappable lightning bolt icons, saved to localStorage per day
- [x] All check-ins stored with weekly rotation key

#### 3. Dynamic Load Scoring
- [x] Base load increases by +1 when soreness ≥ 7 (e.g. Green 3pts → 4pts)
- [x] Amber tooltip shown: "Load adjusted for soreness — recovery prioritized."
- [x] Yellow/Green routines unaffected below threshold
- [x] 0-pt routines (Evening) unaffected

#### 4. Sitting Reminders
- [x] Background 90-minute timer tracking inactivity
- [x] Gentle vibration + notification banner: "Movement reset may help"
- [x] **Move** button → opens quick routine (Bird Dog, Dead Bug, Glute Bridge)
- [x] **Later** button → dismisses until next 90-min mark
- [x] Timer resets on any touch/click interaction

#### 5. Insights Tab (Replaces History)
- [x] Top card: Monthly Avg Recovery %
- [x] Three mini-cards: Avg Session Load, Current Week Load, Flare-Ups This Month
- [x] **Weekly bar chart** — inline SVG with 7-day load bars, day labels
- [x] **Trend insight** — rule-based text: "You recover best with consistent evening routines" / "Consider prioritizing rest"
- [x] Recent session list (last 5) with clear history button
- [x] Empty state message when no sessions recorded

#### 6. Navigation Update
- [x] Bottom nav changed to: **Today** | **Library** | **Recover** | **Insights**
- [x] Service worker bumped to v3 (`jing-v3`)

### Sprint 5 — Routine Player Polish & Acupressure Visualization

#### 1. Routine Player Enhancements
- [x] **Pause/Resume Button** — ⏸/▶ button in routine overlay row
- [x] **Pause** — freezes timer and breath interval, shows "Paused" state
- [x] **Resume** — continues timer from saved `timeRemaining`, restores breath or exercise UI
- [x] **3-2-1 Countdown** — displayed before each exercise starts with large numbers + breathing cue
- [x] **Audio feedback** — 528Hz beep on "1", vibration on "Go"

#### 2. Acupressure Library Expansion
- [x] **Standalone SVG body diagrams** for each of the 6 acupressure points
- [x] Each point card shows: SVG body silhouette with highlighted dot at point location, point name, location, description, step-by-step technique, benefits summary
- [x] Medical disclaimer preserved: "These points are for comfort and relaxation, not medical treatment."
- [x] Accessible from both Recover tab and Library tab

#### 3. UX Polish
- [x] **Insights SVG chart fixed** — removed stray `+` character in bar `x` coordinate that prevented bars from rendering
- [x] Consistent SVG styling across exercise body diagrams and acupressure diagrams (same stroke widths, color palette, body shape)
- [x] Acupressure data enriched with `benefits` field and `dotX`/`dotY` coordinates for point positioning on diagrams

## Session 2 Summary
**File:** `index.html` (single-file PWA)
**Size:** ~77KB
**Status:** All Sprints 1–5 features implemented — all spec gaps closed

### All Original Spec Gaps — Resolved
- [x] 10-circle soreness selector
- [x] Sleep & Energy inputs
- [x] Recover tab (Breath Pacer, Flare-Up, Acupressure, Relaxation)
- [x] Flare-Up Mode
- [x] Sitting reminders
- [x] Breath Pacer (standalone)
- [x] **Pause button** in routine overlay
- [x] Insights tab with weekly chart
- [x] **Between-exercise 3-2-1 countdown**
- [x] Soreness-adjusted dynamic load scoring
- [x] **Standalone Acupressure visual guides** (SVG diagrams per point)

### What's planned for future Sprints
- [ ] Acupressure visual guides — deeper (standalone dedicated cards with more detailed diagrams)
- [ ] Weekly trend visualization — stacked bar/line chart enhancements
- [ ] Routine personalization via soreness → body area mapping
- [ ] JSON export
- [ ] Encrypted cloud backup (future)

## Session 3 (9/28/2026)

### Sprint 6 — JQ-001: Phase -1 Clinical Tracker
- [x] Phase -1 card added to Today view (sleep hours stepper, phase completion dot, Sunday-only ankle re-test)
- [x] #phase-minus1-overlay with 6-exercise guided flow reusing the routine player
- [x] 6 new CONFIG.exercises records (adductor + ankle protocol)
- [x] CONFIG.routines['phase-minus1'] (loadPts: 0)
- [x] New localStorage keys: jing_sleep_hours_<date>, jing_phase_minus1_<date>, jing_ankle_<date>
- [x] Insights tab extended with Phase -1 streak + Sleep avg cards
- [x] Baseline hash before/after in commit body
- [x] Manual matrix results (table)
- Next: JQ-002 — assess whether to fold rescue.html into index.html under Vite, or continue with Live Server + separate Vite demo

#### JQ-001 implementation notes
- Additive only. `git diff --stat` vs baseline `3948e2d` = **297 insertions, 0 deletions**. No existing view, overlay, storage key, timer or CSS rule was renamed, restructured or removed.
- The existing routine player is **not** fully generic: `openRoutine` / `showExercise` / `startTimer` / `closeRoutine` are hard-bound to the `#routine-overlay` module-level DOM refs plus `routineState` / `pauseState` / `CONFIG._adjustedLoad`. Per the JQ-001 constraint the new routine therefore uses a **parallel minimal player** for `#phase-minus1-overlay`, with its own state (`phasePlayer`) and its own DOM refs (`phase1-*`). It never reads or writes `routineState`, `pauseState`, `CONFIG._adjustedLoad` or `jing_routine_step` (verified by snapshot comparison).
- Phase -1 flow: 3-2-1 countdown, then `CONFIG.exerciseDuration` (60s) per exercise, pause/resume, next/skip, auto-advance, completion screen. No rest/breath phase and no mid-flow resume — the phase record is written only on completion.
- Phase -1 completion writes only the three new keys and deliberately does **not** append to `jing_history`, so the existing Insights chart, session list and monthly load stats remain equivalent.
- New CSS is limited to `.phase-card`, `.phase-row`, `.phase-num`, `.phase-dot`; every other element reuses existing classes (`.card`, `.subtitle`, `.checkin-label`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-sm`, `.overlay`, `.timer`, `.instructions`, `.step-indicator`, `.insight-row`, `.insight-card`, `.ic-value`, `.ic-label`).
- Side effect of D4: the 6 new records also appear in the Library "All" list (Library renders every `CONFIG.exercises` entry) — additive content, no existing entry changed.

### Sprint 6a — JQ-001a: Phase -1 durations + switch alert
- [x] Added `duration` and `switchAt` fields to Phase -1 records
- [x] Parallel player reads `record.duration`, falls back to `CONFIG.exerciseDuration`
- [x] Mid-point switch alert (distinct beep + vibrate + visual cue) fires exactly once per applicable exercise
- [x] Screen wake lock during Phase -1 overlay
- [x] Main routine player untouched
- [x] Manual matrix results (table)
- [x] Baseline hash before/after in commit body

#### JQ-001a implementation notes
- Clinical durations (D1): `adductor-strap` 90 (switchAt 45), `butterfly` 60 (no switch), `adductor-massage` 120 (60), `knee-to-wall` 60 (30), `calf-straight` 90 (45), `calf-bent` 90 (45). Only these 6 records changed; `CONFIG.exerciseDuration` stays 60 (D6).
- Timer init now uses `phaseExerciseDuration(ex)` → `record.duration` when a positive number, else `CONFIG.exerciseDuration` (D2).
- Switch alert (D3) when `phasePlayer.timeRemaining === phasePlayer.switchAt`, guarded by `phasePlayer.switchFired` so it fires **exactly once per exercise** (reset in `phaseShowExercise`, cleared in `phaseClose`): new `playSwitchBeep()` at **660 Hz** (existing end beep is 528 Hz), `navigator.vibrate([80,60,80])` (existing end vibration is 200 ms), and the text "Switch sides" written into the **existing** `#phase1-name` element for 4 s before the exercise name is restored — no new DOM element.
- Wake lock (D7): `navigator.wakeLock.request('screen')` on overlay open and released in `phaseClose()`, both wrapped in `try/catch` and feature-detected, so unsupported browsers no-op silently.
- Main player untouched (D5): `showExercise`/`startTimer` still call `startTimer(CONFIG.exerciseDuration,'exercise')`; the morning/evening/midday routine id lists contain none of the Phase -1 ids, so the new fields are unreachable from the main player. `routineState`, `pauseState`, `CONFIG._adjustedLoad`, `jing_routine_step` and every storage key are unchanged.

#### JQ-001a manual matrix (http://127.0.0.1:5500/rescue.html, no query string)
| Check | Expected | Result |
|-------|----------|--------|
| Exercise 1 (adductor-strap) starts | 01:30 | PASS — timer 01:30, switchAt 45 |
| At timeRemaining=45 | switch alert fires once (beep + vibrate + text) | PASS — 1 fire, 660 Hz, [80,60,80], "Switch sides", name restored after 4 s |
| Exercise 2 (butterfly) | 01:00, no switch alert | PASS — 0 fires |
| Exercise 3 (adductor-massage) | 02:00, alert at 01:00 remaining | PASS — 1 fire at 60 |
| Exercise 4 (knee-to-wall) | 01:00, alert at 00:30 remaining | PASS — 1 fire at 30 |
| Exercise 5 (calf-straight) | 01:30, alert at 00:45 remaining | PASS — 1 fire at 45 |
| Exercise 6 (calf-bent) | 01:30, alert at 00:45 remaining | PASS — 1 fire at 45 |
| Pause before switch, resume past it | alert fires once, not twice | PASS — 1 fire across two pause/resume cycles |
| Close overlay before switch | no alert, no console error | PASS — 0 fires, wake lock released, zero console errors |
| Sciatica Flow / morning / evening | unchanged, 01:00 each | PASS — 01:00 and 528 Hz beep for all three |

#### JQ-001a falsifiability (sequential breaks, fresh page load per break)
| Break | Observable state | Verdict |
|-------|------------------|---------|
| B1 remove `duration:90` from adductor-strap | `record.duration` ABSENT → timer shows 01:00, not 01:30 (fallback) | GREEN |
| B2 remove `switchAt:45` from adductor-strap | `phasePlayer.switchAt` null → 0 alerts when crossing 45, duration 01:30 intact | GREEN |
| B3 switch beep 660 Hz → 528 Hz (and matching envelope) | switch beep measured [528 Hz]/[0.15] identical to end beep [528 Hz]/[0.15] → indistinguishable by ear | GREEN (measured) |
| B4 restore | hash `976aad78971f007fcc77304496e6a861debbb029` == pre-break hash (byte-identical) | GREEN |

### Sprint 7 — JQ-002: routine sync to designed protocol
- [x] 13 new exercise records (morning mobility + evening restorative + breathing)
- [x] Morning routine: 9 items (was 2)
- [x] Evening routine: 7 items (was 4)
- [x] New 'breathing' routine + Guided Breathing card on Recover tab
- [x] Main player now reads per-exercise `duration`, falls back to `CONFIG.exerciseDuration`
- [x] Phase -1 unchanged
- [x] Midday routine unchanged
- [x] Manual matrix results (table)
- [x] Baseline hash before/after in commit body

#### JQ-002 implementation notes
- Content-additive + one generic player line: `git diff --stat` vs baseline `976aad7` = **27 insertions, 3 deletions** (the 3 deletions are exactly the replaced morning `exercises` line, the replaced evening `exercises` line, and the replaced `startTimer` line in `showExercise`). No other line in the file was touched.
- 13 records appended to the **end** of `CONFIG.exercises`, same shape as existing records plus the new numeric `duration` (seconds): knees-to-chest-single 30, knees-to-chest-double 30, thoracic-rotation 60, quad-set 60, terminal-knee-extension 60, straight-leg-raise 60, ankle-pumps 45, constructive-rest 180, legs-up-wall 180, side-lying-rest 120, four-eight-breath 120, vagal-humming 180, body-scan 300.
- D3: new routine key `breathing` (label "Guided Breathing", loadPts 0) + one new Recover-tab card in a new `Guided Breathing` section placed **above** Flare-Up, reusing the existing `.recover-section` / `.recover-card` / `.rc-icon` / `.rc-title` / `.rc-desc` classes — **no new CSS**. Handler mirrors the existing pattern: `document.getElementById('open-guided-breathing').addEventListener('click',function(){openRoutine('breathing')});`
- D4 / constraint 6 — the only main-player change, one line in `showExercise`:
  - before: `showCountdown(function(){startTimer(CONFIG.exerciseDuration,'exercise');});`
  - after:  `showCountdown(function(){const d=ex&&typeof ex.duration==='number'?ex.duration:0;startTimer(d>0?d:CONFIG.exerciseDuration,'exercise');});`
  Legacy records without `duration` (cat-cow, piriformis, oblique-release, supine-twist and all midday records) keep 01:00 via the fallback; Phase -1's parallel player is untouched.
- D1/D6: Phase -1 keeps its own card, overlay and parallel player; its 6 records and their `duration`/`switchAt` values are unchanged (90/45, 60, 120/60, 60/30, 90/45, 90/45).
- D2: routine keys unchanged (morning/midday/evening) and the status-pill mapping is unchanged (Green→midday, Yellow→morning, Red→evening). Only the Yellow/Red card **copy** now reflects the new routine labels/times.
- D7: every storage key (`jing_history`, `jing_weekly_load_*`, `jing_routine_step`, `jing_checkins_*`, `jing_flares_*`, `jing_sleep_hours_*`, `jing_phase_minus1_*`, `jing_ankle_*`), every timer, CSS rule and function name is unchanged — verified by re-seeding all 8 legacy keys, reloading, and confirming each is re-read with no console output.
- Known consequence (pre-existing mechanism, **not** changed — constraint 6): `openRoutine` sets `routineState.routineLoadPts=CONFIG._adjustedLoad||routine.loadPts`. With a Green recommendation the label is +3 pts, so completing the loadPts:0 Guided Breathing routine credits **+3** pts and logs a `jing_history` row "Guided Breathing / 3". Before JQ-002 no loadPts:0 routine was reachable through the main player, so this is newly visible; flagged as a follow-up candidate (JQ-003), deliberately not fixed here.
- Boot-time `jing_routine_step` resume is unchanged: a partially-completed routine resumes at the saved index, so the "Exercise 1 of N" counts below were measured with that key cleared.

#### JQ-002 manual matrix (http://localhost:5500/rescue.html, no query string; automated Chromium session against the exact file, plus developer phone walk)
| Check | Expected | Result |
|-------|----------|--------|
| Morning routine (Yellow pill) | 9 exercises, "Exercise 1 of 9" | PASS — soreness 5 → Yellow → "The 5-Floor Ascent", "Exercise 1 of 9" |
| Exercise 1 knees-to-chest-single | Timer 00:30 | PASS — 00:30 |
| Exercise 4 cat-cow | Timer 01:00 | PASS — 01:00 (legacy record, fallback) |
| Exercise 9 ankle-pumps | Timer 00:45 | PASS — 00:45 |
| Evening routine (Red pill) | 7 exercises | PASS — soreness 9 → Red → "The Fascial Unwind", "Exercise 1 of 7", Exercise 7 body-scan 05:00 |
| Exercise 1 constructive-rest | Timer 03:00 | PASS — 03:00 |
| Breathing card on Recover tab | Present, opens overlay | PASS — rendered above Flare-Up (section order: Breathing > Guided Breathing > Flare-Up > …), opens the overlay |
| Breathing routine | 3 exercises, timers 02:00 / 03:00 / 05:00 | PASS — "Guided Breathing", 1 of 3 / 2 of 3 / 3 of 3, 02:00 / 03:00 / 05:00 |
| Midday routine (Green pill) | Still 7 exercises, 01:00 each | PASS — soreness 1 → Green → "Sciatica Flow", 1 of 7, 01:00 |
| Phase -1 card on Today | Unchanged, still works | PASS — card + green dot "Phase -1 done today — 1/6 items", overlay "Supine Adductor Stretch" 01:30, 6 records unchanged |
| Library "All" | 6 Phase -1 + 13 new + 13 pre-existing | PASS — 32 cards |
| Existing storage | No errors in console, prior keys intact | PASS — 8 seeded legacy keys all re-read, init re-run clean, 0 errors / 0 console warnings |

#### JQ-002 falsifiability (sequential breaks, one break live at a time, fresh page load per break)
| Break | Observable state | Verdict |
|-------|------------------|---------|
| B1 remove `duration:30` from knees-to-chest-single | `hasOwnProperty('duration')` false → Exercise 1 shows 01:00 (fallback), not 00:30; control Exercise 9 still 00:45 | GREEN |
| B2 remove 'ankle-pumps' from morning.exercises | morning list length 8 → "Exercise 1 of 8" | GREEN |
| B3 remove the `breathing` key from CONFIG.routines | card click is a dead no-op (`openRoutine` returns at `if(!routine)return;`), overlay never activates, no throw | GREEN |
| B4 restore | hash `93821d2ad81f4f188155a9579ffe9a60d77d3bf5` == pre-break hash (byte-identical, 104,961 bytes) | GREEN |

