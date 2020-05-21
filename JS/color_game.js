//for PRO mode, we generate 6 colors and for EASY, we generate 3 colors.
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var body = document.getElementsByTagName("body");
var squares = document.querySelectorAll(".square");
var pickedcolor = randomizeColor();

var clickedColor = undefined;
var message = document.querySelector("#message");
var displaycolor = document.getElementById("displayColor");
var heading = document.querySelector("#heading");

var event = document.querySelector("#event");

var modeBtns = document.querySelectorAll(".mode");

for (var i = 0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener("click", function () {
    modeBtns[0].classList.remove("selected");
    modeBtns[1].classList.remove("selected");
    this.classList.add("selected");

    if (this.textContent === "EASY") numSquares = 3;
    else numSquares = 6;

    reset();
  });
}

function reset() {
  colors = generateRandomColors(numSquares);

  //pick a random color among the generated ones to be guesses

  pickedcolor = randomizeColor();
  displaycolor.textContent = pickedcolor;
  event.textContent = "New Colors";
  message.textContent = " ";

  //assign the generated colors to the squares
  for (var i = 0; i < squares.length; i++) {
    //add colors to the squares
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else squares[i].style.display = "none";
  }
}

displaycolor.textContent = pickedcolor;

event.addEventListener("click", function () {
  reset();
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
      this.classList.add("hidden");
      // this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].classList.remove("hidden");
    squares[i].style.backgroundColor = color;
  }

  heading.style.backgroundColor = clickedColor;
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
