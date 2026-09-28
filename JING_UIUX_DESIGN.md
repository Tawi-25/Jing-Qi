# JING: User Experience & Interface Specification

**Version 2.0**

---

## Design Philosophy

JING should never feel like a fitness application.

It should feel like a trusted companion that quietly helps users recover, move well, and age gracefully.

Every interaction should reduce anxiety rather than increase it.

The interface should encourage slowing down rather than rushing through tasks.

The app succeeds when users feel calmer after opening it than before.

---

## Design Principles

### Calm Before Action
- Every screen begins with breathing space.
- Nothing flashes.
- Nothing competes for attention.

### One Decision at a Time
- Users should never wonder "What do I do next?"
- Every screen answers exactly one question.

### Recovery is Progress
- The interface should celebrate recovery rather than activity.
- A Rest Day should feel like success, not failure.

### Gentle Guidance
- Instead of "Complete Today's Workout" → "Your body appears ready for gentle movement."
- Instead of "Workout Missed" → "Tomorrow is another opportunity to move."

---

## Visual Identity

### Colors

| Element | Hex | Description |
|---------|-----|-------------|
| Background | `#0E1116` | Night sky, grounded, timeless |
| Surface Cards | `#171C23` | Soft elevation |
| Primary Accent | `#C89B5B` | Warm earth, vitality |
| Recovery Blue | `#627D98` | Calm, breathing, reflection |
| Green | `#6FB98F` | Recovered |
| Amber | `#E8B04B` | Recovery needed |
| Soft Red | `#D98282` | Protect yourself — never emergency red |
| Primary Text | `#F5F4F2` | — |
| Secondary Text | `#B8BDC7` | — |

### Typography
- Inter or SF Pro
- Large spacing, large buttons, large numbers
- Nothing decorative

---

## Navigation

**Bottom Navigation:** Today | Recover | Library | Insights

---

## Today (Home)

Every time the user opens the app, instead of "Good Morning," the screen begins with:

**"How is your body feeling today?"**

- Large soreness selector (ten circles to tap — no dragging)
- Sleep: 🙂 Great / 😐 Okay / 😴 Poor
- Energy: High / Medium / Low

Then a large card shows:
- **TODAY**
- Recovery Status 🟡
- Recovery Focus: Gentle Mobility
- Estimated Time: 18 minutes
- Large button: **Begin Recovery**

Nothing else.

---

## During Work (Sitting Awareness)

The app exists because of sitting. The app should know this.

After 90 minutes → Notification: "You've been sitting for a while."

Two buttons: **Move** | **Later**

Move launches a 2-minute mobility session.

---

## Recovery Session (During Routine)

When user presses **Begin Recovery**, the entire UI changes:

- No navigation, no distractions
- Dark background
- Large breathing circle
- Exercise title
- Huge animation
- Huge timer

Example Layout:
```
Cat-Cow
1:52
[Pause] [Skip] [Finish]
```

No tiny buttons.

### Between Exercises
Don't instantly jump. Instead, show a breathing screen with a countdown: 5... 4... 3... 2... 1.

This makes the experience feel intentional.

### End of Routine
Don't say "Workout Complete!"
Say: **"Recovery Complete. Your body has received today's movement. Well done."**

Huge difference psychologically.

---

## Recover Tab

Replaces a simple "Acupressure" tab. Recovery isn't only acupressure.

Contains:
- Breathing
- Flare-Up Mode
- Acupressure
- Guided Relaxation
- Heat / Ice reminders (future)
- Recovery positions

**Big emergency button** "I'm Having a Flare-Up" should always be visible.

---

## Movement Library

Instead of "Exercise Library" → **Movement Library** (feels less clinical).

### Categories
- Mobility
- Strength
- Nerve Glides
- Breathing
- Recovery
- Stretching

Every exercise card shows: difficulty, duration, body area, load value, equipment.

---

## Insights (Replaces History)

History tells you what happened. Insights explain it.

- Top card: This Month — Average Recovery (e.g. 82%)
- Recovery Timeline: colored circles
- Patterns: e.g. "Your soreness is usually lower after walking."

---

## Guardian Engine

Small card always visible:
- **Guardian Engine**
- Today's Recommendation: Gentle Recovery
- Reason: "You reported increased soreness this morning."

Now users understand *why*. Trust grows.

---

## Flare-Up Mode

This should feel completely different:
- Black screen
- One instruction: "Let's reduce tension."
- Large breathing animation
- Then: comfortable position → nerve glide → acupressure
- No menus
- Pain removes thinking capacity. Design for that.

---

## Micro-interactions

- ✅ Gentle haptic when completing exercises
- ✅ Slow card animations
- ✅ Smooth breathing circle
- ✅ Soft vibration
- ✅ Gentle fade transitions
- ✅ Tiny bell
- No harsh sounds

---

## Language System

### Never Say
- Workout
- Calories
- Streak
- Failure
- Missed

### Instead Say
- Recovery Session / Movement Session / Recovery Practice / Mobility Session
- Recovery
- Consistency
- Balance
- Capacity
- Progress
- Awareness