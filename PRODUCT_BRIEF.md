# JING: The Personal Recovery Guardian — Product Brief

**Version 2.0**

---

## Platform & Audience

| Aspect | Detail |
|--------|--------|
| Platform | Progressive Web App (PWA) |
| Primary Devices | Android, Desktop |
| Audience | Individuals with chronic musculoskeletal pain, sedentary professionals, anyone seeking sustainable mobility |

---

## 1. Vision

Modern fitness apps reward intensity. **JING rewards longevity.**

Rather than encouraging users to exercise harder or more frequently, JING acts as a personal recovery guardian, helping users move enough to improve mobility while protecting them from overexertion.

**The philosophy:**
- The healthiest body isn't the one that works the hardest. It's the one that recovers the best.
- Movement is treated as medicine.
- Rest is treated as productive.
- Recovery is treated as measurable.

---

## 2. Mission

Help people maintain healthy joints, fascia, nerves, and mobility for decades by delivering intelligent daily movement recommendations that adapt to their body's current condition.

Instead of asking "How much can you do today?" → JING asks **"What does your body need today?"**

---

## 3. Design Philosophy

JING combines principles from modern movement science with insights from Traditional Chinese Medicine (TCM). TCM is presented as a framework for mindful movement, not as medical fact.

### Three Guiding Principles

| Principle | Description |
|-----------|-------------|
| **Preserve Recovery Capacity** | Recovery is a limited resource. Stay within sustainable capacity rather than chasing improvement. |
| **Restore Movement** | Interrupt the pain→stiffness→pain cycle through small, consistent movement sessions. |
| **Build Awareness** | Help users recognize patterns (sleep, stress, sitting, soreness) so they develop confidence in listening to their body. |

---

## 4. The Problem

### Physical Reality (Version 1 Design Constraints)
- Chronic bilateral sciatica
- Right-side dominant nerve pain
- Historical left hip tendon injury
- Right knee meniscus surgery
- Long hours sitting (software development)
- High stress
- Fascial tightness
- Fear of long-term joint degeneration

### Behavioral Reality — The Cycle
```
Pain improves → Exercise aggressively → Body irritated → Pain returns → Complete inactivity → Repeat
```

JING exists to break this cycle.

---

## 5. Product Principles

- Protect before progressing
- Recovery is productive
- Small movements beat heroic workouts
- Consistency beats intensity
- Breath guides movement
- Simplicity reduces resistance
- Never encourage users to push through pain

If a feature violates these principles, it doesn't belong in JING.

---

## 6. The Recovery Engine

The heart of JING. Continuously estimates available recovery capacity.

### Inputs
- Morning soreness (✅ Sprint 1)
- Previous day's activity
- Weekly movement load (✅ Sprint 1)
- Time spent sitting (future)
- Sleep quality (future)
- Energy level (future)
- Stress level (future)

### Today's Recommendation

| Day | Status | Recommended | Avoid |
|-----|--------|-------------|-------|
| **Green** | Well recovered | Full mobility, strength, walking, breathwork | — |
| **Yellow** | Accumulated fatigue | Gentle mobility, nerve glides, walking, breathwork | Heavy loading, long routines |
| **Red** | Prioritize recovery | Guided breathing, acupressure, gentle positional relief, short walks | Stretching into pain, intense exercise, extended routines |

---

## 7. The Recovery Capacity System

Tracks recovery demand instead of awarding points for doing more.

### Example Load Values

| Activity | Load |
|----------|------|
| Breathing | 0 |
| Gentle mobility | 1 |
| Walking | 1 |
| Stability exercises | 2 |
| Longer strengthening routine | 3 |

Load adjusts dynamically based on soreness (e.g. a 2-point routine may count as 4 points on a high-soreness day).

---

## 8. Daily Experience

| Time | Session | Focus |
|------|---------|-------|
| **Morning** | Recovery Check-In (30s) | Soreness, discomfort location, sleep, energy → Engine generates today's plan |
| **Midday** | Movement Reset | Bird Dogs, Dead Bugs, Glute Bridges, Clamshells — interrupt prolonged sitting |
| **Evening** | Recovery Session | Fascia, hip mobility, nerve glides, gentle spinal movement, relaxation breathing |

---

## 9. Recovery Tools

### Breath Pacer
Guided breathing available throughout the app. Patterns:
- 4-7-8
- 4-2-6
- Box Breathing

Breathing begins every movement session.

### Acupressure Library
Visual guides for TCM points (GB30, BL40, Kidney 3, etc.). Presented as optional complementary practices, not medical treatments.

### Flare-Up Mode
For moments when pain is severe. Tap "I'm Having a Flare-Up" → immediate recovery mode:
1. Calm breathing
2. Comfortable positions
3. Gentle nerve glides
4. Acupressure guidance
5. Walking recommendation if appropriate

No decision-making required.

---

## 10. User Interface Principles

- Deep indigo backgrounds
- Warm amber highlights
- Large typography
- Minimal text
- Large touch targets
- Offline-first
- Dark mode by default

**Design personality:** A thoughtfully organized workshop. Not a luxury spa.

---

## 11. Technical Requirements

| Requirement | Status |
|-------------|--------|
| Progressive Web App | ✅ |
| Offline-first | ✅ |
| Installable | ✅ |
| Local storage for Version 1 | ✅ |
| No user accounts | ✅ |
| No cloud dependency | ✅ |
| Resume routines after interruption | ✅ |
| Audio and vibration timers | ✅ |
| JSON export | ⬜ Future |

---

## 12. Language Guidelines

### Avoid
- Push harder
- One more rep
- No excuses
- Keep grinding

### Prefer
- Your body may benefit from recovery today.
- Rest supports progress.
- Gentle movement is enough.
- Listen before you load.

The app should feel like an experienced physiotherapist who understands recovery, not a fitness coach chasing personal bests.

---

## 13. Measuring Success

The app succeeds when users experience **fewer setbacks**, not more completed workouts.

### Indicators
- Reduced flare-ups
- Improved consistency
- Increased daily mobility
- Less stiffness after sitting
- Better awareness of recovery patterns
- Greater confidence managing chronic pain

**Ultimate measure:** The user can live, work, and move with less pain and greater confidence.

---

## 14. Development Roadmap

| Sprint | Features | Status |
|--------|----------|--------|
| **Sprint 1** | PWA shell, Recovery Check-In, Recovery Engine, Today's Plan dashboard | ✅ |
| **Sprint 2** | Guided routines, Timers, Breathing interface, Weekly Recovery Capacity tracker | ✅ |
| **Sprint 3** | Acupressure library, Flare-Up Mode, Routine history, Recovery trends | 🔄 Partial (Acupressure library + History done) |
| **Sprint 4** | Sitting reminders, Progressive personalization, Recovery analytics, Wearable integration | ⬜ |

---

## 15. Long-Term Vision

JING is not intended to become another fitness application.

It is intended to become a **Personal Recovery Operating System.**

Its purpose is not to maximize performance. Its purpose is to preserve movement, reduce pain, and help people remain active throughout their lives.