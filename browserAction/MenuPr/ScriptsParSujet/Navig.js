/**
 * 
 * Ce fichier intègre le code HTML de la page "Votre navigateur" dans le popup et doit détecter les extensions installées.
 * 
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 * 
 * 
 */
//Catégories
function Navigateur() {
  indexation[0] = "<p id='ouvrirConfNav' class='iconeOui'><span class='icon-FA-sliders'></span>Configuration<span class='icon-circle-down'></span></p><div id='confNav'><ul>"
  indexation[1] = " <li>Définissez un navigateur par défaut:</li><ul><li>DuckDuckGo: ce navigateur est connu pour sa confidentialité.</li><li>Qwant: Connu lui aussi pour sa sécurité mais collecte quelques données pour des publicités.</li><li>Lilo: permet de financer une association de votre choix.</li><li>Ecosia: un moteur de recherche qui respecte non seulement vos données, mais aussi la planète. En effet, une partie de ses bénéfices sert à financer des programmes de reforestation.</li><li>Brave</li><li>StartPage.com: ce navigateur utilise Google mais sans les cookies.</li><li>SearX: Moteur libre</li></ul>"
  indexation[2] = " <li>Faites un ménage de vos cookies. Enlevez ceux qui peuvent concerner des sites que vous ne consultez plus ou que vous n’avez consulté qu’une fois.</li>"
  indexation[3] = " <li>Bloquez les permissions.</li>"
  indexation[4] = " <li>Activez les options de sécurité.</li></ul></div><hr>"
  indexation[5] = "<p id='CGPT' class='iconeOui' style='height:4.8px'><svg role='img' viewBox='0 0 24 24' style='width:11px;background-color:#65A293;fill:white;padding:3px; border-radius:4px 4px 0px 4px'><path d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z'/></svg>ChatGPT<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[7] = "<p id='Edge' class='iconeOui'><span class='icon-logo-microsoftedge'></span>Edge<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[8] = "<p id='Firefox' class='iconeOui'><span class='icon-logo-mozillafirefox'></span>Firefox<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[6] = "<p id='Chrome' class='iconeOui'><span class='icon-logo-googlechrome'></span>Chrome<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[9] = "<p id='Safari' class='iconeOui'><span class='icon-logo-safari'></span>Safari<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[10] = " <p id='ouvrirConfExt' class='iconeOui'><span class='icon-FA-puzzle-piece'></span>Extensions<span class='icon-circle-down'></span></p><div id='confExt'><ul>"
  indexation[11] = "<li>Disconnect: permet de vous protéger de cookies tiers. <div id='Disconnect'></div></li>"
  indexation[12] = "<li>Don't track me Google: simplifie les liens dans les recherches Google. <div id='DTM'></div></li>"
  indexation[13] = "<li>Privacy Badger. <div id='PRBdg'></div></li>"
  indexation[14] = "<li>Ghostery: Enlève les publicités. <div id='Ghst'></div></li>"
  indexation[15] = "<li>Facebook Container: Empêche Meta (Facebook, Instagram) de vous traquer même en dehors de Facebook. <div id='FbCo'></div></li>"
  indexation[16] = "<li>Return Youtube Dislike : Une extension qui, comme son nom l’indique, affiche les pouces rouges de Youtube. <div id='RYD'></div></li>"
  indexation[17] = "<li>NoScript: Gère les scripts JavaScript (Attention: il vous faudra souvent faire le tri des scripts pour qu'un site fonctionne). <div id='NSc'></div></li></ul></div><hr>"
  indexation[18] = "<p id='ouvrirOU' class='iconeOui'><span class='icon-FA-sliders'></span>Outils utiles<span class='icon-circle-down'></span></p><div id='OU'><ul>"
  indexation[19] = "<li><a href='https://haveibeenpwned.com/'>Have I Been Pwned</a>: Permet de savoir si votre addresse courriel/numéro de téléphone/mot de passe a fuité et si un site web est dangereux</li>"
  indexation[20] = "<li><a href='https://respectemesdatas.fr'>Je ne suis pas une Data</a>: un outil qui vous montre les données collectées par Facebook, Twitter, Instagram, LinkedIn, Google, Uber, Tinder, TikTok ou Netflix. Vous aurez ensuite accès à plusieurs options pour gérer ces données, comme les supprimer, les modifier, en obtenir une copie, etc.</li>"
  indexation[21] = "<li><a href='https://www.f-secure.com/en/home/free-tools/identity-theft-checker'>F-Secure</a>: vous permet de savoir si votre addresse courriel a fuitée </li>"
  indexation[22] = "<li><a href='https://www.avast.com/hackcheck#mac'>Avast Hack Check</a></li>"
  indexation[23] = "<li><a href='https://sec.hpi.de/ilc/?'>Hasso Plattner Institut</a></li>"
  indexation[24] = "<li><a href='https://cybernews.com/personal-data-leak-check/'>CyberNews</a>: un site d'informations sur la sécurité en ligne qui a aussi un outil pour savoir si vos informations en ligne ont fuité</li>"
  indexation[25] = "<li><a href='https://www.virustotal.com/gui/home/upload'>Virus Total</a>: un site qui permet de scanner un fichier pour savoir s'il contient un virus</li></ul></div>"
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  indexation.splice(25, 90);
  document.getElementById('laListe').innerHTML = text;

  //On s'assure que les listes déroulantes soient fermées et masquées    
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.querySelector("header").style.backgroundColor = "darkOrange";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Navigateur";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  document.getElementById("Disconnect").style.display = "initial";
  document.getElementById("DTM").style.display = "initial";
  document.getElementById("PRBdg").style.display = "initial";
  document.getElementById("Ghst").style.display = "initial";
  document.getElementById("FbCo").style.display = "initial";
  document.getElementById("RYD").style.display = "initial";
  document.getElementById("NSc").style.display = "initial";
  //On définit la grille
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }

  //Si, avec son ID, on découvre qu'une extension n'est pas installée, on met un bouton menant à sa page pour l'installer
  // if ((browser.management.get('jid1-ZAdIEUB7XOzOJw@jetpack'))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("Disconnect").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/dont-track-me-google1/'>Installer</a>"
  // }
  // console.log(browser.management.get('dont-track-me-google@robwu.nl'))
  // if ((browser.management.get('dont-track-me-google@robwu.nl'))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("DTM").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/dont-track-me-google1/'>Installer</a>"
  // }
  // if ((browser.management.get('jid1-MnnxcxisBPnSXQ@jetpack'))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("PRBdg").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/privacy-badger17/'>Installer</a>"
  // }
  // if ((browser.management.get('firefox@ghostery.com'))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("Ghst").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/ghostery/'>Installer</a>"
  // }
  // if ((browser.management.get("@contain-facebook"))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("FbCo").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/facebook-container/'>Installer</a>"
  // }
  // if (!(browser.management.get("@contain-facebook"))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("RYD").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/facebook-container/'>Installer</a>"
  // }
  // if (!(browser.management.get("{73a6fe31-595d-460b-a920-fcc0f8843232}"))) {
  //   console.log("installée")
  // } else {
  //   document.getElementById("NSc").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/noscript/'>Installer</a>"
  // }
  document.getElementById("Disconnect").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/disconnect/'>Installer</a>";
 document.getElementById("DTM").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/dont-track-me-google1/'>Installer</a>";
