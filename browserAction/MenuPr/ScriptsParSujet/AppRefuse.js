/**
 *
 * Ce fichier intègre le code HTML de la page "Applications à retirer" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RogueApp se trouve dans le document "RogueApps.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */
function AppNon() {
  const listAll = [
    {
      id: "ouvrirAppDes",
      icon: "icon-FA-ban",
      title: "Applications à désinstaller",
      iconRight: "icon-circle-down",
      idContent: "AppDes",
      content: [
        "Adware Doctor",
        "ChatGPT Chat GPT AI With GPT-3. Il s’agit d’une version illégale de ChatGPT.",
        "Codice Fiscale 2022",
        "Dr. Antivirus",
        "Dr. Battery",
        "Dr. Cleaner Disk",
        "Dr. Cleaner Pro",
        "Dr.Unarchiver",
        "Duplicate Finder",
        "FakeSpy",
        "File Manager Small, Lite",
        "GodFather (malware)",
        "Internet Explorer.",
        "Open Any Files",
        "Pokemon-go.io (malware)",
        "QuickTime (uniquement si vous êtes sur Windows). Des failles ont été découvertes et Apple a abandonné cette version du logiciel.",
        "Super Mario 3: Mario Forever",
        "WhatsApp Pink (malware)",
        "Vex Editor",
      ],
    },
    {
      id: "RogueApp",
      icon: "icon-FA-clone",
      title: "Logiciels de type Rogue",
      iconRight: "icon-FA-chevron-right",
      idContent: "",
      content: "",
      function: RogueApp,
    },
    {
      id: "ouvrirAppRet",
      icon: "icon-FA-lemon-o",
      title: "Applications néfastes retirées",
      iconRight: "icon-circle-down",
      idContent: "appRet",
      content: [
        "AVG Antivirus 2011 – Imite AVG.",
        "ContraVirus – Utilise une base de signatures dépassée.",
        "Defense Center",
        "Microsoft Security Essentials – Se fait passer pour le programme légitime éponyme.",
        "MS AntiSpyware 2009 – Exploite le nom de Microsoft Antispyware, aujourd’hui WindowDefender.",
        "PCSecureSystem",
        "PerfectCleaner",
        "Spydawn",
        "SpyLax – Anciennement connu sous le nom de SpyDoctor,se fait passer pour Spyware Doctor. ",
        "SpywareBot – Imite Spybot - Search & Destroy.",
        "Winpc Defender – Imite Windows Defender.",
      ],
    },
    {
      id: "ouvrirAppEnCas",
      icon: "icon-FA-warning",
      title: "Si vous avez un logiciel malveillant",
      iconRight: "icon-circle-down",
      idContent: "appEnCas",
      content: [
        "Supprimez-le en plaçant l’application dans la corbeille et en la ,vidant <b><u>(CE N’EST PAS TOUT)</u></b>",
        "Accédez au cache de l’application",
        "<ul><li>Windows: Activez l’option « Afficher les fichiers cachés » et allez dans « ProgramData »</li><li>Apple: Pomme + Maj + (.), allez dans la bibliothèque (il y a deux bibliothèques) puis dans le dossier « Application Support ». Trouvez le dossier correspondant au nom de l'application.</li></ul",
        "Supprimez-le",
      ],
    },
  ];
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = listAll
    .map((a,i) =>
      paragraphList(a.id, a.icon, a.title, a.iconRight, a.idContent, a.content)+ (i == listAll.length - 1 ? "" : "<hr/>")
    )
    .join("");
  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "red";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

  HeaderTitle = "Applications à retirer";
  headerUp();

  //On définit la grille
  alignHeader();

  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }

  listAll.map((l) => {
    if (l.iconRight == "icon-FA-chevron-right") {
      document.getElementById(l.id).addEventListener("click", l.function);
    } else {
      OpenList(l.id, l.idContent);
    }
  });
}
