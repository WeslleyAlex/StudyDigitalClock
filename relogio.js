const horas = document.querySelector('.hh');
const minutos = document.querySelector('.mm');
const segundos = document.querySelector('.ss');
const dia = document.querySelector('.day');
const mes = document.querySelector('.month');
const ano = document.querySelector('.year');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let dd = dateToday.getDate();
    let ms = dateToday.getMonth();
    if(ms == 0){ms = "JAN"}
    if(ms == 1){ms = "FEV"}
    if(ms == 2){ms = "MAR"}
    if(ms == 3){ms = "ABR"}
    if(ms == 4){ms = "MAI"}
    if(ms == 5){ms = "JUN"}
    if(ms == 6){ms = "JUL"}
    if(ms == 7){ms = "AGO"}
    if(ms == 8){ms = "SET"}
    if(ms == 9){ms = "OUT"}
    if(ms == 10){ms = "NOV"}
    if(ms == 11){ms = "DEZ"}
    let an = dateToday.getFullYear(); 

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        mm = "0" + mm;
    }
    if (sec < 10) {
        ss = "0" + ss
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    dia.textContent = dd;
    mes.textContent = ms;
    ano.textContent = an;
})

