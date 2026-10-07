/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//declares my buttons

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
    x: undefined,
    y: undefined,
    size: 100,
    Image: undefined
};

// image setup

let state = "playing";

async function setup() {
    createCanvas(1000, 1000);
    hand.image = await loadImage("assets/images/hand.png");
}





/**
 * creates the canvas!
*/
function setup() {
    createCanvas(1000, 1000);

}


/**
 * Creates the screen and the text screen once a button is pushed
*/
function draw() {
    background("#5e70d7");

    if (state === "exploded") {
        drawEndScreen("You exploded the world", "#ff0000");
    }
    else if (state === "safe") {
        drawEndScreen("You did not explode the world", "#01e628");
    }
    else {
        moveHand();
        drawBadButton();
        drawGoodButton();
        drawHand();

        if (checkBadButton()) {
            state = "exploded";
        }
        else if (checkGoodButton()) {
            state = "safe";
        }
    }



}

function drawBadButton() {
    push();
    noStroke();
    fill(badButton.fill);
    ellipse(badButton.x, badButton.y, badButton.size);
    pop();


}

function drawGoodButton() {
    push();
    noStroke();
    fill(goodButton.fill);
    ellipse(goodButton.x, goodButton.y, goodButton.size);
    pop();
}


function checkBadButton() {
    let d = dist(hand.x, hand.y, badButton.x, badButton.y);
    if (d > ((hand.size / 2) + (badButton.size / 2))) {
        return false;
    } else {
        return true;
    }

}

function checkGoodButton() {
    let d = dist(hand.x, hand.y, goodButton.x, goodButton.y);
    if (d > ((hand.size / 2) + (goodButton.size / 2))) {
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
    imageMode(CENTER);
    image(hand.image, hand.x, hand.y, hand.size, hand.size);
    pop();
}
// This is what makes the text appear

function drawEndScreen(message, color) {
    push();
    background("#000000");
    textAlign(CENTER, CENTER);
    fill(color);
    textSize(60);
    text(message, width / 2, height / 2);
    fill("#ffffff");
    textSize(30);
    text("Click to try again", width / 2, height / 2 + 100);
    pop();
}

function mousePressed() {
    state = "playing";
}
