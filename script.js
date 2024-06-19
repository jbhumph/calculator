let firstNum, secondNum, operator, value;
let displayValue = [];

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
    displayValue.push(1)
    display.innerText = `${parseDisplay(displayValue)}`;
})
two.addEventListener('click', () => {
    displayValue.push(2)
    display.innerText = `${parseDisplay(displayValue)}`;
})
three.addEventListener('click', () => {
    displayValue.push(3)
    display.innerText = `${parseDisplay(displayValue)}`;
})
four.addEventListener('click', () => {
    displayValue.push(4)
    display.innerText = `${parseDisplay(displayValue)}`;
})
five.addEventListener('click', () => {
    displayValue.push(5)
    display.innerText = `${parseDisplay(displayValue)}`;
})
six.addEventListener('click', () => {
    displayValue.push(6)
    display.innerText = `${parseDisplay(displayValue)}`;
})
seven.addEventListener('click', () => {
    displayValue.push(7)
    display.innerText = `${parseDisplay(displayValue)}`;
})
eight.addEventListener('click', () => {
    displayValue.push(8)
    display.innerText = `${parseDisplay(displayValue)}`;
})
nine.addEventListener('click', () => {
    displayValue.push(9)
    display.innerText = `${parseDisplay(displayValue)}`;
})
zero.addEventListener('click', () => {
    displayValue.push(0)
    display.innerText = `${parseDisplay(displayValue)}`;
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
    click(undefined);

})

clear.addEventListener('click', () => {
    displayValue = [];
    display.innerText = `0`;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
});


function parseDisplay(number) {
    return parseInt(number.join(""));
}

function click (operators) {
    if (firstNum === undefined) {
        firstNum = parseDisplay(displayValue);
    } else {
        secondNum = parseDisplay(displayValue);
        firstNum = operate(firstNum, secondNum, operator)
    }
    displayValue = [];
    display.innerText = `${firstNum}`;
    operator = operators;
}

function operate(x, y, op) {
    if (y === undefined ) {
        return value;
    }
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