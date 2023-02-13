function RetourPrincipal(){
    document.getElementById('laListe').innerHTML='<p id="VotreOrdi" onclick="Ordi()">Votre ordinateur</p><hr><p onclick="AppNon()"> Applications à ne pas installer (index)</p><hr><p onclick="Navigateur()">Le Navigateur</p><hr><p onclick="MDP()">Le mot de passe</p><hr><p id="fiable" onclick="Fiable()">La fiabilité d’un site web</p><hr><p id="reseau" onclick="Reseaux()">Réseaux sociaux</p><hr><p id="extorsion" onclick="Extorsion()">Extorsion / Sextorsion / Chantage</p><hr><p id="sms" onclick="SMS()">Messagerie</p><hr><p id="achats" onclick="Achats()">Achats en ligne</p><hr><p id="achatApp" onclick="achatApp()">Achat d’application</p><hr><p id="politique" onclick="Politique()">La politique de confidentialité</p><hr><p id="virus" onclick="Virus()">Virus</p><hr><p id="attaques" onclick="Attaques()">Attaques</p><hr><p id="mobiles" onclick="Mobiles()">Conseils pour les téléphones mobiles</p>';
    document.getElementById('myHeading').innerHTML="Liste des conseils";
    document.querySelector("header").style.backgroundColor="aqua";
    document.querySelector("main").style.fontFamily="Oswald, sans-serif";

}

function Reseaux(){
    document.getElementById('laListe').innerHTML="<p>Général</p><hr><p>Deezer</p><hr><p>Edge</p><hr><p>Facebook</p><hr><p>Google</p><hr><p>Instagram</p><hr><p>Messenger</p><hr><p>Nintendo</p><hr><p>Signal</p><hr><p>Skype</p><hr><p>Snapchat</p><hr><p>Spotify</p><hr><p>Telegram</p><hr><p>TikTok</p><hr><p>Twitter</p><hr><p>YouTube</p><hr><p>Zoom</p><hr><p>Les sites de rencontre</p><hr><p>Partage de photos osées</p><hr><p>Trolls</p><hr><p>Vol d'identité</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>La fiabilité d'un site web";
}
function Extorsion(){
    document.getElementById('laListe').innerHTML="<p>Prévention:</p><hr><p>Si vous êtes victime</p><hr><p>Escrocs du recouvrement</p><hr><p»Prédateurs sexuels: les repérer</p><hr><p>Les comportements déviants</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Extorsion / Sextorsion / Chantage";
}
function SMS(){
    document.getElementById('laListe').innerHTML="<p>Conseils</p><hr><p>Arnaques/pourriel</p><";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Messagerie";
}
function Achats(){
    document.getElementById('laListe').innerHTML="<p>Concernant le site</p><hr><p>Concernant le produit</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Achats en ligne";
}
function achatApp(){
    document.getElementById('laListe').innerHTML="<p>Application</p><hr><p>Commentaires</p>";
    document.querySelector("header").style.backgroundColor="blue";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Achat d’application";
}
function Politique(){
    document.getElementById('laListe').innerHTML="<p>Avouons-le: vous ne consultez presque jamais les politiques de confidentialité, n’est-ce pas? S’il y a bien une chose sur laquelle nous sommes tous d’accord, c’est sur le fait que les politiques de confidentialité sont trop longues, ennuyantes et incompréhensibles. Mais cela peut permettre aux voleurs de prendre vos données (presque) légalement. Alors, concernant les politiques:</p><ul><li>N’oubliez pas que des politiques de confidentialité courtes et compréhensibles, ça existe. Prenez le temps de la lire.</li><li>Demandez-vous s’il est vraiment nécessaire d’obtenir cette application ou de s’inscrire à un service.</li><li>Faites Contrôle + F pour utiliser la barre de recherche du document et recherchez les mots « Confidentialité », « revente », « photos », « droit de suppression ».</li><li>Pour les utilisateurs de Windows: « Eulalyser » permet d’analyser le contenu.</li><li>Alternative: Terms of Service; Didn't Read</li></ul>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>La politique de confidentialité";
    document.getElementById('laListe').style.fontFamily="K2D";
    document.querySelector("p").style.lineHeight="inherit";
}
function Virus(){
    document.getElementById('laListe').innerHTML="<p>Ver informatique</p><hr><p>Cheval de Troie</p><hr><p>SpyWare</p><hr><p>Ransomware</p><hr><p>Malware</p><hr><p>Keylogger</p><hr><p>RootKit</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Virus";
}
function Attaques(){
    document.getElementById('laListe').innerHTML="<p>DOS</p><hr><p>Attaque de l'intercepteur</p><hr><p>Attaque par débordement de tampon</p><hr><p>Failles matérielles</p><hr><p>Attaque Cross-site scripting</p><hr><p>Pour le concepteur web</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Attaques";
}
function Mobiles(){
    document.getElementById('laListe').innerHTML="<p>iPhone</p><hr><p>Android</p><hr><p>Pour tout téléphone cellulaire</p><hr><p>Applications à ne pas installer</p>";
    document.querySelector("header").style.backgroundColor="red";
    document.getElementById('myHeading').innerHTML="<div class='caseRetour' onclick='RetourPrincipal()'>Retour</div>Conseils pour les téléphones mobiles";
}