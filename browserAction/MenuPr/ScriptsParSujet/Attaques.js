function Attaques(){
    document.getElementById('laListe').innerHTML="<p onclick='ouvrirDOS()'>DOS</p> <div id='Dos'><ul><li>En cas d'attaque par amplification: Corrigez les protocoles et mettez à jour les serveurs. La multiplication des objets connectés risque de rendre ce genre d’attaques encore plus efficaces.</li><li>Prévention: menez une veille active sur les nouvelles attaques et vulnérabilités et récupérez sur Internet des correctifs logiciels (patchs) conçus par les éditeurs de logiciels ou certains groupes spécialisés</li></ul><p>2 logiciels</p><ul><li>SUMo: logiciel permettant de vérifier l’existence de mises à jour pour un logiciel</li><li>DDos: certains routeurs ont une fonction permettant de rediriger l’attaque vers une voie réseau sans issue pour réduire l’impact de l’attaque</li></ul></div><hr><p onclick='ouvrirInterc()'>Attaque de l'intercepteur</p><div id='intercept'><ul><li>Attaque du protocole BGP: utilisez secureBGP ou soBGP</li></ul></div><hr><p onclick='ouvrirTampon()'>Attaque par débordement de tampon</p><div id='debo'><ul><li>Développez des applications à l’aide de langages de programmation évolués assurant une gestion fine de la mémoire allouée ou bien à l’aide de langages de bas niveau en utilisant des bibliothèques de fonctions sécurisées (par exemple les fonctions strncpy())</li><li>Informez-vous sur des alertes et installez des correctifs</li></ul></div><hr><p onclick='ouvrirFaille()'>Failles matérielles</p><div id='faille'><p>Routeurs</p><ul><li>Faille présente dans le microcode: </li><li>Raison: le serveur HTML est mal conçu, le système de mots de passe est défaillant ou il y a une porte dérobée non documentée par le constructeur (solution: mise à jour par flashage de la mémoire statique du routeur)</li><li>Failles majeures: remplacez temporairement le matériel impacté et surtout, suivez les bulletins d’informations des sites spécialisés</li></ul><p>Autres:</p><ul><li>Bluetooth: appliquez un mot de passe et désactivez-le lorsqu’il n’est pas utilisé</li><li>Fermez sa session quand on n’est plus devant son PC</li><li>APT: utiliser un pare-feu ou pour des entreprises, utiliser un ordinateur volontairement vulnérable</li></ul></div><hr><p onclick='ouvrirCS()'>Attaque Cross-site scripting</p><div id='crsSite'><ul><li>Configurez le navigateur de manière à empêcher l’exécution de scripts</li></ul></div><hr><p onclick='ouvrirCWeb()'>Pour le concepteur web</p><div id='concepteur'><ul><li>Vérifiez le format des données entrées par les utilisateurs.</li><li>Encodez ces données utilisateurs affichées en remplaçant les caractères spéciaux par leurs équivalents HTML</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Attaques";
}
function ouvrirDOS(){
    var x = document.getElementById("Dos");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirInterc(){
    var x = document.getElementById("intercept");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirTampon(){
    var x = document.getElementById("debo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirFaille(){
    var x = document.getElementById("faille");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirCS(){
    var x = document.getElementById("crsSite");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirCWeb(){
    var x = document.getElementById("concepteur");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}