const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
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
let result = null;


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

const setFirstNumberToResult = () => { 
    firstNumber = result.toFixed(3);
    secondNumber = [];
}

const displayResult = () => {
  if(Number.isInteger(result)){
    display.textContent = result;
  }else{
    display.textContent = Number(result).toFixed(3);
  }   
}

const clearDisplay = () => {
  display.textContent = 0;
  firstNumber = '';
  secondNumber = '';
  operator = null;
  result = null; 
  
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

const calculate = () => {
  if (!secondNumber) { return; }
  const operations = { 
    '+':add, 
    '-':subtract, 
    "x":multiply, 
    '÷':divide, 
  }

  const operation = operations[operator]; 
  result = operation();  

  if (result === Infinity) { 
    alert("Can't divide by zero"); 
    clearDisplay(); 
    return; 
  }

  setFirstNumberToResult(); 
  displayResult();
  
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