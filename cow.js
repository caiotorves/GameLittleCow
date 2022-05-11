//cowInformation
let xCow = 100;
let yCow = 368;
let collision = false;

function showCow() {
  image(cowImage, xCow, yCow, 28, 28);
}

function cowMovement() {
  if (keyIsDown(UP_ARROW)) {
    yCow -= 5;
}

  if (keyIsDown(DOWN_ARROW)) {
    if (limitMovement()){
    yCow += 5;
  }
 }
}

function cowCollision() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCars.length; i++) {
    collision = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xCow, yCow, 14);
    if (collision) {
      returnCow();
      hit.play();
      if (scorePositive()){
        score-=1;
      }
    }
  }
}

function returnCow() {
  yCow = 368;
}

function scorePositive(){
  return score > 0
}

function limitMovement(){
  return yCow < 368;
}