// Creating basic math functions

function add (a,b){
    return a + b ;
};

function subtract(a,b){
    return a - b ;
};

function multiply(a,b){
    return a * b ;
};

function divide(a,b){
    if(b === 0){
        throw "Error"; // You can't divide a number by 0 
    }
    return a / b ;
};

// The next step is to create an operate function that will call the appropriate math function
// based on the operator. 
// The operate function is like the brain of the calculator.


function operate(operator,a,b){
    // a,b in its original form represents strings so we have to convert them to numbers

    a = Number(a);
    b = Number(b);

    switch(operator){

        case "+" :
            return add(a,b); // addition function called

        case "-" : 
            return subtract(a,b); // subraction function called
        case "/" :
            return divide(a,b); // division function called
        case "*" :
            return multiply(a,b); // multiplication function called
        
        default :
            return null; // if no operator is passed

    }
};

// The next step is to add event listeners to buttons so that when clicked. 
// it is displayed on the screen. 


const calculatorScreen = document.querySelector('.display'); // display is selected
const numbers = document.querySelectorAll('.operand'); // all numbers on the calculator is being selected

// The querySelectorAll returns a nodelist and for that reason we have to atatch the event
// listeners to each of the operand in the nodelist.
numbers.forEach(button=>{
    button.addEventListener('click',()=>{
        calculatorScreen.textContent += numbers.textContent
    })
})

