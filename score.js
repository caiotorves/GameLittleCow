//scoreInformation:
let score = 0;

function Scoreboard() {
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 40, 0));
  rect(2, 4, 30, 28);
  fill(255);
  text(score, 17, 25);
}

function Score() {
  if (yCow < 5) {
    score += 1;
      returnCow();
      ding.play();
  }
}
