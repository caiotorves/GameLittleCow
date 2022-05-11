//sceneryInformation
let roadImage;
let cowImage;
let greenCar;
let blackCar;
let yellowCar;
let greyCar;

function preload() {
  roadImage = loadImage("Images/estrada.png");
  cowImage = loadImage("Images/ator-1.png");
  greenCar = loadImage("Images/carro-1.png");
  blackCar = loadImage("Images/carro-2.png");
  yellowCar = loadImage("Images/carro-3.png");
  greyCar = loadImage("Images/new car.png");
  imageCars = [greenCar, blackCar, yellowCar, greyCar];
}