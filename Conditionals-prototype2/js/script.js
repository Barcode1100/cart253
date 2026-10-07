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
    let (d < 120){
        background("#4a0000");
        drawGhost("#ffffff");
        drawScaryFace();
    }
    else if (d < 300) {
        background("#0b0b1a");
        drawGhost("#8a8a9a");
        drawCalmface();
        
    }
    else{
        background("#0b0b1a");
        drawGlowingEyes();
    }

    drawFlashlight();

}

function drawGhost(color) {
    push();
    noStroke();
    fill(color);
    ellipse(ghost.x, ghost.y, ghost.size);
    rect(ghost.x - ghost.size / 2, ghost.y, ghost.size, ghost.size / 1.5);
    pop();
}