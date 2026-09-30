/**
 * Plant
 * Sawyer Power
 * 
 * The best showcase of growth
 */

"use strict";

let plantHeight = 20;
//How tall the plant is
let leafSize = 5;
// size of the leaf
let growthSpeed = 0.3;
// how fast it grows!
let stemWidth = 10;
// how fast the leaves grow!
let leafGrowthSpeed = 0.05;

/**
 * Creating my canvas
*/



function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(220);

    //stem of plant
    stroke(40, 130, 50);
    strokeWeight(stemWidth);

    let stemTop = 380 - plantHeight;

    line(200, 300, 200 - stemTop);

    //leaves

    noStroke();
    fill(50, 160, 70);

    ellipse(190, stemTop + 10, leafSize, leafSize);
    ellipse(210, stemTop + 30, leafSize, leafSize);

    // making the plant grow!!

    plantHeight += growthSpeed;

    // leaves also grow

    leafSize += leafGrowthSpeed




}