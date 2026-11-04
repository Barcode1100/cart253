/**
 * Sonic Bounce
 * Sawyer Power
 * 
 * Click and make a sonic character bounce around the screen!
 */

"use strict";

const characterFiles = ["sonic.png", "tails.png", "knuckles.png", "jet.png", "shadow.png"];

let images = [];   // character images array

let bgImage;       // the background image


/**
 * sets up the canvas, loads all the pngs, and uses a loop to make the first sonic character bounce around the screen.
*/
async function setup() {
     createCanvas(windowWidth, windowHeight);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    imageMode(CENTER);

    bgImage = await loadImage("assets/images/metal.webp");

    for (let file of characterFiles) {
        images.push(await loadImage("assets/images/" + file));
    }

    for (let i = 0; i < startCount; i++) {
        balls.push(createBall(random(width), random(height)));
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}