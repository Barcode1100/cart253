
"use strict";


function setup() {
 createCanvas(400,400);

}

function draw() {
    background(0, 0, 255);
    drawRed();
    drawYellow();
    drawGreen();
    drawBlue();
    drawPurple();
}

function drawRed() {
    push();
    fill(225,0,0)
    ellipse(200,250,300,300);
    pop();

}



