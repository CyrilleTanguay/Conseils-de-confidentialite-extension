function Ordi(){
  indexation[0] = ["<p id='ouvrirAjust' class='iconeOui'><span class='icon-FA-sliders'></span>Ajustements<span class='icon-circle-down'></span></p><div id='Ajust'><ul><li>Vérifiez les paramètres de sécurité de votre ordinateur et désactivez la collecte de données.</li><li>Faites la mise à jour du système si une nouvelle version est disponible. Les mises à jour contiennent des correctifs permettant de rendre le système moins vulnérable.</li><li>Désactivez la mise à jour automatique (pour Windows). Bien que faire une mise à jour du système soit primordial pour notre sécurité, elle peut survenir au mauvais moment.</li><li>Enlevez des connections tiers avec des applications.</li><li>Activez le pare-feu</li><li>Désactivez l’option « masquer les extensions de fichier ». Cela vous permettra de cerner des fichiers pirates.</li></ul></div><hr>"];
  indexation[1] = ["<p id='ouvrirInte' class='iconeOui'><span class='icon-sphere'></span>Internet<span class='icon-circle-down'></span></p><div id='Inte'><ul><li>Méfiez-vous des réseaux publics. Ils vous rendent plus vulnérables aux pirates. Ce n’est pas pour rien que lorsque vous choisissez ce réseau, il y a « réseau non sécurisé » qui est inscrit sur votre iPhone!</li><li>Désactivez Bluetooth si vous n’en avez pas besoin</li><li>Se connecter sur vos données cellulaires n’est pas plus sécuritaire. Vous pourriez être piraté par phishing ou par l’exploitation de vulnérabilités dans des appareils mobiles.</li><li>Si vous êtes sur un réseau public, n’allez pas sur les réseaux sociaux et ne vous connectez pas à un compte bancaire.</li></ul></div><hr>"];
indexation[2] = ["<p id='ouvrirAppInte'class='iconeOui'><span class='icon-FA-shield'></span>Logiciels à installer<span class='icon-circle-down'></span></p><div id='appInte'><ul><li>Un antivirus. Comme son nom l’indique, il permet de détecter des fichiers malveillants.</li><li>Un VPN. Si comme moi vous passez du temps sur YouTube, vous savez sûrement ce que c’est. En gros, un VPN permet de générer une adresse IP, ce qui vous permettra de rendre votre emplacement secret. L’argument de vente principal d’un VPN est le fait qu’il vous permette de regarder des séries ou des films en streaming qui ne sont disponibles que dans un pays étranger.</li></ul></div>"];
     for(let i = 3; i < 14; i++) {
        indexation[i] = '';
     };
  const text = indexation.join(''); 
    document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="red";
      
    for (let i = 0; i < document.querySelectorAll("div").length; i++) {
      document.querySelectorAll("div")[i].style.display="none";
    }
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Votre ordinateur";
        document.getElementById("caseRetour").style.display="initial";
 document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";   
console.log("oui");


var BtnAjust= document.getElementById("ouvrirAjust");
if (BtnAjust){
  BtnAjust.addEventListener("click", ouvrirAjust); 
}
var BtnInte=document.getElementById("ouvrirInte");
if(BtnInte){
  BtnInte.addEventListener("click", ouvrirInte);
}
var BtnAppInte=document.getElementById("ouvrirAppInte");
if(BtnAppInte){
  BtnAppInte.addEventListener("click", ouvrirAppInte);
}
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", RetourPrincipal); 
}


}



function ouvrirAjust(){
    var x = document.getElementById("Ajust");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirInte(){
    var x = document.getElementById("Inte");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirAppInte(){
    var x = document.getElementById("appInte");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
