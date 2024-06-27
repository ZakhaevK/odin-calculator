// Elements for DOM manipulation
const display = document.getElementById("display");
const clearBut = document.getElementById("ac");
const signBut = document.getElementById("+/-");
const percentBut = document.getElementById("percentage");
const operandButs = document.getElementsByClassName("operand");
const operatorButs = document.getElementsByClassName("operator");
const equalsBut = document.getElementById("equals");

// Variables for calculator operations
let num1 = 0;
let op = '';
let clearOnClick = false;


// Button initialisation
clearBut.addEventListener('click', () => {
  num1 = 0;
  op = '';
  clearOnClick = false;
  display.textContent = 0;
})

for (let button of operandButs) {
  console.log(button.value);
  button.addEventListener("click", () => updateOperand(button.value));
}

for (let button of operatorButs) {
  button.addEventListener("click", () => {
    num1 = parseFloat(display.textContent);
    if (op !== "") {
      display.textContent = operate(op, num1, parseFloat(display.textContent));
      num1 = parseFloat(display.textContent);
    }
    op = button.value;
    clearOnClick = true
  });
}

equalsBut.addEventListener('click', () => {
  if (op != '') {
    num1 = operate(op, num1, parseFloat(display.textContent));
    display.textContent = num1;
    op = '';
    clearOnClick = false;
  } 
})


// Update display, handles decimal point
function updateOperand(string) {
  if (clearOnClick) {
    display.textContent = string;
    clearOnClick = false;
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
  console.log(typeof num1);
  console.log(typeof num2);
  switch(op) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case '/': return divide(num1, num2);
  }
}
