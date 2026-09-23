
"use strict";


function setup() {
 createCanvas(400,400);

}

function draw() {
    background(1, 1, 1);
    drawEllipse();
    drawTriangle();
   
}

function drawEllipse() {
    push();
    fill(40,40,40)
    ellipse(200,250,300,400);
    pop();

}

function drawTriangle() {
    push();
    fill(0,0,225)
 triangle(150, 425, 418, 30, 136, 225);
    pop();

}




