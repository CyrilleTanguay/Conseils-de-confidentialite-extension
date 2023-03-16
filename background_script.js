/**
 * 
 * Le script d'arrière-plan surveille et réagit aux activités du navigateur (ouverture d'un onglet, consulter une nouvelle page)
 * 
 * 
 * Source: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts
 * 
 */
console.log(location.href);

//Fonction pour détecter les options pour les notifications de l'extension sur Google
function logTabs(tabs) {
    for (const tab of tabs) {
        function onGot(item) {
            console.log(item);
            if (Object.values(item) == "true") {
                browser.pageAction.show(tab.id);
            }
            if (Object.values(item) == "false") {
                browser.pageAction.hide(tab.id);

            } else {
                browser.pageAction.show(tab.id);
            }
        }
        browser.storage.sync.get("GoogleCHeck").then(onGot, onError);
    }
}

function onError(error) {
    console.error(`Error: ${error}`);
}

//Les options sont appliquées sur tout onglet Google
browser.tabs.query({
    url: "*://*.google.com/*"
}).then(logTabs, onError);

//Fonction pour détecter les options pour les notifications de l'extension sur Facebook
function logTabsFB(tabs) {
    for (const tab of tabs) {
        function onGot(item) {
            console.log(item);
            if (Object.values(item) == "true") {
                browser.pageAction.show(tab.id);
            }
            if (Object.values(item) == "false") {
                browser.pageAction.hide(tab.id);

            } else {
                browser.pageAction.show(tab.id);
            }
        }
        browser.storage.sync.get("FBCheck").then(onGot, onError);
    }
}
//Les options sont appliquées sur tout onglet Facebook
browser.tabs.query({
    url: "*://*.facebook.com/*"
}).then(logTabsFB, onError);

//Fonction pour détecter les options pour les notifications de l'extension sur Instagram
function logTabsIS(tabs) {
    for (const tab of tabs) {
        function onGot(item) {
            console.log(item);
            if (Object.values(item) == "true") {
                browser.pageAction.show(tab.id);
            }
            if (Object.values(item) == "false") {
                browser.pageAction.hide(tab.id);

            } else {
                browser.pageAction.show(tab.id);
            }
        }
        browser.storage.sync.get("ISTCheck").then(onGot, onError);
    }
}
//Les options sont appliquées sur tout onglet Instagram
browser.tabs.query({
    url: "*://*.instagram.com/*"
}).then(logTabsIS, onError);
//Fonction pour détecter les options pour les notifications de l'extension sur Twitter
function logTabsTW(tabs) {
    for (const tab of tabs) {


        function onGot(item) {

            console.log(item);
            if (Object.values(item) == "true") {
                browser.pageAction.show(tab.id);
            }
            if (Object.values(item) == "false") {
                browser.pageAction.hide(tab.id);

            } else {
                browser.pageAction.show(tab.id);
            }
        }
        browser.storage.sync.get("TWCheck").then(onGot, onError);
    }
}
//Les options sont appliquées sur tout onglet Twitter
browser.tabs.query({
    url: "*://*.twitter.com/*"
}).then(logTabsTW, onError);
//Fonction pour détecter les options pour les notifications de l'extension sur YouTube
function logTabsYT(tabs) {
    for (const tab of tabs) {


        function onGot(item) {

            console.log(item);
            if (Object.values(item) == "true") {
                browser.pageAction.show(tab.id);
            }
            if (Object.values(item) == "false") {
                browser.pageAction.hide(tab.id);

            } else {
                browser.pageAction.show(tab.id);
            }
        }
        browser.storage.sync.get("YTCheck").then(onGot, onError);
    }
}
//Les options sont appliquées sur tout onglet YouTube
browser.tabs.query({
    url: "*://*.youtube.com/*"
}).then(logTabsYT, onError);