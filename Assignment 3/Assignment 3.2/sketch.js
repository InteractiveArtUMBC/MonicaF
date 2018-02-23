var value = 'blue';
var valueTwo = 'magenta';

function setup(){
    createCanvas(200,100);
    background ('lightGreen');
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
  fill(valueTwo);
  ellipse(160, 50, 50, 50);
}

function doubleClicked() {
  if (value === 'blue') {
    value = 'red';
  } else {
    value = 'blue';
  }
}
  function mouseClicked() {
      if (valueTwo === 'magenta'){
          valueTwo = 'yellow';
      } else {
          valueTwo = 'magenta';
      }
  } 