function maiorNumero (numero1, numero2, numero3){

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
}

maiorNumero(900, 850, 340)