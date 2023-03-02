/**
 * 
 * Ce fichier intègre le code HTML de la page "Arnaque au président" dans ce popup.
 * 
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction Arnaques se trouve dans le document "Arnaques.js"
 * 
 * 
 */
function ArnPres() {
  indexation[0] = ["<ul><li>On vous demande de faire un virement international imprévu et urgent, et insiste sur son caractère confidentiel. L’arnaqueur en sait beaucoup sur votre entreprise et peut aussi utiliser la menace et la flatterie pour vous pousser à faire la transaction.</li>"];
  indexation[1] = ["<li>Pour vous protéger: Partagez le moins d’information possible sur le fonctionnement de l’entreprise et parlez de ce type d’arnaque à vos collègues. Soyez prudent si cela a lieu en vacances ou en fin d’année et essayez de communiquer avec le donneur d’ordre avec ses coordonnées habituelles pour confirmer. Instaurez des procédures de vérifications et de signatures multiples pour les paiements internationaux.</li>"];
  indexation[2] = ["<li>En cas de fraude: tâchez d’obtenir le remboursement de la transaction par votre banque, et portez plainte immédiatement</li></ul>"];
  for (let i = 3; i < 14; i++) {
    indexation[i] = '';
  };
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  document.querySelector("header").style.backgroundColor = "red";
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Arnaque au président";
  document.querySelector("ul").style.fontFamily = "K2D, sans-serif";

  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  console.log("oui");

  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Arnaques);
  }


}