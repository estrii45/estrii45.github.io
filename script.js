<<<<<<< HEAD
const calculator = {
    displayValue: '0',
=======
const calculator ={
    displayValue:'0',
>>>>>>> 30fd0dab5f4ab2c4c3c60017fb74b8d34476de5e
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit){
<<<<<<< HEAD
    const { displayValue, waitingForSecondOperand } = calculator;
    if (waitingForSecondOperand === true){

        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false; 
    }else{
    calculator.displayValue = displayValue === '0' ? digit : displayValue+digit;
}
=======
    const{
        displayValue,
        waitingForSecondOperand
    } = calculator;
    if (waitingForSecondOperand === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue ==='0'? digit:displayValue+digit;

    }
>>>>>>> 30fd0dab5f4ab2c4c3c60017fb74b8d34476de5e
}

function inputDecimal(dot){
    if (calculator.waitingForSecondOperand === true){
<<<<<<< HEAD
    calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false;
    return
=======
        calculator.displayValue ='0.'
        calculator.waitingForSecondOperand = false;
        return
>>>>>>> 30fd0dab5f4ab2c4c3c60017fb74b8d34476de5e
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

<<<<<<< HEAD
function handleOperator (nextOperator){
    const {firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
    return;
    }

    if (firstOperand == null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue;
    }else if (operator){
        const result = calculate(firstOperand, inputValue, operator);
=======
function handleOperator(nextOperator){
    const{
        firstOperand,
        displayValue,
        operator,
    }=calculator
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand){
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue;
    }else
    if (operator){
        const result = calculate(firstOperand,inputValue,operator);
>>>>>>> 30fd0dab5f4ab2c4c3c60017fb74b8d34476de5e
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

<<<<<<< HEAD
function calculate(firstOperand, secondOperand, operator){
    if (operator === '+'){
        return firstOperand + secondOperand;

    }else if (operator === '-'){
        return firstOperand - secondOperand;
    }else if (operator === '*'){
        return firstOperand * secondOperand;
    }else if (operator === '/'){
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

function resetCalculator(){
    calculator.displayValue = '0';
=======
function calculate(firstOperand,secondOperand,operator){
    if (operator === '+'){
        return firstOperand + secondOperand;
    }else 
    if (operator === '-'){
        return firstOperand - secondOperand;
    }else 
    if (operator === '*'){
        return firstOperand * secondOperand;
    }else 
    if (operator === '/'){
        return firstOperand / secondOperand;
    }
    return secondOperand; 
}

function resetCalculator(){
    calculator.displayValue ='0';
>>>>>>> 30fd0dab5f4ab2c4c3c60017fb74b8d34476de5e
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

<<<<<<< HEAD
function updateDisplay(){
    const display =  document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')){
        return;
        }
switch (value){
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':

handleOperator (value);
break;

case '.':

inputDecimal (value);
break;

case 'all-clear':
resetCalculator();
break;
default:

if (Number.isInteger(parseFloat(value))){
    inputDigit(value);
}

}

updateDisplay();

});
=======
//sinus
function sin(sinus){
    var radians = (sinus * Math.PI)/180;
    return Math.sin(radians);
}
const sinus = document.querySelector('.sin');

sinus.addEventListener('click',function(){
    const valueScreen = calculator.displayValue;
    console.log(valueScreen);
    const result = sin(valueScreen);

    resetCalculator();
    inputDigit(result.toFixed(2));

    stopPropaganation();
})

//cosinus
function cos(cosinus){
    var radians = (cosinus * Math.PI)/180;
    return Math.cos(radians);
}
const cosinus = document.querySelector('.cos');

cosinus.addEventListener('click',function(){
    const valueScreen = calculator.displayValue;
    console.log(valueScreen);
    const result = cos(valueScreen);

    resetCalculator();
    inputDigit(result.toFixed(2));

    stopPropaganation();
})

//tangan
function tan(tangan){
    var radians = (tangan * Math.PI)/180;
    return Math.tan(radians);
}
const tangan = document.querySelector('.tan');

tangan.addEventListener('click',function(){
    const valueScreen = calculator.displayValue;
    console.log(valueScreen);
    const result = tan(valueScreen);

    resetCalculator();
    inputDigit(result.toFixed(2));

    stopPropaganation();
})

function updateDisplay(){
    const dispaly = document.querySelector('.calculator-screen');
    dispaly.value = calculator.displayValue;
}

updateDisplay();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event =>{
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')){
        return;
    }
    switch (value){
        case'+':
        case'-':
        case'*':
        case'/':
        case'=':
    handleOperator(value);
        break;
        case '.':
    inputDecimal(value);
        break;
        case 'all-clear':
    resetCalculator();
        break;
        default:
    if (Number.isInteger(parseFloat(value))){
        inputDigit(value);
    }
    }
    updateDisplay();
});
>>>>>>> 30fd0dab5f4ab2c4c3c60017fb74b8d34476de5e
