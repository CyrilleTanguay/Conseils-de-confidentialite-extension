/**
 *
 * Ce fichier intègre le code HTML de la page "Arnaques" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction SMS se trouve dans le document "Messagerie.js"
 * La fonction ArnPres se trouve dans le document "ArnaquePres.js"
 * La fonction ArnNigeriane se trouve dans le document "ArnaqueNigeriane.js"
 *
 */
function Arnaques() {
  const arnList = [
    {
      id: "ouvrirStrcArn",
      icon: "icon-FA-list-ol",
      title: "Structure",
      rightIcon: "icon-circle-down",
      idContent: "structure",
      content: [
        "Elle contient des couleurs vives et des majuscules",
        "Elle contient beaucoup de fautes d’orthographe et de syntaxe",
        "L’adresse courriel est très douteuse",
        "Ils sont généralistes.",
      ],
    },
    {
      id: "ouvrirContenuArn",
      icon: "icon-FA-list-ul",
      title: "Le contenu",
      rightIcon: "icon-circle-down",
      idContent: "contenuEscr",
      content: [
        "Ils sont pressants",
        "Ils contiennent une source crédible",
        "Ils vous menacent si vous ne vous faites pas quelque chose rapidement.",
        "Ils contiennent des liens et des pièces jointes suspicieuses",
        "Ils vous invitent à partager un courriel.",
      ],
    },
    {
      id: "ouvrirEscSol",
      icon: "icon-FA-question-circle",
      title: "Que faire?",
      rightIcon: "icon-circle-down",
      idContent: "escrSol",
      content: [
        "Toujours vérifier l’adresse courriel.",
        "Prenez le temps de lire le courriel et ne vous pressez pas. Les auteurs de ces courriels veulent que vous fassiez le contraire pour pouvoir arriver à leurs fins.",
        "<b><u><i>Ne répondez jamais à ces courriels.</i></u></b>",
        "<b><u><i>Ne cliquez jamais sur les liens, même s’il y a un lien vous invitant à vous désabonner d’une infolettre.</i></u></b> Cela prouvera simplement au destinataire que votre adresse courriel  est active, et vous recevrez encore plus de pourriels. Aussi, placez le curseur de votre souris sur le lien pour voir si l’adresse est fiable.",
        "<b><u><i>N’ouvrez pas les fichiers joints.</i></u></b>",
        "Avant de supprimer le courriel, vérifiez le type d’arnaque.",
        "En cas de fuite, bloquez les comptes bancaires.",
      ],
    },
    {
      id: "arnPres",
      icon: "icon-FA-user-secret",
      title: "Arnaque au président",
      rightIcon: "icon-FA-chevron-right",
      function: ArnPres,
    },
    {
      id: "arnNiger",
      icon: "icon-FA-money",
      title: "Arnaque nigériane (alias 4-1-9)",
      rightIcon: "icon-FA-chevron-right",
      function: ArnNigeriane,
    },
    {
      id: "phish",
      icon: "icon-FA-anchor",
      title: "Ingénierie sociale (ou phishing)",
      rightIcon: "icon-circle-down",
      idContent: "phishing",
      content: [
        "Un contact institutionnel",
        "Un site de rencontre (« Rencontrez ces filles célibataires dans votre région »)",
        "Un message indiquant que vous avez gagné un prix",
        "Une arnaque au tueur (un tueur à gage a été engagé pour vous assassiner, mais est prêt à vous oublier en échange d’une somme)",
        "Un message indiquant que vous avez été piraté et qui vous demande de vous connecter à un site pour estimer les dégâts",
        "Un message de l’équipe de support Microsoft, qui vous propose des conseils payants ",
        "Une fausse institution financière qui vous presse de transférer vos fonds.",
        "Une urgence médicale d’un de vos contacts",
        "Des dettes",
        "Un message de la compagnie de téléphone",
        "Un message avec une annonce trop belle pour être vraie",
        "De la police (la police ne vous demandera jamais des infos sur votre carte de crédit)",
      ],
    },
    {
      id: "autArn",
      icon: "icon-FA-ellipsis-h",
      title: "Autres",
      rightIcon: "icon-circle-down",
      idContent: "autresArn",
      content: [
        "On vous demande de faire un paiement via des moyens qui ne sont pas sécuritaires",
        "Un contact vous demande de payer vers un nouveau compte",
        "Un vendeur que vous avez déjà payé vous demande plus d'argent en raison de circonstances imprévues",
        "L’arnaque « Hi mum » (littéralement « allô maman »): Quelqu’un se fait passer pour un de vos contacts et vous fait croire qu’il a perdu son téléphone. Ce message peut contenir un soi-disant « nouveau numéro de téléphone ». En cas de doute, appelez votre ami avec le numéro de téléphone d’origine et non celui du courriel.",
        "*Un ami prétendument atteint d’un cancer vous demande d’acheter des cartes Google Play et dit qu’il va vous rembourser bientôt. Bien que l'adresse courriel correspond à celle de votre ami, elle reste une arnaque, <b><i><u>mais ne supprimez pas le message.</u></i></b> Cela signifie surtout que son compte a été piraté, alors appelez-la par téléphone pour l’avertir.",
        "Quelqu’un vous envoie un message avec votre propre adresse courriel, prétendant qu’il a pris le contrôle de votre compte et vous demande de l’argent. Cette personne vous ment: tout le monde peut écrire un courriel à partir de l’adresse de n’importe qui. Si vous avez des doutes, regardez s’il y a des connections inconnues dans les paramètres.",
        "Il peut s’agir d’une fausse commande, d’un faux prélèvement ou d’un faux concours.",
        "Il s’agit d’une prescription de médicaments, de méthodes d’enrichissement, de services financiers/réduction de dettes, diplômes à acheter ou de jeux d’argent",
        "Avec l'intelligence artificielle, il est même possible de créer des deepfakes de personnalités connues ou même de vos proches. Dans le cas où un proche vous ferait une demande inhabituelle, posez lui une question à laquelle seule la véritable personne pourrait répondre.",
        
      ],
    },
  ];
  //On laisse les indexations restantes vides

  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = `<p id='introP'>Une messagerie est un bon moyen de vous arnaquer. Il existe cependant des moyens pour vous en prémunir.</p>
  ${arnList
    .map((arn,i) =>
      paragraphList(
        arn.id,
        arn.icon,
        arn.title,
        arn.rightIcon,
        arn.idContent,
        arn.content
      ) + (i == arnList.length - 1 ? "" : "<hr/>")
    )
    .join("")}`;
  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "blue";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

  HeaderTitle = "Arnaques";

  headerUp();
  //Seul le bouton de retour est affiché en tout temps

  //On définit la grille
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.color = "white";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";

  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", SMS);
  }

  arnList.map((a) => {
    if (a.rightIcon == "icon-FA-chevron-right") {
      if (document.getElementById(a.id)) {
        document.getElementById(a.id).addEventListener("click", a.function);
      }
    } else {
      OpenList(a.id, a.idContent);
    }
  });
}
