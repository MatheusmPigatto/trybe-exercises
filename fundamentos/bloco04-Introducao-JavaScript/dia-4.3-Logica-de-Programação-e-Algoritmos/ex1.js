/* let n = 40;

for(let i = 0; i <= n; i += 1){
    console.log('*'.repeat(null))
}

 */

let n = 2;
let asterisco = '*';

for(let i = 0;  i < n; i+=1){
    if(asterisco.length < n){
        asterisco = asterisco + asterisco
    }
}


for(let i = 0;  i < n; i+=1){
    console.log(asterisco)
}