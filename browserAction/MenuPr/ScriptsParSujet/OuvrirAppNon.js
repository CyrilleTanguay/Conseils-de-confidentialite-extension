/**
 *
 * Ce fichier intègre le code HTML de la page "Applications à ne pas installe" dans le popup.
 *
 * Les variables "indexation" sont définies dans le document "script.js"
 * La fonction Mobiles se trouve dans le document "Mobile.js"
 * La fonction autresAppNon se trouve dans le document "AppsPhoneNon.js"
 *
 */
function ouvrirAppNon() {
  indexation[0] =
    "<p id='autresAppNon' class='iconeOui'><span class='icon-FA-columns'></span>Les deux<span class='icon-FA-chevron-right'></span></p><hr>";
  indexation[1] =
    "<p id='ouvrirAppAppleNon' class='iconeOui'><span class='icon-logo-ios'></span>iPhone<span class='icon-circle-down'></span></p><div id='appAppleNon'><ul>";
  indexation[2] =
    "<li>Clones de ChatGPT:</li><ul><li>Open Chat - AI Chatbot</li><li>Genie - GPT AI Assistant</li><li>Write For Me GPT AI Assistant</li><li>ChatGPT - GPT 3</li><li>Alfred - Chat with GPT 3</li><li>Chat w. GPT AI - Write This</li><li>ChatGPT - AI Writing apps</li><li>Wiz AI Chat Bot Writing Helper</li><li>Chat AI: Personal AI Assistant</li><li>Wisdom Ai - Your AI Assistant</li></ul><li>Calories Tracker</li><li>Fitness Balance</li></ul></div><hr>";
  indexation[3] =
    "<p id='ouvrirAppAndNon' class='iconeOui'><span class='icon-logo-android'></span>Android<span class='icon-circle-down'></span></p><div id='appAndNon'><ul>";
  indexation[4] = "<li>Big Decisions</li>";
  indexation[5] =
    "<li>Clones de ChatGPT:</li><ul><li>AI Chat Companion</li><li>TalkGPT - Talk to ChatGP</li><li>TOpen Chat - AI Chatbot App</li><li>GPT AI Chat - Chatbot assistant</li><li>ChatGPT AI Writing Assistant</li><li>ChatGPT 3: Chat GPT AI</li><li>ChatGPT</li><li>Chatteo - Chat with AI</li><li>ChatGPT: Chat with AI Chatbot</li><li>Open AI Chat Gpt - AI 360</li></ul>";
  indexation[6] = "<li>Document PDF Scanner</li>";
  indexation[7] = "<li>FITSTAR</li>";
  indexation[8] = "<li>Golden Hunt</li>";
  indexation[9] = "<li>Jewel Sea</li>";
  indexation[10] = "<li>King Blitz</li>";
  indexation[11] = "<li>Luck Hammer</li>";
  indexation[12] = "<li>Lucky Clover</li>";
  indexation[13] = "<li>Lucky Habit: health tracker</li>";
  indexation[14] = "<li>Lucky Step-Walking Tracker</li>";
  indexation[15] = "<li>Lux Fruit Games</li>";
  indexation[16] = "<li>Reflector</li>";
  indexation[17] = "<li>Safe VPN</li>";
  indexation[18] = "<li>SEEKS</li>";
  indexation[19] = "<li>Seven Golden Wolf blackjack</li>";
  indexation[20] = "<li>Smart Night Clock</li>";
  indexation[21] = "<li>Smart Screen Mirroring</li>";
  indexation[22] = "<li>Unlimited Score</li>";
  indexation[23] = "<li>WalkingJoy</li>";
  indexation[24] = "<li>Wonder Time</li>";
  indexation[25] = "<li>X-File Manager</li></ul></div>";

  for (let i = 26; i < 32; i++) {
    indexation[i] = "";
  }
  const text = indexation.join("");
  document.getElementById("laListe").innerHTML = text;
  document.querySelector("header").style.backgroundColor = "silver";
  document.querySelector("main").style.fontFamily = "Oswald, sans-serif";
  document.querySelector("li").style.fontFamily = "K2D, sans-serif";

  for (let i = 0; i < document.querySelectorAll("div").length; i++) {
    document.querySelectorAll("div")[i].style.display = "none";
  }
  document.getElementById("myHeading").innerHTML =
    "<div id='caseRetour'>◀</div><div></div>Applications à ne pas installer";
  document.getElementById("caseRetour").style.display = "initial";
  document.getElementById("myHeading").style.textAlign = "right";
  document.getElementById("myHeading").style.display = "grid";
  document.getElementById("myHeading").style.gridTemplateColumns =
    "auto auto auto";
  var BtnReviens = document.getElementById("caseRetour");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", Mobiles);
  }
  var BtnReviens = document.getElementById("autresAppNon");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", autresAppNon);
  }
  var BtnReviens = document.getElementById("ouvrirAppAppleNon");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirAppAppleNon() {
      var x = document.getElementById("appAppleNon");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
  var BtnReviens = document.getElementById("ouvrirAppAndNon");
  if (BtnReviens) {
    BtnReviens.addEventListener("click", function ouvrirAppAndNon() {
      var x = document.getElementById("appAndNon");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  }
}
