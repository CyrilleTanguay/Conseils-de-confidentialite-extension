const indexation = [
    /*1*/'<p id="VotreOrdi">Votre ordinateur</p><hr>',
    '<p id="indexAppNon">Applications à ne pas installer</p><hr>',
    '<p id="leNav">Navigateur</p><hr>',
    '<p id="leMDP">Mot de passe</p><hr>',
    '<p id="fiable">Fiabilité d’un site web consulté</p><hr>',
    '<p id="reseau">Réseaux sociaux</p><hr>',
    '<p id="extorsion">Extorsion / Sextorsion / Chantage</p><hr>',
    '<p id="sms">Messagerie</p><hr>',
    '<p id="achats">Achats en ligne</p><hr>',
    '<p id="achatDeApp">Achat d’application</p><hr>',
    '<p id="politique">Politique de confidentialité</p><hr>',
    '<p id="virus">Virus</p><hr>',
    '<p id="attaques">Attaques</p><hr>',
    '<p id="mobiles">Conseils pour les téléphones mobiles</p>'];
    window.onload = function(){
    if(window.location.href="https://www.youtube.com/account"){
        popupYtube();
    }
    console.log("Ah")}
function popupYtube() {
    indexation[0]="<ul><li>Vérifiez le check-up de sécurité Google</li>"
indexation[1]="<li>Activez la protection du compte contre les attaques ciblées. Cela ne s’applique qu’aux profils plus à risque d’être exposés que d’autres (journalistes, personnalités publiques...).</li>"
indexation[2]="<li>Utilisez les fonctionnalités avertissant les internautes d’une attaque</li>"
indexation[3]="<li>Méfiez-vous des demandes de partenariat</li>"
indexation[4]="<li>Définissez qui peut voir vos vidéos.</li>"
indexation[5]="<li>Ne renseignez votre mot de passe dans aucun formulaire</li>"
indexation[6]="<p>Méfiez-vous des tutoriels de mauvaise qualité! La qualité d’un tutoriel peut être remise en question si:</p><ul>"
indexation[7]="  <li>On ne comprend rien de ce qu’il dit.</li>"
indexation[8]="  <li>Les commentaires sont négatifs et il y a beaucoup de pouces rouges. C’est pour ça que je vous ai demandé d’installer l’extension permettant d’afficher le nombre de pouces rouges.</li>"
indexation[9]="  <li>L’objet de son étude n’est pas clair.</li>"
indexation[10]="  <li>Il n’y a pas de texte de présentation</li></ul></ul>"
for(let i = 11; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="red";
document.querySelector("p").style.lineHeight="inherit";
document.querySelector("p").style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>YouTube";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
}