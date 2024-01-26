/**
 *
 * Ce fichier intègre le code HTML de la page "Logiciels de type Rogue" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction AppNon se trouve dans le document "AppRefuse.js"
 *
 *
 */
function RogueApp() {
  const listRogue = [
    {
      letter: "A",
      entries: [
        "ANG Antivirus a",
        "AntiVermins",
        "Antivirus 2008, 2009, 2010",
        "Antivirus 360 (un clone de MS Antivirus)",
        "AntiVirus Gold ou AntivirusGT – Développé par ICommerce Solutions. Imite AVG Antivirus.",
        "Antivirus Master",
        "Antivirus Pro 2009, 2010, 2017",
        "Antivirus System PRO",
        "Antivirus XP 2008 et 2010",
        "AV Antivirus Suite",
        "AV Security Essentials",
        "AV Security Suite",
        "Awola",
      ],
    },
    {
      letter: "B",
      entries: [
        "BestsellerAntivirus, Browser Defender",
        "ByteDefender, alias ByteDefender Security 2010 – Un bootleg de BitDefender Antivirus",
      ],
    },
    {
      letter: "C",
      entries: [
        "Cleanator",
        "CleanThis",
        "Cloud Protection",
        "Control Center",
        "Cyber Security, Core Security",
      ],
    },
    {
      letter: "D",
      entries: [
        "Data Protection",
        "Defru",
        "Desktop Security 2017",
        "Disc Antivirus Professional",
        "Disk Doctor",
        "Doctor Antivirus",
        "Dr Guard",
        "DriveCleaner",
      ],
    },
    {
      letter: "E",
      entries: [
        "EasySpywareCleaner, EasyFix Tools",
        "Eco AntiVirus",
        "Errorsafe, Error Expert",
        "E-Set Antivirus 2011 – Alias ESet Antivirus 2011. Exploite le nom de ESET (À ne pas confondre avec l’application légitime du même nom)",
        "Essential Cleaner",
      ],
    },
    {
      letter: "F",
      entries: ["Flu Shot 4"],
    },
    {
      letter: "G",
      entries: ["Green Antivirus 2009", "GroffoAV"],
    },
    {
      letter: "H",
      entries: [
        "Hard Drive Diagnostic",
        "HDD Fix",
        "HDD Plus",
        "HDD Rescue",
        "Home Security Solutions",
      ],
    },
    {
      letter: "I",
      entries: [
        "IEDefender",
        "InfeStop",
        "Internet Antivirus 2011",
        "Internet Antivirus, InstallShield (alias Internet Antivirus Pro, distribué par plus4scan.com)",
        "Internet Defender 2011",
        "Internet Security 2010, 2011, 2012",
        "Internet Security Essentials",
        "Internet Security Guard",
      ],
    },
    {
      letter: "L",
      entries: [
        "Live PC Care",
        "Live Security Platinum",
        "Live Security Suite",
      ],
    },
    {
      letter: "M",
      entries: [
        "Mac Defender",
        "Mac Protector",
        "MacSweeper",
        "Malware Defense",
        "Malware Protection Center",
        "MalwareAlarm",
        "MalwareCor",
        "MalwareCrush",
        "Memory Fixer",
        "MS Antivirus – Alias Microsoft Anti Malware. Imite le nom de Microsoft Antivirus ou de Microsoft Security Essentials.",
        "MS Removal Tool",
        "MxOne Antivirus",
        "My Security Engine",
        "My Security Shield",
        "My Security Wall",
      ],
    },
    {
      letter: "N",
      entries: ["Netcom3 Cleaner"],
    },
    {
      letter: "P",
      entries: [
        "PAL Spyware Remover",
        "Paladin Antivirus",
        "PC Antispy",
        "PC Antispyware",
        "PC Clean Pro",
        "PC Defender Antivirus",
        "PC Optimizer Pro",
        "PC Privacy Cleaner",
        "PCKeeper",
        "PCPrivacy Tools",
        "Perfect Defender 2009, Perfect Optimizer",
        "Personal Antivirus",
        "Personal Internet Security 2011",
        "Personal Security",
        "Personal Shield Pro",
        "PersonalAntiSpy Free",
        "Privacy Center",
      ],
    },
    {
      letter: "S",
      entries: [
        "SAntivirus",
        "Security Essentials 2010 (à ne pas confondre avec Microsoft Security Essentials)",
        "Security Shield",
        "Security Solution 2011",
        "Security Suite Platinum",
        "Security Tool",
        "Security Toolbar 7.1",
        "Segurazo",
        "Smartpcfixer",
        "SpyBouncer",
        "SpyContra",
        "SpyControl",
        "SpyCrush",
        "SpyEraser",
        "SpyGuarder",
        "SpyHeal (alias SpyHeals & VirusHeal)",
        "Spylocked",
        "SpyMarshal",
        "SpyOfficer",
        "SpyRid",
        "SpyShelter",
        "SpySheriff (a.k.a. PestTrap, BraveSentry, SpyTrooper)",
        "SpySpotter",
        "Spyware B1aster – Exploite le nom de SpywareBlaster et il n’existe aucune version d’essai en ligne.",
        "Spyware Cleaner",
        "Spyware Protect 2009",
        "Spyware Stormer, Spyware X-terminator",
        "Spyware Striker Pro",
        "SpywareGuard 2008 - Imite SpywareGuard de Javacool Software",
        "SpywareNo – Clone de SpySheriff.",
        "SpywareQuake",
        "SpywareSheriff –Clone de SpySheriff.",
        "SpywareStop – Anciennement SpywareBot.",
        "SpywareStrike",
        "SpyWiper",
        "Super AV",
        "SysGuard",
        "Sysinternals Antivirus",
        "System Antivirus 2008",
      ],
    },
    {
      letter: "T",
      entries: [
        "Terminexor – Clone de Spybot Search & Destroy et viole la politique de confidentialité de l’application ou met fin aux conditions",
        "TheSpyBot – Clone de Spybot - Search & Destroy",
        "ThinkPoint",
        "Total Antivirus 2020",
        "Total Secure 2009",
        "Total Win 7 Security",
        "Total Win Vista Security",
        "Total Win XP Security",
      ],
    },
    {
      letter: "U",
      entries: ["UltimateCleaner", "Ultra Defragger"],
    },
    {
      letter: "V",
      entries: [
        "Virus Locker",
        "VirusBurst",
        "VirusBursters",
        "VirusGuard",
        "VirusHeat",
        "VirusIsolator",
        "VirusMelt",
        "VirusProtectPro (alias AntiVirGear)",
        "Vista Antivirus 2008",
        "Vista Home Security 2011",
        "Vista Internet Security 2012",
        "Vista Security 2011 et 2012",
        "Vista Smart Security 2010",
        "Volcano Security Suite",
      ],
    },

    {
      letter: "W",
      entries: [
        "Win 7 Home Security 2011",
        "Win Antispyware Center",
        "Win HDD",
        "Win7 Antispyware 2011",
        "WinAntiVirus Pro 2006",
        "Windows Police Pro",
        "WinFixer",
        "WinHound",
        "Winpc Antivirus",
        "WinSpywareProtect",
        "WinWeb Security 2008",
        "Winwebsec",
        "Wireshark Antivirus",
        "Wolfram Antivirus",
        "WorldAntiSpy",
      ],
    },
    {
      letter: "X",
      entries: [
        "XP AntiMalware",
        "XP AntiSpyware 2009, 2010 et 2012",
        "XP Antivirus 2010 et 2012",
        "XP Antivirus Pro 2010",
        "XP Defender Pro",
        "XP Home Security 2011",
        "XP Internet Security 2010",
      ],
    },
    {
      letter: "Y",
      entries: ["Your PC Protector"],
    },
  ];

  const text = `<p id='introP'>Les logiciels de type Rogue sont des faux logiciels de sécurité</p>
  ${listRogue
    .map(
      (e) =>
        `<h4>${e.letter}</h4><ul>${e.entries
          .map((entry) => `<li>${entry}</li>`)
          .join("")}</ul>`
    )
    .join("")}`;
  document.getElementById("laListe").innerHTML = text;

  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("p").style.lineHeight = "initial";
  document.querySelector("p").style.fontFamily = "K2D, sans-serif";
  document.querySelector("main").style.fontFamily = "K2D, sans-serif";

  HeaderTitle = "Logiciels de type Rogue";
  headerUp();
  alignHeader();
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", AppNon);
  }
}
