
function draw() {
    createCanvas(windowWidth,windowHeight);
    background(50, 0, 250, 34, 93);

        if (mouseX < windowWidth / 2 || mouseY < windowHeight / 2) {
              cursor(CROSS);
              background('lightPink');
        if (mouseX > windowWidth / 2 || mouseY < windowHeight / 2) {
                cursor(HAND);
                background('lightBlue');
        if (mouseX > windowWidth / 2 || mouseY > windowHeight / 2){
                cursor(ARROW);
                background('lightGreen')
        if (mouseX < windowWidth / 2 || mouseY > windowHeight / 2) {
                cursor(TEXT);
                background('lightPurple');
                //Shows Color but doesnt change cursor?
            }
        }
    }
}

line(width / 2, 0, width / 2, height);
line(0, height / 2, width, height / 2);
    }