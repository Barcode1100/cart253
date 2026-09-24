
"use strict";


function setup() {

    createCanvas(400, 400);

}

function draw() {

    background(1, 1, 1);

    drawBody();
    drawHead();
    drawArms();
    drawEyes();
    drawMouth();

}

function drawBody() {

    push();

    let x = random(-2, 2);
    let y = random(-2, 2);

    fill(30, 30, 30);
    ellipse(200 + x, 280 + y, 170, 300);

    pop();

}

function drawHead() {

    push();

    let x = random(-3, 3);
    let y = random(-3, 3);

    fill(10, 10, 10);
    ellipse(200 + x, 100 + y, 90, 100);

    pop();

}

function drawArms() {

    push();

    let x = random(-3, 3);
    let y = random(-3, 3);

    stroke(10, 10, 10);
    strokeWeight(20);

    line(135 + x, 200 + y, 40 + x, 390 + y);
    line(265 + x, 200 + y, 360 + x, 390 + y);

    pop();

}

function drawEyes() {

    push();

    let x = random(-5, 5);
    let y = random(-5, 5);

    noStroke();
    fill(255, 255, 255);

    ellipse(185 + x, 95 + y, 12, 25);
    ellipse(220 + x, 105 + y, 12, 25);

    pop();

}

function drawMouth() {

    push();

    let x = random(-2, 2);
    let y = random(-2, 2);

    noStroke();
    fill(0, 0, 0);

    ellipse(200 + x, 135 + y, 65, 45);

    fill(255, 255, 255);

    triangle(170 + x, 120 + y, 180 + x, 145 + y, 190 + x, 120 + y);
    triangle(190 + x, 120 + y, 200 + x, 150 + y, 210 + x, 120 + y);
    triangle(210 + x, 120 + y, 220 + x, 145 + y, 230 + x, 120 + y);

    pop();

}