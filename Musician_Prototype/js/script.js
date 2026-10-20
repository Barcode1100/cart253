/**
 * Become a Musician
 * Sawyer Power
 * 
 * When you press a key (WASD) a sound plays! 
 * Try and make a tune from it.
 */

"use strict";

/**
 * This creates the canvas and will also load the sound when called.
*/
async function setup() {
    createCanvas(500, 500);
    textAlign(CENTER, CENTER);

    kick = await loadSound("sounds/kicksound.mp3");
    snare = await loadSound("sounds/snaresound.mp3");
    piano1 = await loadSound("sounds/piano1.wav");
    piano2 = await loadSound("sounds/piano2.wav");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}