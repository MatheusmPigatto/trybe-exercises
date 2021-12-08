function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Ex 1:
function addDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for(d of dezDaysList) {
        let add = document.getElementById('days')
        let day = document.createElement('li');
        day.innerHTML = d;
        day.className = 'day'
        if(d === 24 || d === 25 || d === 31){
            day.classList.add('holiday')
        }
        if(d === 4 || d === 11 || d === 18 || d === 25){
            day.classList.add('friday')
        }
        add.appendChild(day);
    }
}
addDays();
// Ex 2: 
function createButton (str) {
    let insert = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.id = 'btn-holiday'
    button.innerHTML = str
    insert.appendChild(button);
}
createButton('HOLIDAY');
