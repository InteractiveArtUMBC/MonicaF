function setup() {
    createCanvas(300,200);
    frameRate(30);
    rectMode(CENTER);
  }
  
  function draw() {
    var step = frameCount % 20;
    background('lightPink');
    // Equivalent to translate(x, y);
    applyMatrix(1, 0, 0, 1, 40 + step, 50);
    rect(0, 0, 50, 50);
    translate(30,20);
    var step = frameCount % 20;
    background('lightPink');
    // Equivalent to translate(x, y);
    applyMatrix(1, 0, 0, 1, 40 + step, 50);
    rect(0, 0, 50, 50);

  }