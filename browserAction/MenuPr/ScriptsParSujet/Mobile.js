function Mobiles(){
    document.getElementById('laListe').innerHTML="<p onclick='ouvririPhone()'>iPhone</p><div id='iphone'><ul><li>Désactivez Siri</li><li>Désactivez « Services système »</li><li>Installez Lockdown</li><li>Supprimez les calendriers infectés</li><li>Désactivez la sauvegarde iCloud et sauvegardez plutôt vos données en branchant votre iPhone sur votre ordinateur. Accédez à la page principale de l’iPhone sur votre ordi et activez « Sauvegarder toutes les données de votre iPhone sur cet ordinateur », puis cochez « Chiffrer la sauvegarde locale ». Aussi, définissez un mot de passe</li><li>Empêchez le suivi intersites (Safari)</li><li>Activez l’option « Demander à l’app de ne pas me traquer »</li><li>Gérez l’activité des applications en arrière-plan</li><li>Utilisez des clés de sécurité.</li><li>Si vous utilisez Mail, utilisez la protection du courrier (Adresse IP masquée)</li><li>Faites le contrôle de sécurité</li><li>Désactivez la collecte d’analyses</li><li>Installez un navigateur sécuritaire (Brave, OnionRouter)</li></ul></div><hr><p onclick='ouvrirAndroid()'>Android</p><div id='android'><ul><li>Recherchez le mot « cryptage » ou « chiffrement » et activez l’option. Définissez un mot de passe</li><li>Installez NetGuard et/ou Blokada</li><li>LineageOS: une ROM alternative pour Android (À INSTALLER À VOS RISQUES ET PÉRILS. DEMANDE DES COMPÉTENCES TECHNIQUES)</li><li>Désactivez l’assistant Google </li><li>Installez un navigateur sécuritaire (Firefox, Bromite, Tor)</li><li>Autre messagerie chiffrée: Silence</li></ul></div><hr><p onclick='ouvrir2Cels()'>Pour tout téléphone cellulaire</p><div id='deuxTels'><ul><li>Les iPhones et les téléphones Android n'autorisent pas les applications de solutions VPN à couper les connexions en cours le temps que l'attribution du serveur soit faite</li><li>Ne répondez pas à un appel s’il commence par +41 (Suisse), +678 (Vanuatu, Mélanésie) ou +738 (Hong Kong) si vous vivez au Québec. C’est une fraude</li><li>En fait, quand vous recevez un appel, ne dites rien et attendez que l’interlocuteur parle. S’il raccroche, vous venez sûrement d’éviter un vol de votre numéro.</li><li>Faites le tri de vos comptes et supprimez ceux qui vous sont inutiles</li><li>Triez vos applications</li><li>Utilisez des messageries chiffrées (WhatsApp, Signal, Wire, Telegram, Wickr, Riot.IM)</li><li>Gardez toujours votre téléphone verrouillé (configurez son verrouillage automatique pour 5 minutes)</li><li>N’utilisez que les boutiques d’application fiables (App Store, Google Play)</li><li>Désactivez les publicités ciblées</li><li>Vérifiez les permissions (appareil photo, géolocalisation)</li><li>Personnalisez votre code PIN, qui protège de l’usage de votre carte SIM. Évitez les codes trop simples.</li><li>Supprimez des cookies.</li></ul></div><hr><p onclick='ouvrirAppNon()'>Applications à ne pas installer</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Conseils pour les téléphones mobiles";
}
function ouvririPhone(){
    var x = document.getElementById("iphone");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirAndroid(){
    var x = document.getElementById("android");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrir2Cels(){
    var x = document.getElementById("deuxTels");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirAppNon(){

    document.getElementById('laListe').innerHTML="<p onclick='autresAppNon()'>Les deux</p><hr><p onclick='ouvrirAppAppleNon()'>iPhone</p><div id='appAppleNon'><ul><li>Calories Tracker</li><li>Fitness Balance</li></ul></div><hr><p onclick='ouvrirAppAndNon()'>Android</p><div id='appAndNon'><ul><li>Big Decisions</li><li>Document PDF Scanner</li><li>FITSTAR</li><li>Golden Hunt</li><li>Jewel Sea</li><li>King Blitz</li><li>Luck Hammer</li><li>Lucky Clover</li><li>Lucky Habit: health tracker</li><li>Lucky Step-Walking Tracker</li><li>Lux Fruit Games</li><li>Reflector</li><li>Safe VPN</li><li>SEEKS</li><li>Seven Golden Wolf blackjack</li><li>Smart Night Clock</li><li>Smart Screen Mirroring</li><li>Unlimited Score</li><li>WalkingJoy</li><li>Wonder Time</li><li>X-File Manager</li></ul></div>"
    document.querySelector("header").style.backgroundColor="aqua";
    document.querySelector("p").style.lineHeight="inherit";
    document.querySelector("p").style.fontFamily="K2D, sans-serif";
    document.querySelector("main").style.fontFamily="K2D, sans-serif";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Applications à ne pas installer";    
}