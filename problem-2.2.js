function GCD(number1, number2){

    function countGCD(number1, number2){
        let result = 0;
        while((number2%number1) !== 0){
            result = number2%number1;
            number2 = number1;
            number1 = result;
        }
        return result;
    }

    if(number1 === number2){
        result = number1;
    }
    else if(number1 > number2){
        if(number1%number2 === 0){
            result = number2;
        }
        else{
            result = countGCD(number2, number1);
        }
    }
    else if(number1 < number2){
        if(number2%number1 === 0){
            result = number1;
        }
        else {
            result = countGCD(number1, number2);
        }
    }
    return result;
}


module.exports = {
    GCD: GCD
}