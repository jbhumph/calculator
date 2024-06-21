let firstNum, secondNum, operator;
let displayValue = [];
let value;

const display = document.querySelector('.display');

const one = document.querySelector("#one");
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#div');

const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

one.addEventListener('click', () => {
    displayValue.push(1);
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
two.addEventListener('click', () => {
    displayValue.push(2)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
three.addEventListener('click', () => {
    displayValue.push(3)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
four.addEventListener('click', () => {
    displayValue.push(4)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
five.addEventListener('click', () => {
    displayValue.push(5)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
six.addEventListener('click', () => {
    displayValue.push(6)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
seven.addEventListener('click', () => {
    displayValue.push(7)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
eight.addEventListener('click', () => {
    displayValue.push(8)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
nine.addEventListener('click', () => {
    displayValue.push(9)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})
zero.addEventListener('click', () => {
    displayValue.push(0)
    value = parseDisplay(displayValue)
    display.innerText = `${constrain(value)}`;
})

plus.addEventListener('click', () => {
    click("add");
});
minus.addEventListener('click', () => {
    click("subtract");
});
multiply.addEventListener('click', () => {
    click("multiply")
});
divide.addEventListener('click', () => {
    click("divide");
})

equals.addEventListener('click', () => {
    if (firstNum !== undefined && operator !== undefined) {
        if (operator === "divide" && value === 0) {
            display.innerText = "improper denominator";
            return;
        }
        secondNum = value;
        firstNum = operate(firstNum, secondNum, operator)
    }
    displayValue = [];
    display.innerText = `${constrain(firstNum)}`;
    operator = undefined;
})

clear.addEventListener('click', () => {
    displayValue = [];
    display.innerText = `0`;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    value = undefined;
});


function parseDisplay(number) {
    return parseFloat(number.join(""));
}

function constrain(number) {
    number = number.toString();
    number = number.split("");
    return parseDisplay(number.slice(0, 15));
}

function click (operators) {
    if (firstNum === undefined) {
        firstNum = value;
    } else if (operator !== undefined) {
        if (operator === "divide" && value === 0) {
            display.innerText = "improper denominator";
            return;
        }
        secondNum = value;
        firstNum = operate(firstNum, secondNum, operator)
        value = firstNum;
    }
    displayValue = [];
    display.innerText = `${constrain(value)}`;
    operator = operators;
}

function operate(x, y, op) {
    if (op === "add") {
        return add(x, y);
    } else if(op === "subtract") {
        return subtract(x, y);
    } else if(op === "multiply") {
        return multiplies(x, y);
    } else if(op === "divide") {
        return divides(x, y);
    }
}

// math functions

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiplies(x, y) {
    return x * y;
}

function divides(x, y) {
    return x / y;
}