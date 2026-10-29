/**
 * Shark Attack
 * Sawyer Power
 * 
 * A bunch of spinning sharks will follow you around, click to make them go away!
 */

"use strict";

// the cute shark gif
const sharkCount = 25;
const scareTime = 1000;   // how long the sharks run away after a click

let sharkGif;    

let sharks = [];       // made by createShark()
let scaredUntil = 0;   // when the sharks stop being scared

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
 * Creates a shark object with random starting position, size, speed and offset from mouse
 */
function createShark() {
    return {
        x: random(width),
        y: random(height),
        size: random(40, 90),
        speed: random(0.02, 0.07),
        offsetX: random(-120, 120),   // each shark hangs around the mouse in its own spot
        offsetY: random(-120, 120),
        wobble: random(TWO_PI)
    };
}

/**
 * Returns where a shark wants to go, like near the mouse, or away from it if scared!
 */
function getTarget(shark, scared) {
    if (scared) {
        // Run in the direction directly away from the mouse
        const angle = atan2(shark.y - mouseY, shark.x - mouseX);
        return {
            x: constrain(shark.x + cos(angle) * 600, 0, width),
            y: constrain(shark.y + sin(angle) * 600, 0, height)
        };
    }

    return {
        x: mouseX + shark.offsetX,
        y: mouseY + shark.offsetY
    };
}
