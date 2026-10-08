/**
 * 
 * Ghost Finder
 * Sawyer Power
 * 
 * 
 * 
 */

"use strict";

let ghost = {
    x: 500,
    y: 500,
    size: 300
};
/**
 * created my canvas
*/
function setup() {
    createCanvas(1000, 1000);

}


/**
 * Changed background and ghost based off 
 * of how close you are to it.
*/
function draw() {
      let d = dist(mouseX, mouseY, ghost.x, ghost.y);

    if (d < 120) {
        // when mouse is close to the ghost the background changes and ghost becomes scary
        background("#4a0000");
        drawGhost("#ffffff");
        drawScaryFace();
    }
    else if (d < 300) {
        background("#0b0b1a");
        drawGhost("#8a8a9a");
        drawCalmFace();
    }
    else {
        // when its far away the ghost is invisible except for the eyes
        background("#0b0b1a");
        drawGlowingEyes();
    }

    drawFlashlight();

}

//draws the ghosts body

function drawGhost(color) {
    push();
    noStroke();
    fill(color);
    ellipse(ghost.x, ghost.y, ghost.size);
    rect(ghost.x - ghost.size / 2, ghost.y, ghost.size, ghost.size / 1.5);
    pop();
}

//this creates the "calmer" ghost face when called
function drawCalmFace() {
    push();
    noStroke();
    fill("#000000");

    // eyes
    ellipse(ghost.x - 60, ghost.y - 20, 30);
    ellipse(ghost.x + 60, ghost.y - 20, 30);

    // little "o" shaped mouth
    ellipse(ghost.x, ghost.y + 50, 25);
    pop();
}

//the will draw the "scary" face of the ghost when called
function drawScaryFace() {
    push();
    noStroke();

    //red eyes
    fill("#ff0000");
    ellipse(ghost.x - 60, ghost.y - 20, 55);
    ellipse(ghost.x + 60, ghost.y - 20, 55);

    //screaming mouth
    fill("#000000"); 
    ellipse(ghost.x, ghost.y + 70, 90, 130);
    pop();
}

//draws the glowing red eyes of the ghost when its far away
function drawGlowingEyes() {
    push();
    noStroke();
    fill("#ff0000");
    ellipse(ghost.x - 60, ghost.y - 20, 25);
    ellipse(ghost.x + 60, ghost.y - 20, 25);
    pop();
}

// a see through yellow circle that is meant to represent
// a flashlight...
function drawFlashlight() {
    push();
    noStroke();
    fill(255, 255, 150, 60);
    ellipse(mouseX, mouseY, 200);
    pop();
}