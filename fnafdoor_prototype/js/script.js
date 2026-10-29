/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let images = {}; 
let doorImage; 
let jumpscareSound; 
/**
 * sets up the canvas, loads the gifs and the sound, and starts the game.
 * it's async so it can wait (await) for the gifs to load before draw() starts running.
*/
async function setup() {
    createCanvas(windowWidth, windowHeight);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    textAlign(CENTER, CENTER);
    imageMode(CENTER);

    for (let name of animatronics) {
        images[name] = await loadImage("assets/images/" + name + "scare.gif");
    }
    doorImage = await loadImage("assets/images/doortrans.png");
    jumpscareSound = new Audio("assets/sounds/fnafjumpscaresound.mp3");

    resetGame();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}