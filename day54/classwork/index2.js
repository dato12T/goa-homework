const display = document.getElementById('timer');
let seconds = 10;

function updateTime() {
    seconds--; // ამცირებს რიცხვს
    display.innerText = "Remaining time: " + seconds + "seconds";

    if (seconds === 0) {
        clearInterval(interval); 
        display.innerText = "Time is up!"; 

        const D = new Date();
    }
}

const interval = setInterval(updateTime, 1000);