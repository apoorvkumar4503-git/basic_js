#!/usr/bin/env node

let someNumber = 12345
let someString = String(someNumber);
let someFloat = parseFloat(someString);
console.table({someNumber, someString, someFloat});