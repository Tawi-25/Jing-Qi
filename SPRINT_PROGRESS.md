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
