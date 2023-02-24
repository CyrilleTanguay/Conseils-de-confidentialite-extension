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
  '<p id="VotreOrdi" class="iconeOui"><span class="icon-display"></span>Votre ordinateur</p><hr>',
  '<p id="indexAppNon" class="iconeOui"><span class="icon-bin"></span>Applications à ne pas installer</p><hr>',
  '<p id="leNav" class="iconeOui"><span class="icon-firefox"></span>Navigateur</p><hr>',
  '<p id="leMDP" class="iconeOui"><span class="icon-key"></span>Mot de passe</p><hr>',
  '<p id="fiable" class="iconeOui"><span class="icon-wondering2"></span>Fiabilité d’un site web consulté</p><hr>',
  '<p id="reseau" class="iconeOui"><span class="icon-users"></span>Réseaux sociaux</p><hr>',
  '<p id="extorsion" class="iconeOui"><span class="icon-evil2"></span>Extorsion / Sextorsion / Chantage</p><hr>',
  '<p id="sms" class="iconeOui"><span class="icon-mail"></span>Messagerie</p><hr>',
  '<p id="achats" class="iconeOui"><span class="icon-cart"></span>Achats en ligne</p><hr>',
  '<p id="achatDeApp" class="iconeOui"><span class="icon-download2"></span>Achat d’application</p><hr>',
  '<p id="politique" class="iconeOui"><span class="icon-file-text"></span>Politique de confidentialité</p><hr>',
  '<p id="virus" class="iconeOui"><span class="icon-bug"></span>Virus</p><hr>',
  '<p id="attaques" class="iconeOui"><span class="icon-target"></span>Attaques</p><hr>',
  '<p id="mobiles" class="iconeOui"><span class="icon-mobile"></span>Conseils pour les téléphones mobiles</p>'
];
//Cette fonction permet de retourner au menu principal
function RetourPrincipal(){
  indexation[0]= '<p id="VotreOrdi" class="iconeOui"><span class="icon-display"></span>Votre ordinateur</p><hr>';
  indexation[1]= '<p id="indexAppNon" class="iconeOui"><span class="icon-bin"></span>Applications à ne pas installer</p><hr>';
  indexation[2]= '<p id="leNav" class="iconeOui"><span class="icon-firefox"></span>Navigateur</p><hr>';
  indexation[3]= '<p id="leMDP" class="iconeOui"><span class="icon-key"></span>Mot de passe</p><hr>';
  indexation[4]= '<p id="fiable" class="iconeOui"><span class="icon-wondering2"></span>Fiabilité d’un site web consulté</p><hr>';
  indexation[5]= '<p id="reseau" class="iconeOui"><span class="icon-users"></span>Réseaux sociaux</p><hr>';
  indexation[6]= '<p id="extorsion" class="iconeOui"><span class="icon-evil2"></span>Extorsion / Sextorsion / Chantage</p><hr>';
  indexation[7]= '<p id="sms" class="iconeOui"><span class="icon-mail"></span>Messagerie</p><hr>';
  indexation[8]= '<p id="achats" class="iconeOui"><span class="icon-cart"></span>Achats en ligne</p><hr>';
  indexation[9]= '<p id="achatDeApp" class="iconeOui"><span class="icon-download2"></span>Achat d’application</p><hr>';
  indexation[10]='<p id="politique" class="iconeOui"><span class="icon-file-text"></span>Politique de confidentialité</p><hr>';
  indexation[11]='<p id="virus" class="iconeOui"><span class="icon-bug"></span>Virus</p><hr>';
  indexation[12]='<p id="attaques" class="iconeOui"><span class="icon-target"></span>Attaques</p><hr>';
  indexation[13]='<p id="mobiles" class="iconeOui"><span class="icon-mobile"></span>Conseils pour les téléphones mobiles</p>';
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