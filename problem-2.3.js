const GCD = require('./problem-2.2.js').GCD;

function LCM(num1, num2){

    lcm = num1*num2/GCD(num1, num2);

    return lcm;
}

module.exports = {
    LCM: LCM
}