function HEX(number){
    let temp = number;
    let result = "";
    let letter = "ABCDEF";

    while(temp != 0){
        if(temp%16 < 10){
            result = temp%16 + result;
            temp = Math.floor(temp/16);
        }
        else {
            result = letter[(temp%16)-10] + result;
            temp = Math.floor(temp/16);
        }
    }

    return result;
}

module.exports = {
    HEX: HEX
}