let ding;
let hit;


function setup() {
  createCanvas(650, 400);
  loop();
  topGear = createAudio("Top Gear.mp3");
  ding = createAudio("Ding.mp3");
  hit = createAudio("Hit.mp3");
}

function draw() {
  cowMovement();
  background(roadImage);
  showCars();
  showCow();
  carMovement();
  loopCars();
  cowCollision();
  musicTopGear();
  Scoreboard();
  Score();
}
