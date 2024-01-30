//adding a GIF to the grid
let gif;
function preload(){
gif = loadImage('assets/DevineGif.gif');
}

function setup() { //runs one time
  createCanvas(windowWidth,windowHeight*2);
  fill("grey");
  strokeWeight(1);
}

function draw() { //runs in a loop

	background('lightgrey')
  
  var numSides = 10;
  var sideLen = windowWidth/numSides;
  
  for(var x = 0;x<windowWidth;x+=sideLen){
      for(var y =0;y<windowHeight*2;y+=sideLen){
          image(gif, x, y, sideLen, sideLen);
      }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight*2); 
}