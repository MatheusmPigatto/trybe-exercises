window.onload = function () {
    addEstado();
    calendarSetup();
}
function addEstado() {
    const append = document.getElementById("estado")
    const estados = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MS',
        'MT',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
    ]
    for(estado of estados){
        const option = document.createElement('option'); 
        option.innerHTML = estado
        append.appendChild(option)
    }
}
function calendarSetup() {
    const button = document.getElementById('send');
    const date = document.getElementById('date');
    button.addEventListener('click', checkCalendar);
    function checkCalendar() {
        const input = date.value
        console.log(input[0] + input[1])
        if()
    }
}
function setupPrevent() {
    const button = document.getElementById('send');
    button.addEventListener('click', preven);
    function preven(event){
        calendarSetup();
       event.preventDefault();
    }
}
setupPrevent()

