/**
 * Become a Drummer
 * Sawyer Power
 * 
 * When you press a key (WASD) a drum sound plays! 
 * Try and make a tune from it.
 */

"use strict";

let kick, snare, hihat1, hihat2;

/**
 * This creates the canvas and will also load the sound when called.
*/
async function setup() {
    createCanvas(700, 700);
    textAlign(CENTER, CENTER);

    // Put your audio files in the sounds folder and change these names to match.
    kick = await loadSound("assets/sounds/kicksound.mp3");
    snare = await loadSound("assets/sounds/snaresound.mp3");
    hihat1 = await loadSound("assets/sounds/highhat1.wav");
    hihat2 = await loadSound("assets/sounds/highhat2.wav");
}

//draw function draws the background as well as the text, labelling the different buttons
function draw() {
    background(30);
    fill(255);
    textSize(20);
    text("| W |  kick  | A |  snare  | S |  hihat 1  | D |  hihat 2", width / 2, height / 2);
}

function keyPressed() {
    // Ignore key presses until the sounds have finished loading
    if (!kick || !snare || !hihat1 || !hihat2) return;

    // so Caps Lock / Shift still works
    const k = key.toLowerCase();

    if (k === "w") kick.play();
    if (k === "a") snare.play();
    if (k === "s") hihat1.play();
    if (k === "d") hihat2.play();
}