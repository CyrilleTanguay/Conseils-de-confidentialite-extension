/**
 * 
 * Ce fichier intègre le code HTML de la page "Mots de passe" dans le popup.
 * 
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 * 
 * 
 */
function MDP() {
  //Catégories
  indexation[0] = "<p id='ouvreBonMDP' class='iconeOui'><span class='icon-FA-star'></span>Bon mot de passe<span class='icon-circle-down'></span></p><div id='bonMDP'><br>"
  indexation[1] = "<p>Un bon mot de passe doit...</p><ul>"
  indexation[2] = "<li>Contenir au moins douze caractères</li>"
  indexation[3] = "<li>Contenir des lettres, des chiffres et des symboles intercalés partout</li>"
  indexation[4] = "<li>Contenir des majuscules et des minuscules</li>"
  indexation[5] = "<li>Être facile à se rappeler</li></ul></div><hr>"
  indexation[6] = "<p id='ouvrePeutMDP' class='iconeOui'><span class='icon-FA-thumbs-o-up'></span>Possibilités<span class='icon-circle-down'></span></p><div id='peutMDP'>"
  indexation[7] = "<p>Un bon mot de passe peut être...</p><ul>"
  indexation[8] = "<li>Un mot rare connu que de vous</li>"
  indexation[9] = "<li>De type phonétique: on prend les sons de chaque syllabe d’une phrase. Exemple: J’ai acheté huit cd pour cent euros cet après-midi » deviendra « ght8CD%€7am »</li>"
  indexation[10] = "<li>Constitué à partir des premières lettres d’une phrase. Évidemment, il faut utiliser alterner entre les majuscules et les minuscules, et il est possible d’ajouter des chiffres: la phrase « un tiens vaut mieux que deux tu l’auras » deviendra « 1tvmQ2tl’A » </li></ul></div><hr>"
  indexation[11] = "<p id='ouvrePasMDP' class='iconeOui'><span class='icon-FA-close'></span>À proscrire<span class='icon-circle-down'></span></p><div id='pasMDP'>"
  indexation[12] = "<p>Un bon mot de passe ne doit PAS...</p><ul>"
  indexation[13] = "<li>Utiliser le mot « mot de passe » ou ses variations</li>"
  indexation[14] = "<li>Être court</li>"
  indexation[15] = "<li>Avoir ses caractères spéciaux placés qu’au début ou qu’à la fin</li>"
  indexation[16] = "<li>Utiliser des informations personnelles comme votre date de naissance, votre adresse ou le nom d’un membre de votre famille</li>"
  indexation[17] = "<li>Utiliser un nom d’entreprise</li>"
  indexation[18] = "<li>Utiliser un mot à l’envers</li>"
  indexation[19] = "<li>Utiliser un mot du dictionnaire</li>"
  indexation[20] = "<li>Utiliser votre identifiant</li>"
  indexation[21] = "<li>Utiliser un mot suivi de l’année actuelle ou d’une année de naissance</li>"
  indexation[22] = "<li>Être courant (111111, abc123, 64321)</li>"
  indexation[23] = "<li>Faire partie de la liste des 200 mots de passe les plus utilisés</li></ul></div><hr>"
  indexation[24] = "<p id='ouvreGereMDP' class='iconeOui'><span class='icon-FA-book'></span>Gestion du mot de passe<span class='icon-circle-down'></span></p><div id='gereMDP'><ul>"
  indexation[25] = "<li>N’utilisez pas le même mot de passe (ou une variation) pour chaque service</li>"
  indexation[26] = "<li>Ne l’écrivez pas sur un post-it</li>"
  indexation[27] = "<li>Utilisez un gestionnaire de mots de passe</li>"
  indexation[28] = "<li>Ne transmettez pas votre phrase de récupération</li>"
  indexation[29] = "<li>Si vous le pouvez, utilisez votre propre phrase de récupération</li>"
  indexation[30] = "<li>Clifford Stoll, un spécialiste en hacking, a affirmé ceci « Traitez votre mot de passe comme votre brosse à dents:  Ne pas laisser quelqu’un d’autre l’utiliser...</li><ul><li>Cela est vrai</li></ul><li>… et en obtenir une nouvelle tous les six mois. »</li><ul><li>Plusieurs spécialistes sont en désaccord avec ce conseil, car ils estiment qu’il est inutile de changer de mot de passe si vous n’avez pas été piraté.</li></ul></ul></div>";
  //On s'assure que les variables ne soient pas séparées par une virgule
  const text = indexation.join('');
  //On remplit la fenêtre avec ces catégories
  document.getElementById('laListe').innerHTML = text;
  document.querySelector("header").style.backgroundColor = "red";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Mot de passe";
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById("caseRetour").style.display = "initial";
  
  //On définit la grille

  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
  //Si la liste déroulante est masquée, on l'affiche et vice-versa
  var BtnReviens = document.getElementById("ouvreBonMDP");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvreBonMDP() {
      var x = document.getElementById("bonMDP");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrePeutMDP");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrePeutMDP() {
      var x = document.getElementById("peutMDP");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrePasMDP");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrePasMDP() {
      var x = document.getElementById("pasMDP");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvreGereMDP");
  if (BtnReviens) {
    BtnReviens.addEventListener("click",
      function ouvreGereMDP() {
        var x = document.getElementById("gereMDP");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
  }
}