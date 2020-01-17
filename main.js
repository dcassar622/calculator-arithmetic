let prevNum = '';
let currNum = '';
let currOperator = '';
let displayCurr = document.getElementById('display-curr');
let displayPrev = document.getElementById('display-prev');

const numContainer = document.getElementById('numbtn-container');
numContainer.addEventListener('click', e => {
    addToCurrNum(e.target.innerHTML);
});

const operatorContainer = document.getElementById('opbtn-container');
operatorContainer.addEventListener('click', e => operatorClicked(e));    

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearAll);

const backspaceBtn = document.getElementById('backspace-btn');
backspaceBtn.addEventListener('click', backspace);

const equalsBtn = document.getElementById('equals-btn');
equalsBtn.addEventListener('click', equals)

operate = (num1S, num2S, operator) => {
    let result;
    let num1 = parseInt(num1S);
    let num2 = parseInt(num2S);

    if (operator === '+') { 
        result = add(num1, num2); 
    }
    else if (operator === '-') { 
        result = subtract(num1, num2); 
    }
    else if (operator === '/') { 
        result = divide(num1, num2); 
    }
    else if (operator === '*') { 
        result = multiply(num1, num2); 
    }
    else {
        alert ('Invalid Operator');
    }
    return result
}

add = (num1, num2) => num1 + num2;
subtract = (num1, num2) => num1 - num2;
divide = (num1, num2) => num1 / num2;
multiply = (num1, num2) => num1 * num2;

function addToCurrNum(number) {
    currNum = `${currNum}${number}`;
    displayCurrNum();
}

function operatorClicked(event) {
    if (currOperator === '') {
        prevNum = currNum;
        currNum = '';
        displayCurr.textContent = '';

        let operator = event.target.innerHTML;
        currOperator = operator;
        displayPrevNum(operator);
        displayCurrNum();
    }
    else {
        equals();
        prevNum = currNum;
        currNum = '';
        displayPrevNum(operator);
        displayCurrNum();
    }
}

function clearAll() {
    currNum='';
    prevNum=' ';
    currOperator = '';
    displayCurr.textContent = '0';
    displayPrev.textContent = '';
}

function backspace() {
    let a = currNum.split('');
    if (a.length>1) {
        a[a.length-1] = '';
        currNum = a.join('');
        displayCurrNum();
    }
    else {
        currNum= '0';
        displayCurrNum();
        currNum=''
    }
}

function equals() {
    displayPrev.textContent = '';
    if (currOperator !== '') { 
        currNum = operate (prevNum, currNum, currOperator);
    }
    displayCurrNum();
    currOperator = '';
}

function displayCurrNum() {
    displayCurr.textContent = '';
    displayCurr.textContent += currNum;
}

function displayPrevNum(operator) {
    displayPrev.textContent += (prevNum + ' ' + operator);
}

