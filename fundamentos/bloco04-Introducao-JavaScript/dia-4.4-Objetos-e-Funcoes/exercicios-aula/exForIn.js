let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(key in names){
      console.log('Olá ' + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(k in car){
      console.log(k, car[k])
  }