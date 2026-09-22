
"use strict";


function setup() {
 createCanvas(400,400);

}

function draw() {
    background(0, 0, 0);
    drawEllipse();
   
}

function drawEllipse() {
    push();
    fill(40,40,40)
    ellipse(200,250,300,300);
    pop();

}

