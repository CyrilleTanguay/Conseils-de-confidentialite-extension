window.onload = function apply() {
  document.getElementById("laListe").innerHTML = { startTest };
  //   console.log(startTest);
};

function startTest() {
    document.getElementById("laListe").innerHTML = { startTest };

  return (
    <>
      <ul>
        <li>
          Vérifiez les paramètres de sécurité de votre ordinateur et désactivez
          la collecte de données.
        </li>
        <li>
          Faites la mise à jour du système si une nouvelle version est
          disponible. Les mises à jour contiennent des correctifs permettant de
          rendre le système moins vulnérable.
        </li>
        <li>
          Désactivez la mise à jour automatique (pour Windows). Bien que faire
          une mise à jour du système soit primordial pour notre sécurité, elle
          peut survenir au mauvais moment.
        </li>
        <li>Enlevez des connections tiers avec des applications.</li>
        <li>Activez le pare-feu</li>
        <li>
          Désactivez l’option « masquer les extensions de fichier ». Cela vous
          permettra de cerner des fichiers pirates.
        </li>
      </ul>
      <ul>
        <li>
          Méfiez-vous des réseaux publics. Ils vous rendent plus vulnérables aux
          pirates. Ce n’est pas pour rien que lorsque vous choisissez ce réseau,
          il y a « réseau non sécurisé » qui est inscrit sur votre iPhone!
        </li>
        <li>Désactivez Bluetooth si vous n’en avez pas besoin</li>
        <li>
          Se connecter sur vos données cellulaires n’est pas plus sécuritaire.
          Vous pourriez être piraté par phishing ou par l’exploitation de
          vulnérabilités dans des appareils mobiles.
        </li>
        <li>
          Si vous êtes sur un réseau public, n’allez pas sur les réseaux sociaux
          et ne vous connectez pas à un compte bancaire.
        </li>
      </ul>
      <ul>
        <li>
          Un antivirus. Comme son nom l’indique, il permet de détecter des
          fichiers malveillants.
        </li>
        <li>
          Un VPN. Si comme moi vous passez du temps sur YouTube, vous savez
          sûrement ce que c’est. En gros, un VPN permet de générer une adresse
          IP, ce qui vous permettra de rendre votre emplacement secret.
          L’argument de vente principal d’un VPN est le fait qu’il vous permette
          de regarder des séries ou des films en streaming qui ne sont
          disponibles que dans un pays étranger.
        </li>
      </ul>
      <p id="introP">
        Les ordinateurs portables sont plus à risque de surchauffer en été, ce
        qui peut entraîner une réduction des performances, voire même un crash.
        Pour régler ces problèmes, appliquez ces conseils:
      </p>
      <ul>
        <li>Regardez où est situé le ventilateur.</li>
        <li>
          La poussière cause souvent la surchauffe d'un appareil électronique,
          car elle est aspirée par le ventilateur, et bouche les circuits de
          ventilation et d'aération. Aussi, la poussière gêne la dissipation de
          la chaleur, ce qui chauffe les composantes électroniques. Pour enlever
          la poussière, utilisez une bombe d'air comprimé ou une petite brosse à
          poil souple.
        </li>
        <li>Fermez des applications gourmandes en ressources.</li>
        <li>
          Utilisez une application comme
          <a href="https://www.almico.com/speedfan.php">SpeedFan</a>, qui vous
          notifie lorsque la température de votre laptop monte
        </li>
      </ul>
      <p>Pour prèvenir la surchauffe:</p>
      <ul>
        <li>
          Utilisez un accessoire de ventilation USB. Il consiste en plusieurs
          ventilateurs qui refroidissent l'ordinateur rapidement
        </li>
        <li>
          N'utilisez pas votre laptop sur votre lit, car son contact avec le
          tissu peut causer une surchauffe. En effet, les fibres ont tendance à
          stocker la chaleur et à la renvoyer à votre portable, ce qui risque de
          le chauffer et de l'abîmer.
        </li>
        <li>
          Ne laissez pas branché en permanence votre portable, car la baterie va
          se dégrader et chauffer
        </li>
      </ul>
    </>
  );
}
