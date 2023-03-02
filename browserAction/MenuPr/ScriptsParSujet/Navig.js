//Catégories
function Navigateur() {
  indexation[0] = "<p id='ouvrirConfNav' class='iconeOui'><span class='icon-FA-sliders'></span>Configuration<span class='icon-circle-down'></span></p><div id='confNav'><ul>"
  indexation[1] = "<li>Dans la section « Applications », sélectionnez « Toujours demander » comme action pour le type de contenu et activez l’option « Demander s’il faut ouvrir ou enregistrer les autres fichiers ». Cela vous évitera le téléchargement de certains fichiers non voulus.</li><ul>"
  indexation[2] = " <li>Définissez un navigateur par défaut:</li><li>DuckDuckGo: ce navigateur est connu pour sa confidentialité.</li><li>Qwant: Connu lui aussi pour sa sécurité mais collecte quelques données pour des publicités.</li><li>Lilo: permet de financer une association de votre choix.</li><li>Ecosia: un moteur de recherche qui respecte non seulement vos données, mais aussi la planète. En effet, une partie de ses bénéfices sert à financer des programmes de reforestation.</li><li>Brave</li><li>StartPage.com: ce navigateur utilise Google mais sans les cookies.</li><li>SearX: Moteur libre</li></ul>"
  indexation[3] = " <li>Sélectionnez l’option « Stricte ». Vous aurez une meilleure protection, mais cela a comme principal défaut de rendre certaines pages moins performantes.</li>"
  indexation[4] = " <li>Activez l’option « Ne pas me pister » (toujours). Cette option permet d’envoyer un message aux sites indiquant que vous ne voulez pas être traqué(e). Cependant, certains sites peuvent ne pas respecter cela.</li>"
  indexation[5] = " <li>Activez le mode HTTPS. La différence entre HTTP et HTTPS est que ce dernier est chiffré, ce qui ajoute une couche de protection contre les pirates.</li>"
  indexation[6] = " <li>Faites un ménage de vos cookies. Enlevez ceux qui peuvent concerner des sites que vous ne consultez plus ou que vous n’avez consulté qu’une fois.</li>"
  indexation[7] = " <li>Bloquez les permissions.</li>"
  indexation[8] = " <li>Activez les options de sécurité.</li></ul></div><hr>"
  indexation[9] = " <p id='ouvrirConfExt' class='iconeOui'><span class='icon-FA-puzzle-piece'></span>Extensions<span class='icon-circle-down'></span></p><div id='confExt'><ul>"
  indexation[10] = "<li>Disconnect: permet de vous protéger de cookies tiers<div id='Disconnect'></div></li>"
  indexation[11] = "<li>Don't track me Google: simplifie les liens dans les recherches Google<div id='DTM'></div></li>"
  indexation[12] = "<li>Privacy Badger<div id='PRBdg'></div></li>"
  indexation[13] = "<li>Ghostery: Enlève les publicités<div id='Ghst'></div></li>"
  indexation[14] = "<li>Facebook Container: Empêche Meta (Facebook, Instagram) de vous traquer même en dehors de Facebook.<div id='FbCo'></div></li>"
  indexation[15] = "<li>Return Youtube Dislike : Une extension qui, comme son nom l’indique, affiche les pouces rouges de Youtube.<div id='RYD'></div></li>"
  indexation[16] = "<li>NoScript: Gère les scripts JavaScript (Attention: il vous faudra souvent faire le tri des scripts pour qu'un site fonctionne.)<div id='NSc'></div></li></ul></div>"
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  //On s'assure que les listes déroulantes soient fermées et masquées    
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.querySelector("header").style.backgroundColor = "orange";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Navigateur";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  //On définit la grille
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  }

//Si, avec son ID, on découvre qu'une extension n'est pas installée, on met un bouton menant à sa page pour l'installer
  if ((browser.management.get('jid1-ZAdIEUB7XOzOJw@jetpack'))) {
    console.log("installée")
  } else {
    document.getElementById("Disconnect").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/dont-track-me-google1/'>Installer</a>"
  }
  console.log(browser.management.get('dont-track-me-google@robwu.nl'))
  if ((browser.management.get('dont-track-me-google@robwu.nl'))) {
    console.log("installée")
  } else {
    document.getElementById("DTM").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/dont-track-me-google1/'>Installer</a>"
  }
  if ((browser.management.get('jid1-MnnxcxisBPnSXQ@jetpack'))) {
    console.log("installée")
  } else {
    document.getElementById("PRBdg").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/privacy-badger17/'>Installer</a>"
  }
  if ((browser.management.get('firefox@ghostery.com'))) {
    console.log("installée")
  } else {
    document.getElementById("Ghst").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/ghostery/'>Installer</a>"
  }
  if ((browser.management.get("@contain-facebook"))) {
    console.log("installée")
  } else {
    document.getElementById("FbCo").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/facebook-container/'>Installer</a>"
  }
  if (!(browser.management.get("@contain-facebook"))) {
    console.log("installée")
  } else {
    document.getElementById("RYD").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/facebook-container/'>Installer</a>"
  }
  if (!(browser.management.get("{73a6fe31-595d-460b-a920-fcc0f8843232}"))) {
    console.log("installée")
  } else {
    document.getElementById("NSc").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/noscript/'>Installer</a>"
  }
  var BtnConfNav = document.getElementById("ouvrirConfNav");

  if (BtnConfNav) {
    BtnConfNav.addEventListener("click", ouvrirConfNav);
  }
  var BtnConfExt = document.getElementById("ouvrirConfExt");

  if (BtnConfExt) {
    BtnConfExt.addEventListener("click", ouvrirConfExt);
  }
}
//Si la liste déroulante est masquée, on l'affiche et vice-versa
function ouvrirConfNav() {
  var x = document.getElementById("confNav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function ouvrirConfExt() {
  var x = document.getElementById("confExt");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}