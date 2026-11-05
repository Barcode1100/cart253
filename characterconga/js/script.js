/**
 * Character Conga
 * 
 * Click the screen to add a new character to the conga line, if you keep clicking you may see a special someone...
 * 
 */

"use strict";

const characterFiles = [
    "Cloud.png", "Sephiroth.png", "Sora.png", "Snake.png", "Link.png",
    "Raiden.png", "Noctis.png", "Squall.png", "James.png", "Dante.png",
    "Leon.png", "Chris.png", "Luigi.png", "Makoto.png", "Riku.png",
    "Gackt.png", "Miku.png", "Roxas.png", "N.png", "Sayori.png",
    "Silver.png", "brown.png", "muscleman.png", "walter.png"
];

const characterSize = 220;   // how tall each character is in the line
const spacing = 90;          // how close each character gets to the one in front

/**
 * sets up the canvas and loads all the pngs.
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
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}