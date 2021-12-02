function eTriangulo (angulo1, angulo2, angulo3){

    const soma = angulo1 + angulo2 + angulo3;

    if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        return console.log("Revisar os ângulos inseridos, valor negativo!")
    }else if(soma > 180) {
        console.log("Não é um triângulo " + false)
        return false
    } else {
        return onsole.log("É um triângulo " + true)
    
    }
}

eTriangulo(90, 180, 55)


