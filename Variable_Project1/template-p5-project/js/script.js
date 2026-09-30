/**
 * Plant
 * Sawyer Power
 * 
 * The best showcase of growth
 */

"use strict";

let plantHeight = 40;
//How tall the plant is
let leafSize = 5;
// size of the leaf
let growthSpeed = 0.3;
// how fast it grows!
let stemWidth = 10;
let leafGrowthSpeed = 0.05;
// how fast the leaves grow!

/**
 * Creating my canvas
*/



function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(100, 200, 225);

    let stemTop = 380 - plantHeight;

    //stem of plant
    stroke(10, 130, 50);
    strokeWeight(stemWidth);



    line(200, 400, 200, 175 + stemTop);

    //leaves

    noStroke();
    fill(70, 160, 70);

    ellipse(190, stemTop - 5, leafSize, leafSize);
    ellipse(210, stemTop - 20, leafSize, leafSize);

    // making the plant grow!!

    plantHeight += growthSpeed;

    // leaves also grow

    leafSize += leafGrowthSpeed;




}