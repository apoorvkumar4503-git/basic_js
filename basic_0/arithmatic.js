
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (inputA) => {
  rl.question('Enter second number: ', (inputB) => {
    const a = Number(inputA);
    const b = Number(inputB);

    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;

    console.table({sum, difference, product, quotient});
    rl.close();
  });
});