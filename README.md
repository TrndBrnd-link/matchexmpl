# Omega Arena — Live Orbit & Battle Simulation

A self-contained, config-driven space simulation. Players orbit a sun, click any
player to see a glassmorphism popup with their photo, bio and a WhatsApp button,
and an automatic battle runs on a continuous loop with realistic scores (30–380)
per round — no manual setup, no API keys, no external database.

## File structure

```
├── index.html      ← the app itself (do not need to edit this)
├── config.js       ← THE ONLY FILE YOU EDIT — players, sun link, battle settings
├── assets/         ← put every image here
│   ├── 1.jpg       ← the SUN image (this filename is fixed, always assets/1.jpg)
│   ├── 2.jpg       ← player photos, referenced by path in config.js
│   ├── 3.jpg
│   └── ...
└── README.md
```

## Adding players

Open `config.js` and add an entry to the `PLAYERS` array:

```js
{
    id: 9,
    name: "New Player",
    image: "assets/10.jpg",
    bio: "Whatever bio text you want shown in their popup card.",
    whatsapp: "15551234567"   // country code + number, digits only
}
```

Drop the matching photo into `/assets` and reload the page. The orbit ring,
popup card, and battle loop all pick it up automatically — nothing else in the
code needs to change.

## The sun

- The sun always displays `assets/1.jpg`. This path is hard-coded so it never
  gets mixed up with a player photo.
- Clicking the sun does **not** open a popup — it opens `SUN_CONFIG.link`
  (set in `config.js`) directly in a new tab.

## The battle

- Runs automatically on page load, and loops forever — no start button, no
  manual player list to fill in.
- Each round, every player is assigned a random target score between
  `BATTLE_CONFIG.minScore` and `BATTLE_CONFIG.maxScore` (default 30–380) and
  the score climbs live, in a shuffled/realistic order, over
  `roundDurationSec` seconds.
- After a round finishes there's a short pause (`pauseBetweenSec`), then a
  countdown, then the next round starts with fresh random scores.
- Orbit ranking, ring distance, and node size are all driven live by the
  current battle score, so the whole map reorganizes itself in real time.

All of this is tunable from the `BATTLE_CONFIG` block in `config.js` — no
other file needs to be touched.

## Deploying on GitHub Pages

1. Push this folder to a repo.
2. Settings → Pages → deploy from the `main` branch, root folder.
3. Done — no build step, no dependencies to install.
