const words = "Lorem ipsum dolor sit amet"
let fillColour = 255;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0, 0, 160);
  fill(fillColour);
  textSize(60)
  text(`${words}`, width/2, height/2, 280, height/2);
  textAlign(RIGHT, BOTTOM);

  if(mouseX > width/2 && mouseY > height/2) {
    fillColour = color(255, 0, 0, 210);
  } else {
    fillColour = color(255, 210);
  }
}
