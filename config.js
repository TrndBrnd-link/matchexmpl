/* =====================================================================
   OMEGA ARENA — CONFIGURATION
   ---------------------------------------------------------------------
   This is the ONLY file you need to touch to manage the simulation.

   1) Put every image inside the /assets folder.
   2) The SUN image is ALWAYS "assets/1.jpg" (hard-coded, do not rename).
   3) Add one entry to the PLAYERS array below per player.
   4) Reload the page — everything else (orbit, battle, popups) is
      generated automatically from this file.
   ===================================================================== */

// ---------------------------------------------------------------------
// SUN — clicking it opens SUN_LINK directly in a new tab. No popup.
// ---------------------------------------------------------------------
const SUN_CONFIG = {
    image: "assets/1.png",              // fixed — always assets/1.png
    link: "https://example.com"         // <-- change to whatever the sun should link to
};

// ---------------------------------------------------------------------
// PLAYERS — add / remove / edit freely. Order does not matter, ranking
// is calculated automatically from live battle scores.
//
//   id        : unique number
//   name      : shown on the map + popup card
//   image     : path inside /assets  (e.g. "assets/2.jpg")
//   bio       : short description shown in the popup card
//   whatsapp  : full number with country code, digits only
//               (e.g. "15551234567" for +1 555 123 4567)
// ---------------------------------------------------------------------
const PLAYERS = [
    {
        id: 1,
        name: "Player One",
        image: "assets/2.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234567"
    },
    {
        id: 2,
        name: "Player Two",
        image: "assets/3.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234568"
    },
    {
        id: 3,
        name: "Player Three",
        image: "assets/4.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234569"
    },
    {
        id: 4,
        name: "Player Four",
        image: "assets/5.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234570"
    },
    {
        id: 5,
        name: "Player Five",
        image: "assets/6.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234571"
    },
    {
        id: 6,
        name: "Player Six",
        image: "assets/7.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234572"
    },
    {
        id: 7,
        name: "Player Seven",
        image: "assets/8.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234573"
    },
    {
        id: 8,
        name: "Player Eight",
        image: "assets/9.jpg",
        bio: "Short bio goes here. Describe the player, their role, or anything you'd like visitors to know.",
        whatsapp: "15551234574"
    }
];

// ---------------------------------------------------------------------
// BATTLE SIMULATION — fully automatic, loops forever, no setup needed.
// ---------------------------------------------------------------------
const BATTLE_CONFIG = {
    minScore: 30,          // lowest possible final score per round
    maxScore: 380,         // highest possible final score per round
    roundDurationSec: 45,  // how long one battle round takes to play out
    countdownSec: 10,      // countdown shown before each round starts
    pauseBetweenSec: 8     // pause after a round finishes before the next starts
};
