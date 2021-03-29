// // define a variable

// //variable, functional scope
// var hello = "Hello World";

// //ES6 - block scope
// let hello = int(2);

// //constant, block scope
// const boolean = False;

// const pizza = 8
function sumNumbers(num1, num2){
    // for (let slice = 0; slice < pizza.length; slice++) {
    //     const element = array[index];
    // }
    return num1 + num2
}
console.log(sumNumbers(2,2));

//lexical scoping - variables declared outside or insde of a function are accessible to children of that funciton, as long as the variable is defined outside of the child function

//variable defined inside a function, can only exist inside that function