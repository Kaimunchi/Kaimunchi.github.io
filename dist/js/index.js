// Selectors
const title = document.querySelector("#title");
const title1 = document.querySelector("#title1");
const title2 = document.querySelector("#title2");
//const strikeText = document.querySelector(".strike-text");
const newText = document.querySelector("#newText");
let speed = 100;
function displayText() {
  var a = "Hi there!^Its Melson Mascarenhas here :)";
  //var b = "[~]$ whoami^";
  //var c = "hii ";
  //var pos = 10;
  // var w = [a.slice(0, pos), b, a.slice(pos)].join("");
  //var m = "Hi there!^Its Melson here :)";
  var i = 0;
  document.getElementById("title").style.color = "blue";
  // document.getElementById("title1").style.color = "green";
  //document.getElementById("title2").style.color = "#ff0000";
  //  document.getElementById("title1").style.color = "#ff0000";

  window.setInterval(function() {
    if (a.charAt(i) == "^") {
      title.innerHTML += "<br>";
      i++;
    }
    if (a.length == i) {
      doneShowing();
    }
    title.innerHTML += a.charAt(i);
    i++;
  }, speed);
}

function doneShowing() {
  let string = "DORAEMON (-_-) !",
    i = 0;
  // strikeText.setAttribute("style", "text-decoration:line-through");
  window.setInterval(function() {
    newText.innerHTML += string.charAt(i);
    i++;
  }, speed);
}

window.onload = () => {
  displayText();
};
