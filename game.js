let x = 450;
let y = 600;
let s = 0.5;

createCanvas(600, 600);
background(167, 199, 207);

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

function draw() {
  //CHARACTER MOVE UP AND DOWW
  background(167, 199, 207);
  balloon(x, y, s);

  if (y >= 100) {
    y = y - 5;
  }

  /*
 y = y + speed;
  if (y > 300 || y < 100) {
    speed = speed * -1;
  }
  */
}
