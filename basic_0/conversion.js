#!/usr/bin/env node

let someNumber = 12345
let someString = String(someNumber);
let someFloat = parseFloat(someString);
console.table({someNumber, someString, someFloat});
console.log(`Type of someNumber: ${typeof someNumber}`);
console.log(`Type of someString: ${typeof someString}`);
console.log(`Type of someFloat: ${typeof someFloat}`);

let value=3
let negValue=-value
console.log(`Value: ${value}, Negated Value: ${negValue}`);
console.log(2+2); // Addition
console.log(5-3);   // Subtraction
console.log(4*3);   // Multiplication
console.log(10/2);  // Division 
console.log(10%3);  // Modulus  
console.log(2**3); // Exponentiation