let img;
let bg;
var header;

function preload() {

createElement('h1', 'the solar system');

}

function setup() {
  smooth();
  createCanvas(700, 500, WEBGL);
  slider = createSlider(0, 51, 24);
  slider.position(0, 580);
  slider.style('width', '700px');
  
  header = createElement("h1", "more information");
  header.mouseOver(newText);
  header.mouseOut(oldText);
}

function draw() {
  background(0);
  background(slider.value());
  
  //sun
  push()
  fill(240, 197, 5)
  noStroke();
  sphere(80);
  pop()
  // erase();
  
  //mercury
  push()
  rotateY(frameCount * 0.05);
  fill(173, 169, 156)
  noStroke()
  translate(0, 0, 105);
  sphere(8);
  pop()

  //venus
  push()
  rotateY(frameCount * 0.03);
  fill(156, 130, 47)
  noStroke()
  translate(0, 0, 150);
  sphere(15);
  pop()
  
  //earth
  push()
  rotateY(frameCount * 0.02);
  fill(21, 160, 214)
  noStroke()
  translate(0, 0, 200);
  sphere(18);
  pop()

  //mars
  push()
  rotateY(frameCount * 0.01);
  fill(219, 124, 0)
  noStroke()
  translate(0, 0, 250);
  sphere(15);
  pop()
  
  //jupiter
   push()
  rotateY(frameCount * 0.005);
  fill(204, 151, 53)
  noStroke()
  translate(0, 0, 310);
  sphere(25);
  pop()
  
  //saturn
   push()
  rotateY(frameCount * 0.007);
  fill(207, 201, 165)
  noStroke()
  translate(0, 0, 380);
  sphere(20);
  pop()
  
  //uranus
  push()
  rotateY(frameCount * 0.009);
  fill(211, 237, 234)
  noStroke()
  translate(0, 0, 460);
  sphere(18);
  pop()
  
  //neptune
  push()
  rotateY(frameCount * 0.01);
  fill(51, 105, 171)
  noStroke()
  translate(0, 0, 500);
  sphere(30);
  pop()

  // noErase();
}

function newText() {
  header.html("hi");
}

function oldText() {
  header.html("more information");
}
function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}