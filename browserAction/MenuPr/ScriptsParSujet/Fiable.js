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
  //Catégories
  indexation[0] =
    "<p id='introP'>Si vous voulez aller sur un site, n’acceptez que les cookies essentiels</p>";
  indexation[1] =
    "<p id='saFiabilite' class='iconeOui'><span class='icon-FA-list-alt'></span>Fiabilité du site<span id='openFia' class='icon-circle-down'></span></p><div id='siteFiable'><p id='introP'>Lorsque vous allez sur un site, posez-vous ces questions:</p><ul>";
  indexation[2] =
    "<li>Qui est l’auteur(e)?</li><li>Quelles sont sa profession, son expérience, et sa formation?</li><li>A-t-il/elle de l’expérience sur le sujet?</li>";
  indexation[3] = "<li>Peut-on contacter cette personne?</li>";
  indexation[4] =
    "<li>Le site est-il affilié à une organisation/association/institution connue?</li>";
  indexation[5] = "<li>Peut-on s’informer sur cette organisation?</li>";
  indexation[6] = "<li>Y’a-t-il une section « mentions légales »?</li>";
  indexation[7] =
    "<li>Est-il possible de savoir quelle est la mission/objectif du site?</li>";
  indexation[8] =
    "<li>Quel est l’objectif de cette page (actualité, publicité, éducation, divertissement)?</li>";
  indexation[9] =
    "<li>Quel est son public-cible (spécialistes, profanes, étudiant(e)s, enfants, public général...)?</li>";
  indexation[10] =
    "<li>Est-ce que les dates de création et de mise à jour du site sont présentes sur le site?</li>";
  indexation[11] =
    "<li>À quand remonte sa dernière mise à jour? Si elle remonte à longtemps, son information peut être désuète...</li>";
  indexation[12] = "<li>L’information est-elle sourcée?</li>";
  indexation[13] =
    "<li>Est-ce que le texte est bien orthographié?</li></ul></div><hr>";
  indexation[14] =
    "<p id='infoFi' class='iconeOui'><span class='icon-FA-newspaper-o'></span>Fiabilité de l'information<span class='icon-circle-down'></span></p><div id='infoFiable'><ul>";
  indexation[15] =
    "<li>Entrez l’information dans la barre de recherche et ajoutez « faux ».</li>";
  indexation[16] = "<li>Comparer son point de vue local et international</li>";
  indexation[17] =
    "<li>Vérifiez sa date de publication pour la mettre dans son contexte.</li>";
  indexation[18] = "<li>Renseignez-vous sur la source d’information</li>";
  indexation[19] =
    "<li>Regardez si le site a un titre douteux. </li></ul></div><hr>";
  indexation[20] =
    "<p id='InflS' class='iconeOui'><span class='icon-FA-eye'></span>Influenceur<span class='icon-circle-down'></span></p><div id='siteInf'><ul>";
  indexation[21] =
    "<li>Vérifiez leur authenticité (attention à l’achat de vues)</li>";
  indexation[22] =
    "<li>Vérifiez leur pertinence et leur expertise à aborder un sujet</li>";
  indexation[23] =
    "<li>Demandez-vous si l’influenceur reparle des produits dans les semaines/mois suivants.</li>";
  indexation[24] =
    "<li>Est-ce qu’il est disposé à discuter avec ses internautes sur les produits en question?</li>";
  indexation[25] =
    "<li>Est-ce qu’il mentionne qu’il s’agit d’une publicité ou d’un sponsor si le contenu est visiblement promotionnel?</li></ul></div><hr>";
  indexation[26] =
    "<p id='santSite' class='iconeOui'><span class='icon-FA-stethoscope'></span>Sites de santé<span class='icon-circle-down'></span></p><div id='siteSante'><ul>";
  indexation[27] =
    "<li>Est-ce que l’auteur du site vend son propre produit médical?</li>";
  indexation[28] = "<li>Est-ce le site d’une institution médicale connue?</li>";
  indexation[29] = "<li>Quel est son suffixe?</li>";
  indexation[30] = "<li>A-t-il des références médicales fiables?</li>";
  indexation[31] =
    "<li>Méfiez-vous des forums. En toute logique, vous ne devriez pas mourir d’un rhume.</li>";
  indexation[32] =
    "<li>Les cas les plus mentionnés (et souvent faux) se retrouvent en première position sur Google, donc prudence.</li>";
  indexation[33] =
    "<li>Méfiez-vous des formulaires automatisés. Selon une étude, ils ne sont fiables qu’à 34%.</li>";
  indexation[34] =
    "<li>Utilisez des sites fiables comme Patientslikeme, Doctissimo, Sante.Journaldesfemmes.com, Maladiesrares.info, Santé Canada</li></ul></div>";
  indexation.length = 35;
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join("");
  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "#7733ff";
  document.getElementById("myHeading").style.color = "white";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête

    HeaderTitle = "Fiabilité d'un site web"

    headerUp()
  //Seul le bouton de retour est affiché en tout temps
  
  //On définit la grille
alignHeader()
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
  //S'il y a un div et que sa liste déroulante est masquée, on l'affiche et vice-versa
  var BtnReviens = document.getElementById("saFiabilite");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function (y) {
      var x = document.getElementById("siteFiable");

      if (x.style.display === "none") {
        x.style.display = "block";
        // document.getElementById("openFia").classList.toggle("icon-circle-up")
      } else {
        x.style.display = "none";
        // document.getElementById("openFia").classList.toggle("icon-circle-down")
      }
    });
  }
  // if (document.getElementById("siteFiable").style.display === "none") {
  //   document.getElementById("openFia").classList.toggle("icon-circle-down");
  // }
  // else{
  //   document.getElementById("openFia").classList.toggle("icon-circle-up");
  // }
  // function openFia(x){
  //   x.classList.toggle("icon-circle-up")
  // }
  var BtnReviens = document.getElementById("infoFi");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function () {
      var x = document.getElementById("infoFiable");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("InflS");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function () {
      var x = document.getElementById("siteInf");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("santSite");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function () {
      var x = document.getElementById("siteSante");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
}
