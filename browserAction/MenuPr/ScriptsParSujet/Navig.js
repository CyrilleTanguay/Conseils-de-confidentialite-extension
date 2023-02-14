function Navigateur(){
    document.getElementById('laListe').innerHTML="<p id='ouvrirConfNav'>Configuration</p><div id='confNav'><ul><li>Dans la section « Applications », sélectionnez « Toujours demander » comme action pour le type de contenu et activez l’option « Demander s’il faut ouvrir ou enregistrer les autres fichiers ». Cela vous évitera le téléchargement de certains fichiers non voulus.</li><ul><li>Définissez un navigateur par défaut:</li><li>DuckDuckGo: ce navigateur est connu pour sa confidentialité.</li><li>Qwant: Connu lui aussi pour sa sécurité mais collecte quelques données pour des publicités.</li><li>Lilo: permet de financer une association de votre choix.</li><li>Ecosia: un moteur de recherche qui respecte non seulement vos données, mais aussi la planète. En effet, une partie de ses bénéfices sert à financer des programmes de reforestation.</li><li>Brave</li><li>StartPage.com: ce navigateur utilise Google mais sans les cookies.</li><li>SearX: Moteur libre</li></ul><li>Sélectionnez l’option « Stricte ». Vous aurez une meilleure protection, mais cela a comme principal défaut de rendre certaines pages moins performantes.</li><li>Activez l’option « Ne pas me pister » (toujours). Cette option permet d’envoyer un message aux sites indiquant que vous ne voulez pas être traqué(e). Cependant, certains sites peuvent ne pas respecter cela.</li><li>Activez le mode HTTPS. La différence entre HTTP et HTTPS est que ce dernier est chiffré, ce qui ajoute une couche de protection contre les pirates.</li><li>Faites un ménage de vos cookies. Enlevez ceux qui peuvent concerner des sites que vous ne consultez plus ou que vous n’avez consulté qu’une fois.</li><li>Bloquez les permissions.</li><li>Activez les options de sécurité.</li></ul></div><hr><p id='ouvrirConfExt'>Extensions</p><div id='confExt'><ul><li>Disconnect: permet de vous protéger de cookies tiers</li><li>Privacy Badger</li><li>Ghostery: Enlève les publicités</li><li>Facebook Container: Empêche Meta (Facebook, Instagram) de vous traquer même en dehors de Facebook.</li><li>Return Youtube Dislike : Une extension qui, comme son nom l’indique, affiche les pouces rouges de Youtube.</li><li>NoScript: Gère les scripts JavaScript (Attention: il vous faudra souvent faire le tri des scripts pour qu'un site fonctionne.)</li></ul></div>";
    document.querySelector("header").style.backgroundColor="orange";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>Retour</div>Le navigateur";
    var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", RetourPrincipal); 
}
var BtnConfNav = document.getElementById("ouvrirConfNav");

if(BtnConfNav){
  BtnConfNav.addEventListener("click", ouvrirConfNav);
}
var BtnConfExt = document.getElementById("ouvrirConfExt");

if (BtnConfExt){
  BtnConfExt.addEventListener("click", ouvrirConfExt); 
}
}

function ouvrirConfNav(){
    var x = document.getElementById("confNav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirConfExt(){
    var x = document.getElementById("confExt");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}