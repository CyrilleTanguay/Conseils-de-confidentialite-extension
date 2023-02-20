function ouvrirAppNon(){
    indexation[0]="<p id='autresAppNon'>Les deux</p><hr>"
    indexation[1]="<p id='ouvrirAppAppleNon'>iPhone</p><div id='appAppleNon'><ul>"
    indexation[2]="<li>Calories Tracker</li><li>Fitness Balance</li></ul></div><hr>"
    indexation[3]="<p id='ouvrirAppAndNon'>Android</p><div id='appAndNon'><ul>"
    indexation[4]="  <li>Big Decisions</li>"
    indexation[5]="  <li>Document PDF Scanner</li>"
    indexation[6]="  <li>FITSTAR</li"
    indexation[7]="  <li>Golden Hunt</li>"
    indexation[8]="  <li>Jewel Sea</li>"
    indexation[9]="  <li>King Blitz</li>"
    indexation[10]="  <li>Luck Hammer</li>"
    indexation[11]="  <li>Lucky Clover</li>"
    indexation[12]="  <li>Lucky Habit: health tracker</li>"
    indexation[13]="  <li>Lucky Step-Walking Tracker</li>"
    indexation[14]="  <li>Lux Fruit Games</li>"
    indexation[15]="  <li>Reflector</li>"
    indexation[16]="  <li>Safe VPN</li>"
    indexation[17]="  <li>SEEKS</li>"
    indexation[18]="  <li>Seven Golden Wolf blackjack</li>"
    indexation[19]="  <li>Smart Night Clock</li>"
    indexation[20]="  <li>Smart Screen Mirroring</li>"
    indexation[21]="  <li>Unlimited Score</li>"
    indexation[22]="  <li>WalkingJoy</li>"
    indexation[23]="  <li>Wonder Time</li>"
    indexation[24]="  <li>X-File Manager</li></ul></div>"

    for(let i = 25; i < 31; i++) {
      indexation[i] = '';
    };    const text = indexation.join('');
      document.getElementById('laListe').innerHTML=text;
      document.querySelector("header").style.backgroundColor="aqua";
      document.querySelector("p").style.lineHeight="inherit";
      document.querySelector("p").style.fontFamily="K2D, sans-serif";
      document.querySelector("main").style.fontFamily="K2D, sans-serif";
      document.getElementById('myHeading').innerHTML="<div id='caseRetour'>◀</div><div></div>Applications à ne pas installer";    
      document.getElementById("myHeading").style.textAlign="right";
      document.getElementById("myHeading").style.display="grid";
      document.getElementById("myHeading").style.gridTemplateColumns="auto auto auto"; 
      var BtnReviens= document.getElementById("caseRetour");
    if (BtnReviens){
    BtnReviens.addEventListener("click", Mobiles); 
    }
    var BtnReviens= document.getElementById("autresAppNon");
    if (BtnReviens){
    BtnReviens.addEventListener("click", autresAppNon); 
    }
    var BtnReviens= document.getElementById("ouvrirAppAppleNon");
    if (BtnReviens){
    BtnReviens.addEventListener("click", function ouvrirAppAppleNon(){
      var x = document.getElementById("appAppleNon");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }); 
    }
    var BtnReviens= document.getElementById("ouvrirAppAndNon");
    if (BtnReviens){
    BtnReviens.addEventListener("click", function ouvrirAppAndNon(){
      var x = document.getElementById("appAndNon");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }); 
    }
    
    }