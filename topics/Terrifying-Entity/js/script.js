
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
function drawArms() {

    push();

    stroke(10,10,10);
    strokeWeight(20);

    line(135,200,40,390);
    line(265,200,360,390);

    pop();

}

function drawEyes() {

    push();

    noStroke();
    fill(255,255,255);

    ellipse(185,95,12,25);
    ellipse(220,105,12,25);

    pop();

}