'use strict'

const number = +prompt('Ведите число');
let isSimple = true;

if(number === 1) {
    console.log(false)
} else if(number > 1) {


    for (let i = 2; i < number; i++){
        if(number % i === 0){
            isSimple = false;
            break;
        }
    }
    console.log(isSimple)

}


