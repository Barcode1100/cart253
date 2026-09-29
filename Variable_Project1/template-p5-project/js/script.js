/**
 * Intense Basketball
 * Sawyer Power
 * 
 * You are not going to want to bounce
  this basketball any longer
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