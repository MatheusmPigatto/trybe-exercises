/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

function mairoNumeroPrimo (number) {
    for(let i = number; i > 0; i -= 1){
        if(ePrimo(i) === true){
            console.log(i);
            break;
        }
    }

}

function ePrimo (number) {
    for(let i =  2; i <  number; i+=1){
        if(number % i === 0){
            return false
        };
    }
    return true

}

mairoNumeroPrimo(900)

let a = 5;
let b = 2;
console.log(a);
a += b;
console.log(a);
b = b - a;
console.log(b);
