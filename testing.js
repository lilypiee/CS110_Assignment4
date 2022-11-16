const factorial = require('./problem-2.1.js').factorial;
const GCD = require('./problem-2.2.js').GCD;
const LCM = require('./problem-2.3.js').LCM;
const hex = require('./problem-2.4').HEX;

const result = factorial(12);
console.log("factorial of 12: " + result);

let num1 = 36;
let num2 = 12;
console.log("gcd of " + num1 + " and " + num2 + " is " + GCD(num1, num2));
console.log("lcm of " + num1 + " and " + num2 + " is " + LCM(num1, num2));

let result1 = hex(26);
console.log("hexadecimal of 26: " + result1);