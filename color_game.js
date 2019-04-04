 var colors = generateRandomColors(8);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#esaybtn");
var hardButton = document.querySelector("#hardbtn");
var numOfSquares = 8;

easybtn.addEventListener("click", function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
})

hardbtn.addEventListener("click", function(){
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  numOfSquares = 8;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors"
    for (var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      resetButton.textContent = "play Again?"
     changeColor(clickedColor);
     h1.style.backgroundColor = clickedColor;
    }else{
      messageDisplay.textContent = "Try Again"
      this.style.backgroundColor = "#232323";

    }
  });
}

function changeColor(color){
  for (var i=0 ; i< squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for(var i = 0; i< num; i++){
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() *256 +1)
  var g = Math.floor(Math.random() *256 +1)
  var b = Math.floor(Math.random() *256 +1)

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
