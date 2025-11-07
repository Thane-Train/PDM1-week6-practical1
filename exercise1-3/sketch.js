const words = "Lorem ipsum dolor sit amet"
let display = "";
let currentIndex = 0;
let lastUpdate = 0;
let delay = 500;

function setup () {
  createCanvas(600, 600);
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  text(display, 300, 300);
  
  if(millis() - lastUpdate > delay) {
    if(currentIndex < words.length) {
      display += words[currentIndex];
      currentIndex++
    }
    lastUpdate = millis();
  }
}