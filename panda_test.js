var xDir = 0;
var yDir = 0;
var panda =[6];
var imageNum ;
  function preload() {
  panda[0] = loadImage('1.png');
  panda[1] = loadImage('2.png');
  panda[2] = loadImage('3.png');
  panda[3] = loadImage('4.png');
  panda[4] = loadImage('5.png');
  panda[5] = loadImage('6.png');
  mou = loadImage('mou.png');
  frame = loadImage('frame.png');
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) { 
    xDir -= 30;
  }
  if (keyCode === RIGHT_ARROW) { 
    xDir += 30;
  }
  if (keyCode === UP_ARROW) { 
    yDir -= 30;
  }
  if (keyCode === DOWN_ARROW) {
    yDir += 30;
  }
}

function setup() {
  createCanvas(1000, 1000);
  frameRate(6);
  imageMode(CENTER);
}

function draw() {
  imageNum = frameCount %6;
  background(50);
  fill(50);
  noStroke();
  rect(0, 100, 1000, 1000);
  image(mou,width/2,height/2);
  image(frame,width/2,height/2);
  image(panda[imageNum], width/2+76+xDir, height/2-44+yDir);


  //name
  fill(0);
  textSize(16);
  text("L.Joeum", width/2+224, height/2+393);
}