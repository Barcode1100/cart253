/**
 * Plant
 * Sawyer Power
 * 
 * The best showcase of growth
 */

"use strict";

let plantHeight = 40;
// How tall the plant is

let leafSize = 10;
// Size of the leaf

let growthSpeed = 0.2;
// How fast it grows!

let stemWidth = 40;

let leafGrowthSpeed = 0.15;
// How fast the leaves grow!


/**
 * Creating my canvas
 */

function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(100, 200, 225);

    // Find the top of the stem
    let stemTop = 380 - plantHeight;

    // Stem of plant
    stroke(10, 120, 50);
    strokeWeight(stemWidth);

    line(200, 480, 200, stemTop);

    // Leaves
    noStroke();
    fill(70, 160, 70);

    ellipse(190, stemTop - 5, leafSize, leafSize);
    ellipse(210, stemTop - 20, leafSize, leafSize);

    // Making the plant grow!!
    plantHeight += growthSpeed;

    // Leaves also grow
    leafSize += leafGrowthSpeed;
}