document.getElementById("PRBdg").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/privacy-badger17/'>Installer</a>";
document.getElementById("Ghst").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/ghostery/'>Installer</a>";
document.getElementById("FbCo").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/facebook-container/'>Installer</a>";
document.getElementById("RYD").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/return-youtube-dislikes/'> Installer</a>";
document.getElementById("NSc").innerHTML = "<a href='https://addons.mozilla.org/fr/firefox/addon/noscript/'>Installer</a>";
  var BtnConfNav = document.getElementById("ouvrirConfNav");

  if (BtnConfNav) {
    BtnConfNav.addEventListener("click", ouvrirConfNav);
  }
  var BtnConfExt = document.getElementById("ouvrirConfExt");

  if (BtnConfExt) {
    BtnConfExt.addEventListener("click", ouvrirConfExt);
  }
  var BtnReviens = document.getElementById("Edge");
if (BtnReviens) {
  BtnReviens.addEventListener("click", Edge);
}
var BtnReviens = document.getElementById("CGPT");
if (BtnReviens) {
  BtnReviens.addEventListener("click", ChatGPT);
}
var BtnReviens = document.getElementById("Chrome");
if (BtnReviens) {
  BtnReviens.addEventListener("click", Chrome);
}
var BtnReviens = document.getElementById("Firefox");
if (BtnReviens) {
  BtnReviens.addEventListener("click", Firefox);
}
var BtnReviens = document.getElementById("Safari");
if (BtnReviens) {
  BtnReviens.addEventListener("click", Safari);
}
var BtnReviens = document.getElementById("ouvrirOU");
if (BtnReviens) {
  BtnReviens.addEventListener("click", ouvrirOU);
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
function ouvrirOU() {
  var x = document.getElementById("OU");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Edge() {
  indexation[0] ='<ul><li>Supprimez l’extension Rédacteur Microsoft. Elle envoie à Microsoft tout ce que vous tapez sur votre ordi.</li></ul>';
  indexation.splice(1, 90);
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  document.getElementById("myHeading").style.color = "white";
  document.querySelector("header").style.backgroundColor = "#0078d7";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Edge";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Navigateur);
  }
}

function ChatGPT() {
  indexation[0] ='<ul><li>N’envoyez pas vos données personnelles à ChatGPT, car elles retiennent tout</li><li>ChatGPT n’est disponible officiellement ni sous la forme d’une extension web ni sous la forme d’une application mobile, donc attention aux imitations!</li></ul>';
  indexation.splice(1, 90);
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  document.getElementById("myHeading").style.color = "white";
  document.querySelector("header").style.backgroundColor = "#65A293";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>ChatGPT";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Navigateur);
  }
}

