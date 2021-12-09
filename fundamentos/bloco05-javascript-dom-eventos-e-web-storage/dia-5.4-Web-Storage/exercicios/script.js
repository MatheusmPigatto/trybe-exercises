let backOptions = document.querySelector('#backSelect');
let textOptions = document.querySelector('#textSelect');
let fontSizeOptions = document.querySelector('#fontSizeSelect');
let spacingOptions = document.querySelector('#spaceSelect');
let fontStyleOptions = document.querySelector('#fontSelect')

backOptions.addEventListener('click', changeBackground);
textOptions.addEventListener('click', changeTextColor);
fontSizeOptions.addEventListener('click', changeFontSize);
spacingOptions.addEventListener('click', changeLineSpacing);
fontStyleOptions.addEventListener('click', changeFontStyle)

function changeBackground (event) {
    let back = document.querySelector('body')
    let select = event.target
    if(select.value === 'black'){
        back.style.backgroundColor = 'black'
    } else if (select.value === 'white') {
        back.style.backgroundColor = 'white'
    } else if (select.value === 'beige') {
        back.style.backgroundColor = 'green'
    } else if (select.value === 'grey') {
        back.style.backgroundColor = 'grey'
    }
}

function changeTextColor (event) {
    let text = document.querySelector('.text')
    let select = event.target
    if(select.value === 'black'){
        text.style.color = 'black'
    } else if (select.value === 'white') {
        text.style.color = 'white'
    } else if (select.value === 'yellow') {
        text.style.color = 'yellow'
    } else if (select.value === 'grey') {
        text.style.color = 'grey'
    }
}

function changeFontSize(event) {
    let text = document.querySelector('.text')
    let select = event.target
    if(select.value === '20px'){
        text.style.fontSize = '20px'
    } else if (select.value === '40px') {
        text.style.fontSize = '40px'
    } else if (select.value === '60px') {
        text.style.fontSize = '60px'
    } else if (select.value === '80px') {
        text.style.fontSize = '80px'
    }
}

function changeLineSpacing(event) {
    let text = document.querySelector('.text')
    let select = event.target
    if(select.value === '80%'){
        text.style.lineHeight = '80%'
    } else if (select.value === '100%') {
        text.style.lineHeight = '100%'
    } else if (select.value === '160%') {
        text.style.lineHeight = '160%'
    } else if (select.value === '200%') {
        text.style.lineHeight = '200%'
    } 
}

function changeFontStyle(event) {
    let text = document.querySelector('.text')
    let select = event.target
    if(select.value === 'Verdana'){
        text.style.fontFamily = 'Verdana'
    } else if (select.value === 'Arial') {
        text.style.fontFamily = 'Arial'
    } else if (select.value === 'Times') {
        text.style.fontFamily = 'Times New Roman'
    } else if (select.value === 'monospace') {
        text.style.fontFamily = 'monospace'
    }  
}


