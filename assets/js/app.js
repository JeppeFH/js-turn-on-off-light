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
function show() {
  document.getElementById("faq-btn-on").style.display = "block";
  document.getElementById("faq-btn-off").style.display = "none";
}
