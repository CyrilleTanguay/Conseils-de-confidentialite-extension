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
  indexation[0] = "<p id='ouvprevExto' class='iconeOui'><span class='icon-FA-eye-slash'></span>Prévention<span class='icon-circle-down'></span></p><div id='prevExto'><ul>"
  indexation[1] = "<li>N’affichez pas trop de détails sur les médias sociaux. Plus de la moitié des victimes de sextorsion connaissaient l’harceleur.</li>"
  indexation[2] = "<li>Évitez de mettre des photos compromettantes dans un service d’archivage ou de stockage en ligne, car elles pourraient être piratées.</li></ul></div><hr>"
  indexation[3] = "<p id='ouvvictExto' class='iconeOui'><span class='icon-FA-thumb-tack'></span>Si vous êtes victime<span class='icon-circle-down'></span></p><div id='victExto'><ul>"
  indexation[4] = "<li><b><i><u>Règle #1: Ne lui envoyez JAMAIS d’argent ou de photos, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li>"
  indexation[5] = "<li>Désactivez votre compte (sans le supprimer)</li>"
  indexation[6] = "<li>Conservez les preuves (conversations, noms d’utilisateur de l’extorqueur, détails de ses comptes, images envoyées)</li><li>Signalez les cas d’extorsion aux autorités, à CyberAide.</li></ul></div><hr>"
  indexation[7] = "<p id='EscrRec' class='iconeOui'><span class='icon-FA-user-secret'></span>Escrocs du recouvrement<span class='icon-circle-down'></span></p><div id='Escrocs'><p>Les reconnaitre</p><ul>"
  indexation[8] = "<li>Ils emploient des détectives privés pour aider les victimes</li><li>Ils offrent des services payants aux personnes extorquées</li>"
  indexation[9] = "<li>Ils peuvent prouver qu’ils ont empêché la fuite de photos intimes, arrêté des extorqueurs</li></ul>"
  indexation[10] = "<p>Que faire?</p><ul>"
  indexation[11] = "<li>Ne demandez jamais leurs services, car il est trop difficile de savoir s’ils sont légitimes</li>"
  indexation[12] = "<li><b><i><u>Règle #1: Ne lui envoyez JAMAIS d’argent ou de photos, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li>"
  indexation[13] = "<li>Il ne faut jamais être payé pour venir en aide à une victime</li></ul></div><hr>"
  indexation[14] = "<p id='predS' class='iconeOui'><span class='icon-FA-search'></span>Prédateurs sexuels: les repérer<span class='icon-circle-down'></span></p><div id='pred'><ul>"
  indexation[15] = "<li>Ils utilisent du charme.</li>"
  indexation[16] = "<li>Ils tiennent à avoir des conversations privées qui ne peuvent être lues que par vous pour ne pas laisser de traces à la police. Ces conversations peuvent avoir lieu dans un service de messagerie.</li><li>Ils demandent des informations personnelles</li>"
  indexation[17] = "<li>Ils peuvent faire croire qu’il en sait plus à votre sujet que vous ne leur en avez appris.</li>"
  indexation[18] = "<li>Ils sont insistants.</li>"
  indexation[19] = "<li>Ils se renseignent sur vous et sur votre famille.</li>"
  indexation[20] = "<li>Ils sont empathiques (« Qu’est-ce qui ne va pas »)</li>"
  indexation[21] = "<li>Ils critiquent vos relations</li>"
  indexation[22] = "<li>Ils peuvent se contredire dans leur histoire, dans leur âge ou activité</li>"
  indexation[23] = "<li>Ils peuvent vous offrir des cadeaux ou de l’argent. CELA EST SUSPECT.</li>"
  indexation[24] = "<li>Ils utilisent une fausse photo de profil. Vous pouvez faire une recherche sur google images pour savoir si cette photo représente une autre personne.</li>"
  indexation[25] = "<li>La conversation peut tourner sur le sexe ou sur des vues radicales ou violentes.</li>"
  indexation[26] = "<li>Ils vous forcent à mentir</li></ul></div><hr>"
  indexation[27] = "<p id='compDev' class='iconeOui'><span class='icon-FA-bomb'></span>Les comportements déviants<span class='icon-circle-down'></span></p><div id='compor'><p style='line-height:initial'>Les gens ayant une mauvaise influence (le groupe terroriste ISIS, le groupe de hackers Lazarus – qui a créé le virus WannaCry) tiennent des propos déviants. Il est possible de repérer deux types de comportements.</p><p>Les narcissiques:</p><ul>"
  indexation[28] = "<li>Ils sont égocentriques</li>"
  indexation[29] = "<li>Ils nient leurs erreurs</li>"
  indexation[30] = "<li>Ils adorent les compliments</li>"
  indexation[31] = "<li>Ils ne peuvent supporter la critique négative</li>"
  indexation[32] = "<li>Leurs messages sont plus longs que la moyenne</li></ul>"
  indexation[33] = "<p>Les machiavéliens:</p><ul>"
  indexation[34] = "<li>Ce sont des menteurs et des manipulateurs.</li>"
  indexation[35] = "<li>Ils sont détachés émotionnellement, sont cyniques et utilisent la manipulation interpersonnelle.</li>"
  indexation[36] = "<li>Ils peuvent faire de l’autopromotion malhonnête ainsi que des agressions relationnelles envers leurs ami(e)s</li>"
  indexation[37] = "<li>Leurs messages sont courts (pour ne pas donner trop d’informations), mais ceux des bonnes personnes peuvent l’être aussi, donc ne vous basez pas sur ce critère si vous voulez repérer des machiavéliens.</li>"
  indexation[38] = "<li>Ils peuvent être charmants et populaires (de manière superficielle) étant donné que ce sont des maîtres manipulateurs</li>"
  indexation[39] = "<li>Ils peuvent prétendre être intéressés et compatissants, mais pour une courte période.</li>"
  indexation[40] = "<li>Un bon exemple: Gordon Gekko du film Wall Street.</li></ul></div>"
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  //On remplit la fenêtre avec ces catégories
  document.getElementById('laListe').innerHTML = text;
  document.querySelector("header").style.backgroundColor = "red";
  //On s'assure que les listes déroulantes soient fermées et masquées   
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>(S)extorsion/Chantage";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  //On définit la grille
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  }
  //S'il y a un div et que sa liste déroulante est masquée, on l'affiche et vice-versa
  var BtnprevExto = document.getElementById("ouvprevExto");
  if (BtnprevExto) {
    BtnprevExto.addEventListener("click", function prevExto() {
      var x = document.getElementById("prevExto");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnvictExto = document.getElementById("ouvvictExto");
  if (BtnvictExto) {
    BtnvictExto.addEventListener("click", function victExto() {
      var x = document.getElementById("victExto");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnEscrRec = document.getElementById("EscrRec");
  if (BtnEscrRec) {
    BtnEscrRec.addEventListener("click",
      function EscrRec() {
        var x = document.getElementById("Escrocs");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
  }
  var BtnpredS = document.getElementById("predS");
  if (BtnpredS) {
    BtnpredS.addEventListener("click", function predS() {
      var x = document.getElementById("pred");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtncompDev = document.getElementById("compDev");
  if (BtncompDev) {
    BtncompDev.addEventListener("click", function compDev() {
      var x = document.getElementById("compor");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }

}