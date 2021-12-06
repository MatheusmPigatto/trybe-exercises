function romanos (str) {
    let fil = str.toUpperCase();
    let numeros = fil.split('');
    for(let element = 0; element < numeros.length; element+=1){
        switch (numeros[element]){
            case 'I':
                numeros[element] = 1
                break;
            case 'V':
                numeros[element] = 5
                break;
            case 'X':
                numeros[element] = 10
                break;
            case 'L':
                numeros[element] = 50
                break;
            case 'C':
                numeros[element] = 100
                break;
            case 'D':
                numeros[element] = 500
                break;
            case 'M':
                numeros[element] = 1000
                break;
        }
    }
    if((numeros[numeros.length - 1]) > numeros[0]){
        let sub = (a, b) => a - b
        numeros = numeros.reduce(sub)
        return numeros * -1 
    } else {
        let sum = (a, b) => a + b
        numeros = numeros.reduce(sum)
        return numeros 
    }
}
console.log(romanos('XCM')) 