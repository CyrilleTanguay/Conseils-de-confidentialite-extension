/**
 *
 * Ce fichier détecte l'URL du site de l'onglet actif et intègre le lien de la page des paramètres de ce site dans le bouton "Faire les modifications".
 *
 * La fonction popupFen() va ouvrir un popup présent dans le document ./MenuPr/script.js
 *
 */
//On définit l'onglet de la page

browser.tabs
  .query({
    currentWindow: true,
    active: true,
  })
  .then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
    console.log(tab.title);
    console.log("yes");
    //Définition du lien du bouton du popup, dépendamment du site consulté
    var lien = document.getElementById("BoutonSite");
    //Si l'URL de l'onglet contient "Facebook.com"...
    if (tab.url.includes("facebook.com")) {
      //...le lien dans le bouton du popup sera celui de la page de paramètres de Facebook
      lien.setAttribute("href", "https://www.facebook.com/settings/");
      //On indique à l'utilisateur qu'il peut modifier des paramètres
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres de Facebook";

      //On appelle une fonction qui va ouvrir le popup avec la liste de conseils
      lien.addEventListener("click", popupFen);
    } else if (tab.url.includes("twitter.com")) {
      lien.setAttribute("href", "https://twitter.com/settings/account");
      console.log(lien);
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres de Twitter";
    } else if (tab.url.includes("instagram.com/")) {
      lien.setAttribute("href", "https://www.instagram.com/accounts/edit/");
      console.log(lien);
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres d'Instagram";
    } else if (tab.url.includes("youtube.com/")) {
      lien.setAttribute("href", "https://www.youtube.com/account");
      console.log(lien);
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres de YouTube";
      //   lien.addEventListener("click", popupFen);
    } else if (tab.url.includes("google.com/")) {
      lien.setAttribute("href", "https://myaccount.google.com/");
      console.log(lien);
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres de Google";
    } else if (tab.url.includes("spotify.com/")) {
      lien.setAttribute("href", "https://open.spotify.com/settings");
      console.log(lien);
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres de Spotify";
    } else if (tab.url.includes("tiktok.com/")) {
      lien.setAttribute(
        "href",
        "https://www.tiktok.com/safety/fr-fr/account-settings/"
      );
      console.log(lien);
      document.getElementById("messageExt").innerHTML =
        "Vous pourriez faire des modifications dans les paramètres de Tiktok";
    }
    //  else if (tab.url.includes("about:preferences")) {
    //     lien.setAttribute("href", "https://myaccount.google.com/");
    //     console.log(lien);
    //     document.getElementById("messageExt").innerHTML = "Vous pourriez faire des modifications dans ces paramètres";
    //     console.log("prefs!!!")
    // }

    function popupFen() {
      document.addEventListener("load", browser.pageAction.openPopup());
      document.querySelector("body").innerHTML = "";
      // unReseau()
    }
  }, console.error);
