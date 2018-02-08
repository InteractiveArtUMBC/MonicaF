function setup (){
        createCanvas(500,500);
        background (0,255,250);
}

function draw(){
    stroke(0);
    rect(50,50,50,50);
    ellipseMode(CORNER);
    ellipse(50,50,50,50);
    line(50,50,1000,50);
    line(300,50,300,300);
    line(300,300,50,300);
    stroke(255,0,255);
    line(50,300,50,50);
    rect(100,100,100,100);
    if(mouseIsPressed){
        fill(0);
    
    }else{
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
        ellipse(500,500,80,80);
        noFill()
        ellipse(60,50,50,50);
        fill(255,0,0,5);
        ellipse(100,50,50,50);
        ellipse(150,50,50,50);
        triangle(30,75,50,20,45,70);
}