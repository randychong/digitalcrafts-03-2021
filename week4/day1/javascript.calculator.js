//add function
//subtract function
//multiply function
//divide function

// function add(num1, num2){
//     return console.log(num1 + num2)
// }

// add (1, 2)

// function subtract(num1, num2){
//     return console.log(num1 - num2)
// }

// subtract(1, 2)

// function multiply(num1, num2){
//     return console.log(num1 * num2)
// }

// multiply (1, 2)

// function divide(num1, num2){
//     return console.log(num1 / num2)
// }

// divide (1, 2)

operand = "multiply", "divide", "subtract", "add";
function calculate(operand, num1, num2) {
    if (operand == "multiply") {
        console.log(num1 * num2)
    }

    else if (operand == "divide") {
        console.log(num1 / num2)
    }

    else if (operand == "subtract") {
        console.log(num1 - num2)
    }

    else if (operand == "add") {
        console.log(num1 + num2)
    }
}
;

calculate("multiply", 10, 5)
calculate("divide", 10, 5)
calculate("subtract", 10, 5)
calculate("add", 10, 5)