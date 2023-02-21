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
}else if (tab.url.includes("google.com/")){
    lien.setAttribute("href","https://myaccount.google.com/");console.log(lien);
    document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";
}
}, console.error)