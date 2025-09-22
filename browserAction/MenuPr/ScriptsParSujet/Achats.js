/**
 *
 * Ce fichier intègre le code HTML de la page "Achats en ligne" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */

function Achats() {
  const listAch = [
    {
      id: "ouvrirAchatSite",
      icon: "icon-terminal",
      title: "Concernant le site",
      contentId: "achatSite",
      contentList: [
        {
          subContent: [
            {
              text: "Vérifiez le nom de domaine avec cet <a href='https://votresite.ca/abonnement/whois'>outil</a>. Si son acquisition est récente, cela est suspect",
            },
            {
              text: "Vérifiez l’adresse de la boutique en ligne. Le fait qu’il soit situé dans un bloc-appartement ou au milieu de nulle part est suspicieux.",
            },
            {
              text: "Téléphonez à l’entreprise pour vous assurer que le numéro est bel et bien lié à l’entreprise.",
            },
            {
              text: "Pour le cas de boutiques québécoises, consultez le <a href='https://www.quebec.ca/entreprises-et-travailleurs-autonomes/obtenir-renseignements-entreprise/recherche-registre-entreprises'>registraire des entreprises du Québec</a>. Toutes les compagnies du Québec sont obligées de s’inscrire à ce registraire.",
            },
            { text: "Vérifiez les conditions générales de vente." },
            {
              text: "Assurez-vous que le site soit sécurisé. Vous pouvez utiliser un scanner",
            },
            {
              text: "Ne faites pas d’achat sur un ordinateur infecté ou public",
            },
          ],
        },
      ],
    },
    {
      id: "ouvrirAchatProd",
      icon: "icon-gift",
      title: "Concernant le produit",
      contentId: "achatProduit",
      contentList: [
        {
          subContent: [
            { text: "Vérifiez les commentaires d’un produit" },
            {
              text: "Méfiez-vous si quelqu’un nous offre plus que le prix de vente d’un objet que vous vendez, surtout si cette personne offre de payer par PayPal. Vous recevrez un faux courriel de PayPal mentionnant le dépôt d’un montant plus élevé que prévu, puis l’acheteur va vous réécrire pour récupérer l’argent en trop. En vérifiant votre compte PayPal, vous verrez que le supposé transfert de fonds n’a jamais eu lieu.",
            },
            {
              text: "Méfiez-vous de la fonction de demande de fonds d’Interac, surtout si l’adresse n’est pas « notify@payments.interac.ca ». Elle n’est accessible que pour Scotia, Royale, CIBC et TD. Les autres peuvent cependant accepter le don.",
            },
            {
              text: "Lisez les infos sur les frais de livraison, de douane et de dédouanement pour éviter de payer plus cher inutilement.",
            },
            {
              text: "Faites des captures d’écrans de chaque transaction, avec l’heure, le numéro de l’achat et la date et imprimez-les. Cela pourra servir de preuve en cas de litige.",
            },
            {
              text: "Achetez local. Si vous avez une plainte à faire à la compagnie, il sera plus facile d’aller directement à une compagnie qui habite près de chez vous.",
            },
          ],
        },
      ],
    },
    {
      id: "ouvrirAchatClasses",
      icon: "icon-FA-newspaper-o",
      title: "Sur les sites d'annonces classées",
      contentId: "achatClasses",
      contentList: [
        {
          subContent: [
            {
              text: "Ne donnez jamais vos informations personnelles et bancaires à une personne inconnue.",
            },
            {
              text: "Faites si possible votre transaction de personne en personne (soit en rencontrant physiquement l'acheteur ou le vendeur).",
            },
          ],
        },
      ],
    },
  ];

  //On s'assure que les variables ne soient pas séparées par une virgule

  //On remplit la fenêtre avec ces catégories
  document.getElementById(
    "laListe"
  ).innerHTML = `<p id='introP'>Les achats en ligne peuvent faciliter notre vie, mais aussi celle de certains voleurs!</p>${listAch
    .map((achat, i) =>
      paragraphListSub(
        achat.id,
        achat.icon,
        achat.title,
        "icon-circle-down",
        achat.contentId,
        null,
        achat.contentList,
        listAch,
        i
      )
    )
    .join("")}`;
  document.querySelector("header").style.backgroundColor = "gold";
  document.getElementById("myHeading").style.color = "black";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

  HeaderTitle = "Achats en ligne";

  headerUp();
  //Seul le bouton de retour est affiché en tout temps

  //On définit la grille
  alignHeader();

  listAch.map((ach) => {
    {
      OpenList(ach.id, ach.contentId);
    }
  });

  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
}
