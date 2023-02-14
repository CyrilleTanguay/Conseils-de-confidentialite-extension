function Politique(){
    document.getElementById('laListe').innerHTML="<p>Avouons-le: vous ne consultez presque jamais les politiques de confidentialité, n’est-ce pas? S’il y a bien une chose sur laquelle nous sommes tous d’accord, c’est sur le fait que les politiques de confidentialité sont trop longues, ennuyantes et incompréhensibles. Mais cela peut permettre aux voleurs de prendre vos données (presque) légalement. Alors, concernant les politiques:</p><ul><li>N’oubliez pas que des politiques de confidentialité courtes et compréhensibles, ça existe. Prenez le temps de la lire.</li><li>Demandez-vous s’il est vraiment nécessaire d’obtenir cette application ou de s’inscrire à un service.</li><li>Faites Contrôle + F pour utiliser la barre de recherche du document et recherchez les mots « Confidentialité », « revente », « photos », « droit de suppression ».</li><li>Pour les utilisateurs de Windows: « Eulalyser » permet d’analyser le contenu.</li><li>Alternative: Terms of Service; Didn't Read</li></ul>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>Retour</div>La politique de confidentialité";
    document.getElementById('laListe').style.fontFamily="K2D";
    document.querySelector("p").style.lineHeight="inherit";
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
}