/**
 * Title of Project
 * Author Name
 * 
 * Its a spooky eye
 */

"use strict";

//Declaring the eye parts

let baseSize = 150;
// The  size of the eye

let pulseAmount = 50;
// How far the eye grows and shrinks

let pulseSpeed = 0.05;
// How quickly the eye pulses

let pupilSize = 40;
// Controls the size of the pupil

function setup() {

} createCanvas(400, 400);


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(20);

    // Eye
    fill(255);
    ellipse(200, 200, eyeSize, eyeSize * 0.6);

    // Pupil
    fill(0);
    ellipse(mouseX, mouseY, pupilSize, pupilSize);

    // Pulse
    eyeSize += pulseSpeed;

}