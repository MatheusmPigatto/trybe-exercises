let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = [];

//oneliner console.log(numbers.sort((a, b) => a - b))

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  } */

/* for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
        let pos = numbers[secondIndex]
        numbers[secondIndex] = numbers[index]
        numbers[index] = pos
    }
    }
    } */
    
/* for(let i = 0; i < numbers.length; i++){

    let next = i + 1
    let multiplicado = numbers[i] * numbers[next];

    if(isNaN(multiplicado) === true){

        let por2 = numbers[numbers.length - 1] * 2
        arr.push(por2)

    } else {

        arr.push(multiplicado)
    }   
}  */

/* for(let i = 0; i < numbers.length; i++){
    
    let next = i + 1;
    let last  = numbers.length - 1

    if(i === last){

        let por2 = numbers[last] * 2
        arr.push(por2)

    } else {

        let mult = numbers[i] * numbers[next];
        arr.push(mult)

    }
} */

console.log(arr)
console.log(numbers)