function SMS(){
indexation[0]="<p id='ouvrirConseils'>Conseils</p><div id='conseilMess'><ul>"
indexation[1]="<li>Si vous avez un compte Vidéotron, sachez que les messages présents dans la boîte de réception sont automatiquement supprimés après 1 an. Pour empêcher cela, créez une autre boîte ou, si vous utilisez l’application Mail sur Mac, placer vos messages dans la boîte « archive » fera l’affaire.</li>"
indexation[2]="  <li>Utilisez deux adresses courriel: une privée pour vos proches, une publique pour les forums.</li>"
indexation[3]="  <li>Activez la double authentification</li>"
indexation[4]="  <li>Déconnectez-vous lors d’une session publique</li>"
indexation[5]="  <li>N’oubliez pas que la fonction répondre à tous existe. </li>"
indexation[6]="  <li>Vérifiez les paramètres de sécurité de votre boîte mail.</li></ul></div><hr>"
indexation[7]="  <p id='Arnaques'>Arnaques/pourriel</p>"
for(let i = 8; i < 14; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Messagerie";
    document.getElementById('myHeading').style.color="black";
    document.getElementById("myHeading").style.textAlign="right";
    document.getElementById("myHeading").style.display="grid";
    document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
    var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
      BtnReviens.addEventListener("click", RetourPrincipal); 
    }
    var BtnReviens= document.getElementById("Arnaques");
    if (BtnReviens){
      BtnReviens.addEventListener("click", Arnaques); 
    }
    var BtnReviens= document.getElementById("ouvrirConseils");
    if (BtnReviens){
      BtnReviens.addEventListener("click", function ouvrirConseils(){
        var x = document.getElementById("conseilMess");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }); 
    }
  }

