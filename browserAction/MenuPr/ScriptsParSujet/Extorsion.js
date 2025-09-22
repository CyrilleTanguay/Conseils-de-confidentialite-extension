/**
 *
 * Ce fichier intègre le code HTML de la page "Extorsion / Sextorsion / Chantage" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */
function Extorsion() {
  //Catégories

  const listExt = [
    {
      id: "ouvprevExto",
      icon: "icon-FA-eye-slash",
      title: "Prévention",
      contentId: "prevExto",
      contentList: [
        {
          subContent: [
            {
              text: "N’affichez pas trop de détails sur les médias sociaux. Selon une étude, plus de la moitié des victimes de sextorsion connaissaient l’harceleur.",
            },
            {
              text: "Évitez de mettre des photos compromettantes dans un service d’archivage ou de stockage en ligne, car elles pourraient être piratées.",
            },
          ],
        },
      ],
    },
    {
      id: "ouvvictExto",
      icon: "icon-FA-thumb-tack",
      title: "Si vous êtes victime",
      contentId: "victExto",
      contentList: [
        {
          subContent: [
            {
              text: "<b><i><u>Règle #1: N'envoyez JAMAIS d’argent ou de photos à l'extorqueur, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b>",
            },
            { text: "Désactivez votre compte (sans le supprimer)" },
            {
              text: "Conservez les preuves (conversations, noms d’utilisateur de l’extorqueur, détails de ses comptes, images envoyées)",
            },
            {
              text: "Signalez les cas d’extorsion aux autorités, à CyberAide.",
            },
          ],
        },
      ],
    },
    {
      id: "EscrRec",
      icon: "icon-FA-user-secret",
      title: "Escrocs du recouvrement",
      contentId: "Escrocs",
      contentList: [
        {
          headerText: "Les reconnaitre",
          subContent: [
            {
              text: "Ils emploient des détectives privés pour aider les victimes.",
            },
            {
              text: "Ils offrent des services payants aux personnes extorquées",
            },
            {
              text: "Ils peuvent prouver qu’ils ont empêché la fuite de photos intimes, arrêté des extorqueurs",
            },
          ],
        },
        {
          headerText: "Que faire?",
          subContent: [
            {
              text: "Ne demandez jamais leurs services, car il est trop difficile de savoir s’ils sont légitimes",
            },
            {
              text: "<b><i><u>Règle #1: N'envoyez JAMAIS d’argent ou de photos à l'extorqueur, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b>",
            },
            {
              text: "Il ne faut jamais être payé pour venir en aide à une victime",
            },
          ],
        },
      ],
    },
    {
      id: "predS",
      icon: "icon-FA-search",
      title: "Prédateurs sexuels: les repérer",
      contentId: "pred",
      contentList: [
        {
          subContent: [
            {
              text: "Ils utilisent du charme.",
            },
            {
              text: "Ils tiennent à avoir des conversations privées qui ne peuvent être lues que par vous pour ne pas laisser de traces à la police. Ces conversations peuvent avoir lieu dans un service de messagerie.",
            },
            {
              text: "Ils peuvent faire croire qu’il en sait plus à votre sujet que vous ne leur en avez appris.",
            },
            {
              text: "Ils sont insistants",
            },
            {
              text: "Ils se renseignent sur vous et sur votre famille.",
            },
            {
              text: "Ils sont empathiques (« Qu’est-ce qui ne va pas? »)",
            },
            {
              text: "Ils peuvent se contredire dans leur histoire, dans leur âge ou activité",
            },
            {
              text: "Ils peuvent vous offrir des cadeaux ou de l’argent. CELA EST SUSPECT.",
            },
            {
              text: "Ils utilisent une fausse photo de profil. Vous pouvez faire une recherche sur Google Images pour savoir si cette photo représente une autre personne.",
            },
            {
              text: "La conversation peut tourner sur le sexe ou sur des vues radicales ou violentes.",
            },
            {
              text: "Ils vous forcent à mentir",
            },
          ],
        },
      ],
    },
    {
      id: "compDev",
      icon: "icon-FA-bomb",
      title: "Les comportements déviants",
      contentId: "compor",
      introText:
        "Les gens ayant une mauvaise influence (le groupe terroriste ISIS, le groupe de hackers Lazarus – qui a créé le virus WannaCry) tiennent des propos déviants. Il est possible de repérer deux types de comportements.",
      contentList: [
        {
          headerText: "Les narcissiques:",
          subContent: [
            {
              text: "Ils sont égocentriques.",
            },
            {
              text: "Ils nient leurs erreurs.",
            },
            {
              text: "Ils adorent les compliments.",
            },
            {
              text: "Ils ne peuvent supporter la critique négative.",
            },
            {
              text: "Leurs messages sont plus longs que la moyenne.",
            },
          ],
        },
        {
          headerText: "Les machiavéliens:",
          subContent: [
            {
              text: "Ce sont des menteurs et des manipulateurs.",
            },
            {
              text: "Ils sont détachés émotionnellement, sont cyniques et utilisent la manipulation interpersonnelle.",
            },
            {
              text: "Ils peuvent faire de l’autopromotion malhonnête ainsi que des agressions relationnelles envers leurs ami(e)s.",
            },
            {
              text: "Leurs messages sont courts (pour ne pas donner trop d’informations), mais ceux des bonnes personnes peuvent l’être aussi, donc ne vous basez pas sur ce critère si vous voulez repérer des machiavéliens.",
            },
            {
              text: "Ils peuvent être charmants et populaires (de manière superficielle) étant donné que ce sont des maîtres manipulateurs.",
            },
            {
              text: "Ils peuvent prétendre être intéressés et compatissants, mais pour une courte période.",
            },
            {
              text: "Un bon exemple: Gordon Gekko du film Wall Street.",
            },
          ],
        },
      ],
    },
  ];

  const newList = listExt
    .map((e, i) =>
      paragraphListSub(
        e.id,
        e.icon,
        e.title,
        "icon-circle-down",
        e.contentId,
        e.introText,
        e.contentList,
        listExt,
        i
      )
    )
    .join("");

  // indexation[0] =
  //   "<p id='ouvprevExto' class='iconeOui'><span class='icon-FA-eye-slash'></span>Prévention<span class='icon-circle-down'></span></p><div id='prevExto'><ul>";
  // indexation[1] = `<li>N’affichez pas trop de détails sur les médias sociaux. Selon une étude, plus de la moitié des victimes de sextorsion connaissaient l’harceleur.</li>`;
  // indexation[2] =
  //   "<li>Évitez de mettre des photos compromettantes dans un service d’archivage ou de stockage en ligne, car elles pourraient être piratées.</li></ul></div><hr>";
  // indexation[3] =
  //   "<p id='ouvvictExto' class='iconeOui'><span class='icon-FA-thumb-tack'></span>Si vous êtes victime<span class='icon-circle-down'></span></p><div id='victExto'><ul>";
  // indexation[4] =
  //   "<li><b><i><u>Règle #1: N'envoyez JAMAIS d’argent ou de photos à l'extorqueur, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li>";
  // indexation[5] = "<li>Désactivez votre compte (sans le supprimer)</li>";
  // indexation[6] =
  //   "<li>Conservez les preuves (conversations, noms d’utilisateur de l’extorqueur, détails de ses comptes, images envoyées)</li><li>Signalez les cas d’extorsion aux autorités, à CyberAide.</li></ul></div><hr>";
  // indexation[7] =
  //   "<p id='EscrRec' class='iconeOui'><span class='icon-FA-user-secret'></span>Escrocs du recouvrement<span class='icon-circle-down'></span></p><div id='Escrocs'><p>Les reconnaitre</p><ul>";
  // indexation[8] =
  //   "<li>Ils emploient des détectives privés pour aider les victimes</li><li>Ils offrent des services payants aux personnes extorquées</li>";
  // indexation[9] =
  //   "<li>Ils peuvent prouver qu’ils ont empêché la fuite de photos intimes, arrêté des extorqueurs</li></ul>";
  // indexation[10] = "<p>Que faire?</p><ul>";
  // indexation[11] =
  //   "<li>Ne demandez jamais leurs services, car il est trop difficile de savoir s’ils sont légitimes</li>";
  // indexation[12] =
  //   "<li><b><i><u>Règle #1: N'envoyez JAMAIS d’argent ou de photos à l'extorqueur, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li>";
  // indexation[13] =
  //   "<li>Il ne faut jamais être payé pour venir en aide à une victime</li></ul></div><hr>";
  // indexation[14] =
  //   "<p id='predS' class='iconeOui'><span class='icon-FA-search'></span>Prédateurs sexuels: les repérer<span class='icon-circle-down'></span></p><div id='pred'><ul>";
  // indexation[15] = "<li>Ils utilisent du charme.</li>";
  // indexation[16] =
  //   "<li>Ils tiennent à avoir des conversations privées qui ne peuvent être lues que par vous pour ne pas laisser de traces à la police. Ces conversations peuvent avoir lieu dans un service de messagerie.</li><li>Ils demandent des informations personnelles</li>";
  // indexation[17] =
  //   "<li>Ils peuvent faire croire qu’il en sait plus à votre sujet que vous ne leur en avez appris.</li>";
  // indexation[18] = "<li>Ils sont insistants.</li>";
  // indexation[19] = "<li>Ils se renseignent sur vous et sur votre famille.</li>";
  // indexation[20] =
  //   "<li>Ils sont empathiques (« Qu’est-ce qui ne va pas? »)</li>";
  // indexation[21] = "<li>Ils critiquent vos relations</li>";
  // indexation[22] =
  //   "<li>Ils peuvent se contredire dans leur histoire, dans leur âge ou activité</li>";
  // indexation[23] =
  //   "<li>Ils peuvent vous offrir des cadeaux ou de l’argent. CELA EST SUSPECT.</li>";
  // indexation[24] =
  //   "<li>Ils utilisent une fausse photo de profil. Vous pouvez faire une recherche sur Google Images pour savoir si cette photo représente une autre personne.</li>";
  // indexation[25] =
  //   "<li>La conversation peut tourner sur le sexe ou sur des vues radicales ou violentes.</li>";
  // indexation[26] = "<li>Ils vous forcent à mentir</li></ul></div><hr>";
  // indexation[27] =
  //   "<p id='compDev' class='iconeOui'><span class='icon-FA-bomb'></span>Les comportements déviants<span class='icon-circle-down'></span></p><div id='compor'><p style='line-height:initial'>Les gens ayant une mauvaise influence (le groupe terroriste ISIS, le groupe de hackers Lazarus – qui a créé le virus WannaCry) tiennent des propos déviants. Il est possible de repérer deux types de comportements.</p><p>Les narcissiques:</p><ul>";
  // indexation[28] = "<li>Ils sont égocentriques</li>";
  // indexation[29] = "<li>Ils nient leurs erreurs</li>";
  // indexation[30] = "<li>Ils adorent les compliments</li>";
  // indexation[31] = "<li>Ils ne peuvent supporter la critique négative</li>";
  // indexation[32] =
  //   "<li>Leurs messages sont plus longs que la moyenne</li></ul>";
  // indexation[33] = "<p>Les machiavéliens:</p><ul>";
  // indexation[34] = "<li>Ce sont des menteurs et des manipulateurs.</li>";
  // indexation[35] =
  //   "<li>Ils sont détachés émotionnellement, sont cyniques et utilisent la manipulation interpersonnelle.</li>";
  // indexation[36] =
  //   "<li>Ils peuvent faire de l’autopromotion malhonnête ainsi que des agressions relationnelles envers leurs ami(e)s</li>";
  // indexation[37] =
  //   "<li>Leurs messages sont courts (pour ne pas donner trop d’informations), mais ceux des bonnes personnes peuvent l’être aussi, donc ne vous basez pas sur ce critère si vous voulez repérer des machiavéliens.</li>";
  // indexation[38] =
  //   "<li>Ils peuvent être charmants et populaires (de manière superficielle) étant donné que ce sont des maîtres manipulateurs</li>";
  // indexation[39] =
  //   "<li>Ils peuvent prétendre être intéressés et compatissants, mais pour une courte période.</li>";
  // indexation[40] =
  //   "<li>Un bon exemple: Gordon Gekko du film Wall Street.</li></ul></div>";
  //On s'assure que les variables ne soient pas séparées par une virgule

  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML = newList;
  document.querySelector("header").style.backgroundColor = "red";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

  HeaderTitle = "(S)extorsion/Chantage";

  headerUp();

  //On définit la grille
  alignHeader();
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
  //S'il y a un div et que sa liste déroulante est masquée, on l'affiche et vice-versa
  listExt.map((s) => OpenList(s.id, s.contentId));
}
