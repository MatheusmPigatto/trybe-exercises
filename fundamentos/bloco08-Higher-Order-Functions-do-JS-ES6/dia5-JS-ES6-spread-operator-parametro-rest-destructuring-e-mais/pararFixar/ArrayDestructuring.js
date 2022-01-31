const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

/* saudacoes[1](saudacoes[0]); // Olá */

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ola, saudacaoFunc] = saudacoes;

console.log(ola);
saudacaoFunc('Karalho')
//////////////////////////////////////////////

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

/* console.log(comida, animal, bebida); // arroz gato água */

const [ ani ] = comida;
const [ beb] = animal;
const [ com ] = bebida;

console.log(com, ani, beb)

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//////////////////////////////////////////////////////////////

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [ impar, impar2, impar3, par1, par2, par3, par4] = numerosPares

console.log(par1, par2, par3, par4); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo