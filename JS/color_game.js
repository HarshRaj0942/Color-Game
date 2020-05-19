var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
];
var body = document.getElementsByTagName("body");
var squares = document.querySelectorAll(".square");
var pickedcolor = randomizeColor();
console.log("Color picked is " + pickedcolor);
var clickedColor = undefined;
var message = document.querySelector("#message");
var displaycolor = document.getElementById("displayColor");
displaycolor.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
  //add colors to the squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to the squares

  squares[i].addEventListener("click", function () {
    clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedcolor) {
      message.textContent = "Correct!";
      changeColor(clickedColor);
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
