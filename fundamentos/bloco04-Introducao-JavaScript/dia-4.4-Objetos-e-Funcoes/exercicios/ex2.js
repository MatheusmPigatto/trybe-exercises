/* 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console: */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  /* console.log(info) */

  /* 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: */

/*   for(key in info){
      console.log(key)
  } */


  /* 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: */

 /*  for(key in info){
      console.log(info[key])
  }
 */
  /* 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console: */

  let infos = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  for(key in infos && info){
      console.log(info[key], 'e ' + infos[key])
  }