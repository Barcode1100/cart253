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
 * sets up the canvas, loads all the pngs, and starts the tournament.
 * 
*/
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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}