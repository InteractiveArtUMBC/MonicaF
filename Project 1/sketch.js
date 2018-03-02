
function setup(){
   createCanvas(1000,600)
    background(230,200,0, 120, 10)
}

function draw(){
    circles();
    lines();
    arcs();
    semis();
    rectangles();
}

function circles(){
    strokeWeight(0);
    fill(230, 200, 0, 120, 100);
    ellipse(550,380,70,70);
    fill('red');
    ellipse(550,380,45,45);
    fill('darkRed');
    ellipse(500,300,150,150);
    fill('black');
    ellipse(500,300,120,120);
    fill('lightBlue');
    ellipse(820,420,30,30);
    ellipse(800,375,30,30);
    ellipse(780,420,30,30);
    fill(100,50,120);
    ellipse(500,300,60,60);
    ellipse(800,400,50,50);
    ellipse(750,250,60,60);
    ellipse(500,450,20,20);
    ellipse(500,420,30,30)
    fill('lightGreen');
    ellipse(100,180,80,80);
    ellipse(450,490,35,35);
    ellipse(500,300,10,10);
    ellipse(20,200,10,10);
    ellipse(350,260,15,15);
    ellipse(880,575,10,10);
    ellipse(930,525,50,50);
}
function lines(){
    stroke(255);
    strokeWeight(.5);
    line(50,450,130,80);
    line(130,80,230,280);
    fill('lightBlue');
    triangle(50,450,130,80,150,450);
    fill('yellow');
    triangle(150,450,130,80,230,280);

    stroke(130);
    strokeWeight(2);
    line(900,500,785,100);
    line(785,100,620,600);
    stroke(1);
    line(725,280,500,130)
    stroke(.8);
    line(560,170,680,40);
    line(650,180,540,300);

    stroke(200,100,205, 200,50);
    strokeWeight(10);
    line(0,300,1000,300);
    strokeWeight(8);
    line(100,330,900,330);
    strokeWeight(6);
    line(200,360,800,360);
    strokeWeight(4);
    line(300,390,700,390);
    strokeWeight(3);
    line(400,420,600,420);
    strokeWeight(2);
    line(450,450,550,450);

    stroke('lightBlue'),
    strokeWeight(3);
    line(0,330,80,330);
    line(1000,330,920,330);
    line(0,360,180,360);
    line(1000,360,820,360);
    line(0,390,280,390);
    line(1000,390,720,390);
    line(0,420,380,420);
    line(1000,420,620,420);
    line(0,450,430,450)
    line(1000,450,570,450);

    push();
    strokeWeight(10);
    stroke('green');
    line(30,515,330,230)
    strokeWeight(6);
    line(25, 320, 400, 580);
    strokeWeight(0);
    fill(180,150,80,50,40);
    triangle(153, 405, 258, 305, 386, 435);
    pop();

    push();
    stroke('gray');
    line(240,0,180,600)
    line(70, 490, 730, 30);
    pop();

    push();
    stroke('gray');
    line(810,500,650,450);
    line(790,520,650,470);
    line(800,540,650,490);
    line(780,480,650,430);
    line(770,460,650,410);
    line(810,480,670,600);
    line(620,280,720,600);
    line(680,370,740,570);
    line(710,400,755,560);
    pop();
}

function arcs(){
    arc(870, 45, 50, 50, 0, HALF_PI);
    noFill();
    arc(880, 75, 60, 60, HALF_PI, PI);
    arc(830, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(820, 85, 80, 80, PI + QUARTER_PI, TWO_PI);

    stroke('orange');
    arc(0, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(50, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(100, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(150, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(200, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(250, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(300, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(350, 60, 80, 80, 0, PI + QUARTER_PI, OPEN);

    arc(900, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(950, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(1000, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(650, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(700, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(750, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(800, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);
    arc(850, 160, 80, 80, 0, PI + QUARTER_PI, OPEN);

    stroke('green');
    fill(200,100,190);
    arc(50, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(100, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(150, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(200, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(250, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(300, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(350, 60, 50, 50, 0, PI + QUARTER_PI, OPEN);

    arc(900, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(950, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(1000, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(650, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(700, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(750, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(800, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);
    arc(850, 160, 50, 50, 0, PI + QUARTER_PI, OPEN);

}

function semis(){
    noFill();
    stroke(240);
    strokeWeight(2);
    bezier(85, 530, 80, 410, 280, 490, 530, 550);
    bezier(85, 595, 180, 510, 380, 590, 530, 550);
    strokeWeight(4);
    bezier(915, 530, 490, 490, 400, 330, 530, 550);
    bezier(985, 530, 480, 490, 480, 390, 530, 550);
}
function rectangles(){
    rect(0,0,45,1000);
    rect(250,0,50,200)
    rect(320,0,40,180);
    rect(380,0,30,160);
    
    rect(295,465,30,540);
    rect(560,500,30,540);

    rect(920,0,10,230);
    rect(910,0,30,250)
    rect(900,0,50,280);
}