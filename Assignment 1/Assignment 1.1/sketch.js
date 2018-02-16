function setup (){
    createCanvas(500,250);
    background('aqua');
}
function draw(){
    if(mouseIsPressed){
        fill('lightBlue');
    }else{
        fill('lightYellow');
    }
    arc(41, 50, 80, 80, -1260, PI + QUARTER_PI, PIE);
    arc(500, 50, 80, 80, -1260, PI + QUARTER_PI, PIE);
    arc(41, 240, 80, 80, -1260, PI + QUARTER_PI, PIE);
    arc(500, 240, 80, 80, -1260, PI + QUARTER_PI, PIE);
    if(mouseIsPressed){
        fill('lightPink');
    }else{
        fill('limeGreen');
    }
    ellipse(250,125,80,80);

}
