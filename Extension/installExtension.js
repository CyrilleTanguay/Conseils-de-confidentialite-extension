if (browser.management.get("@contain-facebook")!=null){
    console.log("installée")
}
else{
    document.getElementById("FbCo").innerHTML="<button>Installer</button>"
    document.getElementById("FbCo").addEventListener("click", browser.management.install("https://addons.mozilla.org/fr/firefox/addon/facebook-container/"))
}