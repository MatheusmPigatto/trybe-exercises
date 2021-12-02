/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function isPalindromo (str) {
    let reversed = str.split('');
    reversed = reversed.reverse();
    if(reversed.join('') === str){
        return true
    } else {
        return false
    }
}

console.log(isPalindromo('omissíssimo'))