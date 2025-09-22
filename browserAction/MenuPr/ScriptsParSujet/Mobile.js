/**
 *
 * Ce fichier intègre le code HTML de la page "Conseils pour les téléphones mobiles" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 * La fonction OuvrirAppNon se trouve dans le document "OuvrirAppNon.js"
 *
 *
 */
//Catégories
function Mobiles() {
  const mobileList = [
    {
      id: "ouvririPhone",
      icon: "icon-logo-ios",
      title: "iPhone",
      rightIcon: "icon-circle-down",
      contentId: "iphone",
      content: [
        "Désactivez Siri",
        "Désactivez « Services système »",
        "Installez Lockdown",
        "Supprimez les calendriers infectés",
        "Désactivez la sauvegarde iCloud et sauvegardez plutôt vos données en branchant votre iPhone sur votre ordinateur. Accédez à la page principale de l’iPhone sur votre ordi et activez « Sauvegarder toutes les données de votre iPhone sur cet ordinateur », puis cochez « Chiffrer la sauvegarde locale ». Aussi, définissez un mot de passe",
        "Empêchez le suivi intersites (Safari)",
        "Activez l’option « Demander à l’app de ne pas me traquer »",
        "Gérez l’activité des applications en arrière-plan",
        "Utilisez des clés de sécurité.",
        "Si vous utilisez Mail, utilisez la protection du courrier (Adresse IP masquée)",
        "Faites le contrôle de sécurité",
        "Désactivez la collecte d’analyses",
        "Installez un navigateur sécuritaire (Brave, OnionRouter)",
      ],
    },
    {
      id: "ouvrirAndroid",
      icon: "icon-logo-android",
      title: "Android",
      rightIcon: "icon-circle-down",
      contentId: "android",
      content: [
        "Recherchez le mot « cryptage » ou « chiffrement » et activez l’option. Définissez un mot de passe",
        "Installez NetGuard et/ou Blokada",
        "LineageOS: une ROM alternative pour Android (À INSTALLER À VOS RISQUES ET PÉRILS. DEMANDE DES COMPÉTENCES TECHNIQUES)",
        "Désactivez l’assistant Google",
        "Installez un navigateur sécuritaire (Firefox, Bromite, Tor)",
        "Autre messagerie chiffrée: Silence",
      ],
    },

    {
      id: "ouvrir2Cels",
      icon: "icon-FA-columns",
      title: "Pour tout téléphone cellulaire",
      rightIcon: "icon-circle-down",
      contentId: "deuxTels",
      content: [
        "Les iPhones et les téléphones Android n'autorisent pas les applications de solutions VPN à couper les connexions en cours le temps que l'attribution du serveur soit faite",
        "Ne répondez pas à un appel s’il commence par +41 (Suisse), +678 (Vanuatu, Mélanésie) ou +738 (Hong Kong) si vous vivez au Québec. C’est une fraude",
        "En fait, quand vous recevez un appel, ne dites rien et attendez que l’interlocuteur parle. S’il raccroche, vous venez sûrement d’éviter un vol de votre numéro.",
        "Triez vos applications",
        "Utilisez des messageries chiffrées (WhatsApp, Signal, Wire, Telegram, Wickr, Riot.IM)",
        "Gardez toujours votre téléphone verrouillé (configurez le verrouillage automatique pour 5 minutes)",
        "N’utilisez que les boutiques d’application fiables (App Store, Google Play)",
        "Désactivez les publicités ciblées</li><li>Vérifiez les permissions (appareil photo, géolocalisation)",
        "Personnalisez votre code PIN, qui protège de l’usage de votre carte SIM. Évitez les codes trop simples.",
        "Supprimez des cookies.",
        "Redémarrez votre téléphone au moins une fois par jour. Cela fait cesser momentanément les actions en arrière-plan et peut même perturber le déroulement d'une attaque",
      ],
    },
    {
      id: "ouvrirAppNon",
      icon: "icon-FA-warning",
      title: "Applications à ne pas installer",
      rightIcon: "icon-FA-chevron-right",
      func: ouvrirAppNon,
    },
  ];

  const text = mobileList
    .map(
      (mobile, i) =>
        paragraphList(
          mobile.id,
          mobile.icon,
          mobile.title,
          mobile.rightIcon,
          mobile.contentId,
          mobile.content
        ) + (i == mobileList.length - 1 ? "" : "<hr/>")
    )
    .join("");
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "#b3ffff";
  document.getElementById("myHeading").style.color = "black";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

  HeaderTitle = "Téléphones mobiles";
  headerUp();
  //On définit la grille
  alignHeader();
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }

  mobileList.map((item) => {
    if (item.rightIcon == "icon-FA-chevron-right") {
      if (document.getElementById(item.id)) {
        document.getElementById(item.id).addEventListener("click", item.func);
      }
    } else {
      OpenList(item.id, item.contentId);
    }
  });
}
