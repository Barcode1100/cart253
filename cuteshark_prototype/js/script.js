/**
 * Shark Attack
 * Sawyer Power
 * 
 * A bunch of spinning sharks will follow you around, click to make them go away!
 */

"use strict";

// the cute shark gif

let sharkGif;    
/**
 * loads the shark gif and sets up the canvas
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    imageMode(CENTER);

    sharkGif = await loadImage("assets/images/blahajtrans.gif");

    for (let i = 0; i < sharkCount; i++) {
        sharks.push(createShark());
    }
}

// Draws the water background and the sharks
function draw() {
    drawWater();

    const scared = millis() < scaredUntil;

    for (let shark of sharks) {
        const target = getTarget(shark, scared);

        // Move a little closer to the target
        shark.x = chase(shark.x, target.x, shark.speed);
        shark.y = chase(shark.y, target.y, shark.speed);

        // A little up and down wobble so they look alive
        const wobble = sin(frameCount * 0.1 + shark.wobble) * 5;

        drawShark(shark.x, shark.y + wobble, shark.size);
    }
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}