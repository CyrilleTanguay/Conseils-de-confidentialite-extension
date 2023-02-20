function ArnNigeriane(){
    indexation[0] = ["<ul><li>Principe: une personne riche se retrouve dans une situation d’urgence et demande votre aide pour transférer son argent en échange d’un pourcentage.</li>"];
    indexation[1] = ["<li>Dérivés:</li><ul><li>Un faux tirage au sort.</li><li>Une fausse offre d’emploi (la victime doit payer des frais tels que le permis ou le voyage)</li><li>On vous demande de rembourser un chèque en bois.</li><li>La séduction. Un arnaqueur nigérian, qui se faisait passer pour un ingénieur américain, avait créé un lien amoureux avec une victime (une Américaine). Le lien était tel qu’elle lui paya ses études, « études » qui valaient plusieurs milliers de dollars.</li><li>L'arnaqueur peut vous faire vendre une œuvre qu’il ne possède même pas.</li><li>On vous demande de payer une somme ou les frais de port pour acquérir un bien soldé. Bien qui n’arrive jamais.</li><li>Il peut s’agir d’un faux expert en crédit</li></ul></ul>"];
       for(let i = 2; i < 14; i++) {
          indexation[i] = '';
       };
    const text = indexation.join(''); 
      document.getElementById('laListe').innerHTML=text;
      document.querySelector("header").style.backgroundColor="red";
      document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Arnaque nigériane (alias 4-1-9)";
      document.querySelector("ul").style.fontFamily="K2D, sans-serif";

   document.getElementById("myHeading").style.textAlign="right";
  document.getElementById("myHeading").style.display="grid";
  document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";   
  console.log("oui");
  
  
  var BtnAjust= document.getElementById("ouvrirAjust");
  if (BtnAjust){
    BtnAjust.addEventListener("click", ouvrirAjust); 
  }
  var BtnInte=document.getElementById("ouvrirInte");
  if(BtnInte){
    BtnInte.addEventListener("click", ouvrirInte);
  }
  var BtnAppInte=document.getElementById("ouvrirAppInte");
  if(BtnAppInte){
    BtnAppInte.addEventListener("click", ouvrirAppInte);
  }
  var BtnReviens= document.getElementById("caseRetour");
  if (BtnReviens){
    BtnReviens.addEventListener("click", RetourPrincipal); 
  }
  
  
  }