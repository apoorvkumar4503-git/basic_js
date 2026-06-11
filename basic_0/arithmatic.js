
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.table({sum, difference, product, quotient});