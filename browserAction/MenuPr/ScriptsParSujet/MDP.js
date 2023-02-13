function MDP(){
    document.getElementById('laListe').innerHTML="<p onclick='ouvreBonMDP()'>Bon mot de passe</p><div id='bonMDP'><br><p>Un bon mot de passe doit...</p><ul><li>Contenir au moins douze caractères</li><li>Contenir des lettres, des chiffres et des symboles intercalés partout</li><li>Contenir des majuscules et des minuscules</li><li>Être facile à se rappeler</li></ul></div><hr><p onclick='ouvrePeutMDP()'>Possibilités</p><div id='peutMDP'><br><p>Un bon mot de passe peut être...</p><ul><li>Un mot rare connu que de vous</li><li>De type phonétique: on prend les sons de chaque syllabe d’une phrase. Exemple: J’ai acheté huit cd pour cent euros cet après-midi » deviendra « ght8CD%€7am »</li><li>Constitué à partir des premières lettres d’une phrase. Évidemment, il faut utiliser alterner entre les majuscules et les minuscules, et il est possible d’ajouter des chiffres: la phrase « un tiens vaut mieux que deux tu l’auras » deviendra « 1tvmQ2tl’A » </li></ul></div><hr><p onclick='ouvrePasMDP()'>À proscrire</p><div id='pasMDP'><br><p>Un bon mot de passe ne doit PAS...</p> <ul><li>Utiliser le mot « mot de passe » ou ses variations</li><li>Être court</li><li>Avoir ses caractères spéciaux placés qu’au début ou qu’à la fin</li><li>Utiliser des informations personnelles comme votre date de naissance, votre adresse ou le nom d’un membre de votre famille</li><li>Utiliser un nom d’entreprise</li><li>Utiliser un mot à l’envers</li><li>Utiliser un mot du dictionnaire</li><li>Utiliser votre identifiant</li><li>Utiliser un mot suivi de l’année actuelle ou d’une année de naissance</li><li>Être courant (111111, abc123, 64321)</li><li>Faire partie de la liste des 200 mots de passe les plus utilisés</li></ul></div><hr><p onclick='ouvreGereMDP()'>Gestion du mot de passe</p><div id='gereMDP'><ul><li>N’utilisez pas le même mot de passe (ou une variation) pour chaque service</li><li>Ne l’écrivez pas sur un post-it</li><li>Utilisez un gestionnaire de mots de passe</li><li>Ne transmettez pas votre phrase de récupération</li><li>Si vous le pouvez, utilisez votre propre phrase de récupération</li><li>Clifford Stoll, un spécialiste en hacking, a affirmé ceci « Traitez votre mot de passe comme votre brosse à dents:  Ne pas laisser quelqu’un d’autre l’utiliser...</li><ul><li>Cela est vrai</li></ul><li>… et en obtenir une nouvelle tous les six mois. »</li><ul><li>Plusieurs spécialistes sont en désaccord avec ce conseil, car ils estiment qu’il est inutile de changer de mot de passe si vous n’avez pas été piraté.</li></ul></ul></div>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Le mot de passe";
}


function ouvreBonMDP(){
    var x = document.getElementById("bonMDP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrePeutMDP(){
    var x = document.getElementById("peutMDP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvrePasMDP(){
    var x = document.getElementById("pasMDP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function ouvreGereMDP(){
    var x = document.getElementById("gereMDP");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}