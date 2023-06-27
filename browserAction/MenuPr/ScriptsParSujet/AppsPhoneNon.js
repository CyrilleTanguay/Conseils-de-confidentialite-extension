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
  const LesCats = [
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let text = "";
  const listeInt = [
    "<li>2048 Merge Cube – Win Cash</li><li>4K Pro Camera</li><li>4K Wallpapers, Auto Changer</li>",
    "<li>Advanced SMS</li><li>aipic – Magic Photo Editor</li><li>All Good PDF Scanner</li><li>All Language Translate</li><li>All Photo Translator</li><li>Arrow Coins</li><li>Art Filters</li><li>Astro + Horoscope Astrology</li><li>Astroline : The Daily Horoscope</li><li>Auto Stamp Camera</li><li>Auto Sticker Maker Studio</li><li>Avatar Maker Character Creator</li>",
    "<li>Baby Sticker- Track Milestones</li><li>Balloon Shooter</li><li>Bass Booster Volume Power Amp</li><li>Battery Charging Animation Battery Wallpaper</li><li>Battery Charging Animation Bubble Effects</li><li>Beat Kicker New</li><li>Beat Maker Pro</li><li>Beat.ly: Music Video Maker</li><li>Beauty Filter</li><li>Bike Extreme Racing</li><li>Billionaire Scratch</li><li>Blood Pressure Checker</li><li>Blood Pressure Diary</li><li>Blue Scanner</li><li>Blur Image</li><li>BOO Popstar</li><li>Bottle Jump</li>",
    "<li>Cache Cleaner</li><li>Call Skins</li><li>Caller Theme</li><li>CallMe Phone Themes</li><li>Camera Translator</li><li>CareMessage</li><li>Cartoonsme</li><li>Chat Online</li><li>Chat SMS</li><li>Chat Text SMS</li><li>Chop Flake 3D</li><li>Chop Slices</li><li>Classic Emoji Keyboard</li><li>Classic Game Messenger</li><li>Coco Camera v1.1</li><li>Come Messages</li><li>Contact Background</li><li>Cool Keyboard</li><li>Cool Messages</li><li>Corn Scraper</li><li>Creative 3D Launcher</li><li>Creative Emoji Keyboard</li><li>Crowd Battle:Fight the bad guys</li><li>Crush Car</li><li>Custom Themed Keyboard</li><li>Cut Paste</li>",
    "<li>Dazz Cam - D3D Photo Effect</li><li>Dazzle - Insta Stories Editor</li><li>Dazzling Keyboard</li><li>Design Maker</li><li>Design n Road</li><li>Desire Translate</li><li>Dig Road Balls</li><li>Dinosaur Legend</li><li>Direct Messenger</li><li>Dizzi</li><li>Dj it!</li><li>Downhill Race</li><li>Draw 1 Stroke</li><li>Draw a War</li><li>Draw Complete</li><li>Draw CompleteA</li><li>Draw Live</li><li>Drink Water</li><li>Drums: Play Beats & Drum Games</li>",
    "<li>Easy PDF Scanner</li><li>edjing Mix</li><li>edjing Pro</li><li>Emoji Theme Keyboard</li><li>EmojiOne Keyboard</li><li>Equalizer Fx: Bass Booster App</li><li>Equalizer+ HD Music Player</li>",
    "<li>Facelab</li><li>FaceMe</li><li>Facetory: Face Yoga & Exercise</li><li>Fancy Charging</li><li>Fancy SMS</li><li>Fidget Cubes</li><li>Fill Color 3D</li><li>Find 5 Differences – New</li><li>Find Five Differences</li><li>Fire-Wall</li><li>Five-Star Slice</li><li>Flash Alert On Call</li><li>FLMX</li><li>Fonts Emoji Keyboard</li><li>Frame</li><li>Frames</li><li>Freeglow Camera 1.0.0</li><li>Funny Caller</li><li>Funny Camera</li><li>Funny Emoji Message</li><li>Funny Keyboard</li><li>Funny Wallpapers - Live Screen</li>",
    "<li>GIF Emoji Keyboard</li><li>Girl Games: Unicorn</li><li>Girls Fight</li><li>Guitar - Real Games & Lessons</li><li>Guitar Play - Games & Songs</li><li>Guitar Tuner - Ukulele & Bass</li>",
    "<li>Halloween Coloring</li><li>Handset - Second Phone Number</li><li>Heart Emoji Stickers</li><li>Helicopter Attack – NEW</li><li>Hi Text SMS</li><li>Hidind Draw</li><li>Highlight Story Cover Maker!</li><li>Horoscope 2019 and Palm Reader</li><li>Hub - Story Templates Maker</li><li>HummingBird PDF Converter - Photo to PDF</li><li>Hyper Cleaner: Clean Phone</li>",
    "<li>iCons - Icon Changer App+</li><li>Idle Wood Maker</li><li>iMessager</li><li>Impresso</li><li>Instant Messenger</li><li>iWidget Pro</li>",
    "<li>Jackpot Scratcher-Win Real</li><li>Jambl: DJ Band & Beat Maker</li><li>Jigsaw Puzzle</li>",
    "<li>Karaoke Songs</li>",
    "<li>Lady Run</li><li>Life Palmistry</li><li>Lift Story Maker</li><li>Light Messages</li><li>Live Wallpaper Maker: 4K Theme</li><li>Loop Maker Pro</li><li>Loot the Castle</li><li>Lucky Life</li><li>Lucky Money Tree</li><li>Lucky Scratchers: Lotto Card</li><li>Lucky Star: Lotto Scratch</li><li>Lucky Wings – Lotto Scratchers</li>",
    "<li>Magic Brush 3D</li><li>Magic Photo Editor</li><li>MagicFX - Magic Video Effects</li><li>Match 3 Tiles</li><li>Meet Camera</li><li>Memoristo: Brain Test, IQ Game</li><li>Memory Silent Camera</li><li>Menu Maker!</li><li>Meticulous Scanner</li><li>Metronome - Tap Tempo & Rhythm</li><li>Metronome Pro - Beat & Tempo</li><li>Mini PDF Scanner</li><li>Mint Leaf Message - Your Private Message</li><li>Mood Balance: Self Care Tracker</li><li>Mr Dinosaur: Play your Dino</li><li>MUFC</li><li>Music Zen - Relaxing Sounds</li><li>Musical Shoot</li><li>MyCall - Call Personalization</li>",
    "<li>Nebula - Horoscope & Astrology</li><li>Neon Theme Keyboard</li><li>New Scream: 4D Wallpapers</li><li>Ninja Assassin</li><li>Ninja Critical Hit</li><li>Ninja Slice</li><li>Notes - Reminder and Lists</li><li>Now QRcode Scan</li><li>Number Combination: Colored Chips</li>",
    "<li>One Line Drawing</li><li>One Sentence Translator - Multifonctional Translator</li>",
    "<li>Painting Photo Editor</li><li>Paper Doc Scanner</li><li>Parking Master</li><li>Part Message</li><li>Password Manager</li><li>Path - Horoscope & Astrology</li><li>PDF Scanner - Document Scanner</li><li>Personal Message</li><li>Peter Shoot</li><li>Photo & Exif Editor</li><li>Photo Collage</li><li>Photo Editor - Filters Effects</li><li>Photo Editor & Background Eraser</li><li>Photo Filters & Effects</li><li>Photo to Sketch</li><li>Photoly Remove Object & Editor</li><li>Piano</li><li>Piano Crush</li><li>Pista</li><li>Pixomatic</li><li>Player Spiral Maker 3D</li><li>Poco Launcher</li><li>Pop Girls Schooler</li><li>Premium SMS</li><li>Presets for Lightroom</li><li>Private Game Messages</li><li>Private Messenger</li><li>Private SMS</li><li>Professional Messenger</li><li>Pull Worm</li><li>Pulley Parkour</li>",
    "<li>Quick Talk Message</li>",
    "<li>Racing Legend 3D</li><li>Razer Keyboard & Them</li><li>Recollect</li><li>Relx cash</li><li>Rescue Master</li><li>Retouch & Cutout</li><li>Rich Theme Message</li><li>Ringtones HD</li><li>Ringtones HD - Ringtone Maker</li><li>Roll Turn</li><li>Romy Rush</li><li>Rope Runner</li><li>Run And Dance</li><li>Run Bridge</li><li>Rush 2048：3D Shoot Cubes</li>",
    "<li>Sand Drawing</li><li>ScanGuru</li><li>Scanner App</li><li>Scratch Carnival</li><li>Send SMS</li><li>Shake Shake Pig</li><li>Shake Shake Sheep</li><li>Shinning Gun</li><li>Shoot Dummy – Win Rewards & Paypal Cash</li><li>Shoot it: Using Gun</li><li>Shoot Master</li><li>Shooting Puzzle 2020</li><li>Simple Note Scanner</li><li>SlidePic</li><li>Slimy</li><li>Smart Messages</li><li>Smart SMS Messages</li><li>Smart TV Remote</li><li>Smile Emoji</li><li>Social Message</li><li>Spear Hero</li><li>SpeedPro Slow Speed Video Edit</li><li>Spin:Letter Roll</li><li>Spot 10 Differences</li><li>Sticker Maker</li><li>Stickerfy Sticker Maker</li><li>Stickers & GIF</li><li>Stock Wallpapers & Backgrounds</li><li>Style Message</li><li>Style Photo Collage</li><li>Super Flake</li><li>Super Hero-Effect</li><li>Super Hero-Save the world!</li><li>Sweet Pics - Baby Photo Edito</li>",
    "<li>Talent Photo Editor - Blur Focus</li><li>Talent Trap – NEW</li><li>Tangram App Lock</li><li>TeasEar: ASMR Slime Antistress</li><li>Text Emoji SMS</li><li>Text SMS</li><li>Themes Chat Messenger</li><li>Themes Photo Keyboard</li><li>TheTruthSpy</li><li>Thief King</li><li>TimeStamp Camera</li><li>Tony Runs</li><li>ToonApp Cartoon Photo Editor</li><li>Track Sliding New</li><li>Translate Camera - Speak On</li><li>Translator Guru: Voice & Text</li>",
    "<li>UltraFX - Effect Video Maker</li><li>Unicc QR Scanner</li><li>Unique Keyboard</li><li>Universal PDF Scanner</li>",
    "<li>Vanilla Snap Camera</li><li>Video Puzzles - Magic Puzzle</li><li>VOCHI Video Effects Editor</li><li>Volume Booster Hearing Aid</li><li>Volume Booster Louder Sound Equalizer</li>",
    "<li>War in Painting</li><li>Water Reminder</li><li>Weapon Fantasy</li><li>WeDrum: Drums, Real Drum Games</li><li>Widget Plus+ - Photo and Weather</li><li>Wood Sculptor</li><li>Work Now!</li><li>Wow Beauty Camera</li><li>Wow Translator</li>",
    "<li>Xnspy</li>",
    "<li>Yoga for Beginner to Advanced</li><li>YouToon AI Cartoon Effects</li>",
    "<li>Ztime:Earn cash rewards easily</li>",
  ];
  for (let i = 0; i < LesCats.length; i++) {
    text += "<h4>" + LesCats[i] + "</h4><ul>" + listeInt[i] + "</ul>";
  }

  indexation[0] =
    "<h4>0</h4><ul><li>2048 Merge Cube – Win Cash</li><li>4K Pro Camera</li><li>4K Wallpapers, Auto Changer</li></ul>";
  indexation[1] =
    "<h4>A</h4><ul><li>Advanced SMS</li><li>aipic – Magic Photo Editor</li><li>All Good PDF Scanner</li><li>All Language Translate</li><li>All Photo Translator</li><li>Arrow Coins</li><li>Art Filters</li><li>Astro + Horoscope Astrology</li><li>Astroline : The Daily Horoscope</li><li>Auto Stamp Camera</li><li>Auto Sticker Maker Studio</li><li>Avatar Maker Character Creator</li></ul>";
  indexation[2] =
    "<h4>B</h4><ul><li>Baby Sticker- Track Milestones</li><li>Balloon Shooter</li><li>Bass Booster Volume Power Amp</li><li>Battery Charging Animation Battery Wallpaper</li><li>Battery Charging Animation Bubble Effects</li><li>Beat Kicker New</li><li>Beat Maker Pro</li><li>Beat.ly: Music Video Maker</li><li>Beauty Filter</li><li>Bike Extreme Racing</li><li>Billionaire Scratch</li><li>Blood Pressure Checker</li><li>Blood Pressure Diary</li><li>Blue Scanner</li><li>Blur Image</li><li>BOO Popstar</li><li>Bottle Jump</li></ul>";
  indexation[3] =
    "<h4>C</h4><ul><li>Cache Cleaner</li><li>Call Skins</li><li>Caller Theme</li><li>CallMe Phone Themes</li><li>Camera Translator</li><li>CareMessage</li><li>Cartoonsme</li><li>Chat Online</li><li>Chat SMS</li><li>Chat Text SMS</li><li>Chop Flake 3D</li><li>Chop Slices</li><li>Classic Emoji Keyboard</li><li>Classic Game Messenger</li><li>Coco Camera v1.1</li><li>Come Messages</li><li>Contact Background</li><li>Cool Keyboard</li><li>Cool Messages</li><li>Corn Scraper</li><li>Creative 3D Launcher</li><li>Creative Emoji Keyboard</li><li>Crowd Battle:Fight the bad guys</li><li>Crush Car</li><li>Custom Themed Keyboard</li><li>Cut Paste</li></ul>";
  indexation[4] =
    "<h4>D</h4><ul><li>Dazz Cam - D3D Photo Effect</li><li>Dazzle - Insta Stories Editor</li><li>Dazzling Keyboard</li><li>Design Maker</li><li>Design n Road</li><li>Desire Translate</li><li>Dig Road Balls</li><li>Dinosaur Legend</li><li>Direct Messenger</li><li>Dizzi</li><li>Dj it!</li><li>Downhill Race</li><li>Draw 1 Stroke</li><li>Draw a War</li><li>Draw Complete</li><li>Draw CompleteA</li><li>Draw Live</li><li>Drink Water</li><li>Drums: Play Beats & Drum Games</li></ul>";
  indexation[5] =
    "<h4>E</h4><ul><li>Easy PDF Scanner</li><li>edjing Mix</li><li>edjing Pro</li><li>Emoji Theme Keyboard</li><li>EmojiOne Keyboard</li><li>Equalizer Fx: Bass Booster App</li><li>Equalizer+ HD Music Player</li></ul>";
  indexation[6] =
    "<h4>F</h4><ul><li>Facelab</li><li>FaceMe</li><li>Facetory: Face Yoga & Exercise</li><li>Fancy Charging</li><li>Fancy SMS</li><li>Fidget Cubes</li><li>Fill Color 3D</li><li>Find 5 Differences – New</li><li>Find Five Differences</li><li>Fire-Wall</li><li>Five-Star Slice</li><li>Flash Alert On Call</li><li>FLMX</li><li>Fonts Emoji Keyboard</li><li>Frame</li><li>Frames</li><li>Freeglow Camera 1.0.0</li><li>Funny Caller</li><li>Funny Camera</li><li>Funny Emoji Message</li><li>Funny Keyboard</li><li>Funny Wallpapers - Live Screen</li></ul>";
  indexation[7] =
    "<h4>G</h4><ul><li>GIF Emoji Keyboard</li><li>Girl Games: Unicorn</li><li>Girls Fight</li><li>Guitar - Real Games & Lessons</li><li>Guitar Play - Games & Songs</li><li>Guitar Tuner - Ukulele & Bass</li></ul>";
  indexation[8] =
    "<h4>H</h4><ul><li>Halloween Coloring</li><li>Handset - Second Phone Number</li><li>Heart Emoji Stickers</li><li>Helicopter Attack – NEW</li><li>Hi Text SMS</li><li>Hidind Draw</li><li>Highlight Story Cover Maker!</li><li>Horoscope 2019 and Palm Reader</li><li>Hub - Story Templates Maker</li><li>HummingBird PDF Converter - Photo to PDF</li><li>Hyper Cleaner: Clean Phone</li></ul>";
  indexation[9] =
    "<h4>I</h4><ul><li>iCons - Icon Changer App+</li><li>Idle Wood Maker</li><li>iMessager</li><li>Impresso</li><li>Instant Messenger</li><li>iWidget Pro</li></ul>";
  indexation[10] =
    "<h4>J</h4><ul><li>Jackpot Scratcher-Win Real</li><li>Jambl: DJ Band & Beat Maker</li><li>Jigsaw Puzzle</li></ul>";
  indexation[11] = "<h4>K</h4><ul><li>Karaoke Songs</li></ul>";
  indexation[12] =
    "<h4>L</h4><ul><li>Lady Run</li><li>Life Palmistry</li><li>Lift Story Maker</li><li>Light Messages</li><li>Live Wallpaper Maker: 4K Theme</li><li>Loop Maker Pro</li><li>Loot the Castle</li><li>Lucky Life</li><li>Lucky Money Tree</li><li>Lucky Scratchers: Lotto Card</li><li>Lucky Star: Lotto Scratch</li><li>Lucky Wings – Lotto Scratchers</li></ul>";
  indexation[13] =
    "<h4>M</h4><ul><li>Magic Brush 3D</li><li>Magic Photo Editor</li><li>MagicFX - Magic Video Effects</li><li>Match 3 Tiles</li><li>Meet Camera</li><li>Memoristo: Brain Test, IQ Game</li><li>Memory Silent Camera</li><li>Menu Maker!</li><li>Meticulous Scanner</li><li>Metronome - Tap Tempo & Rhythm</li><li>Metronome Pro - Beat & Tempo</li><li>Mini PDF Scanner</li><li>Mint Leaf Message - Your Private Message</li><li>Mood Balance: Self Care Tracker</li><li>Mr Dinosaur: Play your Dino</li><li>MUFC</li><li>Music Zen - Relaxing Sounds</li><li>Musical Shoot</li><li>MyCall - Call Personalization</li></ul>";
  indexation[14] =
    "<h4>N</h4><ul><li>Nebula - Horoscope & Astrology</li><li>Neon Theme Keyboard</li><li>New Scream: 4D Wallpapers</li><li>Ninja Assassin</li><li>Ninja Critical Hit</li><li>Ninja Slice</li><li>Notes - Reminder and Lists</li><li>Now QRcode Scan</li><li>Number Combination: Colored Chips</li></ul>";
  indexation[15] =
    "<h4>O</h4><ul><li>One Line Drawing</li><li>One Sentence Translator - Multifonctional Translator</li></ul>";
  indexation[16] =
    "<h4>P</h4><ul><li>Painting Photo Editor</li><li>Paper Doc Scanner</li><li>Parking Master</li><li>Part Message</li><li>Password Manager</li><li>Path - Horoscope & Astrology</li><li>PDF Scanner - Document Scanner</li><li>Personal Message</li><li>Peter Shoot</li><li>Photo & Exif Editor</li><li>Photo Collage</li><li>Photo Editor - Filters Effects</li><li>Photo Editor & Background Eraser</li><li>Photo Filters & Effects</li><li>Photo to Sketch</li><li>Photoly Remove Object & Editor</li><li>Piano</li><li>Piano Crush</li><li>Pista</li><li>Pixomatic</li><li>Player Spiral Maker 3D</li><li>Poco Launcher</li><li>Pop Girls Schooler</li><li>Premium SMS</li><li>Presets for Lightroom</li><li>Private Game Messages</li><li>Private Messenger</li><li>Private SMS</li><li>Professional Messenger</li><li>Pull Worm</li><li>Pulley Parkour</li></ul>";
  indexation[17] = "<h4>Q</h4><ul><li>Quick Talk Message</li></ul>";
  indexation[18] =
    "<h4>R</h4><ul><li>Racing Legend 3D</li><li>Razer Keyboard & Them</li><li>Recollect</li><li>Relx cash</li><li>Rescue Master</li><li>Retouch & Cutout</li><li>Rich Theme Message</li><li>Ringtones HD</li><li>Ringtones HD - Ringtone Maker</li><li>Roll Turn</li><li>Romy Rush</li><li>Rope Runner</li><li>Run And Dance</li><li>Run Bridge</li><li>Rush 2048：3D Shoot Cubes</li></ul>";
  indexation[19] =
    "<h4>S</h4><ul><li>Sand Drawing</li><li>ScanGuru</li><li>Scanner App</li><li>Scratch Carnival</li><li>Send SMS</li><li>Shake Shake Pig</li><li>Shake Shake Sheep</li><li>Shinning Gun</li><li>Shoot Dummy – Win Rewards & Paypal Cash</li><li>Shoot it: Using Gun</li><li>Shoot Master</li><li>Shooting Puzzle 2020</li><li>Simple Note Scanner</li><li>SlidePic</li><li>Slimy</li><li>Smart Messages</li><li>Smart SMS Messages</li><li>Smart TV Remote</li><li>Smile Emoji</li><li>Social Message</li><li>Spear Hero</li><li>SpeedPro Slow Speed Video Edit</li><li>Spin:Letter Roll</li><li>Spot 10 Differences</li><li>Sticker Maker</li><li>Stickerfy Sticker Maker</li><li>Stickers & GIF</li><li>Stock Wallpapers & Backgrounds</li><li>Style Message</li><li>Style Photo Collage</li><li>Super Flake</li><li>Super Hero-Effect</li><li>Super Hero-Save the world!</li><li>Sweet Pics - Baby Photo Edito</li></ul>";
  indexation[20] =
    "<h4>T</h4><ul><li>Talent Photo Editor - Blur Focus</li><li>Talent Trap – NEW</li><li>Tangram App Lock</li><li>TeasEar: ASMR Slime Antistress</li><li>Text Emoji SMS</li><li>Text SMS</li><li>Themes Chat Messenger</li><li>Themes Photo Keyboard</li><li>TheTruthSpy</li><li>Thief King</li><li>TimeStamp Camera</li><li>Tony Runs</li><li>ToonApp Cartoon Photo Editor</li><li>Track Sliding New</li><li>Translate Camera - Speak On</li><li>Translator Guru: Voice & Text</li></ul>";
  indexation[21] =
    "<h4>U</h4><ul><li>UltraFX - Effect Video Maker</li><li>Unicc QR Scanner</li><li>Unique Keyboard</li><li>Universal PDF Scanner</li></ul>";
  indexation[22] =
    "<h4>V</h4><ul><li>Vanilla Snap Camera</li><li>Video Puzzles - Magic Puzzle</li><li>VOCHI Video Effects Editor</li><li>Volume Booster Hearing Aid</li><li>Volume Booster Louder Sound Equalizer</li></ul>";
  indexation[23] =
    "<h4>W</h4><ul><li>War in Painting</li><li>Water Reminder</li><li>Weapon Fantasy</li><li>WeDrum: Drums, Real Drum Games</li><li>Widget Plus+ - Photo and Weather</li><li>Wood Sculptor</li><li>Work Now!</li><li>Wow Beauty Camera</li><li>Wow Translator</li></ul>";
  indexation[24] = "<h4>X</h4><ul><li>Xnspy</li></ul>";
  indexation[25] =
    "<h4>Y</h4><ul><li>Yoga for Beginner to Advanced</li><li>YouToon AI Cartoon Effects</li></ul>";
  indexation[26] = "<h4>Z</h4><ul><li>Ztime:Earn cash rewards easily</li></ul>";
  // for (let i = 27; i < 100; i++) {
  //   indexation[i] = '';
  // };
  //const text = indexation.join('');
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "silver";
  document.getElementById("myHeading").innerHTML =
    "<div id='caseRetour'>◀</div><div></div>Les deux";
  document.querySelector("main").style.fontFamily = "K2D, sans-serif";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", ouvrirAppNon);
  }
}
