function unReseau(){
indexation[0]="<p id='introP'>Êtes-vous sur un réseau social? Si oui, vous n’êtes sûrement pas sans savoir qu’ils ne sont pas très respectueux en matière de vie privée.</p>"
indexation[1]="<p id='ouvrirGenRes'>Général</p><div id='reseauGen'><ul>"
indexation[2]="<li>Utilisez un pseudonyme sur les forums et les sites marchands</li><li>Désactivez la géolocalisation</li>"
indexation[3]="<li>Activez l’authentification à deux facteurs.</li>"
indexation[4]="<li>Désactivez le ciblage publicitaire</li>"
indexation[5]="<li>Privilégiez les publications entièrement assumées.</li>"
indexation[6]="<li>Vérifiez régulièrement qui est connecté. S’il y a des personnes suspectes, déconnectez-les et changez votre mot de passe.</li>"
indexation[7]="<li>Ne partagez pas de données trop privées (ses enfants, son domicile, des objets précieux...)</li>"
indexation[8]="<li>Désactivez le pistage via les publicités et la localisation.</li></ul></div><hr>"
indexation[9]="<p id='Deez'>Deezer</p><hr>"
indexation[10]="<p id='Edge'>Edge</p><hr>"
indexation[11]="<p id='Fb'>Facebook</p><hr>"
indexation[12]="<p id='Google'>Google</p><hr>"
indexation[13]="<p id='Insta'>Instagram</p><hr>"
indexation[14]="<p id='Messng'>Messenger</p><hr>"
indexation[15]="<p id='Nint'>Nintendo</p><hr>"
indexation[16]="<p id='Sig'>Signal</p><hr>"
indexation[17]="<p id='Skype'>Skype</p><hr>"
indexation[18]="<p id='Snapchat'>Snapchat</p><hr>"
indexation[19]="<p id='Spotify'>Spotify</p><hr>"
indexation[20]="<p id='Telegram'>Telegram</p><hr>"
indexation[21]="<p id='TikTok'>TikTok</p><hr>"
indexation[22]="<p id='Twitter'>Twitter</p><hr>"
indexation[23]="<p id='YTube'>YouTube</p><hr>"
indexation[24]="<p id='Zoom'>Zoom</p><hr>"
indexation[25]="<p id='ouvrirSitesRencontre'>Les sites de rencontre</p><div id='sitesRen'><ul>"
indexation[26]="<li>Ne mettez jamais votre adresse, lieu de travail, numéro fixe, ou le nom de votre école dans votre description.</li>"
indexation[27]="<li>Soyez honnête mais pas déplacé</li>"
indexation[28]="<li>Utilisez une adresse courriel distincte sans info personnelle</li>"
indexation[29]="<li>Méfiez-vous si vous recevez des photos osées, car si vous leur rendez la pareille, vous deviendrez une victime d’extorsion. Cela se passe surtout sur des applications visant la communauté LGBTQ+.</li></ul></div><hr>"
indexation[30]="<p id='ouvrirPartage'>Partage de photos osées</p>"
indexation[31]="<div id='partagePhoto'><ul>"
indexation[32]="<li><b><i><u>Rien ne vous oblige à envoyer des photos osées, alors n’en envoyez que si vous le voulez vraiment.</u></i></b></li>"
indexation[33]="<li>Ne montrez jamais votre visage ou un signe distinctif (piercing, tatouage...) sur ces photos.</li> "
indexation[34]="<li>Faites en sorte que le décor ne puisse vous identifier.</li><li>N’envoyez rien à quelqu’un en qui vous n’avez pas totalement confiance.</li></ul></div><hr>"
indexation[35]="<p id='ouvrirTrolls'>Trolls</p><div id='troll'><ul>"
indexation[36]="<li>Ne lui répondez pas. Les trolls veulent avoir de l’attention, donc, n’entrez pas dans son jeu.</li>"
indexation[37]="<li>Prenez du recul.</li>"
indexation[38]="<li>Ne prenez pas son commentaire de manière personnelle.</li>"
indexation[39]="<li>S’il est haineux, bannissez-le.</li></ul></div><hr>"
indexation[40]="<p id='ouvrirVolI'>Vol d'identité</p><div id='volDeI'>"
indexation[41]="<p>Prévention</p><ul><li>Faites très attention à vos relevés bancaires.</li>"
indexation[42]="<li>Procédez immédiatement à la suspension de votre carte de crédit si vous pensez qu’elle a été corrompue.</li><li>Ne partagez pas vos coordonnées bancaires à des sites non fiables</li></ul>"
indexation[43]="<p>Signes</p><ul>"
indexation[44]="<li>Vos relevés contiennent des faux renseignements, y compris votre adresse, votre nom ou celui de l’employeur</li>"
indexation[45]="<li>Vous ne recevez pas les factures de vos créanciers. Si cela arrive, contactez-les. Cela peut indiquer que votre compte a été détourné</li>"
indexation[46]="<li>Vous obtenez des cartes de crédits de compagnies avec qui vous n’avez pas fait affaire</li>"
indexation[47]="<li>On vous refuse une approbation de crédit</li>"
indexation[48]="<li>Vous recevez des factures sur des objets que vous n’avez pas commandés</li></ul>"
indexation[49]="<p>Si un faux compte existe:</p><ul>"
indexation[50]="<li>Le reconnaitre: un faux compte consiste généralement en votre nom modifié (À l’aide d’un tiret, avec des minuscules...) et réutilise une image que vous avez publié.</li>"
indexation[51]="<li>Signalez-le. Demandez également à vos amis de le signaler pour accélérer la fermeture du compte</li>"
indexation[52]="<li>Limitez l’audience de vos publications pour ne pas que des personnes réutilisent une photo de nous</li></ul></div>"
 const text = indexation.join(''); 
 document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Réseaux sociaux";
    document.getElementById("laListe").style.fontFamily="Oswald, sans-serif";
    document.querySelector("p").style.fontFamily="K2D, sans-serif";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  

    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
    var BtnReviens= document.getElementById("ouvrirGenRes");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvrirGenRes(){
        var x = document.getElementById("reseauGen");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrirSitesRencontre");
    if (BtnReviens){
      BtnReviens.addEventListener("click", 
      function ouvrirSitesRencontre(){
          var x = document.getElementById("sitesRen");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
      }); 
    }
    var BtnReviens= document.getElementById("ouvrirPartage");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvrirPartage(){
        var x = document.getElementById("partagePhoto");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrirTrolls");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvrirTrolls(){
        var x = document.getElementById("troll");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrirVolI");
    if (BtnReviens){
      BtnReviens.addEventListener("click", 
      function ouvrirVolI(){
          var x = document.getElementById("volDeI");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
      }); 
    }
    var BtnDeez= document.getElementById("Deez");
    if (BtnDeez){
      BtnDeez.addEventListener("click", Deez); 
    }
    var BtnReviens= document.getElementById("Edge");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Edge); 
    }
    var BtnReviens= document.getElementById("Fb");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Fb); 
    }
    var BtnReviens= document.getElementById("Google");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Google); 
    }
    var BtnReviens= document.getElementById("Insta");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Insta); 
    }
    var BtnReviens= document.getElementById("Messng");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Messng); 
    }
    var BtnReviens= document.getElementById("Nint");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Nint); 
    }
    var BtnReviens= document.getElementById("Sig");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Sig); 
    }
    var BtnReviens= document.getElementById("Skype");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Skype); 
    }
    var BtnReviens= document.getElementById("Spotify");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Spotify); 
    }
    var BtnReviens= document.getElementById("Telegram");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Telegram); 
    }
    var BtnReviens= document.getElementById("TikTok");
    if (BtnReviens){
      BtnReviens.addEventListener("click", TikTok); 
    }
    var BtnReviens= document.getElementById("Twitter");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Twitter); 
    }
    var BtnReviens= document.getElementById("YTube");
    if (BtnReviens){
      BtnReviens.addEventListener("click", YTube); 
    }
    var BtnReviens= document.getElementById("Zoom");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Zoom); 
    }
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
}



