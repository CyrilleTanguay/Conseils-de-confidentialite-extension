function SMS(){
    document.getElementById('laListe').innerHTML="<p id='ouvrirConseils'>Conseils</p><div id='conseilMess'><ul><li>Si vous avez un compte Vidéotron, sachez que les messages présents dans la boîte de réception sont automatiquement supprimés après 1 an. Pour empêcher cela, créez une autre boîte ou, si vous utilisez l’application Mail sur Mac, placer vos messages dans la boîte « archive » fera l’affaire.</li><li>Utilisez deux adresses courriel: une privée pour vos proches, une publique pour les forums.</li><li>Activez la double authentification</li><li>Déconnectez-vous lors d’une session publique</li><li>N’oubliez pas que la fonction répondre à tous existe. </li><li>Vérifiez les paramètres de sécurité de votre boîte mail.</li></ul></div><hr><p id='Arnaques'>Arnaques/pourriel</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀ Retour</div><div></div>Messagerie";
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

