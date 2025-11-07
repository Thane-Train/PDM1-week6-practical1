const words = "Lorem ipsum dolor sit amet"
let font1;
let font2;
let currentFont;

function preload() {
  font1 = loadFont("assets/fancy.otf");
  font2 = loadFont("assets/weird.otf");
}

function setup() {
  createCanvas(400, 400);
  currentFont = font2;
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  stroke(255, 0, 255);
  strokeWeight(2.5);
  fill(255)
  textSize(30);
  textFont(currentFont);
  text(`${words}`, width/2, height/2);
}

function keyPressed() {
  if(key === 'f') {
    if(currentFont === font1) {
      currentFont = font2;
    } else if(currentFont === font2) {
      currentFont = font1;
    }
    console.log(currentFont);
  }
}