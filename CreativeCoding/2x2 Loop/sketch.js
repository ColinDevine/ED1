function setup() { //runs one time
  createCanvas(720,720);
  background(255,0,0);
  fill("yellow");
  strokeWeight(8);
}

function draw() { //runs in a loop
  translate(60,60); //resets origin
  for(var x = 0;x<=300;x+=300){
      for(var y =0;y<=300;y+=300){
          quad(
          x,y,
          x+300,y,
          x+300,y+300,
          x,y+300);
      }
  }
}