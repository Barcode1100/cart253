/**
 * Plant
 * Sawyer Power
 * 
 * The best showcase of growth
 */

"use strict";

let plantHeight = 20;
//How tall the plant is
let leafSize = 10;
// size of the leaf
let growthSpeed = 0.3;
// how fast it grows!

/**
 * Creating my canvas
*/



function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(220);

    //stem of plant
    line(200, 400, 200, 400 - plantHeight)

    //leaves

    ellipse(185, 380 - plantHeight, leafSize, leafSize);
    ellipse(215, 350 - plantHeight, leafSize, leafSize);




}