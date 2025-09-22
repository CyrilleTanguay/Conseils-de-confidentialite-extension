/**
 *
 * Ce fichier intègre le code HTML de la page "Votre ordinateur" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 *
 */
//Catégories
function Ordi() {
  const listOrdi = [
    {
      id: "ouvrirAjust",
      icon: "icon-FA-sliders",
      title: "Ajustements",
      contentId: "Ajust",
      contentList: [
        {
          // headerText: "Un bon mot de passe doit...",

          subContent: [
            {
              text: "Vérifiez les paramètres de sécurité de votre ordinateur et désactivez la collecte de données.",
            },
            {
              text: "Faites la mise à jour du système si une nouvelle version est disponible. Les mises à jour contiennent des correctifs permettant de rendre le système moins vulnérable.",
            },
            {
              text: "Désactivez la mise à jour automatique (pour Windows). Bien que faire une mise à jour du système soit primordial pour notre sécurité, elle peut survenir au mauvais moment.",
            },
            {
              text: "Enlevez des connections tiers avec des applications.",
            },
            {
              text: "Activez le pare-feu",
            },
            {
              text: "Désactivez l’option « masquer les extensions de fichier ». Cela vous permettra de cerner des fichiers pirates.",
            },
          ],
        },
      ],
    },
    {
      id: "ouvrirInte",
      icon: "icon-sphere",
      title: "Internet",
      contentId: "Inte",
      contentList: [
        {
          // headerText: "Un bon mot de passe doit...",

          subContent: [
            {
              text: "Méfiez-vous des réseaux publics. Ils vous rendent plus vulnérables aux pirates. Ce n’est pas pour rien que lorsque vous choisissez ce réseau, il y a « réseau non sécurisé » qui est inscrit sur votre iPhone!",
            },
            {
              text: "Désactivez Bluetooth si vous n’en avez pas besoin",
            },
            {
              text: "Se connecter sur vos données cellulaires n’est pas plus sécuritaire. Vous pourriez être piraté par phishing ou par l’exploitation de vulnérabilités dans des appareils mobiles.",
            },
            {
              text: "Si vous êtes sur un réseau public, n’allez pas sur les réseaux sociaux, ne vous connectez pas à un compte bancaire et n'utilisez pas les fonctionnalités de sauvegarde automatique des données. Aussi, utilisez votre VPN.",
            },
            {
              text: "Si possible, utilisez le cryptage WPA3 pour sécuriser votre réseau wi-fi.",
            },
            {
              text: "Créez un réseau distinct pour vos invités. Cela les empêchera d'accéder à vos données personnelles.",
            },
            {
              text: "Sauf si nécessaires, désactivez les fonction de gestion à distance du routeur pour réduire les risques d'accès non autorisé.",
            },
          ],
        },
      ],
    },
    {
      id: "ouvrirAppInte",
      icon: "icon-FA-shield",
      title: "Logiciels à installer",
      contentId: "appInte",
      contentList: [
        {
          // headerText: "Un bon mot de passe doit...",

          subContent: [
            {
              text: "Un antivirus. Comme son nom l’indique, il permet de détecter des fichiers malveillants.",
            },
            {
              text: "Un VPN. Si comme moi vous passez du temps sur YouTube, vous savez sûrement ce que c’est. En gros, un VPN permet de générer une adresse IP, ce qui vous permettra de rendre votre emplacement secret. L’argument de vente principal d’un VPN est le fait qu’il vous permette de regarder des séries ou des films en streaming qui ne sont disponibles que dans un pays étranger.",
            },
          ],
        },
      ],
    },
    {
      id: "ouvrirLaptop",
      icon: "icon-laptop",
      title: "Laptops",
      contentId: "Laptop",
      contentList: [
        {
          headerText:
            "Les ordinateurs portables sont plus à risque de surchauffer en été, ce qui peut entraîner une réduction des performances, voire même un crash. Pour régler ces problèmes, appliquez ces conseils:",

          subContent: [
            {
              text: "Regardez où est situé le ventilateur.",
            },
            {
              text: "La poussière cause souvent la surchauffe d'un appareil électronique, car elle est aspirée par le ventilateur, et bouche les circuits de ventilation et d'aération. Aussi, la poussière gêne la dissipation de la chaleur, ce qui chauffe les composantes électroniques. Pour enlever la poussière, utilisez une bombe d'air comprimé ou une petite brosse à poil souple.",
            },
            {
              text: "Fermez des applications gourmandes en ressources.",
            },
            {
              text: "Utilisez une application comme <a href='https://www.almico.com/speedfan.php'>SpeedFan</a>, qui vous notifie lorsque la température de votre laptop monte",
            },
          ],
        },
        {
          headerText: "Pour prèvenir la surchauffe:",

          subContent: [
            {
              text: "Utilisez un accessoire de ventilation USB. Il consiste en plusieurs ventilateurs qui refroidissent l'ordinateur rapidement",
            },
            {
              text: "N'utilisez pas votre laptop sur votre lit, car son contact avec le tissu peut causer une surchauffe. En effet, les fibres ont tendance à stocker la chaleur et à la renvoyer à votre portable, ce qui risque de le chauffer et de l'abîmer.",
            },
            {
              text: "Ne laissez pas branché en permanence votre portable, car la baterie va se dégrader et chauffer",
            },
          ],
        },
      ],
    },
  ];
  const OrdiMap = [
    {
      ouv: "Ajust",
      int: "<ul><li>Vérifiez les paramètres de sécurité de votre ordinateur et désactivez la collecte de données.</li><li>Faites la mise à jour du système si une nouvelle version est disponible. Les mises à jour contiennent des correctifs permettant de rendre le système moins vulnérable.</li><li>Désactivez la mise à jour automatique (pour Windows). Bien que faire une mise à jour du système soit primordial pour notre sécurité, elle peut survenir au mauvais moment.</li><li>Enlevez des connections tiers avec des applications.</li><li>Activez le pare-feu</li><li>Désactivez l’option « masquer les extensions de fichier ». Cela vous permettra de cerner des fichiers pirates.</li></ul></div>",
      id: "ouvrirAjust",
      icon: "icon-FA-sliders",
      cat: "Ajustements",
      ligne: "<hr/>",
    },
    {
      ouv: "Inte",
      int: "<ul><li>Méfiez-vous des réseaux publics. Ils vous rendent plus vulnérables aux pirates. Ce n’est pas pour rien que lorsque vous choisissez ce réseau, il y a « réseau non sécurisé » qui est inscrit sur votre iPhone!</li><li>Désactivez Bluetooth si vous n’en avez pas besoin</li><li>Se connecter sur vos données cellulaires n’est pas plus sécuritaire. Vous pourriez être piraté par phishing ou par l’exploitation de vulnérabilités dans des appareils mobiles.</li><li>Si vous êtes sur un réseau public, n’allez pas sur les réseaux sociaux, ne vous connectez pas à un compte bancaire et n'utilisez pas les fonctionnalités de sauvegarde automatique des données. Aussi, utilisez votre VPN.</li><li>Si possible, utilisez le cryptage WPA3 pour sécuriser votre réseau wi-fi.</li><li>Créez un réseau distinct pour vos invités. Cela les empêchera d'accéder à vos données personnelles.</li><li>Sauf si nécessaires, désactivez les fonction de gestion à distance du routeur pour réduire les risques d'accès non autorisé.</li></ul></div>",
      id: "ouvrirInte",
      icon: "icon-sphere",
      cat: "Internet",
      ligne: "<hr/>",
    },
    {
      ouv: "appInte",
      int: "<ul><li>Un antivirus. Comme son nom l’indique, il permet de détecter des fichiers malveillants.</li><li>Un VPN. Si comme moi vous passez du temps sur YouTube, vous savez sûrement ce que c’est. En gros, un VPN permet de générer une adresse IP, ce qui vous permettra de rendre votre emplacement secret. L’argument de vente principal d’un VPN est le fait qu’il vous permette de regarder des séries ou des films en streaming qui ne sont disponibles que dans un pays étranger.</li></ul></div>",
      id: "ouvrirAppInte",
      icon: "icon-FA-shield",
      cat: "Logiciels à installer",
      ligne: "<hr/>",
    },
    {
      ouv: "Laptop",
      int: "<p id='introP'>Les ordinateurs portables sont plus à risque de surchauffer en été, ce qui peut entraîner une réduction des performances, voire même un crash. Pour régler ces problèmes, appliquez ces conseils:</p><ul><li>Regardez où est situé le ventilateur.</li><li>La poussière cause souvent la surchauffe d'un appareil électronique, car elle est aspirée par le ventilateur, et bouche les circuits de ventilation et d'aération. Aussi, la poussière gêne la dissipation de la chaleur, ce qui chauffe les composantes électroniques. Pour enlever la poussière, utilisez une bombe d'air comprimé ou une petite brosse à poil souple.</li><li>Fermez des applications gourmandes en ressources.</li><li>Utilisez une application comme <a href='https://www.almico.com/speedfan.php'>SpeedFan</a>, qui vous notifie lorsque la température de votre laptop monte</li></ul><p>Pour prèvenir la surchauffe:</p><ul><li>Utilisez un accessoire de ventilation USB. Il consiste en plusieurs ventilateurs qui refroidissent l'ordinateur rapidement</li><li>N'utilisez pas votre laptop sur votre lit, car son contact avec le tissu peut causer une surchauffe. En effet, les fibres ont tendance à stocker la chaleur et à la renvoyer à votre portable, ce qui risque de le chauffer et de l'abîmer.</li><li>Ne laissez pas branché en permanence votre portable, car la baterie va se dégrader et chauffer</li></ul></div>",
      id: "ouvrirLaptop",
      icon: "icon-laptop",
      cat: "Laptops",
      ligne: "",
    },
  ];

  //On remplit la fenêtre avec ces catégories
  // document.getElementById("laListe").innerHTML = OrdiMap.map(
  //   (e) =>
  //     // paragraphList(e.id, e.icon, e.cat,'icon-circle-down',e.ouv,e.int)
  //     `<p id="${e.id}" class="iconeOui"><span class="${e.icon}"></span>${e.cat}<span class="icon-circle-down"></span></p><div id="${e.ouv}">${e.int} ${e.ligne}</div>`
  // ).join("");
  document.getElementById("laListe").innerHTML = listOrdi
    .map((e, i) =>
      paragraphListSub(
        e.id,
        e.icon,
        e.title,
        "icon-circle-down",
        e.contentId,
        null,
        e.contentList,
        listOrdi,
        i
      )
    )
    .join("");
  document.querySelector("header").style.backgroundColor = "black";
  document.getElementById("myHeading").style.color = "white";
  //On s'assure que les listes déroulantes soient fermées et masquées
  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  //On définit l'en-tête
  // document.getElementById("myHeading").innerHTML =
  //   "<div id='caseRetour'>◀</div><div></div><div>Votre ordinateur</div>";
  HeaderTitle = "Votre Ordinateur";

  headerUp();

  //On définit la grille
  alignHeader();

  listOrdi.map((or) => OpenList(or.id, or.contentId));

  //Si on clique sur le bouton de retour, on appelle sa fonction
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
}
