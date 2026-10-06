/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let badButton = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
};

let goodButton = {
    x: 400,
    y: 200,
    size: 100,
    fill: "#01e628"
};

const hand = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#5e70d7")

    movehand();

    console.log(IsOverlapping());
    if (IsOverlapping()) {
        MovePuck();
    }

    drawHand();
    drawBadButton();
    drawGoodButton();


}

function moveHand() {
    hand.x = mouseX;
    hand.y = mouseY;
}


function drawHand() {
    push();
    noStroke();
    fill(hand.fill);
    ellipse(hand.x, hand.y, hand.size);
    pop();
}
