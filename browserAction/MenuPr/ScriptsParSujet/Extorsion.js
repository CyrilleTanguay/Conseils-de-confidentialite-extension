function Extorsion(){
  indexation[0]="<p id='ouvprevExto'>Prévention</p><div id='prevExto'><ul>"
  indexation[1]="<li>N’affichez pas trop de détails sur les médias sociaux. Plus de la moitié des victimes de sextorsion connaissaient l’harceleur.</li>"
  indexation[2]="<li>Évitez de mettre des photos compromettantes dans un service d’archivage ou de stockage en ligne, car elles pourraient être piratées.</li></ul></div><hr>"
  indexation[3]="<p id='ouvvictExto'>Si vous êtes victime</p><div id='victExto'><ul>"
  indexation[4]="<li><b><i><u>Règle #1: Ne lui envoyez JAMAIS d’argent ou de photos, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li>"
  indexation[5]="<li>Désactivez votre compte (sans le supprimer)</li>"
  indexation[6]="<li>Conservez les preuves (conversations, noms d’utilisateur de l’extorqueur, détails de ses comptes, images envoyées)</li><li>Signalez les cas d’extorsion aux autorités, à CyberAide.</li></ul></div><hr>"
  indexation[7]="<p id='EscrRec'>Escrocs du recouvrement</p><div id='Escrocs'><p>Les reconnaitre</p><ul>"
  indexation[8]="<li>Ils emploient des détectives privés pour aider les victimes</li><li>Ils offrent des services payants aux personnes extorquées</li>"
  indexation[9]="<li>Ils peuvent prouver qu’ils ont empêché la fuite de photos intimes, arrêté des extorqueurs</li></ul>"
  indexation[10]="<p>Que faire?</p><ul>"
  indexation[11]="<li>Ne demandez jamais leurs services, car il est trop difficile de savoir s’ils sont légitimes</li>"
  indexation[12]="<li><b><i><u>Règle #1: Ne lui envoyez JAMAIS d’argent ou de photos, bref, ne vous pliez JAMAIS à ses demandes. Cela peut faire en sorte que l’extorqueur va en profiter pour vous en demander plus.</u></i></b></li>"
  indexation[13]="<li>Il ne faut jamais être payé pour venir en aide à une victime</li></ul></div><hr>"
  indexation[14]="<p id='predS'>Prédateurs sexuels: les repérer</p><div id='pred'><ul>"
  indexation[15]="<li>Ils utilisent du charme.</li>"
  indexation[16]="<li>Ils tiennent à avoir des conversations privées qui ne peuvent être lues que par vous pour ne pas laisser de traces à la police. Ces conversations peuvent avoir lieu dans un service de messagerie.</li< >Ils demandent des informations personnelles</li>"
  indexation[17]="<li>Ils peuvent faire croire qu’il en sait plus à votre sujet que vous ne leur en avez appris.</li>"
  indexation[18]="<li>Ils sont insistants.</li>"
  indexation[19]="<li>Ils se renseignent sur vous et sur votre famille.</li>"
  indexation[20]="<li>Ils sont empathiques (« Qu’est-ce qui ne va pas »)</li>"
  indexation[21]="<li>Ils critiquent vos relations</li>"
  indexation[22]="<li>Ils peuvent se contredire dans leur histoire, dans leur âge ou activité</li>"
  indexation[23]="<li>Ils peuvent vous offrir des cadeaux ou de l’argent. CELA EST SUSPECT.</li>"
  indexation[24]="<li>Ils utilisent une fausse photo de profil. Vous pouvez faire une recherche sur google images pour savoir si cette photo représente une autre personne.</li>"
  indexation[25]="<li>La conversation peut tourner sur le sexe ou sur des vues radicales ou violentes.</li>"
  indexation[26]="<li>Ils vous forcent à mentir</li></ul></div><hr><p id='compDev'>Les comportements déviants</p><div id='compor'><p>Les gens ayant une mauvaise influence (le groupe terroriste ISIS, le groupe de hackers Lazarus – qui a créé le virus WannaCry) tiennent des propos déviants. Il est possible de repérer deux types de comportements.</p><p>Les narcissiques:</p><ul>"
  indexation[27]="<li>Ils sont égocentriques</li>"
  indexation[28]="<li>Ils nient leurs erreurs</li>"
  indexation[29]="<li>Ils adorent les compliments</li>"
  indexation[30]="<li>Ils ne peuvent supporter la critique négative</li>"
  indexation[31]="<li>Leurs messages sont plus longs que la moyenne</li></ul>"
  indexation[32]="<p>Les machiavéliens:</p><ul>"
  indexation[33]="<li>Ce sont des menteurs et des manipulateurs.</li>"
  indexation[34]="<li>Ils sont détachés émotionnellement, sont cyniques et utilisent la manipulation interpersonnelle.</li>"
  indexation[35]="<li>Ils peuvent faire de l’autopromotion malhonnête ainsi que des agressions relationnelles envers leurs ami(e)s</li>"
  indexation[36]="<li>Leurs messages sont courts (pour ne pas donner trop d’informations), mais ceux des bonnes personnes peuvent l’être aussi, donc ne vous basez pas sur ce critère si vous voulez repérer des machiavéliens.</li>"
  indexation[37]="<li>Ils peuvent être charmants et populaires (de manière superficielle) étant donné que ce sont des maîtres manipulateurs</li>"
  indexation[38]="<li>Ils peuvent prétendre être intéressés et compatissants, mais pour une courte période.</li>"
  indexation[39]="<li>Un bon exemple: Gordon Gekko du film Wall Street.</li></ul></div>"
  const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Extorsion / Sextorsion / Chantage";
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






