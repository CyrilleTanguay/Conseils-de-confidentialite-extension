function Politique(){
indexation[0]="<p id='introP'>Avouons-le: vous ne consultez presque jamais les politiques de confidentialité, n’est-ce pas? S’il y a bien une chose sur laquelle nous sommes tous d’accord, c’est sur le fait que les politiques de confidentialité sont trop longues, ennuyantes et incompréhensibles. Mais cela peut permettre aux voleurs de prendre vos données (presque) légalement. Alors, concernant les politiques:</p><ul>"
indexation[1]=  "<li>N’oubliez pas que des politiques de confidentialité courtes et compréhensibles, ça existe. Prenez le temps de la lire.</li>"
indexation[2]=  "<li>Demandez-vous s’il est vraiment nécessaire d’obtenir cette application ou de s’inscrire à un service.</li>"
indexation[3]=  "<li>Faites Contrôle + F pour utiliser la barre de recherche du document et recherchez les mots « Confidentialité », « revente », « photos », « droit de suppression ».</li>"
indexation[4]=  "<li>Pour les utilisateurs de Windows: « Eulalyser » permet d’analyser le contenu.</li>"
indexation[5]=  "<li>Alternative: Terms of Service; Didn't Read</li></ul>"
for(let i = 6; i < 14; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Politique de confidentialité";
    document.getElementById('laListe').style.fontFamily="K2D";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
}