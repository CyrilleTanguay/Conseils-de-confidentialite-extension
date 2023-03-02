/**
 * 
 * Ce fichier intègre le code HTML de la page "Virus" dans le popup.
 * 
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 * 
 * 
 */
function Virus() {
  indexation[0] = "<p id='introP'>Vous savez ce qu’est un virus informatique, mais savez-vous quels sont leurs types?</p>"
  indexation[1] = "<p id='ouvrirVer'>Ver informatique</p><div id='verIn'><p id='introP'>Il s’agit d’un virus qui va d’ordi en ordi</p><br>"
  indexation[2] = "<p>Pour vous protéger:</p><ul><li>N’ouvrez pas à l’aveugle des téléchargements</li><li>N’utilisez pas d’application web infectée pour éviter sa propagation</li></ul></div><hr>"
  indexation[3] = "<p id='ouvrirCheval'>Cheval de Troie</p><div id='chevalTroie'><p id='introP'>Il s’agit d’un code nuisible placé dans un programme fiable et qui permet à son concepteur d’accéder à votre machine par le réseau. Malheureusement, il est souvent difficile de détecter cette anomalie, mais peut présenter ces signes lors de leur ouverture:</p><ul><li>Activité anormale du modem ou de la carte réseau : des données sont chargées en l’absence d’activité de la part de l’utilisateur</li><li>La souris réagit bizarrement</li><li>Des programmes s’ouvrent sans que vous ne l’aviez demandé.</li><li>Votre ordi plante à répétition.</li></ul><p>Prévention:</p><ul><li>N’acceptez pas des connections d’origine inconnue. Si un programme dont vous ne connaissez pas l’origine veut ouvrir une connexion, le pare-feu demandera de confirmer la connexion.</li><li>N’ouvrez pas des fichiers qui ne vous sont pas fiables à 100%</li></ul></div><hr>"
  indexation[4] = "<p id='ouvrirSpyWare'>SpyWare</p><div id='spWare'><p id='introP'>Les spywares sont des programmes recueillant vos informations à la société qui le diffuse pour en faire votre profil. Il est malheureusement difficile de les détecter.</p><p>Les signes:</p><ul><li>Présence de processus d’arrière-plan suspects</li><li>Présence de fichier étrange</li><li>Présences d’entrées inquiétantes dans la base de registre</li><li>La consommation de mémoire vive</li><li>De l’espace disque est utilisé</li><li>Les ressources du processeur sont mobilisées</li><li>D’autres applications plantent</li><li>Gêne ergonomique (exemple: ouverture de pop-ups publicitaires)</li></ul><p>Prévention:</p><ul><li>N’installez pas des fichiers dont vous n’êtes pas sûr à 100% de sa fiabilité</li><li>Utilisez un logiciel anti-spyware</li></ul></div><hr>"
  indexation[5] = "<p id='ouvrirRsWare'>Ransomware</p><div id='rsWare'><p id='introP'>Il s’agit d’applications destinés à soutirer de l’argent à leurs proies</p><p>Prévention:</p><ul><li>Faites des sauvegardes régulières sur un serveur déporté</li><li>N’ouvrez pas les pourriels</li><li>En entreprise, n’installez pas de logiciels non vérifiés</li><li>Évitez des sites illicites ou non fiables</li><li>Utilisez un compte « utilisateur » au lieu de celui « administrateur »</li><li>Éteignez votre ordi quand vous ne vous en servez pas.</li></ul><p>Victime:</p><ul><li>Débranchez l'ordi d'Internet ou du réseau</li><li>Portez plainte à la police</li><li>Appliquez une méthode de désinfection si c’est possible. Sinon:</li><ul><li>Reformatez le poste</li><li>Réinstallez un système sain</li><li>Restaurez les copies de sauvegarde des fichiers perdus</li></ul></ul></div><hr>"
  indexation[6] = "<p id='ouvrirMalware'>Malware</p><div id='mWare'><ul><li>Ne cliquez pas sur des liens provenant d’inconnus</li><li>Utilisez la barre d’adresse pour chercher un URL</li><li>Téléchargez des applications à partir de leur source officielle</li></ul></div><hr>"
  indexation[7] = "<p id='ouvrirKlog'>Keylogger</p><div id='kLog'><p id='introP'>Un keylogger enregistre les frappes des touches de votre clavier.</p><p>Prévention:</p><ul><li>N’installez pas de logiciels douteux</li><li>Soyez prudent si vous utilisez une connexion publique</li></ul></div><hr>"
  indexation[8] = "<p id='ouvrirRoot'>RootKit</p><div id='rootkit'><p id='introP'>Un rootkit définit tout malware qui a un comportement autonome et caché du système d’exploitation</p><ul><li>N’ouvrez pas des fichiers dont vous n’êtes pas totalement sûr de sa provenance et de sa fiabilité.</li><li>L'analyser</li><li>Méfiez-vous des faux logiciels</li></ul></div>"
  for (let i = 9; i < 14; i++) {
    indexation[i] = '';
  };
  const text = indexation.join('');
  document.getElementById('laListe').innerHTML = text;
  document.querySelector("header").style.backgroundColor = "red";

  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  document.getElementById('myHeading').innerHTML = "<div id='caseRetour'>◀</div><div></div>Virus";
  document.getElementById("caseRetour").style.display = "initial";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns = "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", RetourPrincipal);
  }

  var BtnReviens = document.getElementById("ouvrirVer");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirVer() {
      var x = document.getElementById("verIn");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }

  var BtnReviens = document.getElementById("ouvrirCheval");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirCheval() {
      var x = document.getElementById("chevalTroie");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirSpyWare");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirSpyWare() {
      var x = document.getElementById("spWare");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirRsWare");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirRsWare() {
      var x = document.getElementById("rsWare");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirMalware");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirMalware() {
      var x = document.getElementById("mWare");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirKlog");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirKlog() {
      var x = document.getElementById("kLog");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirRoot");
  if (BtnReviens) {
    BtnReviens.addEventListener("click",
      function ouvrirRoot() {
        var x = document.getElementById("rootkit");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
  }
}