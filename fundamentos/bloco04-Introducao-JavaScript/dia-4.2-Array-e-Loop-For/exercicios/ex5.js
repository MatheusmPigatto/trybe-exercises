let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menosOMaior = [];
const reducer = (a, b) => a + b;

for(let number of numbers){
    for(let inner of numbers){
        if(number < inner){
            menosOMaior.push(number);
            break;
        }
    }
}

let compare1 = numbers.reduce(reducer);
let compare2 = menosOMaior.reduce(reducer);

let res = compare1 - compare2

console.log(res)

//oneline

let result = numbers.reduce(function(a, b){ return Math.max(a, b)});

console.log(res)


//Maneira Correta

let maior = numbers[0];

for(let num of numbers){
    if(num > maior){
        maior =  num
    }
}

console.log(maior)