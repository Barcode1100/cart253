
"use strict";


function setup() {
 createCanvas(400,400);

}

function draw() {
    background(0, 0, 255);
    drawSun();
    drawGround();
    drawEar();
}

function drawSun() {
    push();
    fill(225,225,0)
    ellipse(200,250,300,300);
    pop();

}

function drawGround() {
    push();
    fill(0,225,0)
    rect(0,300,400,300)
    pop();
}

function drawEar() {
    push();
    fill(200,225,0)
    triangle(100,200,200,200,0,0)
    pop();

    push();
    fill(225,225,0)
    triangle(200,100,200,200,0,0)
    pop();

    push();
    noStroke();
    fill("#4d873b")
    triangle(100,300,200,300,0,400)
    pop();
}