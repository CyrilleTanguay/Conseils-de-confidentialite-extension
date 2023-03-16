/**
 * 
 * Script pour les options
 */
function saveOptions(e) {
  browser.storage.sync.set({
    FBCheck: document.getElementById("FbCheck").checked,
    GoogleCHeck: document.getElementById("GoogleCheck").checked,
    ISTCheck: document.getElementById("InstCheck").checked,
    TWCheck: document.getElementById("TwCheck").checked,
    YTCheck: document.getElementById("YtCheck").checked
  });
  e.preventDefault();
  //On recharge l'extension pour faire en sorte que la modification se fasse sur les onglets ouverts
  browser.runtime.reload();


  // document.getElementById("messageOp").style.display="inherit"
  // setTimeout(rechargeExt, 3000);

  // function rechargeExt() {
  //     browser.runtime.reload();
  //     document.getElementById("messageOp").style.display="none"
  // }


}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.getElementById("FbCheck").checked = result.FBCheck;
    document.getElementById("GoogleCheck").checked = result.GoogleCHeck;
    document.getElementById("InstCheck").checked = result.ISTCheck;
    document.getElementById("TwCheck").checked = result.TWCheck;
    document.getElementById("YtCheck").checked = result.YTCheck;

  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get();
  getting.then(setCurrentChoice, onError);
  //  document.getElementById("messageOp").style.display="inherit";
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);