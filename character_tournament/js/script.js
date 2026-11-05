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
    "Silver.png", "brown.png", "muscleman.png", "walter.png"
];

let images = [];       // one loaded png for each file in characterFiles
let contenders = [];   // the line of characters still in it (positions in images), the first two are fighting
let eliminated = [];   // everyone who has lost, in the order they lost


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
