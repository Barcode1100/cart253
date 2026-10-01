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
let moonImage;

let moonSize = 30;

let moonY = 80;

let growSpeed = 0.5;

let fallSpeed = 0.2;

let shake = 0;

function preload() {
    moonImage = loadImage("assets/images/moon.png.png");
}

function setup() {
    createCanvas(400, 400);
}

/**
 * draws landscape as the moon grows and falls, the shaking gets stronger.!
*/
function draw() {
    background(10, 10, 40);

    //bigger moon means bigger shake!!

    shake = (moonSize - 30) * 0.05;

    translate(random(-shake, shake), random(-shake, shake));

    if (moonSize < 350) {
        moonSize = moonSize + growSpeed;
        moonY = moonY + fallSpeed;
    }

    // Moon png
    if (moonImage && moonImage.width > 1) {
        imageMode(CENTER);
        image(moonImage, 200, moonY, moonSize, moonSize);
    } else {
        fill(240, 240, 200);
        ellipse(200, moonY, moonSize, moonSize);
    }

    // Ground (extra wide and tall so the edges never show while shaking)
    fill(30, 120, 40);
    rect(-50, 300, 500, 150);
}