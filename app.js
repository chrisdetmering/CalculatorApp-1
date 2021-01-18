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
  secondNumber = '';
}

const calculate = () => {
 
  const operations = { 
    '+':add, 
    '-':subtract, 
    "x":multiply, 
    '÷':divide, 
  }

  const operation = operations[operator]; 
  const result = operation();  

  return result; 
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
  })
})


document.querySelectorAll(".btn-num.operators-btn").forEach(operatorBtn => { 
  operatorBtn.addEventListener("click", e => { 
    if (!firstNumber) {return; }


    if (operator && secondNumber) { 
      const result = calculate(); 
      setFirstNumberToResult(result); 
      display.textContent = firstNumber; 
      operator = e.target.textContent;
      return; 
    }
    
    operator = e.target.textContent;
  }) 
})


const btnPoint = document.getElementById('btn-point');
const btnEqual = document.getElementById('btn-equal');
const btnCE = document.getElementById('btn-ce');

btnEqual.addEventListener('click', () => {
  if (firstNumber && operator && secondNumber) { 
    const result = calculate(); 
    setFirstNumberToResult(result); 
    display.textContent = firstNumber; 
    operator = null; 
  }
});

btnPoint.addEventListener('click',() => {addDecimal('.')});
btnCE.addEventListener('click', clearDisplay);