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
createButton('Feriados');
// Ex 3:
let button = document.getElementById('btn-holiday');
button.addEventListener('click', function changeColor () {
    let holiday = document.querySelectorAll('.holiday')
    if(holiday[0].style.backgroundColor == 'green'){
        for(i of holiday){
            i.style.backgroundColor = 'rgb(238,238,238)'
            i.style.color = '#777'
        }
    } else {
        for(i of holiday){
            i.style.backgroundColor = 'green'
            i.style.color = 'red'
        }
    }
})
// Ex 4:
function fridayButton (str) {
    let insert = document.querySelector('.buttons-container');
    let friday = document.createElement('button');
    friday.innerHTML = str;
    friday.id = 'btn-friday';
    insert.appendChild(friday);
}
fridayButton('Sexta-feira');
// Ex 5:
function click () {
    let button = document.querySelector('#btn-friday');
    button.addEventListener('click', function addText () {
        let friday = document.querySelectorAll('.friday');
        let firstFriday = 4
        if(friday[0].innerHTML ==firstFriday) {
            for(day of friday) {
                day.innerHTML = 'SEXTOU!'
            }
        } else if (friday[0].innerHTML !== firstFriday) {
            friday[0].innerHTML = 4;
            friday[1].innerHTML = 11;
            friday[2].innerHTML = 18;
            friday[3].innerHTML = 25;
        }   
    })
}
click();
// Ex 6: resolucao sem event.target
/* function mouseOver () {
    let days = document.querySelectorAll('.day');
    for (let i = 0; i < days.length; i+=1) {
        days[i].addEventListener('mouseover', function () {
            days[i].style.fontSize = '40px'
        });
        days[i].addEventListener('mouseout', function() {
            days[i].style.fontSize = '20px'
        })
    }
}
mouseOver(); */
// Ex 6: resolucao com event.target
function mouseOver (event) {
    event.target.style.fontSize = '60px'
}

function mouseOut (event) {
    event.target.style.fontSize = '20px'
}

let dias = document.querySelectorAll('.day');
for(element of dias) {
    element.addEventListener('mouseover', mouseOver);
    element.addEventListener('mouseout', mouseOut)
}
// Ex 7: 
function tarefa (str) {
    let insert = document.querySelector('.my-tasks');
    console.log(insert)
    let task = document.createElement('span');
    task.className = 'my-tasks'
    task.innerText = str;
    insert.appendChild(task);
}

