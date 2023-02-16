function Fiable(){
    document.getElementById('laListe').innerHTML="<p>Si vous voulez aller sur un site, n’acceptez que les cookies essentiels</p><p id='saFiabilite'>Fiabilité du site</p><div id='siteFiable'><ul><li>Qui est l’auteur(e)?</li><li>Quelles sont sa profession, son expérience, et sa formation?</li><li>A-t-il/elle de l’expérience sur le sujet?</li><li>Peut-on contacter cette personne?</li><li>Le site est-il affilié à une organisation/association/institution connue?</li><li>Peut-on s’informer sur cette organisation?</li><li>Y’a-t-il une section « mentions légales »?</li><li>Est-il possible de savoir quelle est la mission/objectif du site?</li><li>Quel est l’objectif de cette page (actualité, publicité, éducation, divertissement)?</li><li>Quel est son public-cible (spécialistes, profanes, étudiant(e)s, enfants, public général...)?</li><li>Est-ce que les dates de création et de mise à jour du site sont présentes sur le site?</li><li>À quand remonte sa dernière mise à jour? Si elle remonte à longtemps, son information peut être désuète...</li><li>L’information est-elle sourcée?</li><li>Est-ce que le texte est bien orthographié?</li></ul></div><hr><p id='infoFi'>Fiabilité de l'information</p><div id='infoFiable'><ul><li>Entrez l’information dans la barre de recherche et ajoutez « faux ».</li><li>Comparer son point de vue local et international</li><li>Vérifiez sa date de publication pour la mettre dans son contexte.</li><li>Renseignez-vous sur la source d’information</li><li>A-t-il un titre douteux? </li></ul></div><hr><p id='InflS'>Influenceur</p><div id='siteInf'><ul><li>Vérifiez leur authenticité (attention à l’achat de vues)</li><li>Vérifiez leur pertinence et leur expertise à aborder un sujet</li><li>Demandez-vous si l’influenceur reparle des produits dans les semaines/mois suivants.</li><li>Est-ce qu’il est disposé à discuter avec ses internautes sur les produits en question?</li><li>Est-ce qu’il mentionne qu’il s’agit d’une publicité ou d’un sponsor si le contenu est visiblement promotionnel?</li></ul></div><hr><p id='santSite'>Sites de santé</p><div id='siteSante'><ul><li>Est-ce que l’auteur du site vend son propre produit médical?</li><li>Est-ce le site d’une institution médicale connue?</li><li>Quel est son suffixe?</li><li>A-t-il des références médicales fiables?</li><li>Méfiez-vous des forums. En toute logique, vous ne devriez pas mourir d’un rhume.</li><li>Les cas les plus mentionnés (et souvent faux) se retrouvent en première position sur Google, donc prudence.</li><li>Méfiez-vous des formulaires automatisés, ils ne sont fiables qu’à 34%.</li><li>Utilisez des sites fiables comme Patientslikeme, Doctissimo, Sante.Journaldesfemmes.com, Maladiesrares.info, Santé Canada</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀ Retour</div><div></div>La fiabilité d'un site web";
    var BtnReviens= document.getElementById("caseRetour");
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }

    var BtnReviens= document.getElementById("saFiabilite");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function (){
        var x = document.getElementById("siteFiable");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("infoFi");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function (){
        var x = document.getElementById("infoFiable");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("InflS");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function (){
        var x = document.getElementById("siteInf");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnReviens= document.getElementById("santSite");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function (){
        var x = document.getElementById("siteSante");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
}