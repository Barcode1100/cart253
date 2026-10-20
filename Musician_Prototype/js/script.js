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

//draw function draws the background as well as the text, labelling the different buttons
function draw() {
    background(30);
    fill(255);
    textSize(20);
    text("W kick   A snare   S piano 1   D piano 2", width / 2, height / 2);
}

function keyPressed() {
    // Ignore key presses until the sounds have finished loading
    if (!kick || !snare || !piano1 || !piano2) return;
    const k = key.toLowerCase(); // so Caps Lock / Shift still works

    if (k === "w") kick.play();
    if (k === "a") snare.play();
    if (k === "s") piano1.play();
    if (k === "d") piano2.play();
}


