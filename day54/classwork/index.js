let interval;

function start() {
    interval = setInterval(function() {
    document.getElementById("text").innerText = "Hello World";
}, 1000);
}

function stop() {
    clearInterval(interval);
}