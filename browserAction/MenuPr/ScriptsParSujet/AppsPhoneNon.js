/**
 *
 * Ce fichier intègre le code HTML de la page indiquant des applications néfastes pour iPhone et pour Androïd dans ce popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction ouvrirAppNon se trouve dans le document "OuvrirAppNon.js"
 *
 *
 */
function autresAppNon() {


  const allApps = [
    {
      letter: "0",
      content: [
        "2048 Merge Cube – Win Cash",
        "4K Pro Camera",
        "4K Wallpapers, Auto Changer",
      ],
    },

    {
      letter: "A",
      content: [
        "Advanced SMS",
        "aipic – Magic Photo Editor",
        "All Good PDF Scanner",
        "All Language Translate",
        "All Photo Translator",
        "Arrow Coins",
        "Art Filters",
        "Astro + Horoscope Astrology",
        "Astroline : The Daily Horoscope",
        "Auto Stamp Camera",
        "Auto Sticker Maker Studio",
        "Avatar Maker Character Creator  ",
      ],
    },
    {
      letter: "B",
      content: [
        "Baby Sticker- Track Milestones",
        "Balloon Shooter",
        "Bass Booster Volume Power Amp",
        "Battery Charging Animation Battery Wallpaper",
        "Battery Charging Animation Bubble Effects",
        "Beat Kicker New",
        "Beat Maker Pro",
        "Beat.ly: Music Video Maker",
        "Beauty Filter",
        "Bike Extreme Racing",
        "Billionaire Scratch",
        "Blood Pressure Checker",
        "Blood Pressure Diary",
        "Blue Scanner",
        "Blur Image",
        "BOO Popstar",
        "Bottle Jump ",
      ],
    },
    {
      letter: "C",
      content: [
        "Cache Cleaner",
        "Call Skins",
        "Caller Theme",
        "CallMe Phone Themes",
        "Camera Translator",
        "CareMessage",
        "Cartoonsme",
        "Chat Online",
        "Chat SMS",
        "Chat Text SMS",
        "Chop Flake 3D",
        "Chop Slices",
        "Classic Emoji Keyboard",
        "Classic Game Messenger",
        "Coco Camera v1.1",
        "Come Messages",
        "Contact Background",
        "Cool Keyboard",
        "Cool Messages",
        "Corn Scraper",
        "Creative 3D Launcher",
        "Creative Emoji Keyboard",
        "Crowd Battle:Fight the bad guys",
        "Crush Car",
        "Custom Themed Keyboard",
        "Cut Paste",
      ],
    },
    {
      letter: "D",
      content: [
        "Dazz Cam - D3D Photo Effect",
        "Dazzle - Insta Stories Editor",
        "Dazzling Keyboard",
        "Design Maker",
        "Design n Road",
        "Desire Translate",
        "Dig Road Balls",
        "Dinosaur Legend",
        "Direct Messenger",
        "Dizzi",
        "Dj it!",
        "Downhill Race",
        "Draw 1 Stroke",
        "Draw a War",
        "Draw Complete",
        "Draw CompleteA",
        "Draw Live",
        "Drink Water",
        "Drums: Play Beats & Drum Games",
      ],
    },
    {
      letter: "E",
      content: [
        "Easy PDF Scanner",
        "edjing Mix",
        "edjing Pro",
        "Emoji Theme Keyboard",
        "EmojiOne Keyboard",
        "Equalizer Fx: Bass Booster App",
        "Equalizer+ HD Music Player",
      ],
    },
    {
      letter: "F",
      content: [
        "Facelab",
        "FaceMe",
        "Facetory: Face Yoga & Exercise",
        "Fancy Charging",
        "Fancy SMS",
        "Fidget Cubes",
        "Fill Color 3D",
        "Find 5 Differences – New",
        "Find Five Differences",
        "Fire-Wall",
        "Five-Star Slice",
        "Flash Alert On Call",
        "FLMX",
        "Fonts Emoji Keyboard",
        "Frame",
        "Frames",
        "Freeglow Camera 1.0.0",
        "Funny Caller",
        "Funny Camera",
        "Funny Emoji Message",
        "Funny Keyboard",
        "Funny Wallpapers - Live Screen",
      ],
    },
    {
      letter: "G",
      content: [
        "GIF Emoji Keyboard",
        "Girl Games: Unicorn",
        "Girls Fight",
        "Guitar - Real Games & Lessons",
        "Guitar Play - Games & Songs",
        "Guitar Tuner - Ukulele & Bass",
      ],
    },
    {
      letter: "H",
      content: [
        "Halloween Coloring",
        "Handset - Second Phone Number",
        "Heart Emoji Stickers",
        "Helicopter Attack – NEW",
        "Hi Text SMS",
        "Hidind Draw",
        "Highlight Story Cover Maker!",
        "Horoscope 2019 and Palm Reader",
        "Hub - Story Templates Maker",
        "HummingBird PDF Converter - Photo to PDF",
        "Hyper Cleaner: Clean Phone",
      ],
    },
    {
      letter: "I",
      content: [
        "iCons - Icon Changer App+",
        "Idle Wood Maker",
        "iMessager",
        "Impresso",
        "Instant Messenger",
        "iWidget Pro",
      ],
    },
    {
      letter: "J",
      content: [
        "Jackpot Scratcher-Win Real",
        "Jambl: DJ Band & Beat Maker",
        "Jigsaw Puzzle",
      ],
    },
    {
      letter: "K",
      content: ["Karaoke Songs"],
    },
    {
      letter: "L",
      content: [
        "Lady Run",
        "Life Palmistry",
        "Lift Story Maker",
        "Light Messages",
        "Live Wallpaper Maker: 4K Theme",
        "Loop Maker Pro",
        "Loot the Castle",
        "Lucky Life",
        "Lucky Money Tree",
        "Lucky Scratchers: Lotto Card",
        "Lucky Star: Lotto Scratch",
        "Lucky Wings – Lotto Scratchers",
      ],
    },
    {
      letter: "M",
      content: [
        "Magic Brush 3D",
        "Magic Photo Editor",
        "MagicFX - Magic Video Effects",
        "Match 3 Tiles",
        "Meet Camera",
        "Memoristo: Brain Test, IQ Game",
        "Memory Silent Camera",
        "Menu Maker!",
        "Meticulous Scanner",
        "Metronome - Tap Tempo & Rhythm",
        "Metronome Pro - Beat & Tempo",
        "Mini PDF Scanner",
        "Mint Leaf Message - Your Private Message",
        "Mood Balance: Self Care Tracker",
        "Mr Dinosaur: Play your Dino",
        "MUFC",
        "Music Zen - Relaxing Sounds",
        "Musical Shoot",
        "MyCall - Call Personalization",
      ],
    },
    {
      letter: "N",
      content: [
        "Nebula - Horoscope & Astrology",
        "Neon Theme Keyboard",
        "New Scream: 4D Wallpapers",
        "Ninja Assassin",
        "Ninja Critical Hit",
        "Ninja Slice",
        "Notes - Reminder and Lists",
        "Now QRcode Scan",
        "Number Combination: Colored Chips",
      ],
    },
    {
      letter: "O",
      content: [
        "One Line Drawing",
        "One Sentence Translator - Multifonctional Translator",
      ],
    },
    {
      letter: "P",
      content: [
        "Painting Photo Editor",
        "Paper Doc Scanner",
        "Parking Master",
        "Part Message",
        "Password Manager",
        "Path - Horoscope & Astrology",
        "PDF Scanner - Document Scanner",
        "Personal Message",
        "Peter Shoot",
        "Photo & Exif Editor",
        "Photo Collage",
        "Photo Editor - Filters Effects",
        "Photo Editor & Background Eraser",
        "Photo Filters & Effects",
        "Photo to Sketch",
        "Photoly Remove Object & Editor",
        "Piano",
        "Piano Crush",
        "Pista",
        "Pixomatic",
        "Player Spiral Maker 3D",
        "Poco Launcher",
        "Pop Girls Schooler",
        "Premium SMS",
        "Presets for Lightroom",
        "Private Game Messages",
        "Private Messenger",
        "Private SMS",
        "Professional Messenger",
        "Pull Worm",
        "Pulley Parkour",
      ],
    },
    {
      letter: "Q",
      content: ["Quick Talk Message"],
    },
    {
      letter: "0",
      content: [
        "Racing Legend 3D",
        "Razer Keyboard & Them",
        "Recollect",
        "Relx cash",
        "Rescue Master",
        "Retouch & Cutout",
        "Rich Theme Message",
        "Ringtones HD",
        "Ringtones HD - Ringtone Maker",
        "Roll Turn",
        "Romy Rush",
        "Rope Runner",
        "Run And Dance",
        "Run Bridge",
        "Rush 2048：3D Shoot Cubes",
      ],
    },
    {
      letter: "S",
      content: [
        "Sand Drawing",
        "ScanGuru",
        "Scanner App",
        "Scratch Carnival",
        "Send SMS",
        "Shake Shake Pig",
        "Shake Shake Sheep",
        "Shinning Gun",
        "Shoot Dummy – Win Rewards & Paypal Cash",
        "Shoot it: Using Gun",
        "Shoot Master",
        "Shooting Puzzle 2020",
        "Simple Note Scanner",
        "SlidePic",
        "Slimy",
        "Smart Messages",
        "Smart SMS Messages",
        "Smart TV Remote",
        "Smile Emoji",
        "Social Message",
        "Spear Hero",
        "SpeedPro Slow Speed Video Edit",
        "Spin:Letter Roll",
        "Spot 10 Differences",
        "Sticker Maker",
        "Stickerfy Sticker Maker",
        "Stickers & GIF",
        "Stock Wallpapers & Backgrounds",
        "Style Message",
        "Style Photo Collage",
        "Super Flake",
        "Super Hero-Effect",
        "Super Hero-Save the world!",
        "Sweet Pics - Baby Photo Edito",
      ],
    },
    {
      letter: "T",
      content: [
        "Talent Photo Editor - Blur Focus",
        "Talent Trap – NEW",
        "Tangram App Lock",
        "TeasEar: ASMR Slime Antistress",
        "Text Emoji SMS",
        "Text SMS",
        "Themes Chat Messenger",
        "Themes Photo Keyboard",
        "TheTruthSpy",
        "Thief King",
        "TimeStamp Camera",
        "Tony Runs",
        "ToonApp Cartoon Photo Editor",
        "Track Sliding New",
        "Translate Camera - Speak On",
        "Translator Guru: Voice & Text",
      ],
    },
    {
      letter: "U",
      content: [
        "UltraFX - Effect Video Maker",
        "Unicc QR Scanner",
        "Unique Keyboard",
        "Universal PDF Scanner",
      ],
    },
    {
      letter: "V",
      content: [
        "Vanilla Snap Camera",
        "Video Puzzles - Magic Puzzle",
        "VOCHI Video Effects Editor",
        "Volume Booster Hearing Aid",
        "Volume Booster Louder Sound Equalizer",
      ],
    },
    {
      letter: "W",
      content: [
        "War in Painting",
        "Water Reminder",
        "Weapon Fantasy",
        "WeDrum: Drums, Real Drum Games",
        "Widget Plus+ - Photo and Weather",
        "Wood Sculptor",
        "Work Now!",
        "Wow Beauty Camera",
        "Wow Translator",
      ],
    },
    {
      letter: "X",
      content: ["Xnspy"],
    },
    {
      letter: "Y",
      content: ["Yoga for Beginner to Advanced", "YouToon AI Cartoon Effects"],
    },
    {
      letter: "Z",
      content: ["Ztime:Earn cash rewards easily"],
    },
  ];
  let text = allApps
    .map(
      (app) =>
        `<h4 id="${app.letter}">${app.letter}</h4><ul>${app.content
          .map((e) => `<li>${e}</li>`)
          .join("")}</ul>`
    )
    .join("");
  let index = allApps
    .map((l) => `<a href='#${l.letter}' style='text-decoration:none' class='linkAll'>${l.letter}</a>`)
    .join("");

  document.getElementById(
    "laListe"
  ).innerHTML = `<div style='display:flex;flex-direction:row'>
    <div style='display:flex;flex-direction:column;line-height:1.25;position:fixed;text-align:center;'>
    ${index}
    </div>
    <div style='margin-left:2.25rem'>
    ${text}
    </div>
    </div>`;
  document.querySelector("header").style.backgroundColor = "silver";

  HeaderTitle = "Les deux";

  headerUp();
  document.querySelector("main").style.fontFamily = "K2D, sans-serif";
  alignHeader();
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", ouvrirAppNon);
  }
}
