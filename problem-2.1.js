function factorial(number){
    
    let factorial = 1;

    for(let count = 2; count <= number; count++){
        factorial *= count;
    }
    return factorial;
}

module.exports = {
    factorial: factorial
}