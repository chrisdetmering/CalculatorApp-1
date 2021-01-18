const btnPoint = document.getElementById('btn-point');
const btnEqual = document.getElementById('btn-equal');
const btnMul = document.getElementById('btn-mul');
const btnDiv = document.getElementById('btn-div');
const btnPlus = document.getElementById('btn-plus');
const btnMin = document.getElementById('btn-min');
const btnCE = document.getElementById('btn-ce');
const display = document.getElementById('display');

let firstNumber = '';
let operator = null;
let secondNumber = '';


const setFirstNumber = (number) => {
  if(firstNumber.length < 10){
    firstNumber += number;
  }
}

const setSecondNumber = (number) => {
  if(secondNumber.length < 10){
     secondNumber += number;
  }
}

const addDecimal = (decimal) => {
  if (!firstNumber.includes(".") && !secondNumber){
      firstNumber += decimal;
      display.textContent = firstNumber; 
      return; 
  }

  if (!secondNumber.includes(".")){
      secondNumber += decimal; 
      display.textContent = secondNumber; 
  } 
}


const clearDisplay = () => {
  display.textContent = 0;
  firstNumber = '';
  secondNumber = '';
  operator = null;
  
}

const add = () => { 
  return Number(firstNumber) + Number(secondNumber);  
}
const subtract = () => { 
  return Number(firstNumber) - Number(secondNumber); 
}

const multiply = () => { 
  return Number(firstNumber) *  Number(secondNumber); 
}

const divide = () => { 
  return Number(firstNumber) / Number(secondNumber) 
}

const setFirstNumberToResult = (result) => { 
  if (Number.isInteger(result)) { 
    firstNumber = `${result}`;
  } else { 
    firstNumber = `${result.toFixed(3)}`; 
  }
  operator = null;
  secondNumber = '';
}



const calculate = () => {
  if (!secondNumber) { return; }
  const operations = { 
    '+':add, 
    '-':subtract, 
    "x":multiply, 
    '÷':divide, 
  }

  const operation = operations[operator]; 
  const result = operation();  

  if (result === Infinity) { 
    alert("Can't divide by zero"); 
    clearDisplay(); 
    return; 
  }

  setFirstNumberToResult(result); 
  display.textContent = firstNumber; 
}

document.querySelectorAll(".btn-num.digit").forEach(digitBtn => { 
  digitBtn.addEventListener("click", event => { 
    const number = event.target.textContent; 
    if (!operator){
      setFirstNumber(number);
      display.textContent = firstNumber; 
    } else {
      setSecondNumber(number);
      display.textContent = secondNumber;  
    }

    console.log('firstNumber:' + firstNumber);
    console.log('operator:'+ operator)
    console.log('secondNumber:' + secondNumber); 

  })
})


document.querySelectorAll(".btn-num.operators-btn").forEach(operatorBtn => { 
  operatorBtn.addEventListener("click", e => { 
    operator = e.target.textContent;
    calculate(); 
  }) 
})


btnEqual.addEventListener('click', () => {calculate()});
btnPoint.addEventListener('click',() => {addDecimal('.')});

btnCE.addEventListener('click', clearDisplay);