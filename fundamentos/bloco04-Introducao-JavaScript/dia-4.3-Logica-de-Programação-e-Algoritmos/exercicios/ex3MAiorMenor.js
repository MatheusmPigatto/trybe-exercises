/* Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
 */

/* let array = ['java', 'javascript', 'python', 'html', 'css'];

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = [];

 for (let index = 1; index < numbers.length; index += 1) {
     console.log()
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if(numbers[index] < numbers[secondIndex]){
            let storeValue = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = storeValue
        }
    }
  } */


  
 let palavras = ['java', 'javascript', 'python', 'html', 'css'];
  

 function maiorEMenorPalavra (array) {  

     for(let i = 1; i < array.length; i += 1){

        let current = array[i]

        for(let j = 0; j < i; j += 1){

            let previous = array[j]

            if(current.length < previous.length){

                let storeValue = array[i];
                array[i] = array[j]
                array[j] = storeValue


            }
        }
    }

    return console.log('Maior palavra do array = ' + array[array.length -1] + ' Menor palavra do array = ' + array[0])

}

maiorEMenorPalavra(palavras)