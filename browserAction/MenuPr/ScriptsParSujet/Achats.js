function Achats(){
    document.getElementById('laListe').innerHTML="<p>Les achats en ligne peuvent faciliter notre vie, mais aussi celle de certains voleurs!</p><p id='ouvrirAchatSite'>Concernant le site</p><div id='achatSite'><ul><li>Vérifiez le nom de domaine avec cet outil. Si son acquisition est récente, cela est suspect</li><li>Vérifiez l’adresse de la boutique en ligne. Le fait qu’il soit situé dans un bloc-appartement ou au milieu de nulle part est suspicieux.</li><li>Téléphonez à l’entreprise pour vous assurer que le numéro est bel et bien lié à l’entreprise.</li><li>Pour le cas de boutiques québécoises, consultez le registraire des entreprises du Québec. Toutes les compagnies du Québec sont obligées de s’inscrire à ce registraire.</li><li>Vérifiez les conditions générales de vente</li><li>Assurez-vous que le site soit sécurisé. Vous pouvez utiliser un scanner.</li><li>Ne faites pas d’achat sur un ordinateur infecté ou public</li></ul></div><hr><p id='ouvrirAchatProd'>Concernant le produit</p><div id='achatProduit'><ul><li>Vérifiez les commentaires d’un produit</li><li>Méfiez-vous si quelqu’un nous offre plus que le prix de vente d’un objet que vous vendez, surtout si cette personne offre de payer par PayPal. Vous recevrez un faux courriel de PayPal mentionnant le dépôt d’un montant plus élevé que prévu, puis l’acheteur va vous réécrire pour récupérer l’argent en trop. En vérifiant votre compte PayPal, vous verrez que le supposé transfert de fonds n’a jamais eu lieu.</li><li>Méfiez-vous de la fonction de demande de fonds d’Interac, surtout si l’adresse n’est pas « notify@payments.interac.ca ». Elle n’est accessible que pour Scotia, Royale, CIBC et TD. Les autres peuvent cependant accepter le don.</li><li>Lisez les infos sur les frais de livraison, de douane et de dédouanement pour éviter de payer plus cher inutilement.</li><li>Faire des captures d’écrans de chaque transaction, avec l’heure, le numéro de l’achat et la date et imprimez-les. Cela pourra servir de preuve en cas de litige.</li><li>Achetez local. Si vous avez une plainte à faire à la compagnie, il sera plus facile d’aller directement à une compagnie qui habite près de chez vous.</li></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>Retour</div>Achats en ligne";

    var BtnOuvAchatSite= document.getElementById("ouvrirAchatSite");
    if (BtnOuvAchatSite){
      BtnOuvAchatSite.addEventListener("click", ouvrirAchatSite); 
    }
    
    var BtnOuvAchatProd= document.getElementById("ouvrirAchatProd");
    if (BtnOuvAchatProd){
      BtnOuvAchatProd.addEventListener("click", ouvrirAchatProd); 
    }
    var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", RetourPrincipal); 
}
}
function ouvrirAchatSite(){
    var x = document.getElementById("achatSite");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrirAchatProd(){
    var x = document.getElementById("achatProduit");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}