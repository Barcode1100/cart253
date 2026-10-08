/**
 * Pet the Pikachu  
 * Sawyer Power
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declaring pikachu

let pikachu = {
    x: 500,
    y: 500,
    size: 300,
    fill: "yellow"
};

/**
 * creating the canvas!!
*/
function setup() {
    createCanvaas(1000, 1000);

}


/**
 * draws pikachu 
*/
function draw() {
    background("#5e70d7");

    drawPikachu();

    //if statement to check if the mouse is pressed down on pikachu

    if (checkPets()){
        drawHappyFace();
    }
    else {
        drawWaitingFace();
    }

}

// Returns true if the mouse presses pikachu

function checkPets() {
    let d = dist(mouseX, mouseY, pikachu.x, pikachu.y);
    if (mouseIsPressed && d < pikachu.size / 2) {
        return true;
    } else {
        return false;
    }
}

function drawPikachu() {
    push();
    noStroke();
    fill(pikachu.fill);

    // ears
    triangle(pikachu.x - 120, pikachu.y - 80, pikachu.x - 190, pikachu.y - 280, pikachu.x - 40, pikachu.y - 130);
    triangle(pikachu.x + 120, pikachu.y - 80, pikachu.x + 190, pikachu.y - 280, pikachu.x + 40, pikachu.y - 130);

    // head
    ellipse(pikachu.x, pikachu.y, pikachu.size);

    // red cheeks
    fill("#ff3b30");
    ellipse(pikachu.x - 105, pikachu.y + 50, 55);
    ellipse(pikachu.x + 105, pikachu.y + 50, 55);
    pop();
}
