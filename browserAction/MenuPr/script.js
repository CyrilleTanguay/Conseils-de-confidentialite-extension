//Ajout d'écouteurs dès que le menu est chargé pour exécuter une fonction en cliquant sur une catégorie pour accéder à ses sous-catégories
window.onload = function startListen() {

    var BtnNav= document.getElementById("leNav");
    if (BtnNav){
      BtnNav.addEventListener("click", Navigateur); 
    }
    var BtnOrdi= document.getElementById("VotreOrdi");
    if (BtnOrdi){
    BtnOrdi.addEventListener("click", Ordi); 
  }
  var BtnAppNon = document.getElementById('indexAppNon');
  if (BtnAppNon) {
    BtnAppNon.addEventListener('click', AppNon);
  }
  var BtnMDP = document.getElementById("leMDP");
  if (BtnMDP) {
    BtnMDP.addEventListener("click", MDP);
  }
  var BtnFiable = document.getElementById("fiable");
  if(BtnFiable){
    BtnFiable.addEventListener("click", Fiable);
  }
  var BtnReseau = document.getElementById("reseau");
  if(BtnReseau){
     BtnReseau.addEventListener("click", unReseau);
  }
  var BtnExto = document.getElementById("extorsion")
  if(BtnExto){
    BtnExto.addEventListener("click", Extorsion);
  }
  var BtnAchats = document.getElementById("achats");
  if(BtnAchats){
    BtnAchats.addEventListener("click", Achats);
  }
  var BtnAchatsApp = document.getElementById("achatDeApp");
  if(BtnAchatsApp){
    BtnAchatsApp.addEventListener("click", achatApp);

  }
  var BtnSMS = document.getElementById("sms");
  if(BtnSMS){
    BtnSMS.addEventListener("click", SMS);
  }
  var BtnPolitique = document.getElementById("politique");
  if(BtnPolitique){
    BtnPolitique.addEventListener("click", Politique);
  }
  var BtnVirus = document.getElementById("virus");
  if(BtnVirus){
    BtnVirus.addEventListener("click", Virus);
  }
  var BtnAttaque = document.getElementById("attaques");
  if(BtnAttaque){
    BtnAttaque.addEventListener("click", Attaques);

  }
  var BtnMobile = document.getElementById("mobiles");
  if(BtnMobile){
    BtnMobile.addEventListener("click", Mobiles);
  }
  var BtnReviens= document.getElementById("caseRetour");
  if (BtnReviens){
    BtnReviens.addEventListener("click", RetourPrincipal); 
  }
  else{
    document.getElementById("myHeading").style.textAlign="center";
    document.getElementById("myHeading").style.display="block";
  }

}  
//Cette fonction permet de retourner au menu principal
function RetourPrincipal(){
    document.getElementById('laListe').innerHTML='<p id="VotreOrdi">Votre ordinateur</p><hr><p id="indexAppNon"> Applications à ne pas installer (index)</p><hr><p id="leNav">Le navigateur</p><hr><p id="leMDP">Le mot de passe</p><hr><p id="fiable">La fiabilité d’un site web</p><hr><p id="reseau">Réseaux sociaux</p><hr><p id="extorsion">Extorsion / Sextorsion / Chantage</p><hr><p id="sms">Messagerie</p><hr><p id="achats">Achats en ligne</p><hr><p id="achatDeApp">Achat d’application</p><hr><p id="politique">La politique de confidentialité</p><hr><p id="virus">Virus</p><hr><p id="attaques">Attaques</p><hr><p id="mobiles">Conseils pour les téléphones mobiles</p>';
    document.getElementById('myHeading').innerHTML="Liste des conseils";
    document.querySelector("header").style.backgroundColor="aqua";
    document.querySelector("main").style.fontFamily="Oswald, sans-serif";


    var BtnNav= document.getElementById("leNav");
    if (BtnNav){
      BtnNav.addEventListener("click", Navigateur); 
    }
    var BtnOrdi= document.getElementById("VotreOrdi");
    if (BtnOrdi){
    BtnOrdi.addEventListener("click", Ordi); 
  }
  var BtnAppNon = document.getElementById('indexAppNon');
  if (BtnAppNon) {
    BtnAppNon.addEventListener('click', AppNon);
  }
  var BtnMDP = document.getElementById("leMDP");
  if (BtnMDP) {
    BtnMDP.addEventListener("click", MDP);
  }
  var BtnFiable = document.getElementById("fiable");
  if(BtnFiable){
    BtnFiable.addEventListener("click", Fiable);
  }
  var BtnReseau = document.getElementById("reseau");
  if(BtnReseau){
     BtnReseau.addEventListener("click", unReseau);
  }
  var BtnExto = document.getElementById("extorsion")
  if(BtnExto){
    BtnExto.addEventListener("click", Extorsion);
  }
  var BtnAchats = document.getElementById("achats");
  if(BtnAchats){
    BtnAchats.addEventListener("click", Achats);
  }
  var BtnAchatsApp = document.getElementById("achatDeApp");
  if(BtnAchatsApp){
    BtnAchatsApp.addEventListener("click", achatApp);
  }
  var BtnSMS = document.getElementById("sms");
  if(BtnSMS){
    BtnSMS.addEventListener("click", SMS);
  }
  var BtnPolitique = document.getElementById("politique");
  if(BtnPolitique){
    BtnPolitique.addEventListener("click", Politique);
  }
  var BtnVirus = document.getElementById("virus");
  if(BtnVirus){
    BtnVirus.addEventListener("click", Virus);
  }
  var BtnAttaque = document.getElementById("attaques");
  if(BtnAttaque){
    BtnAttaque.addEventListener("click", Attaques);

  }
  var BtnMobile = document.getElementById("mobiles");
  if(BtnMobile){
    BtnMobile.addEventListener("click", Mobiles);

  }
  var BtnReviens= document.getElementById("caseRetour");
  if (BtnReviens){
    BtnReviens.addEventListener("click", RetourPrincipal); 
  }
  else{
    document.getElementById("myHeading").style.textAlign="center";
    document.getElementById("myHeading").style.display="block";
  }
} 