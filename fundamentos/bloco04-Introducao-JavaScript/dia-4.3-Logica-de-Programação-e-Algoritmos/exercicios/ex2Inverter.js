/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'tryber';

function inverter(str){
    
    let inverted = [];

    for(let i = str.length; i >= 0; i -=1){
        inverted.push(str[i])
    }

    return console.log(inverted.join(''))
}

inverter(word)