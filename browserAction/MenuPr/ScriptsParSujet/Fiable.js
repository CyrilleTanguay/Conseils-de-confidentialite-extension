/**
 *
 * Ce fichier intègre le code HTML de la page indiquant des applications néfastes pour iPhone et pour Androïd dans ce popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */
function Fiable() {
  const listF = [
    {
      id: "saFiabilite",
      icon: "icon-FA-list-alt",
      title: "Fiabilité du site",
      contentId: "siteFiable",
      introText: "Lorsque vous allez sur un site, posez-vous ces questions:",
      contentList: [
        {
          subContent: [
            {
              text: "Qui est l’auteur(e)?",
            },
            {
              text: "Quelles sont sa profession, son expérience, et sa formation?",
            },
            {
              text: "A-t-il/elle de l’expérience sur le sujet?",
            },
            {
              text: "Peut-on contacter cette personne?.",
            },
            {
              text: "Le site est-il affilié à une organisation/association/institution connue?",
            },
            {
              text: "Peut-on s’informer sur cette organisation?",
            },
            {
              text: "Y’a-t-il une section « mentions légales »?",
            },
            {
              text: "Est-il possible de savoir quelle est la mission/objectif du site?",
            },
            {
              text: "Quel est l’objectif de cette page (actualité, publicité, éducation, divertissement)?",
            },
            {
              text: "Quel est son public-cible (spécialistes, profanes, étudiant(e)s, enfants, public général...)?",
            },
            {
              text: "À quand remonte sa dernière mise à jour? Si elle remonte à longtemps, son information peut être désuète...",
            },
            {
              text: "L’information est-elle sourcée?",
            },
            {
              text: "Est-ce que le texte est bien orthographié?",
            },
          ],
        },
      ],
    },
    {
      id: "infoFi",
      icon: "icon-FA-newspaper-o",
      title: "Fiabilité de l'information",
      contentId: "infoFiable",
      contentList: [
        {
          subContent: [
            {
              text: "Entrez l’information dans la barre de recherche et ajoutez « faux »",
            },
            {
              text: "Comparez son point de vue local et international",
            },
            {
              text: "Vérifiez sa date de publication pour la mettre dans son contexte.",
            },
            {
              text: "Renseignez-vous sur la source d’information",
            },
            {
              text: "Regardez si le site a un titre douteux.",
            },
          ],
        },
      ],
    },
    {
      id: "InflS",
      icon: "icon-FA-eye",
      title: "Influenceur",
      contentId: "siteInf",
      contentList: [
        {
          subContent: [
            {
              text: "Vérifiez leur authenticité (attention à l’achat de vues)",
            },
            {
              text: "Vérifiez leur pertinence et leur expertise à aborder un sujet",
            },
            {
              text: "Demandez-vous si l’influenceur reparle des produits dans les semaines/mois suivants.",
            },
            {
              text: "Est-ce qu’il est disposé à discuter avec ses internautes sur les produits en question?",
            },
            {
              text: "Est-ce qu’il mentionne qu’il s’agit d’une publicité ou d’un sponsor si le contenu est visiblement promotionnel?",
            },
          ],
        },
      ],
    },
    {
      id: "santSite",
      icon: "icon-FA-stethoscope",
      title: "Sites de santé",
      contentId: "siteSante",
      contentList: [
        {
          subContent: [
            {
              text: "Est-ce que l’auteur du site vend son propre produit médical?",
            },
            {
              text: "Est-ce le site d’une institution médicale connue?",
            },
            {
              text: "Quel est son suffixe? Plusieurs sites frauduleux utilisent des noms de dommaines bon marchés (.sbs; .cloud).",
            },
            {
              text: "A-t-il des références médicales fiables?",
            },
            {
              text: "Méfiez-vous des forums. En toute logique, vous ne devriez pas mourir d’un rhume.",
            },
            {
              text: "Les cas les plus mentionnés (et souvent faux) se retrouvent en première position sur Google, donc prudence.",
            },
            {
              text: "Méfiez-vous des formulaires automatisés. Selon une étude, ils ne sont fiables qu’à 34%.",
            },
            {
              text: "Utilisez des sites fiables comme Patientslikeme, Doctissimo, Sante.Journaldesfemmes.com, Maladiesrares.info, Santé Canada, ANSM (Agence nationale de sécurité du médicament et des produits de santé), ANSES (Agence nationale de sécurité sanitaire de l’alimentation, de l’environnement et du travail)",
            },
            {
              text: "Méfiez-vous des médicaments soi-disants recommandés par une célébrité.",
            },
            {
              text: "En cas de doute sur un produit de santé, parlez-en à votre médecin ou pharmacien, ou consultez un site officiel.",
            },
          ],
        },
      ],
    },
  ];

  const newList = listF
    .map((e, i) =>
      paragraphListSub(
        e.id,
        e.icon,
        e.title,
        "icon-circle-down",
        e.contentId,
        e.introText,
        e.contentList,
        listF,
        i
      )
    )
    .join("");
  // //Catégories
  // indexation[0] =
  //   "<p id='introP'>Si vous voulez aller sur un site, n’acceptez que les cookies essentiels</p>";
  // indexation[1] =
  //   "<p id='saFiabilite' class='iconeOui'><span class='icon-FA-list-alt'></span>Fiabilité du site<span class='icon-circle-down'></span></p><div id='siteFiable'><p id='introP'>Lorsque vous allez sur un site, posez-vous ces questions:</p><ul>";
  // indexation[2] =
  //   "<li>Qui est l’auteur(e)?</li><li>Quelles sont sa profession, son expérience, et sa formation?</li><li>A-t-il/elle de l’expérience sur le sujet?</li>";
  // indexation[3] = "<li>Peut-on contacter cette personne?</li>";
  // indexation[4] =
  //   "<li>Le site est-il affilié à une organisation/association/institution connue?</li>";
  // indexation[5] = "<li>Peut-on s’informer sur cette organisation?</li>";
  // indexation[6] = "<li>Y’a-t-il une section « mentions légales »?</li>";
  // indexation[7] =
  //   "<li>Est-il possible de savoir quelle est la mission/objectif du site?</li>";
  // indexation[8] =
  //   "<li>Quel est l’objectif de cette page (actualité, publicité, éducation, divertissement)?</li>";
  // indexation[9] =
  //   "<li>Quel est son public-cible (spécialistes, profanes, étudiant(e)s, enfants, public général...)?</li>";
  // indexation[10] =
  //   "<li>Est-ce que les dates de création et de mise à jour du site sont présentes sur le site?</li>";
  // indexation[11] =
  //   "<li>À quand remonte sa dernière mise à jour? Si elle remonte à longtemps, son information peut être désuète...</li>";
  // indexation[12] = "<li>L’information est-elle sourcée?</li>";
  // indexation[13] =
  //   "<li>Est-ce que le texte est bien orthographié?</li></ul></div><hr>";
  // indexation[14] =
  //   "<p id='infoFi' class='iconeOui'><span class='icon-FA-newspaper-o'></span>Fiabilité de l'information<span class='icon-circle-down'></span></p><div id='infoFiable'><ul>";
  // indexation[15] =
  //   "<li>Entrez l’information dans la barre de recherche et ajoutez « faux ».</li>";
  // indexation[16] = "<li>Comparez son point de vue local et international</li>";
  // indexation[17] =
  //   "<li>Vérifiez sa date de publication pour la mettre dans son contexte.</li>";
  // indexation[18] = "<li>Renseignez-vous sur la source d’information</li>";
  // indexation[19] =
  //   "<li>Regardez si le site a un titre douteux. </li></ul></div><hr>";
  // indexation[20] =
  //   "<p id='InflS' class='iconeOui'><span class='icon-FA-eye'></span>Influenceur<span class='icon-circle-down'></span></p><div id='siteInf'><ul>";
  // indexation[21] =
  //   "<li>Vérifiez leur authenticité (attention à l’achat de vues)</li>";
  // indexation[22] =
  //   "<li>Vérifiez leur pertinence et leur expertise à aborder un sujet</li>";
  // indexation[23] =
  //   "<li>Demandez-vous si l’influenceur reparle des produits dans les semaines/mois suivants.</li>";
  // indexation[24] =
  //   "<li>Est-ce qu’il est disposé à discuter avec ses internautes sur les produits en question?</li>";
  // indexation[25] =
  //   "<li>Est-ce qu’il mentionne qu’il s’agit d’une publicité ou d’un sponsor si le contenu est visiblement promotionnel?</li></ul></div><hr>";
  // indexation[26] =
  //   "<p id='santSite' class='iconeOui'><span class='icon-FA-stethoscope'></span>Sites de santé<span class='icon-circle-down'></span></p><div id='siteSante'><ul>";
  // indexation[27] =
  //   "<li>Est-ce que l’auteur du site vend son propre produit médical?</li>";
  // indexation[28] = "<li>Est-ce le site d’une institution médicale connue?</li>";
  // indexation[29] =
  //   "<li>Quel est son suffixe? Plusieurs sites frauduleux utilisent des noms de dommaines bon marchés (.sbs; .cloud).</li>";
  // indexation[30] = "<li>A-t-il des références médicales fiables?</li>";
  // indexation[31] =
  //   "<li>Méfiez-vous des forums. En toute logique, vous ne devriez pas mourir d’un rhume.</li>";
  // indexation[32] =
  //   "<li>Les cas les plus mentionnés (et souvent faux) se retrouvent en première position sur Google, donc prudence.</li>";
  // indexation[33] =
  //   "<li>Méfiez-vous des formulaires automatisés. Selon une étude, ils ne sont fiables qu’à 34%.</li>";
  // indexation[34] =
  //   "<li>Utilisez des sites fiables comme Patientslikeme, Doctissimo, Sante.Journaldesfemmes.com, Maladiesrares.info, Santé Canada, ANSM (Agence nationale de sécurité du médicament et des produits de santé), ANSES (Agence nationale de sécurité sanitaire de l’alimentation, de l’environnement et du travail)</li>";
  // indexation[35] = `
  // <li>Méfiez-vous des médicaments soi-disants recommandés par une célébrité</li>
  // <li>En cas de doute sur un produit de santé, parlez-en à votre médecin ou pharmacien, ou consultez un site officiel.</li></ul></div>`;

  // indexation.length = 35;
  //On s'assure que les variables ne soient pas séparées par une virgule
  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML =
    "<p id='introP'>Si vous voulez aller sur un site, n’acceptez que les cookies essentiels</p>" +
    newList;
  document.querySelector("header").style.backgroundColor = "#7733ff";
  document.getElementById("myHeading").style.color = "white";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

  HeaderTitle = "Fiabilité d'un site web";

  headerUp();
  //Seul le bouton de retour est affiché en tout temps

  //On définit la grille
  alignHeader();
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }

  listF.map((s) => OpenList(s.id, s.contentId));
  //S'il y a un div et que sa liste déroulante est masquée, on l'affiche et vice-versa

  // if (document.getElementById("siteFiable").style.display === "none") {
  //   document.getElementById("openFia").classList.toggle("icon-circle-down");
  // }
  // else{
  //   document.getElementById("openFia").classList.toggle("icon-circle-up");
  // }
  // function openFia(x){
  //   x.classList.toggle("icon-circle-up")
  // }
}
