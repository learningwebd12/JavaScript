function dateshow() {
  document.getElementById("demo").innerHTML = Date();
}

function checkCookies() {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookie are enable";
  } else {
    text = "Cookie are not enable";
  }
  document.getElementById("demo").innerHTML = text;
}

function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function allCapital() {
  const x = document.getElementById("lname");
  x.value = x.value.toUpperCase();
}

function mOver(e) {
  e.innerHTML = "Thank You";
}
function mOut(e) {
  e.innerHTML = "Welcome";
}
const cord = document.getElementById("cord");
window.addEventListener("mouseover", function (event) {
  console.log(event);
  const x = event.pageX;
  const y = event.pageY;
  cord.textContent = `mouse Coordinates X:${x},Y:${y}`;
});

//event for form

function focusFunction(e) {
  e.style.background = "lime";
}

function blurFunction(e) {
  e.style.background = "";
}

function inputFunction(e) {
  var x = e.value;
  document.getElementById("test").innerHTML = x;
}
