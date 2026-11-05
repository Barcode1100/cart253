/**
 * Character Tournament
 * 
 * 
 * Two characters face off. Click the one you like more. (i wanted an excuse to use the mound of pngs i collected)
 */

"use strict";

const characterFiles = [
    "Cloud.png", "Sephiroth.png", "Sora.png", "Snake.png", "Link.png",
    "Raiden.png", "Noctis.png", "Squall.png", "James.png", "Dante.png",
    "Leon.png", "Chris.png", "Luigi.png", "Makoto.png", "Riku.png",
    "Gackt.png", "Miku.png", "Roxas.png", "N.png", "Sayori.png",
    "Silver.png", "ClevelandBrownJr.png", "muscleman.png", "walter.png"
];



let images = []; // one loaded png for each file in characterFiles
let contenders = [];   // the line of characters still in it (positions in images), the first two are fighting
let eliminated = [];   // everyone who has lost, in the order they lost

let flash = 0;   // how bright the white flash is

//sets up the canvas, loads all the pngs, and starts the tournament.

async function setup() {
    createCanvas(windowWidth, windowHeight);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    for (let file of characterFiles) {
        images.push(await loadImage("assets/images/" + file));
    }

    startTournament();
}


/**
 * runs every frame. shows the two fighters while the tournament is going,
 * or the winner and their name once only one is left.
*/
function draw() {
    background(10, 20, 60);

    if (contenders.length > 1) {
        // Light up the side the mouse is on
        noStroke();
        fill(255, 25);
        if (mouseX < width / 2) {
            rect(0, 0, width / 2, height);
        } else {
            rect(width / 2, 0, width / 2, height);
        }

        drawCharacter(contenders[0], width * 0.3, height * 0.5, height * 0.6);
        drawCharacter(contenders[1], width * 0.7, height * 0.5, height * 0.6);

        fill(255);
        textSize(height * 0.08);
        text("VS", width / 2, height * 0.5);
        textSize(height * 0.04);
        text("Characters left: " + contenders.length, width / 2, height * 0.06);
    } else {
        fill(255, 220, 80);
        textSize(height * 0.08);
        text("WINNER", width / 2, height * 0.07);

        drawCharacter(contenders[0], width / 2, height * 0.47, height * 0.65);
    }

    // White flash that fades out
    if (flash > 1) {
        noStroke();
        fill(255, flash);
        rect(0, 0, width, height);
    }

    flash *= 0.85;
}

// Puts every character in the line in a random order and clears the losers
function startTournament() {
    let all = [];

    for (let i = 0; i < images.length; i++) {
        all.push(i);
    }

    contenders = shuffle(all);
    eliminated = [];
}

//returns name of the character just without the png part

function characterName(index) {
    return characterFiles[index].replace(".png", "");
}

// Draws one character at the given spot and height, with their name underneath.

function drawCharacter(index, x, y, h) {
    const img = images[index];

    image(img, x, y, h * img.width / img.height, h);

    fill(255);
    noStroke();
    textSize(height * 0.04);
    text(characterName(index), x, y + h / 2 + height * 0.05);
}

//Picks a winner (side 0 is the left character, 1 is the right).
//Both leave the front of the line, the winner goes to the back, and the loser is out. Classic array behaviour

function pickWinner(side) {
    const winner = contenders[side];
    const loser = contenders[1 - side];

    contenders.shift();
    contenders.shift();
    contenders.push(winner);
    eliminated.push(loser);

    // A bigger flash for the final result
    if (contenders.length === 1) {
        flash = 255;
    } else {
        flash = 100;
    }
}

// Click a side to pick that character, or click to start again once theres a winner
function mousePressed() {
    if (contenders.length === 1) {
        startTournament();
        return;
    }

    if (mouseX < width / 2) {
        pickWinner(0);
    } else {
        pickWinner(1);
    }
}

// Keeps the sketch filling the browser window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}