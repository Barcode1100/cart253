/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

// declarations for the size of the moon 
// and how fast the moon falls and the canvas shakes

let moonSize = 30;

let moonY = 80;

let growSpeed = 0.5;

let fallSpeed = 0.2

let Shake = 0;


function setup() {
    createCanvas(400, 400);

}


/**
 * draws landscape as the moon grows and falls, the shaking gets stronger.!
*/
function draw() {
    background(10, 10, 40);

    //bigger moon means bigger shake!!

    Shake = (moonSize - 30) * 0.05;

}