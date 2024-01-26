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
  indexation[0] =
    "<p id='introP'>Vous savez ce qu’est un virus informatique, mais savez-vous quels sont leurs types?</p>";
  indexation[1] =
    "<p id='ouvrirVer'>Ver informatique</p><div id='verIn'><p id='introP'>Il s’agit d’un virus qui va d’ordi en ordi</p><br>";
  indexation[2] =
    "<p>Pour vous protéger:</p><ul><li>N’ouvrez pas à l’aveugle des téléchargements</li><li>N’utilisez pas d’application web infectée pour éviter sa propagation</li></ul></div><hr>";
  indexation[3] =
    "<p id='ouvrirCheval' class='iconeOui'><svg viewBox='0 0 512 512' role='img' xmlns='http://www.w3.org/2000/svg'><path fill='#000000' d='M336 16l9.605 34.55v36.473l59.786 44.84 69.99 35.85 11.015-33.04-88.81-97.118-19.59 4.898L336 16zm-12.492 20.13L270.455 155.5h28.057l29.093-72.732v-42.54l-4.097-4.1zm67.86 21.415l34.88 35.84-41.643-11.637 6.764-24.203zm-52.93 46.603l-24.14 60.35 50.718 126.795 24.77-148.633-51.347-38.512zM89.606 173.5v142h62v-96h146v96h57.707l-56.8-142H89.605zm-18 9l-46 34.5v117.014l30 10V240.77l16-16V182.5zm98 55v14h110v-14h-110zm0 32v14h110v-14h-110zm0 32v14h110v-14h-110zm-80 32v78.51c2.29-.33 4.624-.51 7-.51 7.913 0 15.395 1.912 22.028 5.277l37.012-83.277h-66.04zm209.057 0l9.004 81.04c5.286-1.963 10.992-3.04 16.94-3.04 5.2 0 10.213.83 14.925 2.348l17.857-80.348h-58.725zm-202.057 96c-17.227 0-31 13.773-31 31s13.773 31 31 31c17.228 0 31-13.773 31-31s-13.772-31-31-31zm228 0c-17.227 0-31 13.773-31 31s13.773 31 31 31c17.228 0 31-13.773 31-31s-13.772-31-31-31zm-228 15c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.836 0-16-7.163-16-16s7.164-16 16-16zm228 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.836 0-16-7.163-16-16s7.164-16 16-16zm-179.847 7c.548 2.92.847 5.926.847 9s-.3 6.08-.847 9h131.695c-.548-2.92-.848-5.926-.848-9s.3-6.08.848-9H144.758z'/></svg>Cheval de Troie<span class='icon-circle-down'></span></p><div id='chevalTroie'><p id='introP'>Il s’agit d’un code nuisible placé dans un programme fiable et qui permet à son concepteur d’accéder à votre machine par le réseau. Malheureusement, il est souvent difficile de détecter cette anomalie, mais peut présenter ces signes lors de leur ouverture:</p><ul><li>Activité anormale du modem ou de la carte réseau : des données sont chargées en l’absence d’activité de la part de l’utilisateur</li><li>La souris réagit bizarrement</li><li>Des programmes s’ouvrent sans que vous ne l’aviez demandé.</li><li>Votre ordi plante à répétition.</li></ul><p>Prévention:</p><ul><li>N’acceptez pas des connections d’origine inconnue. Si un programme dont vous ne connaissez pas l’origine veut ouvrir une connexion, le pare-feu demandera de confirmer la connexion.</li><li>N’ouvrez pas des fichiers qui ne vous sont pas fiables à 100%</li></ul></div><hr>";
  indexation[4] =
    "<p id='ouvrirSpyWare'>SpyWare</p><div id='spWare'><p id='introP'>Les spywares sont des programmes recueillant vos informations à la société qui le diffuse pour en faire votre profil. Il est malheureusement difficile de les détecter.</p><p>Les signes:</p><ul><li>Présence de processus d’arrière-plan suspects</li><li>Présence de fichier étrange</li><li>Présences d’entrées inquiétantes dans la base de registre</li><li>La consommation de mémoire vive</li><li>De l’espace disque est utilisé</li><li>Les ressources du processeur sont mobilisées</li><li>D’autres applications plantent</li><li>Gêne ergonomique (exemple: ouverture de pop-ups publicitaires)</li></ul><p>Prévention:</p><ul><li>N’installez pas des fichiers dont vous n’êtes pas sûr à 100% de sa fiabilité</li><li>Utilisez un logiciel anti-spyware</li></ul></div><hr>";
  indexation[5] =
    "<p id='ouvrirRsWare'>Ransomware</p><div id='rsWare'><p id='introP'>Il s’agit d’applications destinés à soutirer de l’argent à leurs proies</p><p>Prévention:</p><ul><li>Faites des sauvegardes régulières sur un serveur déporté</li><li>N’ouvrez pas les pourriels</li><li>En entreprise, n’installez pas de logiciels non vérifiés</li><li>Évitez des sites illicites ou non fiables</li><li>Utilisez un compte « utilisateur » au lieu de celui « administrateur »</li><li>Éteignez votre ordi quand vous ne vous en servez pas.</li></ul><p>Victime:</p><ul><li>Débranchez l'ordi d'Internet ou du réseau</li><li>Portez plainte à la police</li><li>Appliquez une méthode de désinfection si c’est possible. Sinon:</li><ul><li>Reformatez le poste</li><li>Réinstallez un système sain</li><li>Restaurez les copies de sauvegarde des fichiers perdus</li></ul></ul></div><hr>";
  indexation[6] =
    "<p id='ouvrirMalware'>Malware</p><div id='mWare'><ul><li>Ne cliquez pas sur des liens provenant d’inconnus</li><li>Utilisez la barre d’adresse pour chercher un URL</li><li>Téléchargez des applications à partir de leur source officielle</li></ul></div><hr>";
  indexation[7] =
    "<p id='ouvrirKlog' class='iconeOui'><span class='icon-keyboard'></span>Keylogger<span class='icon-circle-down'></span></p><div id='kLog'><p id='introP'>Un keylogger enregistre les frappes des touches de votre clavier.</p><p>Prévention:</p><ul><li>N’installez pas de logiciels douteux</li><li>Soyez prudent si vous utilisez une connexion publique</li></ul></div><hr>";
  indexation[8] =
    "<p id='ouvrirRoot'>RootKit</p><div id='rootkit'><p id='introP'>Un rootkit définit tout malware qui a un comportement autonome et caché du système d’exploitation</p><ul><li>N’ouvrez pas des fichiers dont vous n’êtes pas totalement sûr de sa provenance et de sa fiabilité.</li><li>L'analyser</li><li>Méfiez-vous des faux logiciels</li></ul></div>";
  // for (let i = 9; i < 14; i++) {
  //   indexation[i] = "";
  // }
  indexation.length = 9;

  const text = indexation.join("");
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "orangeRed";

  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }

  HeaderTitle = "Virus";
  headerUp();
  
