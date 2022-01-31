const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

// escreva sum abaixo

const sum = (...elements) => {
    return elements.reduce((a, b) => a + b);
}

console.log(sum(20, 10, 50));

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

  console.log(personLikes(alex));
  console.log(personLikes(gunnar));

  ////////////////////////////////////

  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo

  const filterPeople = (arr) => {
      return arr.filter(person => {
          const { bornIn, nationality } = person;
          return bornIn >  2000 && nationality === 'Australian'
      })
  }

  console.log(filterPeople(people));

  //////////////////////////////////////////////

  const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([first, sec, thd]) => [thd, sec, first];

console.log(swap(myList))

////////////////////////////////////////////////

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([type, brand, year]) => {
    return {tipo: type, marca: brand, ano: year}
}

console.log(toObject(palio))

/////////////////////////////////////////////////

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  // escreva shipLength abaixo

  const shipLength = ({ name, length, measurementUnit }) => {
    return `${name} is ${length} ${measurementUnit} long`
  }
  
  console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

  //////////////////////////////////////////////////////////////////////////

  // escreva greet abaixo

  const greet = (name, greeting = 'Hi') => `${greeting} ${name}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

////////////////////////////////////////////////////////////////////////


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const toMonths = ({spring, summer, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter];

  console.log(toMonths(yearSeasons))