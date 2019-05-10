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

const secondsProgress = document.querySelector('.seconds-p');


function progressBars() {
    const nowPro = new Date();
    const seconds = nowPro.getSeconds();

}


setInterval(timeChange, 1000);
timeChange();

setInterval(progressBars, 1000);
progressBars();
