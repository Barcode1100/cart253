
"use strict";


function setup() {
 createCanvas(400,400);

}

function draw() {
    background("#799fd8");
    drawRed();
    drawYellow();
    drawGreen();
    drawBlue();
    drawPurple();
    drawExtra();
}

function drawRed() {
    push();
    fill(225,0,0)
    circle(200,325,400);
    pop();

}

function drawYellow() {
    push();
    fill("#fbe94b")
    circle(200,375,400);
    pop();

}

function drawGreen() {
    push();
    fill("#4fc74a")
    circle(200,425,400);
    pop();

}

function drawBlue() {
    push();
    fill("#1c26e1")
    circle(200,475,400);
    pop();

}

function drawPurple() {
    push();
    fill("#bd1ce1")
    circle(200,525,400);
    pop();

}

function drawExtra() {
    push();
    fill("#799fd8")
    ellipse(200,525,300,300);
    pop();

}