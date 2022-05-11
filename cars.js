//carInformation

let speedCars = [5, 5, 5, 5];
let xCars = [570, 200, 380, 150];
let yCars = [40, 320, 210, 95];
let widthCar = 53;
let heightCar = 38;

function showCars() {
  for (let i = 0; i < imageCars.length; i++){
  image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar);
}
}

function carMovement() {
  for (let i = 0; i < xCars.length; i++){
  xCars[i] -= [5];
}
}

function loopCars() {
  for(let i = 0; i < xCars.length; i++){
  if (xCars[i] < 0) {
    xCars[i] = width;
  }
}
}
