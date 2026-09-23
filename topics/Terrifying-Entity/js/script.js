
"use strict";


function setup() {

    createCanvas(400,400);

}

function draw() {

    background(1,1,1);

    drawBody();
    drawHead();
    drawArms();
    drawEyes();
    drawMouth();

}

function drawBody() {

    push();

    fill(20,20,20);
    ellipse(200,280,170,300);

    pop();

}

function drawHead() {

    push();

    fill(10,10,10);
    ellipse(200,100,90,100);

    pop();

}