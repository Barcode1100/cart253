/**
 * Title of Project
 * Author Name
 * 
 * Its a spooky eye
 */

"use strict";

//Declaring the eye parts

let eyeSize = 150;
// How big the eye is right now

let pulseSpeed = 1;
// How fast the eye grows or shrinks (it flips between 1 and -1)

let pupilSize = 40;
// How big the pupil is

function setup() {

} createCanvas(400, 400);


/**
 * the draw draws the eye for each frame
*/
function draw() {
    background(20);

    // Make the eye bigger or smaller
    eyeSize = eyeSize + pulseSpeed;

    // If the eye gets too big or too small, reverse direction
    if (eyeSize > 200 || eyeSize < 100) {
        pulseSpeed = - pulseSpeed;
    }

    // Eye
    fill(255);
    ellipse(200, 200, eyeSize, eyeSize * 0.6);


    // Pulse
    eyeSize += pulseSpeed;

}