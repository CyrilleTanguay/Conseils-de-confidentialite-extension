/**
 * 
 * Ce fichier intègre le code HTML de la page d'accueil de l'index dans le popup.
 * 
 * 
 */

//Ajout d'écouteurs dès que le menu est chargé pour exécuter une fonction en cliquant sur une catégorie pour accéder à ses sous-catégories
window.onload = function startListen() {
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  //On remplit la fenêtre avec ces catégories
  document.getElementById('laListe').innerHTML = text;
  //On ajoute un écouteur à un élément id s'il est présent, ce qui va exécuter une fonction au clic
  var BtnNav = document.getElementById("leNav");
  if (BtnNav) {
    BtnNav.addEventListener("click", Navigateur);
  }
  var BtnOrdi = document.getElementById("VotreOrdi");
  if (BtnOrdi) {
    BtnOrdi.addEventListener("click", Ordi);
  }
  var BtnAppNon = document.getElementById('indexAppNon');
  if (BtnAppNon) {
    BtnAppNon.addEventListener('click', AppNon);
  }
  var BtnMDP = document.getElementById("leMDP");
  if (BtnMDP) {
    BtnMDP.addEventListener("click", MDP);
  }
  var BtnFiable = document.getElementById("fiable");
  if (BtnFiable) {
    BtnFiable.addEventListener("click", Fiable);
  }
  var BtnReseau = document.getElementById("reseau");
  if (BtnReseau) {
    BtnReseau.addEventListener("click", unReseau);
  }
  var BtnExto = document.getElementById("extorsion")
  if (BtnExto) {
    BtnExto.addEventListener("click", Extorsion);
  }
  var BtnAchats = document.getElementById("achats");
  if (BtnAchats) {
    BtnAchats.addEventListener("click", Achats);
  }
  var BtnAchatsApp = document.getElementById("achatDeApp");
  if (BtnAchatsApp) {
    BtnAchatsApp.addEventListener("click", achatApp);
  }
  var BtnSMS = document.getElementById("sms");
  if (BtnSMS) {
    BtnSMS.addEventListener("click", SMS);
  }
  var BtnPolitique = document.getElementById("politique");
  if (BtnPolitique) {
    BtnPolitique.addEventListener("click", Politique);
  }
  var BtnVirus = document.getElementById("virus");
  if (BtnVirus) {
    BtnVirus.addEventListener("click", Virus);
  }
  var BtnAttaque = document.getElementById("attaques");
  if (BtnAttaque) {
    BtnAttaque.addEventListener("click", Attaques);

  }
  var BtnMobile = document.getElementById("mobiles");
  if (BtnMobile) {
    BtnMobile.addEventListener("click", Mobiles);
  }
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  } else {
    document.getElementById("myHeading").style.textAlign = "center";
    document.getElementById("myHeading").style.display = "grid";
    document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  }
  //Écouteur sur le bouton des paramètres
  var BtnParams = document.getElementById('btmParam');
  if (BtnParams) {
    BtnParams.addEventListener("click", allerPr)
  }
  //Écouteur sur le bouton des sources
  var BtnSrc = document.getElementById("btnSrc");
  if (BtnSrc) {
    BtnSrc.addEventListener("click", allerSr)
  }
}

//Définition des variables
const indexation = [
  '<p id="VotreOrdi" class="iconeOui"><span class="icon-display"></span>Votre ordinateur<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="indexAppNon" class="iconeOui"><span class="icon-bin"></span>Applications à ne pas installer<span class="icon-FA-chevron-right"></span></p><hr>',
  '<p id="leNav" class="iconeOui"><span class="icon-firefox"></span>Navigateur<span class="icon-FA-chevron-right"></span></p><hr>',
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
  '<p id="mobiles" class="iconeOui"><span class="icon-mobile"></span>Téléphones mobiles<span class="icon-FA-chevron-right"></span></p>'
];
//La page des paramètres s'ouvre
function allerPr() {
  document.addEventListener("load", browser.runtime.openOptionsPage())
}
//Un onglet pour la page des sources s'ouvre
let createSource = {
  url: "listeSources.html"
};

