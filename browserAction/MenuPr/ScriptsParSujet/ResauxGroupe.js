function Reseaux(){
    document.getElementById('laListe').innerHTML="<p>Êtes-vous sur un réseau social? Si oui, vous n’êtes sûrement pas sans savoir qu’ils ne sont pas très respectueux en matière de vie privée.</p><p onclick='ouvrirGenRes()'>Général</p><div id='reseauGen'><ul><li>Utilisez un pseudonyme sur les forums et les sites marchands</li><li>Désactivez la géolocalisation</li><li>Activez l’authentification à deux facteurs.</li><li>Désactivez le ciblage publicitaire</li><li>Privilégiez les publications entièrement assumées.</li><li>Vérifiez régulièrement qui est connecté. S’il y a des personnes suspectes, déconnectez-les et changez votre mot de passe.</li><li>Ne partagez pas de données trop privées (ses enfants, son domicile, des objets précieux...)</li><li>Désactivez le pistage via les publicités et la localisation.</li></ul></div><hr><p onclick='Deez()'>Deezer</p><hr><p onclick='Edge()'>Edge</p><hr><p onclick='Fb()'>Facebook</p><hr><p onclick='Google()'>Google</p><hr><p onclick='Insta()'>Instagram</p><hr><p onclick='Messng()'>Messenger</p><hr><p onclick='Nint()'>Nintendo</p><hr><p onclick='Sig()'>Signal</p><hr><p onclick='Skype()'>Skype</p><hr><p onclick='Snapchat()'>Snapchat</p><hr><p onclick='Spotify()'>Spotify</p><hr><p onclick='Telegram()'>Telegram</p><hr><p onclick='TikTok()'>TikTok</p><hr><p onclick='Twitter()'>Twitter</p><hr><p onclick='YTube()'>YouTube</p><hr><p onclick='Zoom()'>Zoom</p><hr><p onclick='ouvrirSitesRencontre()'>Les sites de rencontre</p><div id='sitesRen'><ul><li>Ne mettez jamais votre adresse, lieu de travail, numéro fixe, ou le nom de votre école dans votre description.</li><li>Soyez honnête mais pas déplacé</li><li>Utilisez une adresse courriel distincte sans info personnelle</li><li>Méfiez-vous si vous recevez des photos osées, car si vous leur rendez la pareille, vous deviendrez une victime d’extorsion. Cela se passe surtout sur des applications visant la communauté LGBTQ+.</li></ul></div><hr><p onclick='ouvrirPartage()'>Partage de photos osées</p><div id='partagePhoto'><ul> <li><b><i><u>Rien ne vous oblige à envoyer des photos osées, alors n’en envoyez que si vous le voulez vraiment.</u></i></b></li> <li>Ne montrez jamais votre visage ou un signe distinctif (piercing, tatouage...) sur ces photos.</li> <li>Faites en sorte que le décor ne puisse vous identifier.</li><li>N’envoyez rien à quelqu’un en qui vous n’avez pas totalement confiance.</li></ul></div><hr><p onclick='ouvrirTrolls()'>Trolls</p><div id='troll'><ul><li>Ne lui répondez pas. Les trolls veulent avoir de l’attention, donc, n’entrez pas dans son jeu.</li><li>Prenez du recul.</li><li>Ne prenez pas son commentaire de manière personnelle.</li><li>S’il est haineux, bannissez-le.</li></ul></div><hr><p onclick='ouvrirVolI()'>Vol d'identité</p><div id='volDeI'><p>Prévention</p><ul><li>Faites très attention à vos relevés bancaires.</li><li>Procédez immédiatement à la suspension de votre carte de crédit si vous pensez qu’elle a été corrompue.</li><li>Ne partagez pas vos coordonnées bancaires à des sites non fiables</li></ul><p>Signes</p><ul><li>Vos relevés contiennent des faux renseignements, y compris votre adresse, votre nom ou celui de l’employeur</li><li>Vous ne recevez pas les factures de vos créanciers. Si cela arrive, contactez-les. Cela peut indiquer que votre compte a été détourné</li><li>Vous obtenez des cartes de crédits de compagnies avec qui vous n’avez pas fait affaire</li><li>On vous refuse une approbation de crédit</li><li>Vous recevez des factures sur des objets que vous n’avez pas commandés</li></ul><p>Si un faux compte existe:</p><ul><li>Le reconnaitre: un faux compte consiste généralement en votre nom modifié (À l’aide d’un tiret, avec des minuscules...) et réutilise une image que vous avez publié.</li><li>Signalez-le. Demandez également à vos amis de le signaler pour accélérer la fermeture du compte</li><li>Limitez l’audience de vos publications pour ne pas que des personnes réutilisent une photo de nous</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Réseaux sociaux";
}

function ouvrirGenRes(){
    var x = document.getElementById("reseauGen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirSitesRencontre(){
    var x = document.getElementById("sitesRen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirPartage(){
    var x = document.getElementById("partagePhoto");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirTrolls(){
    var x = document.getElementById("troll");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirVolI(){
    var x = document.getElementById("volDeI");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}