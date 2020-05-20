//for PRO mode, we generate 6 colors and for EASY, we generate 3 colors.
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var body = document.getElementsByTagName("body");
var squares = document.querySelectorAll(".square");
var pickedcolor = randomizeColor();

var clickedColor = undefined;
var message = document.querySelector("#message");
var displaycolor = document.getElementById("displayColor");

var event = document.querySelector("#event");
var easy = document.querySelector("#easyBtn");
var pro = document.querySelector("#proBtn");

displaycolor.textContent = pickedcolor;

event.addEventListener("click", function () {
  //generate random colors for the square

  colors = generateRandomColors(numSquares);

  for (var i = 0; i < colors.length; i++) console.log(colors[i]);
  //pick a random color among the generated ones to be guesses

  pickedcolor = randomColor();
  displaycolor.textContent = pickedcolor;

  //assign the generated colors to the squares
  for (var i = 0; i < squares.length; i++) {
    //add colors to the squares
    squares[i].style.backgroundColor = colors[i];
  }
});

for (var i = 0; i < squares.length; i++) {
  //add colors to the squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to the squares

  squares[i].addEventListener("click", function () {
    clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedcolor) {
      message.textContent = "Correct!";
      changeColor(clickedColor);
      event.textContent = "Play Again!";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function randomizeColor() {
  var color = Math.floor(Math.random() * colors.length);
  return colors[color];
}

function generateRandomColors(num) {
  //make an array of num random colors
  var arr = [];
  for (var i = 0; i < num; i++) {
    //generate random color and push it into the array
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  //pick a red   from 0 to 255 . For this we use Math.random()*256 and then Floor the value, so that the max integer we have is 255
  //pick a green from 0 to 255
  //pick a blue  from 0 to 255

  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);

  var color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}

//upon clicking the mode buttons - EASY and PRO!

easy.addEventListener("click", function () {
  pro.classList.remove("selected");
  easy.classList.add("selected");

  //generate 3 random colors
  numSquares = 3;


  colors = generateRandomColors(numSquares);

  for(var i=0;i<colors.length;i++)
    console.log(colors[i]);

  //generate a pickedColor to be guessed

  pickedcolor = randomizeColor();

  //assign the colors to first three squares and hide the bottom three.

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } 
    else 
    {
      squares[i].style.display = "none";
    }
  }

  displaycolor.textContent = pickedcolor;
});

pro.addEventListener("click", function () {
  easy.classList.remove("selected");
  pro.classList.add("selected");

  //this is the default game mode
  //generate 6 random colors

  numSquares = 6;
  colors = generateRandomColors(numSquares);

  //generate a pickedColor to be guessed

  pickedcolor = randomizeColor();

  //assign the colors to first three squares and hide the bottom three.

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display="block";
  }

  displaycolor.textContent = pickedcolor;
});
