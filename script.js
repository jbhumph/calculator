let firstNum, secondNum, operator;
let displayValue = [];
let value;

const display = document.querySelector('.display');
const printer = document.querySelector('.printer');

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

const decimal = document.querySelector('#decimal');
const negative = document.querySelector('#negative');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

let printArr = ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", ]

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
    click("+");
});
minus.addEventListener('click', () => {
    click("-");
});
multiply.addEventListener('click', () => {
    click("*")
});
divide.addEventListener('click', () => {
    click("/");
})

equals.addEventListener('click', () => {
    if (firstNum !== undefined && operator !== undefined) {
        if (operator === "divide" && value === 0) {
            display.innerText = "improper denominator";
            return;
        }
        secondNum = value;
        firstNum = operate(firstNum, secondNum, operator)
        drawPrinter(secondNum, firstNum, operator);
        drawPrinter(0, firstNum, "=")
    }
    display.innerText = `${constrain(firstNum)}`;
    operator = undefined;
    value = firstNum;
    let a = value.toString();
    displayValue = a.split("");
    firstNum = undefined;
})

clear.addEventListener('click', () => {
    displayValue = [];
    display.innerText = `0`;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    value = undefined;
    drawPrinter(0, 0, "clear");
});
negative.addEventListener('click', () => {
    if (value !== undefined) {
        value *= -1;
        display.innerText = `${constrain(value)}`;
        let a = value.toString();
        displayValue = a.split('');
    }
    drawPrinter(0, value, "neg");
})
decimal.addEventListener('click', () => {
    displayValue.push('.');
    value = parseDisplay(displayValue);
    display.innerText = `${constrain(value)}`;
})


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
        drawPrinter(firstNum, 0, "none")
    } else if (operator !== undefined) {
        if (operator === "divide" && value === 0) {
            display.innerText = "improper denominator";
            return;
        }
        secondNum = value;
        firstNum = operate(firstNum, secondNum, operator);
        drawPrinter(secondNum, firstNum, operator);
        value = firstNum;
    }
    displayValue = [];
    display.innerText = `${constrain(value)}`;
    operator = operators;
}

function operate(x, y, op) {
    if (op === "+") {
        return add(x, y);
    } else if(op === "-") {
        return subtract(x, y);
    } else if(op === "*") {
        return multiplies(x, y);
    } else if(op === "/") {
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

function drawPrinter(x, y, op) {
    const newLine = document.createElement("div");
    let newArr = [...printArr];
    if (op === "clear") {
        newLine.innerText = "------------clear------------";
        printer.appendChild(newLine);
        return;
    }

    x = String(x).substring(0, 7);
    y = String(y).substring(0, 7);
    for (let i = 0; i < String(x).length; i++) {
        newArr[i + 3] = x[i];
    }

    if (op === "test") {
        newLine.innerHTML = concatenate(newArr);
    } else if (op === "none") {
        newArr[18] = "=";
        for (let i = 0; i < String(x).length; i++) {
            newArr[i + 20] = x[i];
        }
        newLine.innerHTML = concatenate(newArr);
    } else if (op === "+" || op === "-" || op === "*" || op === "/") {
        newArr[1] = op;
        newArr[18] = "=";
        for (let i = 0; i < String(y).length; i++) {
            newArr[i + 20] = y[i];
        }
        newLine.innerHTML = concatenate(newArr);
    } else if (op === "=") {
        newArr[1] = "=";
        newArr[3] = "&nbsp;"
        newArr[18] = "=";
        for (let i = 0; i < String(y).length; i++) {
            newArr[i + 20] = y[i];
        }
        let newLine_b = document.createElement("div");
        newLine_b.innerHTML = "&nbsp;";
        printer.appendChild(newLine_b);
        newLine.innerHTML = concatenate(newArr);
    } else if (op === "neg") {
        newArr[1] = "n"
        newArr[2] = "e"
        newArr[3] = "g"
        newArr[18] = "=";
        for (let i = 0; i < String(y).length; i++) {
            newArr[i + 20] = y[i];
        }
        newLine.innerHTML = concatenate(newArr);
    }
    printer.appendChild(newLine);
}

function concatenate(string) {
    // concatenates string in a way that concat() or flat() wouldn't
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        newString += string[i];
    }
    return newString;
}
