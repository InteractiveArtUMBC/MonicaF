function setup (){
    createCanvas(500,250);
    background('aqua');
}
function draw() {
    background(500, 250, 252);
    line(mouseX, 0, mouseX, 250);
    line(0, mouseY, 500, mouseY);

    if (mouseIsPressed)
    ellipse(mouseX,mouseY, 50,50);
  }