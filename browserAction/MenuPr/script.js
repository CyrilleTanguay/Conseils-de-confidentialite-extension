/**
 *
 * Ce fichier intègre le code HTML de la page d'accueil de l'index dans le popup.
 *
 *
 */

function paragraphList(id, icon, title, rightIcon, idContent, content) {
  return `<p id="${id}" class="iconeOui"><span class="${icon}">
  </span>${title}<span class="${rightIcon}"></span></p>
${
  rightIcon == "icon-circle-down"
    ? `<div id="${idContent}" style="display: none">${
        id == "phish"
          ? `<p id='introP'>Il s’agit probablement du type d’arnaque le plus populaire. Elle peut être:</p>`
          : ""
      }<ul>${content.map((a) => `<li>${a}</li>`).join("")}</ul></div>`
    : ``
}`;
}

function paragraphListSub(
  id,
  icon,
  title,
  rightIcon,
  contentId,
  introText,
  contentList,
  list,
  i
) {
  return `<p id=${id} class='iconeOui'><span class=${icon}></span>${title}<span class=${rightIcon}></span></p>${contentList ? `<div id=${contentId}>
  ${introText ? `<p id='introP'>${introText}</p><br/>` : ""}${contentList
    .map(
      (s) =>
        `${s.headerText ? `<p>${s.headerText}</p>` : ""}<ul>${s.subContent
          .map(
            (d) => `<li>${d.text}
              ${
                d.subList
                  ? "<ul>" +
                    d.subList
                      .map((sList) => `<li>${sList.text}</li>`)
                      .join("") +
                    "</ul>"
                  : ""
              }
              </li>`
          )
          .join("")}</ul>`
    )
    .join("")}</div>`: ""}${i == list.length - 1 ? "" : "<hr/>"}`;
}

function OpenBlock(id, openId) {
  var x = document.getElementById(id);
  var y = document.getElementById(openId);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.children[1].className = "icon-circle-up";
  } else {
    x.style.display = "none";
    y.children[1].className = "icon-circle-down";
  }
}

const HomePage = [
  {
    LignePr: "<hr>",
    AcIcone: "icon-display",
    AcId: "VotreOrdi",
    LesCats: "Votre ordinateur",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-bin",
    AcId: "indexAppNon",
    LesCats: "Applications à ne pas installer",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-earth",
    AcId: "leNav",
    LesCats: "Navigateur",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-key",
    AcId: "leMDP",
    LesCats: "Mot de passe",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-wondering2",
    AcId: "fiable",
    LesCats: "Fiabilité d’un site web",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-users",
    AcId: "reseau",
    LesCats: "Réseaux sociaux",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-evil2",
    AcId: "extorsion",
    LesCats: "Extorsion / Sextorsion / Chantage",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-mail",
    AcId: "sms",
    LesCats: "Messagerie",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-cart",
    AcId: "achats",
    LesCats: "Achats en ligne",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-download2",
    AcId: "achatDeApp",
    LesCats: "Achat d’application",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-file-text",
    AcId: "politique",
    LesCats: "Politique de confidentialité",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-bug",
    AcId: "virus",
    LesCats: "Virus",
  },
  {
    LignePr: "<hr>",
    AcIcone: "icon-target",
    AcId: "attaques",
    LesCats: "Attaques",
  },
  {
    LignePr: "",
    AcIcone: "icon-mobile",
    AcId: "mobiles",
    LesCats: "Téléphones mobiles",
  },
];

