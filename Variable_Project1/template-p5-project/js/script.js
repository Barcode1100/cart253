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
let ballSize = 100

function setup() {
    createCanvas(500, 500);

}


/**
 * Drawing the background...
*/
function draw() {

    background(177, 156, 217)

    push();
    noStroke();
    fill(225, 0, 0)
    circle(250, 250, ballSize)
    pop();

} 