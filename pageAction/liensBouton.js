//On définit l'onglet de la page
browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    console.log(tab.title);
    console.log("yes");
//Définition du lien du bouton du popup, dépendamment du site consulté
var lien = document.getElementById("BoutonSite");
//Si l'URL de l'onglet contient "Facebook.com"... 
if(tab.url.includes("facebook.com")){
    //...le lien dans le bouton du popup sera celui de la page de paramètres de Facebook
lien.setAttribute("href", "https://www.facebook.com/settings/");
//On indique à l'utilisateur qu'il peut modifier des paramètres
document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans les paramètres de Facebook";
//On appelle une fonction qui va ouvrir le popup avec la liste de conseils
lien.addEventListener("click", popupFen)
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
    lien.addEventListener("click", popupFen)

}else if (tab.url.includes("google.com/")){
    lien.setAttribute("href","https://myaccount.google.com/");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";

}
else if (tab.url.includes("about:preferences")){
    lien.setAttribute("href","https://myaccount.google.com/");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";
console.log("prefs!!!")
}
function popupFen(){

document.addEventListener("load", browser.browserAction.openPopup())
  

}}, console.error)
