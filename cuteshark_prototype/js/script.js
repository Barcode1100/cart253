/**
 * Shark Attack
 * Sawyer Power
 * 
 * A bunch of spinning sharks will follow you around, click to make them go away!
 */

"use strict";

// the cute shark gif

let sharkGif;    
/**
 * loads the shark gif and sets up the canvas
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    imageMode(CENTER);

    sharkGif = await loadImage("assets/images/blahajtrans.gif");

    for (let i = 0; i < sharkCount; i++) {
        sharks.push(createShark());
    }
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}