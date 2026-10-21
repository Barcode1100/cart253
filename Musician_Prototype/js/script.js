/**
 * Become a Musician
 * Sawyer Power
 * 
 * When you press a key (WASD) a sound plays! 
 * Try and make a tune from it.
 */

"use strict";

let kick, snare, piano1, piano2;

/**
 * This creates the canvas and will also load the sound when called.
*/
async function setup() {
    createCanvas(700, 700);
    textAlign(CENTER, CENTER);

    // Put your audio files in the sounds folder and change these names to match.
    kick = await loadSound("assets/sounds/kicksound.mp3");
    snare = await loadSound("assets/sounds/snaresound.mp3");
    piano1 = await loadSound("assets/sounds/snaresound.mp3");
    piano2 = await loadSound("assets/sounds/snaresound.mp3");
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

    // so Caps Lock / Shift still works
    const k = key.toLowerCase();

    if (k === "w") kick.play();
    if (k === "a") snare.play();
    if (k === "s") piano1.play();
    if (k === "d") piano2.play();
}