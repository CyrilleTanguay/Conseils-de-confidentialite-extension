/**
 *
 * Ce fichier intègre le code HTML de la page "Achat d'applications" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */
function achatApp() {
  // text = "";
  // const AcThings = [
  //   {
  //     AcId: "ouvrirAchatApp",
  //     AcIcone: "icon-FA-save",
  //     LesCats: "Application",
  //     LignePr: "<hr>",
  //     divOuv: "achatApp",
  //     listeInt: [
  //       "Demandez-vous si l’application vaut le type de données qui ont besoin d’être partagées, que ce soit gratuit ou non.",
  //       "Lisez la politique de confidentialité de l’application.",
  //       "Ne téléchargez l’application qu’à partir de sa source officielle.",
  //       "Vérifiez les fichiers de l’application avant de la télécharger, car ils peuvent contenir des virus",
  //       "Méfiez-vous des applications gratuites. Elles vendent vos informations à des tiers pour vous donner des publicités ciblées et elles pourraient contenir des virus.",
  //       "Scannez l’application avec un antivirus avant de l’ouvrir",
  //       "Méfiez-vous des applications Mac qui vous demandent de payer pour quitter l’application.",
  //       "Refusez les permissions de l'application.",
  //     ],
  //   },
  //   {
  //     AcId: "ouvrirCommApp",
  //     AcIcone: "icon-FA-comments-o",
  //     LesCats: "Commentaires",
  //     LignePr: "",
  //     divOuv: "AppCom",
  //     listeInt: [
  //       "Il ne doit pas être générique",
  //       "Regardez l’historique de la personne qui a laissé ce commentaire. Si cette personne a publié 20 commentaires positifs sur 20 produits de la même marque, qu’elle a commenté plusieurs produits en une journée ou plusieurs objets du même type, cela est louche.",
  //       "Allez sur plus d’un site pour voir les avis sur un produit et allez sur des forums.",
  //     ],
  //   },
  // ];

  const listAC = [
    {
      id: "ouvrirAchatApp",
      icon: "icon-FA-save",
      title: "Application",
      contentId: "achatApp",
      contentList: [
        {
          subContent: [
            {
              text: "Demandez-vous si l’application vaut le type de données qui ont besoin d’être partagées, que ce soit gratuit ou non.",
            },
            { text: "Lisez la politique de confidentialité de l’application." },
            {
              text: "Ne téléchargez l’application qu’à partir de sa source officielle.",
            },
            {
              text: "Vérifiez les fichiers de l’application avant de la télécharger, car ils peuvent contenir des virus",
            },
            {
              text: "Méfiez-vous des applications gratuites. Elles vendent vos informations à des tiers pour vous donner des publicités ciblées et elles pourraient contenir des virus.",
            },
            {
              text: "Scannez l’application avec un antivirus avant de l’ouvrir",
            },
            {
              text: "Méfiez-vous des applications Mac qui vous demandent de payer pour quitter l’application.",
            },
            { text: "Refusez les permissions de l'application." },
          ],
        },
      ],
    },
    {
      id: "ouvrirCommApp",
      icon: "icon-FA-comments-o",
      title: "Commentaires",
      contentId: "AppCom",
      contentList: [

          {
            subContent: [
              { text: "Il ne doit pas être générique" },
              {
                text: "Regardez l’historique de la personne qui a laissé ce commentaire. Si cette personne a publié 20 commentaires positifs sur 20 produits de la même marque, qu’elle a commenté plusieurs produits en une journée ou plusieurs objets du même type, cela est louche.",
              },
              {
                text: "Allez sur plus d’un site pour voir les avis sur un produit et allez sur des forums.",
              },
            ],
          },

      ],
    },
  ];

  const newList =
    `<p id='introP'>Les applications peuvent nous simplifier la vie, tandis que d’autres peuvent être des arnaques.</p>
    ${listAC
      .map((e, i) =>
        paragraphListSub(
          e.id,
          e.icon,
          e.title,
          "icon-circle-down",
          e.contentId,
          null,
          e.contentList,
          listAC,
          i
        )
      )
      .join("")}`;

  document.getElementById("laListe").innerHTML = newList;

  document.querySelector("header").style.backgroundColor = "skyblue";
  document.getElementById("myHeading").style.color = "black";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  HeaderTitle = "Achat d’applications";

  headerUp();
  //Seul le bouton de retour est affiché en tout temps
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
  //On définit la grille
  alignHeader();
  //Fonction pour la liste déroulante des ajustements
  var BtnAchatdeApp = document.getElementById("ouvrirAchatApp");
  if (BtnAchatdeApp) {
    BtnAchatdeApp.addEventListener("click", ouvrirAchatApp);
  }
  listAC.map((thing) => {
    OpenList(thing.id, thing.contentId);
  });
}
