function setup() { //runs one time
  createCanvas(windowWidth,windowHeight);
  fill("grey");
  strokeWeight(1);
}

function draw() { //runs in a loop
  
  var numSides = 10;
  var sideLen = windowWidth/numSides;
  
  for(var x = 0;x<windowWidth;x+=sideLen){
      for(var y =0;y<windowHeight;y+=sideLen){
          quad(
          x,y,
          x+sideLen,y,
          x+sideLen,y+sideLen,
          x,y+sideLen);
      }
  }
}

function windowResized(){
  resize(windowWidth, windowHeight); 
}