function Attaques(){
    document.getElementById('laListe').innerHTML="<p id='ouvrirDOS'>DOS</p> <div id='Dos'><ul><li>En cas d'attaque par amplification: Corrigez les protocoles et mettez à jour les serveurs. La multiplication des objets connectés risque de rendre ce genre d’attaques encore plus efficaces.</li><li>Prévention: menez une veille active sur les nouvelles attaques et vulnérabilités et récupérez sur Internet des correctifs logiciels (patchs) conçus par les éditeurs de logiciels ou certains groupes spécialisés</li></ul><p>2 logiciels</p><ul><li>SUMo: logiciel permettant de vérifier l’existence de mises à jour pour un logiciel</li><li>DDos: certains routeurs ont une fonction permettant de rediriger l’attaque vers une voie réseau sans issue pour réduire l’impact de l’attaque</li></ul></div><hr><p id='ouvrirInterc'>Attaque de l'intercepteur</p><div id='intercept'><ul><li>Attaque du protocole BGP: utilisez secureBGP ou soBGP</li></ul></div><hr><p id='ouvrirTampon'>Attaque par débordement de tampon</p><div id='debo'><ul><li>Développez des applications à l’aide de langages de programmation évolués assurant une gestion fine de la mémoire allouée ou bien à l’aide de langages de bas niveau en utilisant des bibliothèques de fonctions sécurisées (par exemple les fonctions strncpy)</li><li>Informez-vous sur des alertes et installez des correctifs</li></ul></div><hr><p id='ouvrirFaille'>Failles matérielles</p><div id='faille'><p>Routeurs</p><ul><li>Faille présente dans le microcode: </li><li>Raison: le serveur HTML est mal conçu, le système de mots de passe est défaillant ou il y a une porte dérobée non documentée par le constructeur (solution: mise à jour par flashage de la mémoire statique du routeur)</li><li>Failles majeures: remplacez temporairement le matériel impacté et surtout, suivez les bulletins d’informations des sites spécialisés</li></ul><p>Autres:</p><ul><li>Bluetooth: appliquez un mot de passe et désactivez-le lorsqu’il n’est pas utilisé</li><li>Fermez sa session quand on n’est plus devant son PC</li><li>APT: utiliser un pare-feu ou pour des entreprises, utiliser un ordinateur volontairement vulnérable</li></ul></div><hr><p id='ouvrirCS'>Attaque Cross-site scripting</p><div id='crsSite'><ul><li>Configurez le navigateur de manière à empêcher l’exécution de scripts</li></ul></div><hr><p id='ouvrirCWeb'>Pour le concepteur web</p><div id='concepteur'><ul><li>Vérifiez le format des données entrées par les utilisateurs.</li><li>Encodez ces données utilisateurs affichées en remplaçant les caractères spéciaux par leurs équivalents HTML</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>Retour</div>Attaques";
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }

    var BtnouvrirDOS= document.getElementById("ouvrirDOS");
    if (BtnouvrirDOS){
      BtnouvrirDOS.addEventListener("click", function ouvrirDOS(){
        var x = document.getElementById("Dos");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnouvrirInterc= document.getElementById("ouvrirInterc");
    if (BtnouvrirInterc){
      BtnouvrirInterc.addEventListener("click", function ouvrirInterc(){
        var x = document.getElementById("intercept");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnouvrirTampon= document.getElementById("ouvrirTampon");
    if (BtnouvrirTampon){
      BtnouvrirTampon.addEventListener("click", function ouvrirTampon(){
    var x = document.getElementById("debo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}); 
    }
    var BtnouvrirFaille= document.getElementById("ouvrirFaille");
    if (BtnouvrirFaille){
      BtnouvrirFaille.addEventListener("click", 
      function ouvrirFaille(){
          var x = document.getElementById("faille");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
      }); 
    }
    var BtnouvrirCS= document.getElementById("ouvrirCS");
    if (BtnouvrirCS){
        BtnouvrirCS.addEventListener("click", function ouvrirCS(){
        var x = document.getElementById("crsSite");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnouvrirCWeb= document.getElementById("ouvrirCWeb");
    if (BtnouvrirCWeb){
        BtnouvrirCWeb.addEventListener("click", function ouvrirCWeb(){
        var x = document.getElementById("concepteur");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
}



