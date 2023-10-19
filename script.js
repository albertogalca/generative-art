var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = window.innerHeight;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = "square";
context.lineWidth = 2;

// var coldColors = ["#00a0a0", "#0090c0", "#0050b0", "#0030a0", "#0070d0", "#002080"];

// function getRandomColor() {
//   var randomIndex = Math.floor(Math.random() * coldColors.length);
//   return coldColors[randomIndex];
// }

function draw(x, y, width, height) {
  context.strokeStyle = "#0070d0"

  var leftToRight = Math.random() >= 0.5;

  if (leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }

  context.stroke();
}

var step = 15;

for (var x = 0; x < size; x += step) {
  for (var y = 0; y < size; y += step) {
    draw(x, y, step, step);
  }
}
