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
  const ArnMap = [
    "On vous demande de faire un virement international imprévu et urgent, et insiste sur son caractère confidentiel. L’arnaqueur en sait beaucoup sur votre entreprise et peut aussi utiliser la menace et la flatterie pour vous pousser à faire la transaction.",
    "Pour vous protéger: Partagez le moins d’information possible sur le fonctionnement de l’entreprise et parlez de ce type d’arnaque à vos collègues. Soyez prudent si cela a lieu en vacances ou en fin d’année et essayez de communiquer avec le donneur d’ordre avec ses coordonnées habituelles pour confirmer. Instaurez des procédures de vérifications et de signatures multiples pour les paiements internationaux.",
    "En cas de fraude: tâchez d’obtenir le remboursement de la transaction par votre banque, et portez plainte immédiatement",
  ];

  const text = `<ul>${ArnMap.map((e) => `<li>${e}</li>`).join("")}</ul>`;
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "red";
  document.getElementById("myHeading").innerHTML =
    "<div id='caseRetour'>◀</div><div></div>";
  HeaderTitle = "Arnaque au président";

  headerUp();
  document.querySelector("ul").style.fontFamily = "K2D, sans-serif";

  alignHeader();
  console.log("oui");

  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Arnaques);
  }
}
