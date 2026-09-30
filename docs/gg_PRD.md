# Garden Granny – PRD

Sep 30, 2026 · @Madara · Draft v0.2 (updated after design)

## Overview

Garden Granny tells beginner gardeners what to do and when, then reminds them at the right moment. Users pick their city and plants, and the app builds a growth timeline for each plant, sends one reminder per task, and adjusts watering to the local weather.

**Why I'm building it:** I started gardening this season and would have benefited from exactly this. I'm building it so I can be a better gardener next season.

## Problem and users

**Problem:** New gardeners don't know the signs to look for at each stage, so they miss the right moment to sow, transplant, water or feed.

**Target users:** beginner gardeners growing at small scale.

| Persona | Setting | What matters most |
| --- | --- | --- |
| Balcony gardener | Pots on a covered or open balcony | Watering, since pots dry out fast and a covered balcony gets no rain |
| Plot gardener | A small plot in a shared community garden | Sowing and frost timing, and rain-adjusted watering |

Both are beginners. The difference is the growing location, which changes watering and weather logic.

## Goals and success metrics

Success means gardeners keep coming back through the season because the app keeps telling them something useful.

| Metric | Target | Type |
| --- | --- | --- |
| Users who open the Today screen at least once a week | 40% over 3 months | Primary |
| Users who ask for new features | Tracked, no target | Secondary |

The primary metric tracks the Today screen, not stage updates: today's tasks change every few days, while stages change only every few weeks.

## MVP scope

The MVP ships four features: plant timelines, growth tracking, reminders and weather alerts.

| Feature | Priority | What it does |
| --- | --- | --- |
| Plant timeline | Must-have | Choose from 10 plants and get a timeline for every growth stage, with the signs to look for at each one |
| Growth tracking | Must-have | The app estimates when the next milestone is due; the user taps to confirm when it happens |
| Reminders | Must-have | One notification when a task is due (water, sow, transplant, feed); user opts in to notifications |
| Weather alerts | Must-have | City weather adjusts the watering schedule and warns of frost |
| Progress notes | Medium | Notes pinned to the stage they were written in on the plant's timeline, hidden until tapped |
| Growth photos | v2 | Photos of the plant over time to review progress |
| AI help chat | v2 | Ask about a specific issue with a plant |

### Each stage teaches the signs

Every stage in the timeline says what to expect and what to do if it doesn't happen. Example: "Sprouted: expect 2 small round leaves in 7–10 days. If nothing after 14 days, check X." This addresses the core problem without needing AI in the MVP.

### Onboarding (no login)

1. Choose your city (Czech cities only for the demo).
2. Choose your plants from the list.
3. One screen per plant, with two questions: first its current stage (visual picker: still in the packet, sown, sprout, seedling, flowering, fruiting), then where it grows (covered balcony, open balcony or garden plot).
4. If a plant is still in the packet, a pop-up asks how it will be sown before the user can continue: straight in the ground, or started indoors and planted out later.
5. Allow notifications. The screen shows example reminders for sowing, repotting, watering and frost.

### Sowing: in the ground or indoors first

Seeds still in the packet get a sowing plan the user can switch at any time.

- **Straight in the ground:** a countdown to sowing day, set after the city's last frost (in Praha, mid-May).
- **Indoors first:** sow in pots now, put them outside by day for about a week, then plant out in the plot. This gives about 3 weeks' head start.

### Plant list

Tomatoes, basil, lettuce, radish, strawberries, cucumber, carrots, Swiss chard, sage, pumpkin.

## App structure and screens

The app has three tabs in a bottom bar: My garden, Today and Weather. Today sits in the middle and is where the app opens. Designs: [Garden Granny – Main flows](https://claude.ai/code/artifact/4270ec1c-c6a1-4fa6-b1bc-b1341ea7a18b).

| Screen | What it shows |
| --- | --- |
| Today (default) | Today's weather and rain tomorrow, then today's tasks with a Done button |
| My garden | Every plant with where it grows, its stage and what's next, plus Add a plant. Each plant starts at a count of 1, and the user can add more of the same kind |
| Plant page | Now and Next stage; what to expect and what to do if it doesn't happen; "It happened!" to confirm a milestone; the timeline, with notes under the stage they were written in (hidden until tapped); "My plant died", which removes it from My garden, stops its reminders and plays a short, cute goodbye animation for the plant |
| Seed countdown | Days to sowing, with a switch between the in-the-ground and indoors-first plans |
| Weather | 7-day forecast in °C and mm, and how watering changes for each plant |
| Frost warning | What to do before dark for each plant, by where it grows |

**Visual style:** a solid pastel background per screen (yellow, pink, cream, blue, sage), black pill buttons and bottom bar, bold headings with a light italic second line (Urbanist), and wavy, scalloped shapes.

## Notifications and weather logic

Each task sends one notification when it's due; the user marks it as seen, and weather changes the watering schedule rather than adding extra alerts.

| Weather event | Covered balcony | Open balcony | Garden plot |
| --- | --- | --- | --- |
| Rain forecast | No change (no rain reaches the plant) | Skip or delay watering | Skip or delay watering |
| Dry period | Water more often | Water more often | Water more often |
| Frost warning | Bring pots inside or cover them | Bring pots inside or cover them | Cover plants |

- Notifications need the user's permission, asked during onboarding.
- A notification is marked as seen; there is no overdue state in the MVP. A missed task stays visible in the app for 2 days, then disappears.
- Frost alerts are always sent, even if other reminders are muted, since frost can kill plants overnight.

## Non-goals and v2

**Not in the MVP:**

- User accounts and login
- Photo library
- Plant disease diagnostics

**v2 candidates:**

- Growth photos on the timeline
- AI help chat for specific plant issues
- Printable watering schedules
- Companion planting suggestions (what to grow next to your current plants)
- Cities outside Czechia

## Format and technical approach

The demo is a mobile-first Progressive Web App (PWA), with a native app as a possible later step.

- **Why a PWA:** one link works on any phone or laptop
- **App-like:** it can be added to the home screen and supports push notifications, including on iPhone once installed.
- **Weather:** Open-Meteo, a free API with no key needed.
- **Data:** stored on the device, since there is no login in the MVP.
- **Plant data:** stage durations, sowing windows and care tips come from a knowledge base Madara provides during development.
- **Built with:** Claude Code (vibe coding)

## Risks and open questions

**Risks**

- **Off-season demo:** interviews happen in autumn and winter, when nothing grows in Czechia. Fix: a pre-filled demo garden set mid-season, or a "preview date" switch.
- **Crowded market:** GrowVeg, Seed to Spoon and others exist. The difference: made for beginners in Czechia, metric, frost dates by city, no jargon, and watering that knows if a balcony is covered.
- **Missed reminders:** with no overdue state, a missed notification means a missed task.

**Open questions**

- [x] Is "40% update a stage at least once a month for 3 months" the right bar, or should it be twice a month, or reminder completion?
- [x] Should a missed task stay visible in the app, even if there is no overdue state?
- [x] Should frost alerts always be sent, even if other reminders are muted?
- [x] Where does the plant data (stage durations, sowing windows) come from, and how is it checked?
