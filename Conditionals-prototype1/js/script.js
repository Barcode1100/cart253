/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let badButton = {
    x: 300,
    y: 500,
    size: 150,
    fill: "#ff0000"
};

let goodButton = {
    x: 700,
    y: 500,
    size: 150,
    fill: "#01e628"
};

const hand = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    Image: undefined
};

let state = "playing";

async function setup() {
    createCanvas(1000, 1000);
    hand.image = await loadImage("assets/images/hand.png");
}





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
    background("#5e70d7");

    moveHand();


    drawHand();
    drawBadButton();
    drawGoodButton();


}

function drawBadButton() {
    push();
    noStroke();

    if (checkBadButton()) {
        badButton.fill = "#ff0000"

    } else {
        badButton.fill = "#ff0000"


    }
    fill(badButton.fill);
    ellipse(badButton.x, badButton.y, badButton.size);
    pop();
    ;


}

function checkBadButton() {
    let d = dist(hand.x, hand.y, badButton.x, badButton.y);
    if (d > ((hand.size / 2) + (badButton.size / 2))) {
        return false;
    } else {
        return true;
    }

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

