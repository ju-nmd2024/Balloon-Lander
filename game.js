function setup() {
  createCanvas(600, 500);
  background(167, 199, 207);
}

let balloonX = 450;
let balloonY = 600;
let s = 0.5;
let state = "start";
let velocity = 0.1;
let acceleration = 0;

function balloon(x, y, s) {
  //BALLOON
  noStroke();
  fill(200, 90, 140);
  ellipse(x * s, y * s, 150 * s, 200 * s);
  triangle(
    x * s,
    (y + 90) * s,
    (x + 10) * s,
    (y + 110) * s,
    (x - 10) * s,
    (y + 110) * s
  );

  //BALLON HIGHLIGHT
  noFill();
  stroke(250, 140, 180);
  strokeWeight(5);
  arc((x + 30) * s, (y - 30) * s, 40 * s, 70 * s, 30, 0 * s, PI);

  //BALLON SHADOW
  noStroke();
  fill(150, 80, 140);
  rect((x - 10) * s, (y + 99) * s, 20 * s, 5 * s, 10 * s);

  //STRING
  beginShape();
  noFill();
  stroke(0, 0, 0);
  strokeWeight(2);
  vertex(x * s, (y + 110) * s);
  bezierVertex(
    x * s,
    (y + 130) * s,
    (x + 105) * s,
    (y + 130) * s,
    (x + 50) * s,
    (y + 190) * s
  );
  vertex((x - 10) * s, (y + 250) * s);
  bezierVertex(
    (x - 60) * s,
    (y + 310) * s,
    (x + 40) * s,
    (y + 340) * s,
    (x + 50) * s,
    (y + 340) * s
  );
  endShape();
}

function startScreen() {
  //BACKGROUND COLOR
  background(70, 130, 180);
  //BUTTON
  fill(0, 0, 0);
  rect(200, 200, 200, 70, 10);
  //TEXT
  fill(255, 255, 255);
  noStroke();
  textAlign(CENTER);
  text("START", 300, 250);
  textSize(40);
  //CLOUDS
  ellipse(130, 120, 150, 90, 20);
}

function gameScreen() {
  background(167, 199, 207);
  text("game", 300, 250);
  balloon(balloonX, balloonY);

  //CHARACTER MOVE UP AND DOWN
  background(167, 199, 207);
  balloon(balloonX, balloonY, s);

  if (balloonY >= 100) {
    balloonY = balloonY - 5;
  }
}

function resultScreen() {
  background(255);
  text("result", 300, 250);
}

state = "start";
function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}
