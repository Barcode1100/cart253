/**
 * Title of Project
 * Author Name
 * 
 * Its a spooky eye
 */

"use strict";

//Declaring the eye parts

let eyeSize = 150;

let pulseSpeed = 1;

let pupilSize = 40;

//variables to make eye fade from red to black
let redAmount = 0;

let fadeSpeed = 0.01;

function setup() {
    createCanvas(400, 400);


}

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

    //The pupill

    let pupilX = constrain(mouseX, 170, 230);
    let pupilY = constrain(mouseY, 190, 210);

    // Fade between black and red
    redAmount = redAmount + fadeSpeed;

    //pupil colour shifts

    if (redAmount > 1 || redAmount < 0) {
        fadeSpeed = -fadeSpeed;
    }

    let pupilColor = lerpColor(color(0), color(255, 0, 0), redAmount);




    fill(pupilColor);
    ellipse(pupilX, pupilY, pupilSize, pupilSize);




}



