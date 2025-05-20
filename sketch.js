let img;

function preload() {
  img = loadImage("Cards.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    push();
    // the lightest layer on the screen succeeds, in this case it's fill(255). try to change transparency on fill to see what changes
    blendMode(LIGHTEST); // or blendMode(SCREEN) also works
    fill(255);
    ellipse(mouseX, mouseY, 150, 150);
    pop();
  } else {
    // the darkest layer on the screen succeeds. in this case it's background(0)
    blendMode(DARKEST);
  }
  image(img, 0, 0, width, height);
}
