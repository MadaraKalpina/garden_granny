# Garden Granny

A mobile-first Progressive Web App (PWA) that tells beginner gardeners in Czechia what to do and when, then reminds them at the right moment. Full requirements: `docs/PRD.md`. Screen designs: `docs/gg_Main flows.html` (open it in a browser to see all screens).

## Who I am and how to work with me

- I'm building this to learn, not as a professional developer. Explain what you changed and why, in plain words.
- Work in small steps. One feature per session, and something I can try on my phone after each step.
- Use plan mode for anything bigger than a small fix, and wait for my OK before writing code.
- Ask before adding a new library or service, and tell me what it costs (money, size, complexity).
- After each working step, remind me to commit.
- If something in the PRD is unclear or seems wrong, ask instead of guessing.

## Stack (proposed, confirm in the first session)

- Vite + React, installable as a PWA (manifest + service worker).
- Data stays on the device (localStorage or IndexedDB). No accounts, no backend.
- Weather: Open-Meteo API (free, no key).
- Hosting: GitHub Pages to start (free, HTTPS). Set Vite's `base` to the repo name, and use hash routing or a `404.html` fallback so page reloads work.
- GitHub Pages can't run server code. Reminders that arrive while the app is closed need a small push server later (for example Netlify or Vercel functions). Flag this when we get to notifications.

## Product rules

- **Units:** metric only (°C, mm, cm, m, L). Dates as "14 May". Week starts on Monday.
- **Cities:** Czech cities only for the demo (Praha, Brno, Ostrava, Plzeň, Liberec, Olomouc, České Budějovice…).
- **Plants (10):** tomatoes, basil, lettuce, radish, strawberries, cucumber, carrots, Swiss chard, sage, pumpkin.
- **Stages:** still in the packet → sown → sprout → seedling → flowering → fruiting. Each stage says what to expect and what to do if it doesn't happen.
- **Growing places:** covered balcony, open balcony, garden plot.
- **Plant count:** each plant added starts at 1; the user can add more of the same kind.
- **Sowing (plants still in the packet):** straight in the ground (countdown to sowing day, after the city's last frost) or indoors first (sow in pots, harden off about a week, plant out).
- **Plant data:** stage durations, sowing windows and care tips come from a knowledge base I will provide. Keep it in one data file, separate from code. Never invent plant facts; leave a clear TODO instead.
- **Tone:** friendly, short, no gardening jargon.

## Notifications and weather

- One notification per task when it's due (water, sow, transplant, feed). User opts in during onboarding.
- No overdue state. A missed task stays visible in the app for 2 days, then disappears.
- Frost alerts are always sent, even if other reminders are muted.
- Weather changes the watering schedule; it doesn't add extra alerts:

| Weather | Covered balcony | Open balcony | Garden plot |
| --- | --- | --- | --- |
| Rain forecast | No change | Skip or delay watering | Skip or delay watering |
| Dry period | Water more often | Water more often | Water more often |
| Frost warning | Bring pots inside or cover | Bring pots inside or cover | Cover plants |

- iPhone push only works once the app is added to the home screen. Build notifications last.
- "My plant died": remove the plant from My garden, stop its reminders, play a short cute goodbye animation.

## App structure

- **Onboarding:** city → plants → one screen per plant (stage, then growing place; if "in the packet", a pop-up asks the sowing method) → allow notifications.
- **Bottom bar:** My garden · Today · Weather. Today is in the middle and is the default.
- **Other screens:** plant page (Now/Next, "It happened!", timeline with notes under each stage, hidden until tapped), seed countdown, weather week, frost warning.
- **Demo:** a "preview date" setting so the app can be shown mid-season in autumn or winter.

## Visual style (match `docs/gg_Main flows.html`)

- Font: Urbanist (Google Fonts). Headings bold, with a light italic second line.
- One solid pastel background per screen: yellow `#F7D96B`, pink `#F3A9CF`, cream `#F5EFE3`, blue `#BACBF0`, sage `#B5C98F`. Text `#151515`. Accent magenta `#B8407F`.
- Black pill buttons and a floating black pill bottom bar. White rounded cards (radius 24–30 px), no borders.
- Selected options turn black with white text.
- Touch targets at least 44 px. Text contrast at least 4.5:1.

## Code habits

- Keep watering, frost and stage-timing logic in plain functions with tests. That's where silent bugs hide.
- Keep plant data, weather code and screens in separate folders.
- Don't commit API keys or secrets (none are needed for Open-Meteo).
