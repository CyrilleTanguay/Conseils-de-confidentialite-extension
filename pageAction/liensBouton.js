//L'utilisateur est redirigé vers la page des paramètres du site
browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    console.log(tab.title);
    console.log("yes");
   
var lien = document.getElementById("BoutonSite");
if(tab.url.includes("facebook.com")){
lien.setAttribute("href", "https://www.facebook.com/settings/");console.log(lien);
document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";
}
else if (tab.url.includes("twitter.com")) {
    lien.setAttribute("href","https://twitter.com/settings/account");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";

}
else if (tab.url.includes("instagram.com/")){
    lien.setAttribute("href","https://www.instagram.com/accounts/edit/");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";

}
else if (tab.url.includes("youtube.com/")){
    lien.setAttribute("href","https://www.youtube.com/account");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";
    lien.addEventListener("click", popupYt)

}else if (tab.url.includes("google.com/")){
    lien.setAttribute("href","https://myaccount.google.com/");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";

}
}, console.error)
function popupYt(){
   // browser.browserAction.setPopup({ 
  //      popup: "./browserAction/ReseauPopup/ReseauPopup.html/" 
  //  })
 //   browser.browserAction.openPopup();
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
  document.querySelector('body').innerHTML=text;
  browser.pageAction.openPopup()

}
const indexation = [
    '','','','','','','','','','','','','',''];