function allerSr() {
  browser.tabs.create(createSource);
}
//Cette fonction permet de retourner au menu principal et réexécute majoritairement ce qui est présent dans la fonction startListen()
function RetourPrincipal() {
  indexation[0] = '<p id="VotreOrdi" class="iconeOui"><span class="icon-display"></span>Votre ordinateur<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[1] = '<p id="indexAppNon" class="iconeOui"><span class="icon-bin"></span>Applications à ne pas installer<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[2] = '<p id="leNav" class="iconeOui"><span class="icon-firefox"></span>Navigateur<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[3] = '<p id="leMDP" class="iconeOui"><span class="icon-key"></span>Mot de passe<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[4] = '<p id="fiable" class="iconeOui"><span class="icon-wondering2"></span>Fiabilité d’un site web consulté<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[5] = '<p id="reseau" class="iconeOui"><span class="icon-users"></span>Réseaux sociaux<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[6] = '<p id="extorsion" class="iconeOui"><span class="icon-evil2"></span>Extorsion / Sextorsion / Chantage<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[7] = '<p id="sms" class="iconeOui"><span class="icon-mail"></span>Messagerie<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[8] = '<p id="achats" class="iconeOui"><span class="icon-cart"></span>Achats en ligne<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[9] = '<p id="achatDeApp" class="iconeOui"><span class="icon-download2"></span>Achat d’application<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[10] = '<p id="politique" class="iconeOui"><span class="icon-file-text"></span>Politique de confidentialité<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[11] = '<p id="virus" class="iconeOui"><span class="icon-bug"></span>Virus<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[12] = '<p id="attaques" class="iconeOui"><span class="icon-target"></span>Attaques<span class="icon-FA-chevron-right"></span></p><hr>';
  indexation[13] = '<p id="mobiles" class="iconeOui"><span class="icon-mobile"></span>Téléphones mobiles<span class="icon-FA-chevron-right"></span></p>';
  for (let i = 14; i < 100; i++) {
    indexation[i] = '';
  };
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  //On définit l'en-tête
  document.getElementById('myHeading').innerHTML = "<span class='icon-cogs' id='btmParam'></span>Conseils<span class='icon-info' id='btmSources'></span>";
  document.getElementById('myHeading').style.color = "black";
  document.querySelector("header").style.backgroundColor = "aqua";
  document.querySelector("main").style.fontFamily = "Oswald, sans-serif";
  document.querySelector("main").style.lineHeight = "0.3";
  //On définit la grille
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.textAlign = "center";
  //On ajoute un écouteur à un élément id s'il est présent, ce qui va exécuter une fonction au clic
  var BtnNav = document.getElementById("leNav");
  if (BtnNav) {
    BtnNav.addEventListener("click", Navigateur);
  }
  var BtnOrdi = document.getElementById("VotreOrdi");
  if (BtnOrdi) {
    BtnOrdi.addEventListener("click", Ordi);
  }
  var BtnAppNon = document.getElementById('indexAppNon');
  if (BtnAppNon) {
    BtnAppNon.addEventListener('click', AppNon);
  }
  var BtnMDP = document.getElementById("leMDP");
  if (BtnMDP) {
    BtnMDP.addEventListener("click", MDP);
  }
  var BtnFiable = document.getElementById("fiable");
  if (BtnFiable) {
    BtnFiable.addEventListener("click", Fiable);
  }
  var BtnReseau = document.getElementById("reseau");
  if (BtnReseau) {
    BtnReseau.addEventListener("click", unReseau);
  }
  var BtnExto = document.getElementById("extorsion")
  if (BtnExto) {
    BtnExto.addEventListener("click", Extorsion);
  }
  var BtnAchats = document.getElementById("achats");
  if (BtnAchats) {
    BtnAchats.addEventListener("click", Achats);
  }
  var BtnAchatsApp = document.getElementById("achatDeApp");
  if (BtnAchatsApp) {
    BtnAchatsApp.addEventListener("click", achatApp);
  }
  var BtnSMS = document.getElementById("sms");
  if (BtnSMS) {
    BtnSMS.addEventListener("click", SMS);
  }
  var BtnPolitique = document.getElementById("politique");
  if (BtnPolitique) {
    BtnPolitique.addEventListener("click", Politique);
  }
  var BtnVirus = document.getElementById("virus");
  if (BtnVirus) {
    BtnVirus.addEventListener("click", Virus);
  }
  var BtnAttaque = document.getElementById("attaques");
  if (BtnAttaque) {
    BtnAttaque.addEventListener("click", Attaques);

  }
  var BtnMobile = document.getElementById("mobiles");
  if (BtnMobile) {
    BtnMobile.addEventListener("click", Mobiles);

  }
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  }
  var BtnParams = document.getElementById('btmParam');
  if (BtnParams) {
    BtnParams.addEventListener("click", allerPr)
  } else {
    document.getElementById("myHeading").style.textAlign = "center";
    document.getElementById("myHeading").style.display = "grid";
    document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  }
}