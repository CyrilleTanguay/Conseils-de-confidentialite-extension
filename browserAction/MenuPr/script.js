function RetourPrincipal(){
    document.getElementById('laListe').innerHTML='<p id="VotreOrdi">Votre ordinateur</p><hr><p id="indexAppNon"> Applications à ne pas installer (index)</p><hr><p id="leNav" onclick="Navigateur()">Le Navigateur</p><hr><p id="leMDP" onclick="MDP()">Le mot de passe</p><hr><p id="fiable" onclick="Fiable()">La fiabilité d’un site web</p><hr><p id="reseau" onclick="Reseaux()">Réseaux sociaux</p><hr><p id="extorsion" onclick="Extorsion()">Extorsion / Sextorsion / Chantage</p><hr><p id="sms" onclick="SMS()">Messagerie</p><hr><p id="achats" onclick="Achats()">Achats en ligne</p><hr><p id="achatDeApp" onclick="achatApp()">Achat d’application</p><hr><p id="politique" onclick="Politique()">La politique de confidentialité</p><hr><p id="virus" onclick="Virus()">Virus</p><hr><p id="attaques" onclick="Attaques()">Attaques</p><hr><p id="mobiles" onclick="Mobiles()">Conseils pour les téléphones mobiles</p>';
    document.getElementById('myHeading').innerHTML="Liste des conseils";
    document.querySelector("header").style.backgroundColor="aqua";
    document.querySelector("main").style.fontFamily="Oswald, sans-serif";

    
}
function startListen(){
    if(document.getElementById("indexAppNon")){
document.getElementById("indexAppNon").addEventListener("click", AppNon);}
document.getElementById("leNav").addEventListener("click", Navigateur);
document.getElementById("leMDP").addEventListener("click", MDP);
document.getElementById("fiable").addEventListener("click", Fiable);
document.getElementById("reseau").addEventListener("click", Reseaux);
document.getElementById("extorsion").addEventListener("click", Extorsion);
document.getElementById("sms").addEventListener("click", SMS);
document.getElementById("achats").addEventListener("click", Achats);
document.getElementById("achatDeApp").addEventListener("click", achatApp);
document.getElementById("politique").addEventListener("click", Politique);
document.getElementById("virus").addEventListener("click", Virus);
document.getElementById("attaques").addEventListener("click", Attaques);
document.getElementById("mobiles").addEventListener("click", Mobiles);}