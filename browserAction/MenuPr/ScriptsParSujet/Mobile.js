function Mobiles(){
  indexation[0]="<p id='ouvririPhone' class='iconeOui'><span class='icon-logo-ios'></span>iPhone<span class='icon-circle-down'></span></p><div id='iphone'><ul>"
  indexation[1]="<li>Désactivez Siri</li>"
  indexation[2]="<li>Désactivez « Services système »</li>"
  indexation[3]="<li>Installez Lockdown</li>"
  indexation[4]="<li>Supprimez les calendriers infectés</li>"
  indexation[5]="<li>Désactivez la sauvegarde iCloud et sauvegardez plutôt vos données en branchant votre iPhone sur votre ordinateur. Accédez à la page principale de l’iPhone sur votre ordi et activez « Sauvegarder toutes les données de votre iPhone sur cet ordinateur », puis cochez « Chiffrer la sauvegarde locale ». Aussi, définissez un mot de passe</li>"
  indexation[6]="<li>Empêchez le suivi intersites (Safari)</li>"
  indexation[7]="<li>Activez l’option « Demander à l’app de ne pas me traquer »</li><li>Gérez l’activité des applications en arrière-plan</li>"
  indexation[8]="<li>Utilisez des clés de sécurité.</li>"
  indexation[9]="<li>Si vous utilisez Mail, utilisez la protection du courrier (Adresse IP masquée)</li>"
  indexation[10]="<li>Faites le contrôle de sécurité</li>"
  indexation[11]="<li>Désactivez la collecte d’analyses</li>"
  indexation[12]="<li>Installez un navigateur sécuritaire (Brave, OnionRouter)</li></ul></div><hr>"
  indexation[13]="<p id='ouvrirAndroid' class='iconeOui'><span class='icon-logo-android'></span>Android<span class='icon-circle-down'></span></p><div id='android'><ul>"
  indexation[14]="  <li>Recherchez le mot « cryptage » ou « chiffrement » et activez l’option. Définissez un mot de passe</li>"
  indexation[15]="  <li>Installez NetGuard et/ou Blokada</li>"
  indexation[16]="  <li>LineageOS: une ROM alternative pour Android (À INSTALLER À VOS RISQUES ET PÉRILS. DEMANDE DES COMPÉTENCES TECHNIQUES)</li>"
  indexation[17]="  <li>Désactivez l’assistant Google </li>"
  indexation[18]="  <li>Installez un navigateur sécuritaire (Firefox, Bromite, Tor)</li><li>Autre messagerie chiffrée: Silence</li></ul></div><hr>"
  indexation[19]="<p id='ouvrir2Cels'>Pour tout téléphone cellulaire</p><div id='deuxTels'><ul>"
  indexation[20]="  <li>Les iPhones et les téléphones Android n'autorisent pas les applications de solutions VPN à couper les connexions en cours le temps que l'attribution du serveur soit faite</li>"
  indexation[21]="  <li>Ne répondez pas à un appel s’il commence par +41 (Suisse), +678 (Vanuatu, Mélanésie) ou +738 (Hong Kong) si vous vivez au Québec. C’est une fraude</li>"
  indexation[22]="  <li>En fait, quand vous recevez un appel, ne dites rien et attendez que l’interlocuteur parle. S’il raccroche, vous venez sûrement d’éviter un vol de votre numéro.</li>"
  indexation[23]="  <li>Faites le tri de vos comptes et supprimez ceux qui vous sont inutiles</li>"
  indexation[24]="  <li>Triez vos applications</li>"
  indexation[25]="  <li>Utilisez des messageries chiffrées (WhatsApp, Signal, Wire, Telegram, Wickr, Riot.IM)</li>"
  indexation[26]="  <li>Gardez toujours votre téléphone verrouillé (configurez son verrouillage automatique pour 5 minutes)</li>"
  indexation[27]="  <li>N’utilisez que les boutiques d’application fiables (App Store, Google Play)</li>"
  indexation[28]="  <li>Désactivez les publicités ciblées</li><li>Vérifiez les permissions (appareil photo, géolocalisation)</li>"
  indexation[29]="  <li>Personnalisez votre code PIN, qui protège de l’usage de votre carte SIM. Évitez les codes trop simples.</li>"
  indexation[30]="<li>Supprimez des cookies.</li></ul></div><hr>"
  indexation[31]="<p id='ouvrirAppNon'>Applications à ne pas installer</p>"
  const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Conseils pour les téléphones mobiles";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
    var BtnReviens= document.getElementById("ouvririPhone");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvririPhone(){
        var x = document.getElementById("iphone");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrirAndroid");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvrirAndroid(){
        var x = document.getElementById("android");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrir2Cels");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvrir2Cels(){
        var x = document.getElementById("deuxTels");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrirAppNon");
    if (BtnReviens){
      BtnReviens.addEventListener("click", ouvrirAppNon); 
    }
    
}