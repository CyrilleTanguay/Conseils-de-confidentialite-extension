/**
 *
 * Ce fichier intègre le code HTML de la page `Réseaux sociaux` dans le popup.
 *
 * Les variables `indexation` sont définies dans le document `script.js`
 * Toutes les fonctions concernant un réseau social se trouvent dans le document `ReseauxDiffs.js`
 * La fonction RetourPrincipal se trouve dans le document `script.js`
 *
 *
 */
function unReseau() {
  // const AcId = ['ouvrirGenRes',]
  //Catégories
  const reseauxGroup = [
    {
      id: "Deez",
      iconName: "<span class='icon-logo-deezer'></span>",
      name: "Deezer",
    },
    {
      id: "Fb",
      iconName: "<span class='icon-logo-facebook'></span>",
      name: "Facebook",
    },
    {
      id: "Google",
      iconName: "<span class='icon-logo-google'></span>",
      name: "Google",
    },
    {
      id: "Insta",
      iconName: "<span class='icon-logo-instagram'></span>",
      name: "Instagram",
    },
    {
      id: "Messng",
      iconName: "<span class='icon-logo-messenger'></span>",
      name: "Messenger",
    },
    {
      id: "Nint",
      iconName: "<span class='icon-logo-nintendo'></span>",
      name: "Nintendo",
    },
    {
      id: "Onl",
      iconName: `
      <svg fill="#00AFF0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>OnlyFans</title>
      <path d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"/>
      </svg>`,
      name: "OnlyFans",
    },
    {
      id: "Sig",
      iconName: "<span class='icon-logo-signal'></span>",
      name: "Signal",
    },
    {
      id: "Skype",
      iconName: "<span class='icon-logo-skype'></span>",
      name: "Skype",
    },
    {
      id: "Snapchat",
      iconName: "<span class='icon-logo-snapchat'></span>",
      name: "Snapchat",
    },
    {
      id: "Spotify",
      iconName: "<span class='icon-logo-spotify'></span>",
      name: "Spotify",
    },
    {
      id: "Telegram",
      iconName: "<span class='icon-logo-telegram'></span>",
      name: "Telegram",
    },
    {
      id: "Threads",
      iconName: `<svg role="img" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Threads</title>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>`,
      name: "Threads",
    },
    {
      id: "TikTok",
      iconName: "<span class='icon-logo-tiktok'></span>",
      name: "TikTok",
    },

    {
      id: "WApp",
      iconName: "<span class='icon-logo-whatsapp'></span>",
      name: "WhatsApp",
    },
    {
      id: "Twitter",
      iconName: "<span class='icon-logo-2x'></span>",
      name: "X",
    },
    {
      id: "YTube",
      iconName: "<span class='icon-logo-youtube'></span>",
      name: "YouTube",
    },
    {
      id: "Zoom",
      iconName: "<span class='icon-logo-zoom'></span>",
      name: "Zoom",
    },
  ];
  // `${reseauxGroup.map(
  //   (e) =>
  //     `<p id="${e.id}" class='iconeOui'><span class='${e.iconName}'></span>${e.name}<span class='icon-FA-chevron-right'></span></p><hr/>`
  // ).join("")}`;

  const generalAdvices = [
    "Utilisez un pseudonyme sur les forums et les sites marchands",
    "Désactivez la géolocalisation",
    "Activez l’authentification à deux facteurs.",
    "Désactivez le ciblage publicitaire",
    "Privilégiez les publications entièrement assumées",
    "Vérifiez régulièrement qui est connecté. S’il y a des personnes suspectes, déconnectez-les et changez votre mot de passe.",
    "Ne partagez pas de données trop privées (vos enfants, votre domicile, des objets précieux...)",
    "Désactivez le pistage via les publicités et la localisation.",
  ];

  const sitesRencontre = [
    "Ne mettez jamais votre adresse, lieu de travail, numéro fixe, ou le nom de votre école dans votre description.",
    "Soyez honnête mais pas déplacé",
    "Utilisez une adresse courriel distincte sans info personnelle",
    "Méfiez-vous si vous recevez des photos osées, car si vous leur rendez la pareille, vous deviendrez une victime d’extorsion. Cela se passe surtout sur des applications visant la communauté LGBTQ+.",
  ];

  const partagePhotos = [
    "<b><i><u>Rien ne vous oblige à envoyer des photos osées, alors n’en envoyez que si vous le voulez vraiment.</u></i></b>",
    "Ne montrez jamais votre visage ou un signe distinctif (piercing, tatouage...) sur ces photos.",
    "Faites en sorte que le décor ne puisse vous identifier.",
    "N’envoyez rien à quelqu’un en qui vous n’avez pas totalement confiance.",
  ];

  const trolls = [
    "Ne lui répondez pas. Les trolls veulent avoir de l’attention, donc, n’entrez pas dans son jeu.",
    "Prenez du recul.",
    "Ne prenez pas son commentaire de manière personnelle.",
    "S’il est haineux, bannissez-le.",
  ];

  const account = {
    prevention: [
      "Faites très attention à vos relevés bancaires.",
      "Procédez immédiatement à la suspension de votre carte de crédit si vous pensez qu’elle a été corrompue.",
      "Ne partagez pas vos coordonnées bancaires à des sites non fiables",
    ],
    signes: [
      "Vos relevés contiennent des faux renseignements, y compris votre adresse, votre nom ou celui de l’employeur",
      "Vous ne recevez pas les factures de vos créanciers. Si cela arrive, contactez-les. Cela peut indiquer que votre compte a été détourné",
      "Vous obtenez des cartes de crédits de compagnies avec qui vous n’avez pas fait affaire",
      "On vous refuse une approbation de crédit",
      "Vous recevez des factures sur des objets que vous n’avez pas commandés",
    ],
    faux: [
      "Le reconnaitre: un faux compte consiste généralement en votre nom modifié (À l’aide d’un tiret, avec des minuscules...) et réutilise une image que vous avez publié.",
      "Signalez-le. Demandez également à vos amis de le signaler pour accélérer la fermeture du compte",
      "Limitez l’audience de vos publications pour ne pas que des personnes réutilisent une photo de nous",
    ],
  };
  indexation[0] = `<p id='introP'>Êtes-vous sur un réseau social? Si oui, vous n’êtes sûrement pas sans savoir qu’ils ne sont pas très respectueux en matière de vie privée.</p>`;
  indexation[1] = `<p id='ouvrirGenRes' class='iconeOui'><span class='icon-FA-book'></span>Général<span class='icon-circle-down'></span></p><div id='reseauGen'><ul>`;
  indexation[2] = `${generalAdvices
    .map((e) => `<li>${e}</li>`)
    .join("")}</ul></div><hr>`;

  // indexation[15] = `<p id='Onl' class='iconeOui'><svg fill="#00AFF0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OnlyFans</title><path d="M24 4.003h-4.015c-3.45 0-5.3.197-6.748 1.957a7.996 7.996 0 1 0 2.103 9.211c3.182-.231 5.39-2.134 6.085-5.173 0 0-2.399.585-4.43 0 4.018-.777 6.333-3.037 7.005-5.995zM5.61 11.999A2.391 2.391 0 0 1 9.28 9.97a2.966 2.966 0 0 1 2.998-2.528h.008c-.92 1.778-1.407 3.352-1.998 5.263A2.392 2.392 0 0 1 5.61 12Zm2.386-7.996a7.996 7.996 0 1 0 7.996 7.996 7.996 7.996 0 0 0-7.996-7.996Zm0 10.394A2.399 2.399 0 1 1 10.395 12a2.396 2.396 0 0 1-2.399 2.398Z"/></svg>OnlyFans<span class='icon-FA-chevron-right'></span></p><hr>`;

  indexation[3] = reseauxGroup
    .map(
      (e) =>
        `<p id="${e.id}" class='iconeOui'>${e.iconName}${e.name}<span class='icon-FA-chevron-right'></span></p><hr>`
    )
    .join("");
  indexation[4] = `<p id='ouvrirSitesRencontre' class='iconeOui'><span class='icon-FA-heart'></span>Les sites de rencontre<span class='icon-circle-down'></span></p>`;
  indexation[5] = `<div id='sitesRen'><ul>${sitesRencontre
    .map((e) => `<li>${e}</li>`)
    .join("")}</li></ul></div><hr>`;
  indexation[6] = `<p id='ouvrirPartage' class='iconeOui'><span class='icon-FA-photo'></span>Partage de photos osées<span class='icon-circle-down'></span></p>`;
  indexation[7] = `<div id='partagePhoto'><ul>${partagePhotos
    .map((e) => `<li>${e}</li>`)
    .join("")}</ul></div><hr>`;
  indexation[8] = `<p id='ouvrirTrolls' class='iconeOui'><span class='icon-FA-flag'></span>Trolls<span class='icon-circle-down'></span></p><div id='troll'>`;
  indexation[9] = `<ul>${trolls
    .map((e) => `<li>${e}</li>`)
    .join("")}</ul></div><hr>`;
  indexation[10] = `<p id='ouvrirVolI' class='iconeOui'><span class='icon-FA-id-card-o'></span>Vol d'identité<span class='icon-circle-down'></span></p>`;
  indexation[11] = `<div id='volDeI'><p>Prévention</p><ul>${account.prevention
    .map((e) => `<li>${e}</li>`)
    .join("")}</ul>`;
  indexation[12] = `<p>Signes</p><ul>${account.signes
    .map((e) => `<li>${e}</li>`)
    .join("")}</ul>`;
  indexation[13] = `<p>Si un faux compte existe:</p><ul>${account.faux
    .map((e) => `<li>${e}</li>`)
    .join("")}</ul></div>`;

  //On s'assure que les variables ne soient pas séparées par une virgule
  indexation.length = 14;

  const text = indexation.join("");
  //On remplit la fenêtre avec ces catégories
  document.getElementById(`laListe`).innerHTML = text;
  document.querySelector(`header`).style.backgroundColor = `CornflowerBlue`;
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll(`div`).length; i++) {
    document.querySelectorAll(`div`)[i].style.display = `none`;
  }
  //On définit l'en-tête

  HeaderTitle = "Réseaux sociaux";

  headerUp();
  //Seul le bouton de retour est affiché en tout temps
  document.getElementById(`caseRetour`).style.display = `initial`;
  //On définit la grille
  document.querySelector(`p`).style.fontFamily = `K2D, sans-serif`;
  document.getElementById(`myHeading`).style.textAlign = `right`;
  document.getElementById(`myHeading`).style.display = `grid`;
  document.getElementById(
    `myHeading`
  ).style.gridTemplateColumns = `auto auto auto`;
  document.getElementById(`myHeading`).style.color = `white`;

  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById(`caseRetour`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, window.onload);
  }
  //Si la liste déroulante est masquée, on l'affiche et vice-versa
  var BtnReviens = document.getElementById(`ouvrirGenRes`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, function ouvrirGenRes() {
      var x = document.getElementById(`reseauGen`);
      if (x.style.display === `none`) {
        x.style.display = `block`;
      } else {
        x.style.display = `none`;
      }
    });
  }
  var BtnReviens = document.getElementById(`ouvrirSitesRencontre`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, function ouvrirSitesRencontre() {
      var x = document.getElementById(`sitesRen`);
      if (x.style.display === `none`) {
        x.style.display = `block`;
      } else {
        x.style.display = `none`;
      }
    });
  }
  var BtnReviens = document.getElementById(`ouvrirPartage`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, function ouvrirPartage() {
      var x = document.getElementById(`partagePhoto`);
      if (x.style.display === `none`) {
        x.style.display = `block`;
      } else {
        x.style.display = `none`;
      }
    });
  }
  var BtnReviens = document.getElementById(`ouvrirTrolls`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, function ouvrirTrolls() {
      var x = document.getElementById(`troll`);
      if (x.style.display === `none`) {
        x.style.display = `block`;
      } else {
        x.style.display = `none`;
      }
    });
  }
  var BtnReviens = document.getElementById(`ouvrirVolI`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, function ouvrirVolI() {
      var x = document.getElementById(`volDeI`);
      if (x.style.display === `none`) {
        x.style.display = `block`;
      } else {
        x.style.display = `none`;
      }
    });
  }
  //Écouteurs pour accéder à la page correspondante
  var BtnDeez = document.getElementById(`Deez`);
  if (BtnDeez) {
    BtnDeez.addEventListener(`click`, Deez);
  }
  var BtnReviens = document.getElementById(`Fb`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Fb);
  }
  var BtnReviens = document.getElementById(`Google`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Google);
  }
  var BtnReviens = document.getElementById(`Insta`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Insta);
  }
  var BtnReviens = document.getElementById(`Messng`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Messng);
  }
  var BtnReviens = document.getElementById(`Nint`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Nint);
  }
  var BtnReviens = document.getElementById(`Onl`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, OnlyFans);
  }
  var BtnReviens = document.getElementById(`Sig`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Sig);
  }
  var BtnReviens = document.getElementById(`Skype`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Skype);
  }
  var BtnReviens = document.getElementById(`Snapchat`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Snapchat);
  }
  var BtnReviens = document.getElementById(`Spotify`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Spotify);
  }
  var BtnReviens = document.getElementById(`Telegram`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Telegram);
  }
  var BtnReviens = document.getElementById(`TikTok`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, TikTok);
  }
  var BtnReviens = document.getElementById(`Threads`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Threads);
  }
  var BtnReviens = document.getElementById(`Twitter`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Twitter);
  }
  var BtnWA = document.getElementById(`WApp`);
  if (BtnWA) {
    BtnWA.addEventListener(`click`, WhatsApp);
  }
  var BtnReviens = document.getElementById(`YTube`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, YTube);
  }
  var BtnReviens = document.getElementById(`Zoom`);
  if (BtnReviens) {
    BtnReviens.addEventListener(`click`, Zoom);
  }
}
