let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function media(numbers){

    const reducer = (prevValue, currValue) => prevValue + currValue;


    const sum = numbers.reduce(reducer);

    const divisor = numbers.length

    const result =  sum / divisor
    
    if(result > 20){
        return console.log("valor maior que 20")
    } else {
        return console.log("Valor menor ou igual a 20")
    }
}
media(numbers)