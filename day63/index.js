let colors = [
  "red",
  "blue",
  "green",
  "purple"
];

let index = 0;

let slide = document.getElementById("slide");

slide.style.background = colors[index];

function nextColor(){
  index++;

  if(index >= colors.length){
    index = 0;
  }

  slide.style.background = colors[index];
}

function prevColor(){
  index--;

  if(index < 0){
    index = colors.length - 1;
  }

  slide.style.background = colors[index];
}