const hoursCurrent = document.querySelector(".hours");
const minutesCurrent = document.querySelector(".minutes");
const secondsCurrent = document.querySelector(".seconds");

function timeChange() {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 10) {
        hoursCurrent.innerHTML = '0' + hours;
    } else {
        hoursCurrent.innerHTML = hours;
    } 

    const minutes = now.getMinutes();

    if (minutes < 10) {
        minutesCurrent.innerHTML = '0' + minutes;
    } else {
        minutesCurrent.innerHTML = minutes;
    } 
    
    const seconds = now.getSeconds();

    if (seconds < 10) {
        secondsCurrent.innerHTML = '0' + seconds;
    } else {
        secondsCurrent.innerHTML = seconds;
    } 
}


function progressBars() {
    const now = new Date();
    const seconds = now.getSeconds();
}

setInterval(timeChange, 1000);
timeChange();

