/**
 *
 * Ce fichier intègre le code HTML de la page "Arnaques" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction SMS se trouve dans le document "Messagerie.js"
 * La fonction ArnPres se trouve dans le document "ArnaquePres.js"
 * La fonction ArnNigeriane se trouve dans le document "ArnaqueNigeriane.js"
 *
 */
function Arnaques() {
  //On laisse les indexations restantes vides
  indexation.splice(9, 5);

  indexation[0] =
    "<p id='introP'>Une messagerie est un bon moyen de vous arnaquer. Il existe cependant des moyens pour vous en prémunir.</p>";
  indexation[1] =
    "<p id='ouvrirStrcArn' class='iconeOui'><span class='icon-FA-list-ol'></span>Structure<span class='icon-circle-down'></span></p><div id='structure' style='display: none'><ul><li>Elle contient des couleurs vives et des majuscules</li><li>Elle contient beaucoup de fautes d’orthographe et de syntaxe</li><li>L’adresse courriel est très douteuse</li><li>Ils sont généralistes.</li></ul></div><hr>";
  indexation[2] =
    "<p id='ouvrirContenuArn' class='iconeOui'><span class='icon-FA-list-ul'></span>Le contenu<span class='icon-circle-down'></span></p><div id='contenuEscr' style='display: none'><ul><li>Ils sont pressants</li><li>Ils contiennent une source crédible</li><li>Ils vous menacent si vous ne vous faites pas quelque chose rapidement.</li><li>Ils contiennent des liens et des pièces jointes suspicieuses</li><li>Ils vous invitent à partager un courriel.</li></ul></div><hr>";
  indexation[3] =
    "<p id='ouvrirEscSol' class='iconeOui'><span class='icon-FA-question-circle'></span>Que faire?<span class='icon-circle-down'></span></p><div id='escrSol' style='display: none'><ul><li>Toujours vérifier l’adresse courriel.</li><li>Prenez le temps de lire le courriel et ne vous pressez pas. Les auteurs de ces courriels veulent que vous fassiez le contraire pour pouvoir arriver à leurs fins.</li><li><b><u><i>Ne répondez jamais à ces courriels.</i></u></b></li><li><b><u><i>Ne cliquez jamais sur les liens, même s’il y a un lien vous invitant à vous désabonner d’une infolettre.</i></u></b> Cela prouvera simplement au destinataire que votre adresse courriel est active, et vous recevrez encore plus de pourriels. Aussi, placez le curseur de votre souris sur le lien pour voir si l’adresse est fiable.</li><li><b><u><i>N’ouvrez pas les fichiers joints.</i></u></b></li><li>Avant de supprimer le courriel, vérifiez le type d’arnaque.</li><li>En cas de fuite, bloquez les comptes bancaires.</li></ul></div><hr>";
  indexation[4] =
    "<p id='arnPres' class='iconeOui'><span class='icon-FA-user-secret'></span>Arnaque au président<span class='icon-FA-chevron-right'></span></p><hr>";
  indexation[5] =
    "<p id='arnNiger' class='iconeOui'><span class='icon-FA-money'></span>Arnaque nigériane (alias 4-1-9)<span class='icon-FA-chevron-right'></span></p><hr>";
  indexation[6] =
    "<p id='phish' class='iconeOui'><span class='icon-FA-anchor'></span>Ingénierie sociale (ou phishing)<span class='icon-circle-down'></span></p><div id='phishing' style='display: none'><p id='introP'>Il s’agit probablement du type d’arnaque le plus populaire. Elle peut être:</p><ul><li>Une carte de vœux</li><li>Un contact institutionnel</li><li>Un site de rencontre (« Rencontrez ces filles célibataires dans votre région »)</li><li>Un message indiquant que vous avez gagné un prix</li><li>Une arnaque au tueur (un tueur à gage a été engagé pour vous assassiner, mais est prêt à vous oublier en échange d’une somme)</li><li>Un message indiquant que vous avez été piraté et qui vous demande de vous connecter à un site pour estimer les dégâts</li><li>Un message de l’équipe de support Microsoft, qui vous propose des conseils payants </li><li>Une fausse institution financière qui vous presse de transférer vos fonds.</li><li>Une urgence médicale d’un de vos contacts</li><li>Des dettes</li><li>Un message de la compagnie de téléphone</li><li>Un message avec une annonce trop belle pour être vraie</li><li>De la police (la police ne vous demandera jamais des infos sur votre carte de crédit)</li></ul></div><hr>";
  indexation[7] =
    "<p id='autArn' class='iconeOui'><span class='icon-FA-ellipsis-h'></span>Autres<span class='icon-circle-down'></span></p><div id='autresArn' style='display: none'>";
  indexation[8] =
    "<ul><li>On vous demande de faire un paiement via des moyens qui ne sont pas sécuritaires</li><li>Un contact vous demande de payer vers un nouveau compte</li><li>Un vendeur que vous avez déjà payé vous demande plus d'argent en raison de circonstances imprévues</li><li>L’arnaque « Hi mum » (littéralement « allô maman »): Quelqu’un se fait passer pour un de vos contacts et vous fait croire qu’il a perdu son téléphone. Ce message peut contenir un soi-disant « nouveau numéro de téléphone ». En cas de doute, appelez votre ami avec le numéro de téléphone d’origine et non celui du courriel.</li><li>*Un ami prétendument atteint d’un cancer vous demande d’acheter des cartes Google Play et dit qu’il va vous rembourser bientôt. Bien que l'adresse courriel correspond à celle de votre ami, elle reste une arnaque, <b><i><u>mais ne supprimez pas le message.</u></i></b> Cela signifie surtout que son compte a été piraté, alors appelez-la par téléphone pour l’avertir.</li><li>Quelqu’un vous envoie un message avec votre propre adresse courriel, prétendant qu’il a pris le contrôle de votre compte et vous demande de l’argent. Cette personne vous ment: tout le monde peut écrire un courriel à partir de l’adresse de n’importe qui. Si vous avez des doutes, regardez s’il y a des connections inconnues dans les paramètres.</li><li>Il peut s’agir d’une fausse commande, d’un faux prélèvement ou d’un faux concours.</li><li>Il s’agit d’une prescription de médicaments, de méthodes d’enrichissement, de services financiers/réduction de dettes, diplômes à acheter ou de jeux d’argent</li></ul></div>";

  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join("");
  //On remplit la fenêtre avec ces catégories
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "blue";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.getElementById("myHeading").innerHTML =
    "<div id='caseRetour'>◀</div><div></div>Arnaques";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  //On définit la grille
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.color = "white";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";

  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", SMS);
  }
  var BtnReviens = document.getElementById("arnPres");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", ArnPres);
  }
  var BtnReviens = document.getElementById("arnNiger");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", ArnNigeriane);
  }
  var BtnouvrirStrcArn = document.getElementById("ouvrirStrcArn");
  if (BtnouvrirStrcArn) {
    BtnouvrirStrcArn.addEventListener("click", function ouvrirStrcArn() {
      var x = document.getElementById("structure");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnouvrirContenuArn = document.getElementById("ouvrirContenuArn");
  if (BtnouvrirContenuArn) {
    BtnouvrirContenuArn.addEventListener("click", function ouvrirContenuArn() {
      var x = document.getElementById("contenuEscr");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnouvrirEscSol = document.getElementById("ouvrirEscSol");
  if (BtnouvrirEscSol) {
    BtnouvrirEscSol.addEventListener("click", function ouvrirEscSol() {
      var x = document.getElementById("escrSol");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnouvrirPhish = document.getElementById("phish");
  if (BtnouvrirPhish) {
    BtnouvrirPhish.addEventListener("click", function ouvrirPhish() {
      var x = document.getElementById("phishing");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnouvrirAutArn = document.getElementById("autArn");
  if (BtnouvrirAutArn) {
    BtnouvrirAutArn.addEventListener("click", function ouvrirAutArn() {
      var x = document.getElementById("autresArn");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
}
