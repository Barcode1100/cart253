
"use strict";


function setup() {
 createCanvas(400,400);

}

function draw() {
    background(114, 213, 255);
    drawSquare();
    drawTriangle();
    drawRect();
    drawWindow();
    drawWin();
    
}

function drawSquare() {
    push();
    fill(225,225,0)
    rectMode(CENTER) 
    square(200,300,200)
  
    pop();

}

function drawTriangle() {
    push();
    fill(225,0,0) 
    triangle(325,200,200,100,75,200)
  
    pop();

}

function drawRect() {
    push();
    fill(225,100,50) 
    rect(175,320,50,80)
  
    pop();

}

function drawWindow() {
    push();
    fill(20,100,225) 
    square(125,240,50)
  
    pop();

}

function drawWin() {
    push();
    fill(20,100,225) 
    square(225,240,50)
  
    pop();

}