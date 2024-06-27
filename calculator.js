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
let num2 = 0;
let op = '';
let clearOnClick = false;


// Button initialisation
clearBut.addEventListener('click', () => clearAll())

sign.addEventListener('click', () => {
  display.textContent = `-${display.textContent}`})

percentBut.addEventListener('click', () => {
  display.textContent = display.textContent / 100})

for (let button of operandButs) {
  console.log(button.value);
  button.addEventListener("click", () => updateOperand(button.value));
}

for (let button of operatorButs) {
  button.addEventListener("click", () => {
    if (op !== "") {
      num2 = parseFloat(display.textContent);
      num1 = operate(op, num1, num2);
      display.textContent = num1;
      num2 = 0;
    } else {
      num1 = parseFloat(display.textContent);
    }
    op = button.value;
    clearOnClick = true
  });
}

equalsBut.addEventListener('click', () => {
  if (op != '') {
    num2 = parseFloat(display.textContent)
    display.textContent = operate(op, num1, num2)
    num1 = parseFloat(display.textContent);
    op = '';
    clearOnClick = false;
  } 
})

// Limits the display text content to stop display breaking
// const observer = new MutationObserver(() => {
//   if (display.textContent.length > 9) {
//     display.textContent = display.textContent.substring(0, 10);
//   }
// });
// observer.observe(display, { childList: true, characterData: true, subtree: true });


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

function clearAll() {
  num1 = 0;
  num2 = 0;
  op = '';
  clearOnClick = false;
  display.textContent = 0;
}


// Basic calculator operations
function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {
  if (a == 0 && b == 0) return "XD";
  return a / b;
}


// Calls the calculator function
function operate(op, num1, num2) {
  let result;
  switch(op) {
    case '+': result = add(num1, num2); break;
    case '-': result = subtract(num1, num2); break;
    case '*': result = multiply(num1, num2); break;
    case '/': result = divide(num1, num2); break;
  }
  if (typeof result === 'number') {
    result = result.toString().substring(0, 10);
  }
  return result;
}
