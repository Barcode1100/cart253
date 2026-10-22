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

    // Run clicked() when the canvas is clicked
    document.querySelector("canvas").addEventListener("mousedown", clicked);
}

function draw() {
    background(0);

    // Start screen
    if (!playing && !failed) {
        drawText("Click the Freddy", "Click to start");
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
        drawText("You Died!", "Score: " + score + "   Best: " + best + "\nClick to try again");
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

//created a flashlight just like the games with low opacity 
function drawFlashlight() {
    noStroke();
    fill(255, 230, 0, 60);
    circle(mouseX, mouseY, 120);
}

// Draws a big title with smaller text underneath
function drawText(title, subtitle) {
    fill(255);
    noStroke();
    textSize(56);
    text(title, width / 2, height / 2 - 40);
    textSize(22);
    text(subtitle, width / 2, height / 2 + 40);
}

// Starts a new game
function startGame() {
    playing = true;
    failed = false;
    score = 0;
    freddyVisible = false;
    setNextSpawn();
}

// Picks a random time for Freddy to show up 
function setNextSpawn() {
    spawnTime = millis() + random(500, 4000);
}

// Puts Freddy in a random spot
function showFreddy() {
    freddyX = random(freddySize / 2, width - freddySize / 2);
    freddyY = random(freddySize / 2 + 40, height - freddySize / 2 - 40);
    freddyVisible = true;
    hideTime = millis() + showTime;
}

// Ends the game
function gameOver() {
    playing = false;
    failed = true;
    freddyVisible = false;
    failTime = millis();

    if (score > best) {
        best = score;
    }
}

// Runs when the mouse is pressed on the canvas
function clicked() {
    // Not playing, so a click starts the game (after a short delay cuz again, reaction time)
    if (!playing) {
        if (millis() - failTime > 500) {
            startGame();
        }
        return;
    }

    // Player clicked Freddy, so increase score and hide him
    if (freddyVisible && dist(mouseX, mouseY, freddyX, freddyY) < freddySize / 2) {
        score++;
        freddyVisible = false;
        setNextSpawn();
    }
}