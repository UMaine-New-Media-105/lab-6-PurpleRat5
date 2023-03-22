//Global Variables
spriteX = 50;
spriteY = 50;

Yvel = 0;
Xvel = 0;

coinX = 100;
coinY = 100;

coinSize = 1;
score = 0;

farmerEyes = 0;

gameWon = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //If game is going on
  if (!gameWon) {
    background("#73F04E");
    //Background Score
    fill("#92E77A")
    textSize(150)
    textFont("Helvetica")
    text(score, 160, 250)
    //Move chicken when hit
    coin(coinX, coinY, coinSize);

    //Move Farmer
    keyPressed();
    moveChar(Xvel, Yvel);
    //If chicken is hit add to score, mov chicken & end game?
    if (dist(spriteX, spriteY, coinX, coinY) <= 40) {
      if (coinSize <= 0.5) {
        moveCoin(1000, 0); //Move off screen
        gameWon = true
      } else {
        moveCoin(random(0, 400), random(0, 400));
        score+=1
      }
    }
  }
  //Win Screen
  else{
    background("#CEBB2C")
    textSize(50);
    fill("black");
    textFont("Helvetica")
    text("You Win!", 100, 200);
  }
}
//Move Character Function
function moveChar(x, y) {
  spriteX += x;
  spriteY += y;
  player(spriteX, spriteY, 1);
}
//Move coin Function 
function moveCoin(x, y) {  
  
  coinX = x;
  coinY = y;
  coinSize -= 0.1;
  coin(coinX, coinY, coinSize);

  farmerEyes += 50;
}
//Grab keyboard input
function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    Yvel = -2;
  } else if (keyIsDown(DOWN_ARROW)) {
    Yvel = 2;
  } else if (keyIsDown(LEFT_ARROW)) {
    Xvel = -2;
  } else if (keyIsDown(RIGHT_ARROW)) {
    Xvel = 2;
  } else {
    Xvel = 0;
    Yvel = 0;
  }
}
//Draw Farmer
function player(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  fill("#D6D480");
  ellipse(0, 0, 40);
  fill("#D6D12E");
  arc(0, -13, 35, 30, 3, 0);
  rect(-30, -15, 60, 3);

  fill("hsl(" + farmerEyes + ", 70%, 50%)");
  ellipse(10, 0, 7, 10);
  ellipse(-10, 0, 7, 10);

  pop();
}
//Draw Coin
function coin(x, y, size) {
  push();
  translate(x, y);
  scale(size);

  fill("#DBC670");
  ellipse(0, 0, 30);
  fill("#DF452E");
  triangle(-25, 0, -10, 10, -10, -10);
  fill("black");
  stroke("white");
  strokeWeight(3);
  ellipse(0, -5, 7, 10);
  strokeWeight(2);
  stroke("black");
  line(-2, -13, +5, -10);
  fill("#EC1F01");
  strokeWeight(1);
  beginShape();
  vertex(0, -15);
  vertex(3, -20);
  vertex(10, -10);
  vertex(12, -20);
  vertex(15, 0);
  endShape();

  pop();
}
