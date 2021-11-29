const angulo1 = 30;
const angulo2 = 405; 
const angulo3 = 26; 
const soma = angulo1 + angulo2 + angulo3;

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("Revisar os ângulos inseridos, valor negativo!")
}else if(soma > 180) {
    console.log("Não é um triângulo " + false)
    return false
} else {
    console.log("É um triângulo " + true)

}