function AppNon(){
    document.getElementById('laListe').innerHTML="<p id='ouvrirAppDes'>Applications à désinstaller</p><div id='AppDes'><ul><li>Adware Doctor</li><li>ChatGPT Chat GPT AI With GPT-3. Il s’agit d’une version illégale de ChatGPT.</li><li>Codice Fiscale 2022</li><li>Dr. Antivirus</li><li>Dr. Battery</li><li>Dr. Cleaner Disk</li><li>Dr. Cleaner Pro</li><li>Dr.Unarchiver</li><li>Duplicate Finder</li><li>FakeSpy</li><li>File Manager Small, Lite</li><li>GodFather (malware)</li><li>Internet Explorer.</li><li>Open Any Files</li> <li>Pokemon-go.io (malware)</li><li>QuickTime (uniquement si vous êtes sur Windows). Des failles ont été découvertes et Apple a abandonné cette version du logiciel.</li><li>Vex Editor</li></ul></div><hr><p id='RogueApp'>Logiciels de type Rogue</p><hr><p id='ouvrirAppRet'>Applications néfastes retirées</p><div id='appRet'><ul><li>AVG Antivirus 2011 – Imite AVG.</li><li>ContraVirus – Utilise une base de signatures dépassée.</li><li>Defense Center</li><li>Microsoft Security Essentials – Se fait passer pour le programme légitime éponyme.</li><li>MS AntiSpyware 2009 – Exploite le nom de Microsoft Antispyware, aujourd’hui WindowDefender.</li><li>PCSecureSystem</li><li>PerfectCleaner</li><li>Spydawn</li><li>SpyLax – Anciennement connu sous le nom de SpyDoctor,se fait passer pour Spyware Doctor. li><li>SpywareBot – Imite Spybot - Search & Destroy.</li><li>Winpc Defender – Imite Windows Defender.</li></ul></div><hr><p id='ouvrirAppEnCas'>Si vous avez un logiciel malveillant</p><div id='appEnCas'><ul><li>Supprimez-le en plaçant l’application dans la corbeille et en la vidant <b><u>(CE N’EST PAS TOUT)</u></b></li><li>Accédez au cache de l’application</li><ul><li>Windows: Activez l’option « Afficher les fichiers cachés » et allez dans « ProgramData »</li><li>Apple: Pomme + Maj + (.) et allez dans la bibliothèque (il y a deux bibliothèques)</li></ul><li>Supprimez-le</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀ Retour</div><div></div>Applications à retirer";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";   

var BtnOuvrirAppDes= document.getElementById("ouvrirAppDes");
if (BtnOuvrirAppDes){
  BtnOuvrirAppDes.addEventListener("click", ouvrirAppDes); 
}

var BtnOuvrirRogue= document.getElementById("RogueApp");
if (BtnOuvrirRogue){
  BtnOuvrirRogue.addEventListener("click", RogueApp); 
}

var BtnOuvAppRet= document.getElementById("ouvrirAppRet");
if (BtnOuvAppRet){
  BtnOuvAppRet.addEventListener("click", ouvrirAppRet); 
}
var BtnOuvAppEnCas= document.getElementById("ouvrirAppEnCas");
if (BtnOuvAppEnCas){
  BtnOuvAppEnCas.addEventListener("click", ouvrirAppEnCas); 
}

var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", RetourPrincipal); 
}
function ouvrirAppDes(){
    var x = document.getElementById("AppDes");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirAppRet(){
    var x = document.getElementById("appRet");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirAppEnCas(){
    var x = document.getElementById("appEnCas");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}}