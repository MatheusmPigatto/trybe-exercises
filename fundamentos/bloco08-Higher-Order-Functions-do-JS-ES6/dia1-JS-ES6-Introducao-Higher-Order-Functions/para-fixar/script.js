// Ao chamar a função doingThings:
const wakeup = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (action) => console.log(action()); 
doingThings(wakeup);
doingThings(breakfast);
doingThings(sleep);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!