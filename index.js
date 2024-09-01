function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by zero';
  }
  return num1 / num2;
}

let num1 = '';
let num2 = '';
let operator = null;

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      return 'Invalid operator';
    }
  }


function updateScreen(content) {
  const screen = document.querySelector("#screen");
  screen.textContent = content;
}

function handleNumberClick(number) {
  if (operator === null) {
    num1 += number;
    updateScreen(num1);
  }
  else {
    num2 += number;
    updateScreen(num2);
  }
}

function handleOperatorClick(op) {
  if (num1 !== '') {
    operator = op;
  }
  else {
    updateScreen('Invalid operation');
  }
}

function handleEqualsClick() {
  if (num1 !== '' && num2 !== '' && operator !== null) {
    const result = operate(parseInt(num1), parseInt(num2), operator);
    updateScreen(result);
    num1 = result.toString();  // Store the result as the next num1
    num2 = '';
    operator = null;
  }
  else {
    updateScreen('Error');
  }
}

function handleClearClick() {
  num1 = '';
  num2 = '';
  operator = null;
  updateScreen('');
}


function calculator() {
  const clearButton = document.querySelector('#clear');
  const numberButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const equalsButton = document.querySelector('#equals');

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleNumberClick(button.textContent);
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleOperatorClick(button.textContent);
    });
  });

  equalsButton.addEventListener('click', handleEqualsClick);

  clearButton.addEventListener('click', handleClearClick);


}

calculator();




