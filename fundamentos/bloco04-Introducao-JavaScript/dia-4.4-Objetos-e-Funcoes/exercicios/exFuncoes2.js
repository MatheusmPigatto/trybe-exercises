/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */

let arra = [2, 3, 6, 7, 10, 1];

function biggest (arr) {
    arr = arr.sort((a, b) => a > b);
    return arr[arr.length -1]
}
