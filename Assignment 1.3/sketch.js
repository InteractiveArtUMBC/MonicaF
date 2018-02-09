function setup (){
    createCanvas(500,250);
    background('aqua');
}
function draw(){
    if(mouseIsPressed){
        fill('aqua');
    }
    stroke(0);
    ellipse(mouseX,mouseY,80,80);
    line(500, 250, 0, 0);

    fill('orange');
    triangle(0, 0, 500, 250, 180, 250);
    triangle(10, 10, 500, 250, 180, 250);
}