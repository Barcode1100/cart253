/**
 * Variable Prototype
 * Sawyer Power
 * 
 * The Description is still unclear because i dont know what im doing yet
 */

"use strict";

/**
 * Creating my canvas
*/

let ball = {
    x: 250,
    y: 250,
    size: 50
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(177, 156, 219);

    // Move the bird
    ball.x = ball.x + 1;
    ball.y = ball.y - 2;

    // Draw the bird
    ellipse(ball.x, ball.y, ball.size);

}