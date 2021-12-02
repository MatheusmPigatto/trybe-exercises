let n  = 5;
let asterisco =  '*'
let space = '';

/* for(let i = 0; i < n; i += 1){
    if(asterisco.length < 5){
        let space = ' ';
        let sum  = space.repeat(n - asterisco.length)
        console.log(sum + asterisco)
        asterisco = asterisco + '*'
    }
} */

for(let i = 0; i < n ; i += 1){
    if(asterisco.length < 5){

        let sum  = n - asterisco.length
        space = ' ' 

        if(sum > 0){
            for(let j = 0; j < sum - 1; j += 1){
                space += ' '
            }
        }

        console.log(space + asterisco)
    } else {
        console.log(asterisco)
    }
    asterisco = asterisco + '*'

}