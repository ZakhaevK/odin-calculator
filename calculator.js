// Elements for DOM manipulation
const display = document.getElementById("display");
const clearBut = document.getElementById("ac");
const signBut = document.getElementById("+/-");
const percentBut = document.getElementById("percentage");
const operandButs = document.getElementsByClassName("operand");
const operatorButs = document.getElementsByClassName("operator");


// Button initialisation
for (let button of operandButs) {
  console.log(button.value);
  button.addEventListener("click", () => updateOperand(button.value));
}

for (let button of operatorButs) {
  console.log(button.value);
  button.addEventListener("click", () => {
    if(opClicked) {
      display.textContent = operate(op, num1, display.textContent);
      num1 = display.textContent;
    } else {
      opClicked = true
    }
    op = button.value;
  });
}

// Variables for calculator operations
let num1 = 0;
let op = '';
let num2 = 0;
let opClicked = false;


// Update display, handles decimal point
function updateOperand(string) {
  if (opClicked) {
    display.textContent = string;
    opClicked = false;
    return
  }

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
function add(a, b) {return a + b;}

function subtract(a, b) {return a - b;}

function multiply(a, b) {return a * b;}

function divide(a, b) {return a / b;}


// Calls the calculator function
function operate(op, num1, num2) {
  switch(op) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
  }
}
