let films = [
    "Avatar",
    "Titanic",
    "Interstellar",
    "John Wick",
    "Fast & Furious"
];

let index = 0;

let film = document.getElementById("film");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", function(){
    index++;

    if(index >= films.length){
        index = 0;
    }

    film.textContent = films[index];
});

prev.addEventListener("click", function(){
    index--;

    if(index < 0){
        index = films.length - 1;
    }

    film.textContent = films[index];
});