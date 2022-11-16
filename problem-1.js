/*
     +
    ++
   +++
  ++++
 +++++
++++++

*/

function plus_space(space, plus){
    let str = "";
    for(let i = 0; i < space; i++){
        str += " ";
    }
    for(let i = 0; i < plus; i++){
        str += "+";
    }
    return str;
}

const line = 6;

let space = line - 1;
let plus = 1;

while(space >= 0){
    console.log(plus_space(space, plus));
    space--;
    plus++;
}
