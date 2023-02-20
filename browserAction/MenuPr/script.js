//Ajout d'écouteurs dès que le menu est chargé pour exécuter une fonction en cliquant sur une catégorie pour accéder à ses sous-catégories
window.onload = function startListen() {

    const text = indexation.join(''); 
    // for(let i = 1; i < 14; i++) {
    //   text += indexation + [i];
    // };
    document.getElementById('laListe').innerHTML=text;
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
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto"; 
  }

  
  

}  
const indexation = [
  /*1*/'<p id="VotreOrdi">Votre ordinateur</p><hr>',
  '<p id="indexAppNon">Applications à ne pas installer</p><hr>',
  '<p id="leNav">Navigateur</p><hr>',
  '<p id="leMDP">Mot de passe</p><hr>',
  '<p id="fiable">Fiabilité d’un site web consulté</p><hr>',
  '<p id="reseau">Réseaux sociaux</p><hr>',
  '<p id="extorsion">Extorsion / Sextorsion / Chantage</p><hr>',
  '<p id="sms">Messagerie</p><hr>',
  '<p id="achats">Achats en ligne</p><hr>',
  '<p id="achatDeApp">Achat d’application</p><hr>',
  '<p id="politique">Politique de confidentialité</p><hr>',
  '<p id="virus">Virus</p><hr>',
  '<p id="attaques">Attaques</p><hr>',
  '<p id="mobiles">Conseils pour les téléphones mobiles</p>'];
//Cette fonction permet de retourner au menu principal
function RetourPrincipal(){
  indexation[0]='<p id="VotreOrdi">Votre ordinateur</p><hr>';
  indexation[1]='<p id="indexAppNon"> Applications à ne pas installer</p><hr>';
  indexation[2]='<p id="leNav">Navigateur</p><hr>';
  indexation[3]='<p id="leMDP">Mot de passe</p><hr>';
  indexation[4]='<p id="fiable">Fiabilité du site web consulté</p><hr>';
  indexation[5]='<p id="reseau">Réseaux sociaux</p><hr>';
  indexation[6]='<p id="extorsion">Extorsion / Sextorsion / Chantage</p><hr>';
  indexation[7]='<p id="sms">Messagerie</p><hr>';
  indexation[8]='<p id="achats">Achats en ligne</p><hr>';
  indexation[9]='<p id="achatDeApp">Achat d’application</p><hr>';
  indexation[10]='<p id="politique">Politique de confidentialité</p><hr>';
  indexation[11]='<p id="virus">Virus</p><hr>';
  indexation[12]='<p id="attaques">Attaques</p><hr>';
  indexation[13]='<p id="mobiles">Conseils pour les téléphones mobiles</p>';
  for(let i = 14; i < 100; i++) {
    indexation[i] = '';
 };
    const text = indexation.join(''); 
    document.getElementById('laListe').innerHTML=text;
    document.getElementById('myHeading').innerHTML="Conseils";
    document.getElementById('myHeading').style.color="black";
    document.querySelector("header").style.backgroundColor="aqua";
    document.querySelector("main").style.fontFamily="Oswald, sans-serif";
    document.querySelector("main").style.lineHeight="0.5";

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
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto"; 
  }
} 