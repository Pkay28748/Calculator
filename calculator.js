// Basic Math Functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        throw "Error"; // Cannot divide by zero
    }
    return a / b;
};

// Operate Function
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
};

// Variables
const calculatorScreen = document.querySelector('.display');
const numbers = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

// Number Buttons (Operands)
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (calculatorScreen.textContent === "0" || shouldResetScreen) {
            calculatorScreen.textContent = button.textContent;
            shouldResetScreen = false;
        } else {
            calculatorScreen.textContent += button.textContent;
        }
    });
});

// Operator Buttons
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (currentOperator !== null) calculate();  // Optional chaining of operations
        firstOperand = calculatorScreen.textContent;
        currentOperator = operator.textContent;
        shouldResetScreen = true;  // Prepare screen for second operand
    });
});

// Calculate Function
function calculate() {
    if (currentOperator === null || shouldResetScreen) return;
    secondOperand = calculatorScreen.textContent;
    calculatorScreen.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;  // Reset operator
}
