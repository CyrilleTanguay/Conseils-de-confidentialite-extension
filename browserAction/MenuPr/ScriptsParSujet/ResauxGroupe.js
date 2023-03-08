/**
 * 
 * Ce fichier intègre le code HTML de la page "Réseaux sociaux" dans le popup.
 * 
 * Les variables "indexation" sont définies dans le document "script.js"
 * Toutes les fonctions concernant un réseau social se trouvent dans le document "ReseauxDiffs.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 * 
 * 
 */
function unReseau() {
  //Catégories
  indexation[0] = "<p id='introP'>Êtes-vous sur un réseau social? Si oui, vous n’êtes sûrement pas sans savoir qu’ils ne sont pas très respectueux en matière de vie privée.</p>"
  indexation[1] = "<p id='ouvrirGenRes' class='iconeOui'><span class='icon-FA-book'></span>Général<span class='icon-circle-down'></span></p><div id='reseauGen'><ul>"
  indexation[2] = "<li>Utilisez un pseudonyme sur les forums et les sites marchands</li><li>Désactivez la géolocalisation</li>"
  indexation[3] = "<li>Activez l’authentification à deux facteurs.</li>"
  indexation[4] = "<li>Désactivez le ciblage publicitaire</li>"
  indexation[5] = "<li>Privilégiez les publications entièrement assumées.</li>"
  indexation[6] = "<li>Vérifiez régulièrement qui est connecté. S’il y a des personnes suspectes, déconnectez-les et changez votre mot de passe.</li>"
  indexation[7] = "<li>Ne partagez pas de données trop privées (ses enfants, son domicile, des objets précieux...)</li>"
  indexation[8] = "<li>Désactivez le pistage via les publicités et la localisation.</li></ul></div><hr>"
  indexation[9] = "<p id='Deez' class='iconeOui'><span class='icon-logo-deezer'></span>Deezer<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[10] = "<p id='Edge' class='iconeOui'><span class='icon-logo-microsoftedge'></span>Edge<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[11] = "<p id='Fb' class='iconeOui'><span class='icon-logo-facebook'></span>Facebook<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[12] = "<p id='Google' class='iconeOui'><span class='icon-logo-google'></span>Google<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[13] = "<p id='Insta' class='iconeOui'><span class='icon-logo-instagram'></span>Instagram<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[14] = "<p id='Messng' class='iconeOui'><span class='icon-logo-messenger'></span>Messenger<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[15] = "<p id='Nint' class='iconeOui'><span class='icon-logo-nintendo'></span>Nintendo<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[16] = "<p id='Sig' class='iconeOui'><span class='icon-logo-signal'></span>Signal<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[17] = "<p id='Skype' class='iconeOui'><span class='icon-logo-skype'></span>Skype<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[18] = "<p id='Snapchat' class='iconeOui'><span class='icon-logo-snapchat'></span>Snapchat<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[19] = "<p id='Spotify' class='iconeOui'><span class='icon-logo-spotify'></span>Spotify<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[20] = "<p id='Telegram' class='iconeOui'><span class='icon-logo-telegram'></span>Telegram<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[21] = "<p id='TikTok' class='iconeOui'><span class='icon-logo-tiktok'></span>TikTok<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[22] = "<p id='Twitter' class='iconeOui'><span class='icon-logo-twitter'></span>Twitter<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[23] = "<p id='YTube' class='iconeOui'><span class='icon-logo-youtube'></span>YouTube<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[24] = "<p id='Zoom' class='iconeOui'><span class='icon-logo-zoom'></span>Zoom<span class='icon-FA-chevron-right'></span></p><hr>"
  indexation[25] = "<p id='ouvrirSitesRencontre' class='iconeOui'><span class='icon-FA-heart'></span>Les sites de rencontre<span class='icon-circle-down'></span></p><div id='sitesRen'><ul>"
  indexation[26] = "<li>Ne mettez jamais votre adresse, lieu de travail, numéro fixe, ou le nom de votre école dans votre description.</li>"
  indexation[27] = "<li>Soyez honnête mais pas déplacé</li>"
  indexation[28] = "<li>Utilisez une adresse courriel distincte sans info personnelle</li>"
  indexation[29] = "<li>Méfiez-vous si vous recevez des photos osées, car si vous leur rendez la pareille, vous deviendrez une victime d’extorsion. Cela se passe surtout sur des applications visant la communauté LGBTQ+.</li></ul></div><hr>"
  indexation[30] = "<p id='ouvrirPartage' class='iconeOui'><span class='icon-FA-photo'></span>Partage de photos osées<span class='icon-circle-down'></span></p>"
  indexation[31] = "<div id='partagePhoto'><ul>"
  indexation[32] = "<li><b><i><u>Rien ne vous oblige à envoyer des photos osées, alors n’en envoyez que si vous le voulez vraiment.</u></i></b></li>"
  indexation[33] = "<li>Ne montrez jamais votre visage ou un signe distinctif (piercing, tatouage...) sur ces photos.</li> "
  indexation[34] = "<li>Faites en sorte que le décor ne puisse vous identifier.</li><li>N’envoyez rien à quelqu’un en qui vous n’avez pas totalement confiance.</li></ul></div><hr>"
  indexation[35] = "<p id='ouvrirTrolls' class='iconeOui'><span class='icon-FA-flag'></span>Trolls<span class='icon-circle-down'></span></p><div id='troll'><ul>"
  indexation[36] = "<li>Ne lui répondez pas. Les trolls veulent avoir de l’attention, donc, n’entrez pas dans son jeu.</li>"
  indexation[37] = "<li>Prenez du recul.</li>"
  indexation[38] = "<li>Ne prenez pas son commentaire de manière personnelle.</li>"
  indexation[39] = "<li>S’il est haineux, bannissez-le.</li></ul></div><hr>"
  indexation[40] = "<p id='ouvrirVolI' class='iconeOui'><span class='icon-FA-id-card-o'></span>Vol d'identité<span class='icon-circle-down'></span></p>"
  indexation[41] = "<div id='volDeI'><p>Prévention</p><ul><li>Faites très attention à vos relevés bancaires.</li>"
  indexation[42] = "<li>Procédez immédiatement à la suspension de votre carte de crédit si vous pensez qu’elle a été corrompue.</li><li>Ne partagez pas vos coordonnées bancaires à des sites non fiables</li></ul>"
  indexation[43] = "<p>Signes</p><ul>"
  indexation[44] = "<li>Vos relevés contiennent des faux renseignements, y compris votre adresse, votre nom ou celui de l’employeur</li>"
  indexation[45] = "<li>Vous ne recevez pas les factures de vos créanciers. Si cela arrive, contactez-les. Cela peut indiquer que votre compte a été détourné</li>"
  indexation[46] = "<li>Vous obtenez des cartes de crédits de compagnies avec qui vous n’avez pas fait affaire</li>"
  indexation[47] = "<li>On vous refuse une approbation de crédit</li>"
  indexation[48] = "<li>Vous recevez des factures sur des objets que vous n’avez pas commandés</li></ul>"
  indexation[49] = "<p>Si un faux compte existe:</p><ul>"
  indexation[50] = "<li>Le reconnaitre: un faux compte consiste généralement en votre nom modifié (À l’aide d’un tiret, avec des minuscules...) et réutilise une image que vous avez publié.</li>"
  indexation[51] = "<li>Signalez-le. Demandez également à vos amis de le signaler pour accélérer la fermeture du compte</li>"
  indexation[52] = "<li>Limitez l’audience de vos publications pour ne pas que des personnes réutilisent une photo de nous</li></ul></div>"
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  //On remplit la fenêtre avec ces catégories
  document.getElementById('laListe').innerHTML = text;
  document.querySelector("header").style.backgroundColor = "CornflowerBlue";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Réseaux sociaux";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  //On définit la grille
  document.getElementById("laListe").style.fontFamily = "Oswald, sans-serif";
  document.querySelector("p").style.fontFamily = "K2D, sans-serif";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  document.getElementById("myHeading").style.color = "white";

  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  }
  //Si la liste déroulante est masquée, on l'affiche et vice-versa
  var BtnReviens = document.getElementById("ouvrirGenRes");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirGenRes() {
      var x = document.getElementById("reseauGen");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirSitesRencontre");
  if (BtnReviens) {
    BtnReviens.addEventListener("click",
      function ouvrirSitesRencontre() {
        var x = document.getElementById("sitesRen");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
  }
  var BtnReviens = document.getElementById("ouvrirPartage");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirPartage() {
      var x = document.getElementById("partagePhoto");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirTrolls");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirTrolls() {
      var x = document.getElementById("troll");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirVolI");
  if (BtnReviens) {
    BtnReviens.addEventListener("click",
      function ouvrirVolI() {
        var x = document.getElementById("volDeI");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
  }
  //Écouteurs pour accéder à la page correspondante
  var BtnDeez = document.getElementById("Deez");
  if (BtnDeez) {
    BtnDeez.addEventListener("click", Deez);
  }
  var BtnReviens = document.getElementById("Edge");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Edge);
  }
  var BtnReviens = document.getElementById("Fb");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Fb);
  }
  var BtnReviens = document.getElementById("Google");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Google);
  }
  var BtnReviens = document.getElementById("Insta");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Insta);
  }
  var BtnReviens = document.getElementById("Messng");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Messng);
  }
  var BtnReviens = document.getElementById("Nint");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Nint);
  }
  var BtnReviens = document.getElementById("Sig");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Sig);
  }
  var BtnReviens = document.getElementById("Skype");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Skype);
  }
  var BtnReviens = document.getElementById("Snapchat");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Snapchat);
  }
  var BtnReviens = document.getElementById("Spotify");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Spotify);
  }
  var BtnReviens = document.getElementById("Telegram");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Telegram);
  }
  var BtnReviens = document.getElementById("TikTok");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", TikTok);
  }
  var BtnReviens = document.getElementById("Twitter");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Twitter);
  }
  var BtnReviens = document.getElementById("YTube");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", YTube);
  }
  var BtnReviens = document.getElementById("Zoom");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Zoom);
  }
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  }

}