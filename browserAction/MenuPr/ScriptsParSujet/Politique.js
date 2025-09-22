/**
 *
 * Ce fichier intègre le code HTML de la page "Politique de confidentialité" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */
function Politique() {
  const text = `
      <p id="introP">
        Avouons-le: vous ne consultez presque jamais les politiques de
        confidentialité, n’est-ce pas? S’il y a bien une chose sur laquelle nous
        sommes tous d’accord, c’est sur le fait que les politiques de
        confidentialité sont trop longues, ennuyantes et incompréhensibles. Mais
        cela peut permettre aux voleurs de prendre vos données (presque)
        légalement. Alors, concernant les politiques:
      </p>
      <ul>
        <li>
          N’oubliez pas que des politiques de confidentialité courtes et
          compréhensibles, ça existe. Prenez le temps de la lire.
        </li>
        <li>
          Demandez-vous s’il est vraiment nécessaire d’obtenir cette application
          ou de s’inscrire à un service.
        </li>
        <li>
          Faites Contrôle + F (Cmd ⌘ + F si vous êtes sur Mac) pour utiliser la
          barre de recherche du document et recherchez les mots «
          Confidentialité », « revente », « photos », « droit de suppression ».
        </li>
        <li>
          Pour les utilisateurs de Windows: « Eulalyser » permet d’analyser le
          contenu.
        </li>
        <li>
          Alternative: 
          <a href="https://tosdr.org/">Terms of Service; Didn't Read</a>
        </li>
      </ul>
  `;
  // const text = document.createElement(<>Test</>);
  // document.getElementById("laListe").appendChild(text);

  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "AntiqueWhite";
  HeaderTitle = "Politique de confidentialité";

  headerUp();
  document.getElementById("laListe").style.fontFamily = "K2D";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.color = "black";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
}
