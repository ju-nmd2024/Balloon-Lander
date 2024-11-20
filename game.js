function setup() {
  createCanvas(600, 500);
  background(70, 130, 180);
}

let balloonX = 600;
let balloonY = 100;
let s = 0.5;
let state = "start";
let velocity = -0.1;
let acceleration = -0;

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
  rect(200, 280, 130, 40, 10);

  //TEXT
  fill(255, 255, 255);
  noStroke();
  textAlign(CENTER);
  text("START", 265, 310);
  textSize(30);

  //CLOUDS
  //LEFT CLOUD
  ellipse(110, 120, 150, 90, 20);
  ellipse(150, 140, 150, 90, 20);
  ellipse(190, 120, 180, 100, 20);
  ellipse(160, 90, 150, 100, 20);
  //RIGHT CLOUD
  ellipse(390, 370, 120, 90, 20);
  ellipse(360, 400, 110, 70, 20);
  ellipse(430, 400, 130, 90, 20);

  //SUN
  fill(255, 165, 0);
  ellipse(600, 0, 320, 320, 20);
  fill(255, 215, 0);
  ellipse(600, 0, 300, 300, 20);

  //GAME TITLE
  push();
  stroke(200, 90, 140);
  strokeWeight(20);
  fill(255);
  textSize(50);
  textAlign(LEFT);
  text("BalloonPop!", 250, 240);
  pop();

  //INSTRUCTIONS
  push();
  stroke(0);
  fill(0);
  strokeWeight(0.5);
  textSize(13);
  textAlign(LEFT);
  text(
    "Instructions: Click on the spacebar so the balloon lands safely! <3",
    15,
    480
  );
  pop();

  //MOUSE WHEN CLICKED START
  if (state === "start" && mouseIsPressed) {
    if (mouseX > 200 && mouseX < 330 && mouseY > 280 && mouseY < 320) {
      state = "game";
    }
  }
}

function gameScreen() {
  background(70, 130, 180);
  balloon(balloonX, balloonY, s);

  //CLOUDS
  //LEFT CLOUD
  noStroke();
  fill(255);
  ellipse(110, 120, 150, 90, 20);
  ellipse(150, 140, 150, 90, 20);
  ellipse(190, 120, 180, 100, 20);
  ellipse(160, 90, 150, 100, 20);
  //RIGHT CLOUD
  ellipse(390, 370, 120, 90, 20);
  ellipse(360, 400, 110, 70, 20);
  ellipse(430, 400, 130, 90, 20);

  //SUN
  fill(255, 165, 0);
  ellipse(600, 0, 320, 320, 20);
  fill(255, 215, 0);
  ellipse(600, 0, 300, 300, 20);
}

function loseScreen() {
  background(70, 130, 180);

  //TEXT - YOU LOST
  push();
  noStroke();
  fill(255, 215, 0);
  textSize(40);
  textAlign(CENTER);
  text("YOU LOST! :(", 310, 270);
  pop();

  //CLOUDS
  //LEFT CLOUD
  noStroke();
  fill(255);
  ellipse(110, 120, 150, 90, 20);
  ellipse(150, 140, 150, 90, 20);
  ellipse(190, 120, 180, 100, 20);
  ellipse(160, 90, 150, 100, 20);
  //RIGHT CLOUD
  ellipse(390, 370, 120, 90, 20);
  ellipse(360, 400, 110, 70, 20);
  ellipse(430, 400, 130, 90, 20);

  //SUN
  fill(255, 165, 0);
  ellipse(600, 0, 320, 320, 20);
  fill(255, 215, 0);
  ellipse(600, 0, 300, 300, 20);

  //BUTTON FOR PLAY AGAIN
  fill(0);
  rect(130, 317, 140, 33, 10);

  //TEXT - PLAY AGAIN
  push();
  noStroke();
  fill(255);
  strokeWeight(0.5);
  textSize(20);
  textAlign(CENTER);
  text("Play again?", 200, 340);
  pop();

  //BUTTON FOR START PAGE
  fill(0);
  rect(130, 355, 140, 33, 10);

  //TEXT - MENU
  push();
  noStroke();
  fill(255);
  strokeWeight(0.5);
  textSize(20);
  textAlign(CENTER);
  text("Menu :P", 200, 378);

  //MOUSE WHEN CLICKED ON PLAY AGAIN
  if (state === "lose" && mouseIsPressed) {
    if (mouseX > 130 && mouseX < 270 && mouseY > 320 && mouseY < 350) {
      state = "game";
    }
  }

  //MOUSE WHEN CLICKED ON MENU
  if (state === "lose" && mouseIsPressed) {
    if (mouseX > 130 && mouseX < 270 && mouseY > 357 && mouseY < 390) {
      state = "start";
    }
  }
}

function winScreen() {
  //BACKGROUND COLOR
  background(70, 130, 180);

  //CLOUDS
  //LEFT CLOUD
  noStroke();
  fill(255);
  ellipse(110, 120, 150, 90, 20);
  ellipse(150, 140, 150, 90, 20);
  ellipse(190, 120, 180, 100, 20);
  ellipse(160, 90, 150, 100, 20);
  //RIGHT CLOUD
  ellipse(390, 370, 120, 90, 20);
  ellipse(360, 400, 110, 70, 20);
  ellipse(430, 400, 130, 90, 20);

  //SUN
  fill(255, 165, 0);
  ellipse(600, 0, 320, 320, 20);
  fill(255, 215, 0);
  ellipse(600, 0, 300, 300, 20);

  //TEXT - YOU WON
  push();
  noStroke();
  fill(255, 215, 0);
  textSize(40);
  textAlign(CENTER);
  text("YOU WON! :D", 310, 270);
  pop();

  //BUTTON FOR PLAY AGAIN
  fill(0);
  rect(130, 317, 140, 33, 10);

  //TEXT - PLAY AGAIN
  push();
  noStroke();
  fill(255);
  strokeWeight(0.5);
  textSize(20);
  textAlign(CENTER);
  text("Play again?", 200, 340);
  pop();

  //BUTTON FOR START PAGE
  fill(0);
  rect(130, 355, 140, 33, 10);

  //TEXT - MENU
  push();
  noStroke();
  fill(255);
  strokeWeight(0.5);
  textSize(20);
  textAlign(CENTER);
  text("Menu :P", 200, 378);

  //MOUSE WHEN CLICKED ON PLAY AGAIN
  if (state === "win" && mouseIsPressed) {
    if (mouseX > 130 && mouseX < 270 && mouseY > 320 && mouseY < 350) {
      state = "game";
    }
  }

  //MOUSE WHEN CLICKED ON MENU
  if (state === "win" && mouseIsPressed) {
    if (mouseX > 130 && mouseX < 270 && mouseY > 357 && mouseY < 390) {
      state = "start";
    }
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }

  //STARTING MECHANIC
  if (state === "game") {
    acceleration += 0.01;
    if (keyIsDown(32)) {
      velocity -= 3;
    }

    balloonY += velocity;
    velocity += acceleration;
    if (balloonY > 950) {
      if (velocity > 15) {
        state = "lose";
        balloonY = 80;
        velocity = 0.1;
        acceleration = 0;
      } else if (velocity < 13) {
        state = "win";
        balloonY = 80;
        velocity = 0.1;
        acceleration = 0;
      }
    }
  }
}
