/**
 * Sonic 1 Demake
 * Sawyer Power
 * 
 * Play as sonic, click to jump and make sure you collect as many rings as you can!
 */

"use strict";

let sonic;    
let motobug;   
let ringImage; 
let bgImage;   

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(700, 500);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    noSmooth();   // keeps the pixel art sharp when it is scaled up
 
    sonic = await loadImage("assets/images/sonic-running.gif");
    motobug = await loadImage("assets/images/motobug.webp");
    ringImage = await loadImage("assets/images/ring.gif");
    bgImage = await loadImage("assets/images/greenhill.gif");
}
 


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}