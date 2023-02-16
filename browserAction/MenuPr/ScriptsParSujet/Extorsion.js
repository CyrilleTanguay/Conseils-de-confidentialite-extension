function Extorsion(){
    document.getElementById('laListe').innerHTML="<p id='ouvprevExto'>Prévention:</p><div id='prevExto'><ul><li>N’affichez pas trop de détails sur les médias sociaux. Plus de la moitié des victimes de sextorsion connaissaient l’harceleur.</li><li>Évitez de mettre des photos compromettantes dans un service d’archivage ou de stockage en ligne, car elles pourraient être piratées.</li></ul></div><hr><p id='ouvvictExto'>Si vous êtes victime</p><div id='victExto'><ul><li><b><i><u>Règle #1: Ne lui envoyez JAMAIS d’argent ou de photos, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li><li>Désactivez votre compte (sans le supprimer)</li><li>Conservez les preuves (conversations, noms d’utilisateur de l’extorqueur, détails de ses comptes, images envoyées)</li><li>Signalez les cas d’extorsion aux autorités, à CyberAide.</li></ul></div> <hr><p id='EscrRec'>Escrocs du recouvrement</p><div id='Escrocs'><p>Les reconnaitre</p><ul><li>Ils emploient des détectives privés pour aider les victimes</li><li>Ils offrent des services payants aux personnes extorquées</li><li>Ils peuvent prouver qu’ils ont empêché la fuite de photos intimes, arrêté des extorqueurs</li></ul><p>Que faire</p><ul><li>Ne demandez jamais leurs services, car il est trop difficile de savoir s’ils sont légitimes</li><li><b><i><u>Règle #1: Ne lui envoyez JAMAIS d’argent ou de photos, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li><li>Il ne faut jamais être payé pour venir en aide à une victime</li></ul></div><hr><p id='predS'>Prédateurs sexuels: les repérer</p><div id='pred'><ul><li>Ils utilisent du charme.</li><li>Ils tiennent à avoir des conversations privées qui ne peuvent être lues que par vous pour ne pas laisser de traces à la police. Ces conversations peuvent avoir lieu dans un service de messagerie.</li><li>Ils demandent des informations personnelles</li><li>Ils peuvent faire croire qu’il en sait plus à votre sujet que vous ne leur en avez appris.</li><li>Ils sont insistants.</li><li>Ils se renseignent sur vous et sur votre famille.</li><li>Ils sont empathiques (« Qu’est-ce qui ne va pas »)</li><li>Ils critiquent vos relations</li><li>Ils peuvent se contredire dans leur histoire, dans leur âge ou activité</li><li>Ils peuvent vous offrir des cadeaux ou de l’argent. CELA EST SUSPECT.</li><li>Ils utilisent une fausse photo de profil. Vous pouvez faire une recherche sur google images pour savoir si cette photo représente une autre personne.</li><li>La conversation peut tourner sur le sexe ou sur des vues radicales ou violentes.</li><li>Ils vous forcent à mentir</li></ul></div><hr><p id='compDev'>Les comportements déviants</p><div id='compor'><p>Les gens ayant une mauvaise influence (le groupe terroriste ISIS, le groupe de hackers Lazarus – qui a créé le virus WannaCry) tiennent des propos déviants. Il est possible de repérer deux types de comportements.</p><p>Les narcissiques:</p><ul><li>Ils sont égocentriques</li><li>Ils nient leurs erreurs</li><li>Ils adorent les compliments</li><li>Ils ne peuvent supporter la critique négative</li><li>Leurs messages sont plus longs que la moyenne</li></ul><p>Les machiavéliens:</p><ul><li>Ce sont des menteurs et des manipulateurs.</li><li>Ils sont détachés émotionnellement, sont cyniques et utilisent la manipulation interpersonnelle.</li><li>Ils peuvent faire de l’autopromotion malhonnête ainsi que des agressions relationnelles envers leurs ami(e)s</li><li>Leurs messages sont courts (pour ne pas donner trop d’informations), mais ceux des bonnes personnes peuvent l’être aussi, donc ne vous basez pas sur ce critère si vous voulez repérer des machiavéliens.</li><li>Ils peuvent être charmants et populaires (de manière superficielle) étant donné que ce sont des maîtres manipulateurs</li><li>Ils peuvent prétendre être intéressés et compatissants, mais pour une courte période.</li><li>Un bon exemple: Gordon Gekko du film Wall Street.</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀ Retour</div><div></div>Extorsion / Sextorsion / Chantage";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
    var BtnprevExto= document.getElementById("ouvprevExto");
    if (BtnprevExto){
      BtnprevExto.addEventListener("click", function prevExto(){
        var x = document.getElementById("prevExto");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnvictExto= document.getElementById("ouvvictExto");
    if (BtnvictExto){
      BtnvictExto.addEventListener("click", function victExto(){
        var x = document.getElementById("victExto");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtnEscrRec= document.getElementById("EscrRec");
    if (BtnEscrRec){
      BtnEscrRec.addEventListener("click", 
      function EscrRec(){
          var x = document.getElementById("Escrocs");
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
      }); 
    }
    var BtnpredS= document.getElementById("predS");
    if (BtnpredS){
      BtnpredS.addEventListener("click", function predS(){
        var x = document.getElementById("pred");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
    var BtncompDev= document.getElementById("compDev");
    if (BtncompDev){
      BtncompDev.addEventListener("click", function compDev(){
        var x = document.getElementById("compor");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }

}






