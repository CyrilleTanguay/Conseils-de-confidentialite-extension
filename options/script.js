/**
 * 
 * Ajout d'une fonction prévue
 */
 function saveOptions(e) {
    browser.storage.sync.set({
        GoogleCheck: document.getElementById("GoogleCheck").value
    });  
    e.preventDefault();

  }
  
  function restoreOptions() {
    function setCurrentChoice(result) {
        document.getElementById("GoogleCheck").value = result.GoogleCheck || document.getElementById("GoogleCheck").isChecked;
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    let getting = browser.storage.sync.get("GoogleCheck");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);