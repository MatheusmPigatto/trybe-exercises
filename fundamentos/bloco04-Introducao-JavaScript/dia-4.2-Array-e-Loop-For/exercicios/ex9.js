let meuArr = [];

for(let i = 0; i < 26; i++){
    meuArr.push(i)
}

let dividido = [];

for(let number of meuArr){
    let div = number / 2;
    dividido.push(div)
}

console.log(dividido);