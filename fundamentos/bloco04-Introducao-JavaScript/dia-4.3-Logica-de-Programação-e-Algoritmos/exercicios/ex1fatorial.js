let fatorial = 10;
let resultado = [];
let reducer = (a, b) => a * b

for(let i = 1; i <= fatorial; i += 1){

    resultado.push(i);

    if(resultado.length === fatorial){
        console.log(resultado.reduce(reducer))
    }

}