//Ajout d'écouteurs dès que le menu est chargé pour exécuter une fonction en cliquant sur une catégorie pour accéder à ses sous-catégories
window.onload = function startListen() {
  //On s'assure que les variables ne soient pas séparées par une virgule
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  let text = HomePage.map(
    (home, i) =>
      paragraphList(
        home.AcId,
        home.AcIcone,
        home.LesCats,
        "icon-FA-chevron-right"
      ) + (i == HomePage.length - 1 ? "" : "<hr/>")
  ).join("");

  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML = text;
  document.getElementById(
    "myHeading"
  ).innerHTML = `<span class='icon-cogs' id='btmParam'></span>Conseils<span class='icon-info' id='btnSrc'></span>`;
  document.querySelector("header").style.backgroundColor = "#00B1CA";
  document.getElementById("myHeading").style.color = "white";
  // document.querySelector("main").style.fontFamily = "Oswald, sans-serif";

  const MapPages = [
    {
      id: "leNav",
      page: Navigateur,
    },
    {
      id: "VotreOrdi",
      page: Ordi,
    },
    {
      id: "indexAppNon",
      page: AppNon,
    },
    {
      id: "leMDP",
      page: MDP,
    },
    {
      id: "fiable",
      page: Fiable,
    },
    {
      id: "reseau",
      page: unReseau,
    },
    {
      id: "extorsion",
      page: Extorsion,
    },
    {
      id: "achats",
      page: Achats,
    },
    {
      id: "achatDeApp",
      page: achatApp,
    },
    {
      id: "sms",
      page: SMS,
    },
    {
      id: "politique",
      page: Politique,
    },
    {
      id: "virus",
      page: Virus,
    },
    {
      id: "attaques",
      page: Attaques,
    },
    {
      id: "mobiles",
      page: Mobiles,
    },
  ];
  //On ajoute un écouteur à un élément id s'il est présent, ce qui va exécuter une fonction au clic

  MapPages.map((e) => {
    if (document.getElementById(e.id)) {
      document.getElementById(e.id).addEventListener("click", e.page);
    }
  });

  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  } else {
    document.getElementById("myHeading").style.textAlign = "center";
    document.getElementById("myHeading").style.display = "grid";
    document.getElementById("myHeading").style.letterSpacing = "0.07em";
    document.getElementById("myHeading").style.gridTemplateColumns =
      "auto auto auto";
  }
  //Écouteur sur le bouton des paramètres
  var BtnParams = document.getElementById("btmParam");
  if (BtnParams) {
    BtnParams.addEventListener("click", allerPr);
  }
  //Écouteur sur le bouton des sources
  var BtnSrc = document.getElementById("btnSrc");
  if (BtnSrc) {
    BtnSrc.addEventListener("click", allerSr);
  }
};

//Définition des variables
const indexation = [
  '<p id="VotreOrdi" class="iconeOui"><span class="icon-display"></span>Votre ordinateur<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="indexAppNon" class="iconeOui"><span class="icon-bin"></span>Applications à ne pas installer<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="leNav" class="iconeOui"><span class="icon-earth"></span>Navigateur<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="leMDP" class="iconeOui"><span class="icon-key"></span>Mot de passe<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="fiable" class="iconeOui"><span class="icon-wondering2"></span>Fiabilité d’un site web consulté<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="reseau" class="iconeOui"><span class="icon-users"></span>Réseaux sociaux<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="extorsion" class="iconeOui"><span class="icon-evil2"></span>Extorsion / Sextorsion / Chantage<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="sms" class="iconeOui"><span class="icon-mail"></span>Messagerie<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="achats" class="iconeOui"><span class="icon-cart"></span>Achats en ligne<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="achatDeApp" class="iconeOui"><span class="icon-download2"></span>Achat d’application<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="politique" class="iconeOui"><span class="icon-file-text"></span>Politique de confidentialité<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="virus" class="iconeOui"><span class="icon-bug"></span>Virus<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="attaques" class="iconeOui"><span class="icon-target"></span>Attaques<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="mobiles" class="iconeOui"><span class="icon-mobile"></span>Téléphones mobiles<span class="icon-FA-chevron-right"></span></p>',
];

var HeaderTitle = "";

function headerUp() {
  document.getElementById("myHeading").innerHTML =
    "<div id='caseRetour'>◀</div><div></div><div> " + HeaderTitle + "</div>";
}
//Seul le bouton de retour est affiché en tout temps

document.getElementById("caseRetour").style.display = "initial";
//La page des paramètres s'ouvre
function allerPr() {
  document.addEventListener("load", browser.runtime.openOptionsPage());
}
//Un onglet pour la page des sources s'ouvre
let createSource = {
  url: "../listeSources.html",
};

function allerSr() {
  browser.tabs.create(createSource);
}

function alignHeader() {
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";
}

function OpenList(id, openId) {
  if (document.getElementById(id)) {
    document.getElementById(id).addEventListener("click", function () {
      var x = document.getElementById(openId);
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(id).children[1].className = "icon-circle-up";
      } else {
        x.style.display = "none";
        document.getElementById(id).children[1].className = "icon-circle-down";
      }
    });
  }
}
