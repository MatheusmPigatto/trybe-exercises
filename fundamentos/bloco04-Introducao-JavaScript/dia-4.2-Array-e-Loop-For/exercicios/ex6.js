let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberOdds = [];

for(let number of numbers){
    if(number % 2 !== 0){

        numberOdds.push(number);

    }
}

if(numberOdds.length === 0){
    console.log("Nenhum numero impar encontrado")
}

console.log(numberOdds)