function Chrome() {
  indexation[0] = "<ul><li>Nettoyez l’historique de Chrome</li>"
  indexation[1] = "<li>Désactivez l’option « Vérifier l’orthographe du texte saisi sur les pages Web » ou choisissez l’option « Correcteur orthographique de base », car tout ce que vous tapez sera parvenu à Google!</li></ul>"
  indexation.splice(2, 90);
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  document.getElementById("myHeading").style.color = "white";
  document.querySelector("header").style.backgroundColor = "#0078d7";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Chrome";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Navigateur);
  }
}

function Firefox() {
 indexation[0] = "<ul><li>Dans la section « Applications », sélectionnez « Toujours demander » comme action pour le type de contenu et activez l’option « Demander s’il faut ouvrir ou enregistrer les autres fichiers ». Cela vous évitera le téléchargement de certains fichiers non voulus.</li>"
 indexation[1] = " <li>Sélectionnez l’option « Stricte ». Vous aurez une meilleure protection, mais cela a comme principal défaut de rendre certaines pages moins performantes.</li>"
 indexation[2] = " <li>Activez l’option « Ne pas me pister » (toujours). Cette option permet d’envoyer un message aux sites indiquant que vous ne voulez pas être traqué(e). Cependant, certains sites peuvent ne pas respecter cela.</li>"
 indexation[3] = " <li>Activez le mode HTTPS. La différence entre HTTP et HTTPS est que ce dernier est chiffré, ce qui ajoute une couche de protection contre les pirates.</li></ul>"
 indexation.splice(2, 90);
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  document.getElementById("myHeading").style.color = "white";
  document.querySelector("header").style.backgroundColor = "darkOrange";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Firefox";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Navigateur);
  }
}

function Safari() {
  indexation[0] = "<ul><li>Si Safari devient trop instable, vous pouvez faire ceci:</li><ul>"
  indexation[1] = " <li>Videz le cache et l'historique.</li>"
  indexation[2] = " <li>Supprimez des extensions</li>"
  indexation[3] = " <li>Supprimez le dossier bibliothèque (SAUVEGARDEZ TOUJOURS VOS DONNÉES AVANT). Pour ce,</li><ul>"
  indexation[4] = " <li>Allez dans le Finder </li>"
  indexation[5] = " <li>Allez dans le menu Aller -> Aller au dossier </li>"
  indexation[6] = " <li>Entrez ~/Library/, puis cliquez sur Aller</li>"
  indexation[7] = " <li>Allez dans le dossiez Safari, sélectionnez tous les fichiers et placez-les dans la corbeille </li></ul></ul>"
  indexation[8] = " <li>Supprimez vos données de saisies </li></ul>"

  indexation.splice(9, 90);
   const text = indexation.join('');
   document.getElementById('laListe').innerHTML = text;
   document.getElementById("myHeading").style.color = "white";
   document.querySelector("header").style.backgroundColor = "blue";
   document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Safari";
   document.getElementById("myHeading").style.textAlign = "right";
   document.getElementById("myHeading").style.display = "grid";
   document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
   var BtnReviens = document.getElementById("caseRetour");
   if (BtnReviens) {
     BtnReviens.addEventListener("click", Navigateur);
   }
 }
 