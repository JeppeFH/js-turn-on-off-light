/*lightbulb 2*/
function off() {
  document.getElementById("lamper2").src = "/assets/img/bulbon.gif";
  document.getElementById("turnOn").style.display = "block";
  document.getElementById("turnOff").style.display = "none";
}

function on() {
  document.getElementById("lamper2").src = "/assets/img/bulboff.gif";
  document.getElementById("turnOn").style.display = "none";
  document.getElementById("turnOff").style.display = "block";
}

/*Faq*/
function faqBtnOff_1() {
  document.getElementById("faqBtnOn_1").style.display = "block";
  document.getElementById("faqBtnOff_1").style.display = "none";
  document.getElementById("faqHide_1").style.display = "none";
}

function faqBtnOn_1() {
  document.getElementById("faqBtnOn_1").style.display = "none";
  document.getElementById("faqBtnOff_1").style.display = "block";
  document.getElementById("faqHide_1").style.display = "block";
}

function faqBtnOff_2() {
  document.getElementById("faqBtnOn_2").style.display = "block";
  document.getElementById("faqBtnOff_2").style.display = "none";
  document.getElementById("faqHide_2").style.display = "none";
}

function faqBtnOn_2() {
  document.getElementById("faqBtnOn_2").style.display = "none";
  document.getElementById("faqBtnOff_2").style.display = "block";
  document.getElementById("faqHide_2").style.display = "block";
}

function faqBtnOff_3() {
  document.getElementById("faqBtnOn_3").style.display = "block";
  document.getElementById("faqBtnOff_3").style.display = "none";
  document.getElementById("faqHide_3").style.display = "none";
}

function faqBtnOn_3() {
  document.getElementById("faqBtnOn_3").style.display = "none";
  document.getElementById("faqBtnOff_3").style.display = "block";
  document.getElementById("faqHide_3").style.display = "block";
}

/*Mobile navbar*/
function burgermenu_off() {
  document.getElementById("nav-links").style.display = "block";
  document.getElementById("burgerNav_off").style.display = "none";
  document.getElementById("burgerNav_on").style.display = "block";
}

function burgermenu_on() {
  document.getElementById("nav-links").style.display = "none";
  document.getElementById("burgerNav_on").style.display = "none";
  document.getElementById("burgerNav_off").style.display = "block";
}