alignHeader()
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }

  var BtnVer = document.getElementById("ouvrirVer");
  if (BtnVer) {
    BtnVer.addEventListener("click", function ouvrirVer() {
      var x = document.getElementById("verIn");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }

  var BtnCheval = document.getElementById("ouvrirCheval");
  if (BtnCheval) {
    BtnCheval.addEventListener("click", function ouvrirCheval() {
      var x = document.getElementById("chevalTroie");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnSpW = document.getElementById("ouvrirSpyWare");
  if (BtnSpW) {
    BtnSpW.addEventListener("click", function ouvrirSpyWare() {
      var x = document.getElementById("spWare");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnRs = document.getElementById("ouvrirRsWare");
  if (BtnRs) {
    BtnRs.addEventListener("click", function ouvrirRsWare() {
      var x = document.getElementById("rsWare");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnMlw = document.getElementById("ouvrirMalware");
  if (BtnMlw) {
    BtnMlw.addEventListener("click", function ouvrirMalware() {
      var x = document.getElementById("mWare");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnKlog = document.getElementById("ouvrirKlog");
  if (BtnKlog) {
    BtnKlog.addEventListener("click", function ouvrirKlog() {
      var x = document.getElementById("kLog");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnRoot = document.getElementById("ouvrirRoot");
  if (BtnRoot) {
    BtnRoot.addEventListener("click", function ouvrirRoot() {
      var x = document.getElementById("rootkit");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
}
