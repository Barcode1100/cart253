
"use strict";


function setup() {
 createCanvas(400,400);

}



function draw() {
    background(0, 0, 255);
    drawSun();
}

function drawSun() {
    push();
    fill(225,225,0)
    ellipse(200,200,300,300);
    pop();

}
