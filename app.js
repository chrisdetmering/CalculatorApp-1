const display = document.getElementById('display');

let firstNumber = '';
let operator = null;
let secondNumber = '';

const addDecimals = (point) => {
  if(operator === null){
    if(firstNumber.indexOf('.') === -1){
     firstNumber += point
    }
  }else{
    if(secondNumber.indexOf('.') === -1){
      secondNumber += point
    } 
  }
}


const calculate = () => {
  const operations = { 
    '+':() => Number(firstNumber) + Number(secondNumber), 
    '-':() => Number(firstNumber) - Number(secondNumber), 
    'x':() => Number(firstNumber) * Number(secondNumber), 
    '÷':() => Number(firstNumber) / Number(secondNumber)
  }

  return operations[operator](); 
}


document.querySelectorAll(".btn-num.digits").forEach(digitButton => { 
  digitButton.addEventListener("click", event => { 
    if (display.textContent.length === 10) { return; }
    const number = event.target.textContent; 

    if (operator === null){
      firstNumber += number;
      display.textContent = firstNumber; 
      return; 
    } 
      secondNumber += number;
      display.textContent = secondNumber;  

  })
})

const btnPoint = document.getElementById('btn-point');
btnPoint.addEventListener('click',() => {addDecimals('.')});


document.querySelectorAll(".btn-num.operators-btn").forEach(operatorButton => { 
  operatorButton.addEventListener("click", event => { 
    const currentOperation = event.target.textContent; 

    if (firstNumber && operator && secondNumber) { 
      const result = calculate(); 
      firstNumber = `${result}`; 
      operator = null; 
      secondNumber = ''; 
      display.textContent = Number.isInteger(result) ? result : Number(result).toFixed(3); 
    }

    operator = currentOperation; 

  }) 
})

const btnEqual = document.getElementById('btn-equal');
btnEqual.addEventListener('click', () => {
  if (firstNumber && operator && secondNumber) { 
    const result = calculate(); 
    firstNumber = `${result}`; 
    operator = null; 
    secondNumber = ''; 
    display.textContent = Number.isInteger(result) ? result : Number(result).toFixed(3); 
  }
});



const clearDisplay = () => {
  display.textContent = 0;
  firstNumber = '';
  secondNumber = '';
  operator = null;
  result = null; 
  
}

const btnCE = document.getElementById('btn-ce');
btnCE.addEventListener('click', clearDisplay);