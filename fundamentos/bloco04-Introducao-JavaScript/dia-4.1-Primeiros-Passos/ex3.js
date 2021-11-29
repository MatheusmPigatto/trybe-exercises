const numero1 = 1200;
const numero2 = 1100;
const numero3 = 900;

if(numero1 > numero2 && numero1 > numero3){

    console.log(numero1)
    return numero1

} else if(numero2 > numero1 && numero2 > numero3){

    console.log(numero2)
    return numero2

}else if(numero3 > numero1 && numero3 > numero2){

    console.log(numero3)
    return numero3
}