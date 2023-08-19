/**
 *
 * Ce fichier intègre le code HTML de la page "Achats en ligne" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */

function Achats() {
  let text = "";
  const divOuv = ["achatSite", "achatProduit"];
  const AcId = ["ouvrirAchatSite", "ouvrirAchatProd"];
  const AcIcone = ["icon-terminal", "icon-gift"];
  const LesCats = ["Concernant le site", "Concernant le produit"];
  const LignePr = ["<hr>", ""];
  const listeInt = [
    "<ul><li>Vérifiez le nom de domaine avec cet <a href='https://votresite.ca/abonnement/whois'>outil</a>. Si son acquisition est récente, cela est suspect</li><li>Vérifiez l’adresse de la boutique en ligne. Le fait qu’il soit situé dans un bloc-appartement ou au milieu de nulle part est suspicieux.</li><li>Téléphonez à l’entreprise pour vous assurer que le numéro est bel et bien lié à l’entreprise.</li><li>Pour le cas de boutiques québécoises, consultez le <a href='https://www.quebec.ca/entreprises-et-travailleurs-autonomes/obtenir-renseignements-entreprise/recherche-registre-entreprises'>registraire des entreprises du Québec</a>. Toutes les compagnies du Québec sont obligées de s’inscrire à ce registraire.</li><li>Vérifiez les conditions générales de vente</li><li>Assurez-vous que le site soit sécurisé. Vous pouvez utiliser un scanner.</li><li>Ne faites pas d’achat sur un ordinateur infecté ou public</li></ul></div>",
    "<ul><li>Vérifiez les commentaires d’un produit</li><li>Méfiez-vous si quelqu’un nous offre plus que le prix de vente d’un objet que vous vendez, surtout si cette personne offre de payer par PayPal. Vous recevrez un faux courriel de PayPal mentionnant le dépôt d’un montant plus élevé que prévu, puis l’acheteur va vous réécrire pour récupérer l’argent en trop. En vérifiant votre compte PayPal, vous verrez que le supposé transfert de fonds n’a jamais eu lieu.</li><li>Méfiez-vous de la fonction de demande de fonds d’Interac, surtout si l’adresse n’est pas « notify@payments.interac.ca ». Elle n’est accessible que pour Scotia, Royale, CIBC et TD. Les autres peuvent cependant accepter le don.</li><li>Lisez les infos sur les frais de livraison, de douane et de dédouanement pour éviter de payer plus cher inutilement.</li><li>Faire des captures d’écrans de chaque transaction, avec l’heure, le numéro de l’achat et la date et imprimez-les. Cela pourra servir de preuve en cas de litige.</li><li>Achetez local. Si vous avez une plainte à faire à la compagnie, il sera plus facile d’aller directement à une compagnie qui habite près de chez vous.</li></ul></div>",
  ];
  for (let i = 0; i < AcIcone.length; i++) {
    text +=
      '<p id="' +
      AcId[i] +
      '" class="iconeOui"><span class="' +
      AcIcone[i] +
      '"></span>' +
      LesCats[i] +
      '<span class="icon-circle-down"></span></p><div id="' +
      divOuv[i] +
      '">' +
      listeInt[i] +
      LignePr[i];
  }

  //Catégories
  indexation[0] =
    "<p id='introP'>Les achats en ligne peuvent faciliter notre vie, mais aussi celle de certains voleurs!</p>";
  indexation[1] =
    "<p id='ouvrirAchatSite' class='iconeOui'><span class='icon-terminal'></span>Concernant le site<span class='icon-circle-down'></span></p><div id='achatSite' style='display: none'><ul>";
  indexation[2] =
    "  <li>Vérifiez le nom de domaine avec cet <a href='https://votresite.ca/abonnement/whois'>outil</a>. Si l'acquisition du nom de domaine est récente, cela est suspect</li>";
  indexation[3] =
    "  <li>Vérifiez l’adresse de la boutique en ligne. Le fait qu’il soit situé dans un bloc-appartement ou au milieu de nulle part est suspicieux.</li>";
  indexation[4] =
    "  <li>Téléphonez à l’entreprise pour vous assurer que le numéro est bel et bien lié à l’entreprise.</li>";
  indexation[5] =
    "  <li>Pour le cas de boutiques québécoises, consultez le <a href='https://www.quebec.ca/entreprises-et-travailleurs-autonomes/obtenir-renseignements-entreprise/recherche-registre-entreprises'>registraire des entreprises du Québec</a>. Toutes les compagnies du Québec sont obligées de s’inscrire à ce registraire.</li><li>Vérifiez les conditions générales de vente</li>";
  indexation[6] =
    "  <li>Assurez-vous que le site soit sécurisé. Vous pouvez utiliser un scanner.</li><li>Ne faites pas d’achat sur un ordinateur infecté ou public</li></ul></div><hr>";
  indexation[7] =
    "  <p id='ouvrirAchatProd' class='iconeOui'><span class='icon-gift'></span>Concernant le produit<span class='icon-circle-down'></span></p><div id='achatProduit' style='display: none'><ul>";
  indexation[8] = "<li>Vérifiez les commentaires du produit</li>";
  indexation[9] =
    "<li>Méfiez-vous si quelqu’un nous offre plus que le prix de vente d’un objet que vous vendez, surtout si cette personne offre de payer par PayPal. Vous recevrez un faux courriel de PayPal mentionnant le dépôt d’un montant plus élevé que prévu, puis l’acheteur va vous réécrire pour récupérer l’argent en trop. En vérifiant votre compte PayPal, vous verrez que le supposé transfert de fonds n’a jamais eu lieu.</li>";
  indexation[10] =
    "<li>Méfiez-vous de la fonction de demande de fonds d’Interac, surtout si l’adresse n’est pas « notify@payments.interac.ca ». Elle n’est accessible que pour Scotia, Royale, CIBC et TD. Les autres peuvent cependant accepter le don.</li>";
  indexation[11] =
    "<li>Lisez les infos sur les frais de livraison, de douane et de dédouanement pour éviter de payer plus cher inutilement.</li>";
  indexation[12] =
    "<li>Faites des captures d’écran de chaque transaction, avec l’heure, le numéro de l’achat et la date et imprimez-les. Cela pourra servir de preuve en cas de litige.</li>";
  indexation[13] =
    "<li>Achetez local. Si vous avez une plainte à faire à la compagnie, il sera plus facile d’aller directement à une compagnie qui habite près de chez vous qu'à une compagnie située dans une autre ville.</li></ul></div>";
  //On s'assure que les variables ne soient pas séparées par une virgule
  //const text = indexation.join('');
  indexation.length = 14;

  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML =
    "<p id='introP'>Les achats en ligne peuvent faciliter notre vie, mais aussi celle de certains voleurs!</p>" +
    text;
  document.querySelector("header").style.backgroundColor = "gold";
  document.getElementById("myHeading").style.color = "black";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.getElementById("myHeading").innerHTML =
    "<div id='caseRetour'>◀</div><div></div>Achats en ligne";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  //On définit la grille
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";
  //Fonction pour la liste déroulante des Achats
  var BtnOuvAchatSite = document.getElementById("ouvrirAchatSite");
  if (BtnOuvAchatSite) {
    BtnOuvAchatSite.addEventListener("click", ouvrirAchatSite);
  }
  //Fonction pour la liste déroulante des ajustements
  var BtnOuvAchatProd = document.getElementById("ouvrirAchatProd");
  if (BtnOuvAchatProd) {
    BtnOuvAchatProd.addEventListener("click", ouvrirAchatProd);
  }
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
}
//Si la liste déroulante est masquée, on l'affiche et vice-versa
function ouvrirAchatSite() {
  var x = document.getElementById("achatSite");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function ouvrirAchatProd() {
  var x = document.getElementById("achatProduit");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
