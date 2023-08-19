/**
 *
 * Le script de contenu s'exécute selon le contexte d'une page web donnée
 *
 * Source: https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
 *
 */

console.log("ey");
browser.tabs
  .query({
    currentWindow: true,
    active: true,
  })
  .then((tabs) => {
    let tab = tabs[0];
    browser.pageAction.setIcon({
      tabId: tab.id,
      path: "icons/icone64Google.svg",
    });
  }, console.error);

function onError(error) {
  console.error(`Error: ${error}`);
}
function logTabs(tabs) {
  for (const tab of tabs) {
    function onGot(item) {
      console.log(item);
      if (Object.values(item) == "true") {
        browser.pageAction.show(tab.id);
      }
      if (Object.values(item) == "false") {
        browser.pageAction.hide(tab.id);
      }
    }
    browser.storage.sync.get("GoogleCHeck").then(onGot, onError);
  }
}
