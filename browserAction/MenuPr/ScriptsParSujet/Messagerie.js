/**
 *
 * Ce fichier intègre le code HTML de la page "Messagerie" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction Arnaques se trouve dans le document "Arnaques.js"
 * La fonction RetourPrincipal se trouve dans le document "script.js"
 *
 */
function SMS() {
  const ListeSMS = [
    "Si vous avez un compte Vidéotron, sachez que les messages présents dans la boîte de réception sont automatiquement supprimés après 1 an. Pour empêcher cela, créez une autre boîte ou, si vous utilisez l’application Mail sur Mac, placer vos messages dans la boîte « archive » fera l’affaire.",
    "Utilisez deux adresses courriel: une privée pour vos proches, une publique pour les forums.",
    "Activez la double authentification.",
    "Déconnectez-vous lors d’une session publique",
    "N’oubliez pas que la fonction répondre à tous existe.",
    "Vérifiez les paramètres de sécurité de votre boîte mail.",
  ];
  const newList = [
    {
      id: "ouvrirConseils",
      icon: "icon-FA-book",
      title: "Conseils",
      contentId: "conseilMess",
      // introText: "Lorsque vous allez sur un site, posez-vous ces questions:",
      contentList: [
        {
          subContent: [
            {
              text: "Si vous avez un compte Vidéotron, sachez que les messages présents dans la boîte de réception sont automatiquement supprimés après 1 an. Pour empêcher cela, créez une autre boîte ou, si vous utilisez l’application Mail sur Mac, placer vos messages dans la boîte « archive » fera l’affaire.",
            },
            {
              text: "Utilisez deux adresses courriel: une privée pour vos proches, une publique pour les forums.",
            },
            {
              text: "Activez la double authentification.",
            },
            {
              text: "Déconnectez-vous lors d’une session publique.",
            },
            {
              text: "N’oubliez pas que la fonction répondre à tous existe.",
            },
            {
              text: "Vérifiez les paramètres de sécurité de votre boîte mail.",
            },
          ],
        },
      ],
    },
    {
      id: "Arnaques",
      icon: "icon-FA-flag",
      title: "Arnaques/pourriel",
      // contentId: "Arnaques",
      // introText: "Lorsque vous allez sur un site, posez-vous ces questions:",
    },
  ];

  // const text = `<p id='ouvrirConseils' class='iconeOui'>
  // <span class='icon-FA-book'></span>Conseils<span class='icon-circle-down'></span></p><div id='conseilMess'><ul>
  // ${ListeSMS.map((liste) => `<li>${liste}</li>`).join("")}</ul></div><hr>
  // <p id='Arnaques' class='iconeOui'><span class='icon-FA-flag'></span>Arnaques/pourriel<span class='icon-FA-chevron-right'></span></p>`;
  document.getElementById("laListe").innerHTML = newList
    .map((e, i) =>
      paragraphListSub(
        e.id,
        e.icon,
        e.title,
        e.contentList ? "icon-circle-down" : "icon-FA-chevron-right",
        e.contentId,
        null,
        e.contentList,
        newList,
        i
      )
    )
    .join("");
  document.querySelector("header").style.backgroundColor = "blue";

  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }

  HeaderTitle = "Messagerie";
  headerUp();

  document.getElementById("myHeading").style.color = "white";
  alignHeader();
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", window.onload);
  }
  var BtnReviens = document.getElementById("Arnaques");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Arnaques);
  }

  OpenList("ouvrirConseils", "conseilMess");
}
