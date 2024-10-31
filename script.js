function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

function calculateSin() {
  let display = document.getElementById("display");
  display.value = Math.sin(toRadians(display.value));
}

function calculateCos() {
  let display = document.getElementById("display");
  display.value = Math.cos(toRadians(display.value));
}

function calculateTan() {
  let display = document.getElementById("display");
  display.value = Math.tan(toRadians(display.value));
}

function calculateSqrt() {
  let display = document.getElementById("display");
  display.value = Math.sqrt(display.value);
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}
