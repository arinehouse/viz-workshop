function setup() {
  createCanvas(640, 480);
}

function draw() {
  let red = random(255);
  let green = random(255);
  let blue = random(255);
  rect(mouseX, mouseY, 80, 80);
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
  stroke(255, 255, 255, 25);
}
