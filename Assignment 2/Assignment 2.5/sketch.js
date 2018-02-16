function setup() {
    createCanvas(300,200);
    background('lightGreen');
}
    
function draw(){
noFill();
strokeWeight(4);
beginShape();
vertex(20, 20);
quadraticVertex(80, 20, 50, 50);
endShape();
noFill();
strokeWeight(4);
beginShape();
vertex(20, 20);
quadraticVertex(180, 120, 150, 150);
quadraticVertex(120, 180, 180, 180);
vertex(80, 60);
endShape();
}