const calculator = {
  displayValue: '0',
  firstOperand: null,
  operator: null,
  waitingForSecondOperand: false,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen')
  display.value = calculator.displayValue
}

updateDisplay()

const keys = document.querySelector('.calculator-keys')

keys.addEventListener('click', e => {
  const { target } = e

  if (!target.matches('button')) {
    return
  }

  switch (target.value) {
    case '+':
    case '-':
    case '/':
    case '*':
    case '=':
      handleOperator(target.value)
      break;
    case '.':
      inputDecimal(target.value)
      break;
    case 'all-clear':
      resetCalculator();
      break;
    default:
      if (Number.isInteger(parseFloat(target.value))) {
        inputDigit(target.value)
      }
      break;
  }
  updateDisplay()

})

function inputDigit(digit) {
  const { displayValue } = calculator;

  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = digit
    calculator.waitingForSecondOperand = false
  }
  else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit
  }
  console.log(calculator);
}

function inputDecimal(decimal) {

  if (calculator.waitingForSecondOperand) {
    calculator.displayValue = '0.'
    calculator.waitingForSecondOperand = false
    return
  }

  if (!calculator.displayValue.includes(decimal)) {
    calculator.displayValue += decimal
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator

  const inputValue = parseFloat(displayValue)

  if (calculator.waitingForSecondOperand && operator) {
    calculator.operator = nextOperator
    console.log(calculator)
    return
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator)

    calculator.displayValue = parseFloat(result.toFixed(7))
    calculator.firstOperand = result
  }



  calculator.waitingForSecondOperand = true
  calculator.operator = nextOperator
  console.log(calculator);

}

function calculate(firstOperand, secondOperand, operator) {


  if (operator === '+') {
    return firstOperand + secondOperand
  } else if (operator === '-') {
    return firstOperand - secondOperand
  } else if (operator === '*') {
    return firstOperand * secondOperand
  } else if (operator === '/') {
    return firstOperand / secondOperand
  }

  return secondOperand

}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}
