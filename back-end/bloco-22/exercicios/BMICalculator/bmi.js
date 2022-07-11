const rl = require('readline-sync');

const weight = rl.questionInt('Qual o seu peso? ');
const height = rl.questionFloat('Qual a sua altura? ')

const BMIcalc = () => (weight / height ** 2).toFixed(2);

console.log(BMIcalc());
