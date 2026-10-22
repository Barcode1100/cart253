/**
 * Click the Freddy
 * Sawyer Power
 *
 * Click the Freddy Fazbear every time he shows up!
 * If you take longer than half a second, you die!
 */

"use strict";

let freddy;

let playing = false;   // true while the game is running
let failed = false;    // true on the "You Died!" screen

let score = 0;
let best = 0;

// Freddy's position, size and if he is on screen right now
let freddyX = 0;
let freddyY = 0;
let freddySize = 130;
let freddyVisible = false;

const showTime = 500;   // how long you get to click him (ms)

let spawnTime = 0;      // when he shows up next
let hideTime = 0;       // when you run out of time
let failTime = -1000;   // when you failed (stops the game from instantly restarting so people have time to react)


/**
 * loads image and sets up event listeners
*/
async function setup() {
     createCanvas(700, 500);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    noCursor();

    freddy = await loadImage("assets/images/freddy.webp");

     // Run clicked() when the canvas is clicked and keyDown() when a key is pressed
    document.querySelector("canvas").addEventListener("mousedown", clicked);
    window.addEventListener("keydown", keyDown);
    

}

function draw() {
    background(0);
    
    // Start screen
    if (!playing && !failed) {
        drawText("Click the Freddy", "Click or press Space to start");
    }

    //actual game play
     if (playing) {
        // Time for Freddy to show up
        if (!freddyVisible && millis() >= spawnTime) {
            showFreddy();
        }

        // Out of time
        if (freddyVisible && millis() >= hideTime) {
            gameOver();
        }

        drawGame();
    }

     // Fail screen
    if (failed) {
        drawText("You Died!", "Score: " + score + "   Best: " + best + "\nClick or press Space to try again");
    }

    drawFlashlight();
}


/**
 * this will draw freddy and the score and also a bar that shows up much time you have left to get him.
*/
function drawGame() {
     if (freddyVisible) {
        image(freddy, freddyX, freddyY, freddySize, freddySize);

        // Bar along the top showing how much time is left
        const timeLeft = (hideTime - millis()) / showTime;
        fill(255, 80, 80);
        noStroke();
        rect(0, 0, width * constrain(timeLeft, 0, 1), 8);
    }

    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text("Score: " + score, 20, 30);
    textAlign(CENTER, CENTER);

}