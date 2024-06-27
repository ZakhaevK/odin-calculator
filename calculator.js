// Elements for DOM manipulation
const display = document.getElementById("display");
const clearBut = document.getElementById("ac");
const signBut = document.getElementById("+/-");
const percentBut = document.getElementById("percentage");
const operandButs = document.getElementsByClassName("operand");

for (let button of operandButs) {
  console.log(button.value);
  button.addEventListener("click", () => updateDisplay(button.value));
}

// Variables for calculator operations
let num1 = 0;
let op = '';
let num2 = 0;


// Update display, handles decimal point
function updateDisplay(string) {
  console.log(string)
  if (string == ".") {
    if (!display.textContent.includes(".")) 
      display.textContent += string;
    return
  }

  if (display.textContent === "0") {
    display.textContent = string;
  } else {
    display.textContent += string;
  }
}


// Basic calculator operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


// Calls the calculator function
function operate(op, num1, num2) {
  switch(op) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
  }
}
