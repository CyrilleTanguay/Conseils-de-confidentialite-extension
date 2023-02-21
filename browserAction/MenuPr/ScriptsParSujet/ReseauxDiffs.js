function Deez(){
document.getElementById('laListe').innerHTML='<ul><li>Économisez de l’espace en réduisant le débit ou mettant les données sur une carte mémoire.</li></ul>';

document.querySelector("header").style.backgroundColor="aqua";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Deezer";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Edge(){
document.getElementById('laListe').innerHTML='<ul><li>Supprimez l’extension Rédacteur Microsoft. Elle envoie à Microsoft tout ce que vous tapez sur votre ordi.</li></ul>';

document.querySelector("header").style.backgroundColor="blue";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Edge";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}
function Fb(){
indexation[0]="<ul><li>Ne mentez pas sur votre âge. Bien que cela puisse sembler sécuritaire, il se peut que Facebook vous demande de valider votre identité avec une pièce d’identité. Les deux dates de naissance ne concorderont pas et votre compte sera bloqué!</li>"
indexation[1]="<li>Désactivez l’enregistrement des infos de connexion.</li>"
indexation[2]="<li>Vérifiez qui est connecté. S’il y a des personnes suspectes, déconnectez-les et changez votre mot de passe.</li>"
indexation[3]="<li>Activez les alertes de connexion.</li>"
indexation[4]="<li>Ne publiez que l’essentiel.</li>"
indexation[5]="<li>Déterminez qui peut voir les publications</li>"
indexation[6]="<li>Déterminez qui peut trouver votre page Facebook</li>"
indexation[7]="<li>Supprimez votre numéro de téléphone si ce n’est pas vous qui l’a entré. Cela ne signifie pas que votre compte a été piraté, il provient d’un carnet d’adresses partagé par un de vos amis.</li>"
indexation[8]="<li>N’utilisez pas le navigateur interne de Facebook, il collecte des données. À la place, copiez le lien en question et collez-le dans votre navigateur.</li>"
indexation[9]="<li>Faites attention avec les liens que vous partagez, car Facebook les vérifie. N’envoyez pas de liens concernant des données personnelles.</li>"
indexation[10]="<li>Utilisez l’outil « voir en tant que ». Cela vous donne un aperçu de votre page Facebook du point de vue d’un inconnu, d’un ami...</li>"
indexation[11]="<li>Facebook et Messenger vident le contenu de la batterie de votre téléphone pour faire des tests négatifs. Un test négatif fait des essais sur des nouvelles fonctionnalités ou sur les performances d’une application en puisant directement dans les ressources de votre téléphone. Un ex-employé, qui a été renvoyé car il avait refusé de participer à ces tests, est présentement en poursuite judiciaire contre Meta.</li>"
indexation[12]="<p>Faites attention à ces arnaques sur Facebook:</p><ul>"
indexation[13]="  <li>N’achetez pas de NFT de singes en 3D</li>"
indexation[14]="  <li>Méfiez-vous des concours faciles. Un conseil: allez voir la date de création de la page qui organise ce concours. </li>"
indexation[15]="  <li>Il n’existe pas de fonctionnalité qui nous permet de savoir qui a consulté notre page Facebook. Cette « fonctionnalité » ne doit pas être confondue avec celle qui nous permet de savoir qui est CONNECTÉ sur notre compte.</li>"
indexation[16]="  <li>Méfiez-vous des courriels qui disent que notre compte sera bloqué. En cas de doute, allez vérifier les e-mails récents de Facebook</li>"
indexation[17]="<li>Ne jouez pas aux quiz.</li></ul></ul>"
const text = indexation.join(''); 
document.getElementById('laListe').innerHTML=text;
document.querySelector("header").style.backgroundColor="blue";
document.querySelector("p").style.lineHeight="inherit";
document.querySelector("p").style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Facebook";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.color="white";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Google(){
indexation[0]="<ul><li>Désactivez l’historique OK Google</li>"
indexation[1]="<li>Méfiez-vous des Google Docs publics (comme les formulaires) qui vous sont inconnus.</li>"
indexation[2]="<li>Assurez-vous que Google Agenda soit privé, sinon quelqu’un pourrait en tirer des informations</li>"
indexation[3]="<li>Nettoyez l’historique de Chrome</li>"
indexation[4]="<li>Si vous avez installé Google Chrome, désactivez l’option « Vérifier l’orthographe du texte saisi sur les pages Web » ou choisissez l’option « Correcteur orthographique de base », car tout ce que vous tapez sera parvenu à Google!</li></ul>"
for(let i = 5; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="aqua";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Google";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Insta(){
document.getElementById('laListe').innerHTML='<ul><li>N’utilisez pas le navigateur interne d’Instagram, il collecte des données. À la place, copiez le lien en question et collez-le dans votre navigateur.</li><li>Ne divulguez pas votre adresse (surtout si votre compte est public)</li><li>Si vous recevez un courriel de certification de profil, c’est un faux.</li></ul>';

document.querySelector("header").style.backgroundColor="purple";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Instagram";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto"; 
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Messng(){
indexation[0]="<ul><li>N’intégrez pas les mêmes photos sur vos réseaux privés et professionnels.</li>"
indexation[1]="<li>Ne publiez pas votre visage (du moins sur votre photo de profil)</li>"
indexation[2]="<li>Changez la visibilité de votre numéro de téléphone</li>"
indexation[3]="<li>Facebook et Messenger vident le contenu de la batterie de votre téléphone pour faire des tests négatifs. Un test négatif fait des essais sur des nouvelles fonctionnalités ou sur les performances d’une application en puisant directement dans les ressources de votre téléphone. Un ex-employé, qui a été renvoyé car il avait refusé de participer à ces tests, est présentement en poursuite judiciaire contre Meta.</li>"
indexation[4]="<li>Faites attention avec les liens que vous partagez, car Messenger les vérifie. N’envoyez pas de liens concernant des données personnelles.</li>"
indexation[5]="<li>N’utilisez pas le navigateur interne de Messenger, il collecte des données. À la place, copiez le lien en question et collez-le dans votre navigateur.</li></ul>"
for(let i = 6; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="blue";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Messenger";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Nint(){
  indexation[0]="<p>Comment savoir si vous avez été piraté</p><ul>"
  indexation[1]="<li>Regardez si vous avez eu une alerte de connexion</li>"
  indexation[2]="<li>Vérifiez votre historique de connexion. Il permet de voir les appareils qui se sont connectés à votre compte depuis les 30 derniers jours.</li>"
  indexation[3]="<li>Vérifiez si votre compte a été associé à d’autres comptes. Si c’est le cas, rompez les liens avec ces comptes.</li>"
  indexation[4]="<li>Vérifiez l’état de votre compte bancaire et PayPal, s’ils étaient liés. Supprimez leur lien.</li>"
  indexation[5]="<li>Vous avez peut-être été averti par Nintendo à ce sujet.</li>"
  indexation[6]="<li>Changez vos mots de passe</li></ul>"
  for(let i = 7; i < 55; i++) {
indexation[i] = '';
  };
  const text = indexation.join(''); 
document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="red";
document.querySelector("p").style.lineHeight="inherit";
document.querySelector("p").style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Compte Nintendo";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Sig(){
indexation[0]="<ul><li>Désactivez les indicateurs de saisie</li>"
indexation[1]="<li>Désactivez les accusés de lecture</li>"
indexation[2]="<li>Empêchez les captures d’écran. Cette fonction vous servira si votre téléphone tombe dans des mauvaises mains.</li>"
indexation[3]="<li>Utilisez le clavier incognito. Il vous permet de ne pas voir des mots précédemment tapés sur l’application.</li>"
indexation[4]="<li>Vérifiez le numéro de sécurité de votre contact pour vous assurer que la conversation est bien chiffrée.</li>"
indexation[5]="<li>Utilisez la fonction NIP.</li>"
indexation[6]="<li>Considérez la fonction « messages éphémères ». Elle permet d’envoyer un message qui s’effacera un certain temps après sa lecture.</li>"
indexation[7]="<li>N’oubliez pas que vous pouvez faire flouter automatiquement les visages dans les photos envoyées.</li></ul>"
for(let i = 8; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="blue";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Signal";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Skype(){
document.getElementById('laListe').innerHTML='<ul><li>Vous pouvez choisir d’apparaître dans les résultats de recherche de Skype si vous ne tenez pas à être trouvé(e).</li><li>Utilisez la fonction « Conversation privée ». Ses notifications sont masquées et les conversations ne sont accessibles que sur un périphérique à la fois.</li><li>Désactivez le téléchargement de photos.</li></ul>';

document.querySelector("header").style.backgroundColor="skyblue";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Skype";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}
function Spotify(){
document.getElementById('laListe').innerHTML='<ul><li>Vous pouvez utiliser la fonction « économiseur de données » pour consommer moins de données cellulaires/Wifi. Cependant, cela a pour conséquence d’affaiblir la qualité audio...</li><li>Videz le cache.</li><li>Désactivez les publicités ciblées (nécessite un compte premium)</li></ul>';

document.querySelector("header").style.backgroundColor="green";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Spotify";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function Telegram(){
indexation[0]="<ul><li>Choisissez les informations qui peuvent être vues par certains.</li>"
indexation[1]="<li>Évitez d'utiliser son nom et prénom comme nom d'utilisateur</li>"
indexation[2]="<li>Utilisez une photo de profil qui ne permet pas aux inconnus de vous retrouver</li>"
indexation[3]="<li>Masquez votre numéro de téléphone pour ne pas que des inconnus le voient.</li>"
indexation[4]="<li>Ne pas trop en dire sur sa biographie. Cet élément ne pouvant être masqué par l’utilisateur, n’en dites pas trop.</li>"
indexation[5]="<li>Ne pas échanger avec nimporte qui</li>"
indexation[6]="<li>Modifier le numéro de téléphone inscrit dans le compte en cas de changement de numéro pour garder l’accès à votre compte.</li></ul>"
for(let i = 7; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="skyblue";
document.querySelector("header").style.color="white";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Telegram";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}

function TikTok(){
document.getElementById('laListe').innerHTML='<ul><li>N’utilisez pas le navigateur interne de TikTok, il collecte des données. À la place, copiez le lien en question et collez-le dans votre navigateur.</li><li>Méfiez-vous de cette application, car elle utilise vos données sans votre consentement.</li><li>Utilisez le mode privé si vous voulez être plus discret.</li></ul>';

document.querySelector("header").style.backgroundColor="red";
document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>TikTok";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}
function Twitter(){
  indexation[0]="<ul><li>Pour plus de protection, rendez votre page privée</li><li>Décochez la case « Recevoir des messages privés de n’importe qui ».</li><p>Quelques moyens de récupération du mot de passe Twitter:</p>"
indexation[1]="  <p>À utiliser:</p><ul><li>La double authentification</li><li>Une application externe (Google)</li><li>Une clé physique</li><li>Un code de récupération</li></ul>"
indexation[2]="  <p>À ne pas utiliser</p><ul><li>Les messages textes</li></ul></ul>"
for(let i = 3; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join('');   
document.getElementById('laListe').innerHTML=text;
  document.querySelector("header").style.backgroundColor="skyblue";
  document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
  document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Twitter";
  document.getElementById("myHeading").style.textAlign="right";
  document.getElementById("myHeading").style.display="grid";
  document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
  var BtnReviens= document.getElementById("caseRetour");
  if (BtnReviens){
    BtnReviens.addEventListener("click", unReseau); 
  }
  }

function YTube(){

indexation[0]="<ul><li>Vérifiez le check-up de sécurité Google</li>"
indexation[1]="<li>Activez la protection du compte contre les attaques ciblées. Cela ne s’applique qu’aux profils plus à risque d’être exposés que d’autres (journalistes, personnalités publiques...).</li>"
indexation[2]="<li>Utilisez les fonctionnalités avertissant les internautes d’une attaque</li>"
indexation[3]="<li>Méfiez-vous des demandes de partenariat</li>"
indexation[4]="<li>Définissez qui peut voir vos vidéos.</li>"
indexation[5]="<li>Ne renseignez votre mot de passe dans aucun formulaire</li>"
indexation[6]="<p>Méfiez-vous des tutoriels de mauvaise qualité! La qualité d’un tutoriel peut être remise en question si:</p><ul>"
indexation[7]="  <li>On ne comprend rien de ce qu’il dit.</li>"
indexation[8]="  <li>Les commentaires sont négatifs et il y a beaucoup de pouces rouges. C’est pour ça que je vous ai demandé d’installer l’extension permettant d’afficher le nombre de pouces rouges.</li>"
indexation[9]="  <li>L’objet de son étude n’est pas clair.</li>"
indexation[10]="  <li>Il n’y a pas de texte de présentation</li></ul></ul>"
for(let i = 11; i < 55; i++) {
  indexation[i] = '';
};
const text = indexation.join(''); 
  document.getElementById('laListe').innerHTML=text;

document.querySelector("header").style.backgroundColor="red";
document.querySelector("p").style.lineHeight="inherit";
document.querySelector("p").style.fontFamily="K2D, sans-serif";
document.querySelector("main").style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>YouTube";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}   
}

function Zoom(){
document.getElementById('laListe').innerHTML='<ul><li>Méfiez-vous des liens qui commencent par le nom d’une entreprise. Il est possible pour n’importe qui de modifier le sous-domaine de l’URL ou de le rediriger vers une autre adresse. </li></ul>';

document.querySelector("header").style.backgroundColor="blue";
document.querySelector("header").style.color="white";

document.getElementById('laListe').style.fontFamily="K2D, sans-serif";
document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Zoom";
document.getElementById("myHeading").style.textAlign="right";
document.getElementById("myHeading").style.display="grid";
document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto";  
var BtnReviens= document.getElementById("caseRetour");
if (BtnReviens){
  BtnReviens.addEventListener("click", unReseau); 
}
}