function achatApp(){
  indexation[0]="<p id='introP'>Les applications peuvent nous simplifier la vie, tandis que d’autres peuvent être des arnaques.</p>"
  indexation[1]="<p id='ouvrirAchatApp'>Application</p><div id='achatApp'><ul>"
  indexation[2]="<li>Demandez-vous si l’application vaut le type de données qui ont besoin d’être partagées, que ce soit gratuit ou nom.</li>"
  indexation[3]="<li>Lisez la politique de confidentialité de l’application.</li><li>Ne téléchargez l’application qu’à partir de sa source officielle.</li>"
  indexation[4]="<li>Vérifiez les fichiers de l’application avant de la télécharger, car ils peuvent contenir des virus</li>"
  indexation[5]="<li>Méfiez-vous des applications gratuites. Elles vendent vos informations à des tiers pour vous donner des publicités ciblées et elles pourraient contenir des virus.</li>"
  indexation[6]="<li>Scannez l’application avec un antivirus avant de l’ouvrir</li>"
  indexation[7]="<li>Méfiez-vous des applications Mac qui vous demandent de payer pour quitter l’application.</li></ul></div><hr></hr>"
  indexation[8]="<p id='ouvrirCommApp'>Commentaires</p><div id='AppCom'><ul>"
  indexation[9]="<li>Il ne doit pas être générique</li>"
  indexation[10]="<li>Regardez l’historique de la personne qui a laissé ce commentaire. Si cette personne a publié 20 commentaires positifs sur 20 produits de la même marque, qu’elle a commenté plusieurs produits en une journée ou plusieurs objets du même type, cela est louche.</li>"
  indexation[11]="<li>Allez sur plus d’un site pour voir les avis sur un produit et allez sur des forums.</li></ul></div>"
  for(let i = 12; i < 14; i++) {
    indexation[i] = '';
  };
  const text = indexation.join(''); 
    document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="blue";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Achat d’applications";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";

    var BtnAchatdeApp= document.getElementById("ouvrirAchatApp");
if (BtnAchatdeApp){
  BtnAchatdeApp.addEventListener("click", ouvrirAchatApp); 
}

var BtnCommApp= document.getElementById("ouvrirCommApp");
if (BtnCommApp){
  BtnCommApp.addEventListener("click", ouvrirCommApp); 
}
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", RetourPrincipal); 
}
  }

function ouvrirAchatApp(){
    var x = document.getElementById("achatApp");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirCommApp(){
    var x = document.getElementById("AppCom");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}