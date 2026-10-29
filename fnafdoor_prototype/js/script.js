/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const animatronics = ["freddy", "foxy", "bonnie", "chica"];

let images = {}; 
let doorImage; 
let jumpscareSound; 

let doors = [];   
let state = "playing";
let scaredBy = "";
let endTime = 0; 
/**
 * sets up the canvas, loads the gifs and the sound, and starts the game.

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
 * runs every frame. shows the hallway while playing,
 * the jumpscare if you opened the wrong door, or the win screen.
*/
function draw() {
    if (state === "playing") {
        drawHallway();

        for (let door of doors) {
            drawDoor(door.x, door.y, door.w, door.h, isOver(door.x, door.y, door.w, door.h));
        }

        drawText("Pick a door", "");
    }

    if (state === "jumpscare") {
        drawJumpscare(images[scaredBy]);

        // Only show the try again text after a moment so the scare isn't covered up
        if (millis() - endTime > restartDelay) {
            drawText("You Died!", "Click to try again");
        }
    }

    if (state === "win") {
        background(255, 240, 150);
        drawText("You Escaped!", "Click to play again");
    }
}

//Returns a list of 5 doors. The things hiding behind them get shuffled,
//The win door changes every game...

function createDoors() {
    const behind = shuffle(["freddy", "foxy", "bonnie", "chica", "safe"]);
    let list = [];

    for (let name of behind) {
        list.push(createDoor(name));
    }

    return list;
}

//Returns a new door object

function createDoor(behind) {
    return {
        behind: behind,
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
}

//formats the doors on the screen so they are evenly spaced and centered

function layoutDoors() {
    const doorH = height * 0.5;
    const doorW = doorH * doorImage.width / doorImage.height;   // keeps the image's shape
    const gap = (width - doorW * doors.length) / (doors.length + 1);

    for (let i = 0; i < doors.length; i++) {
        doors[i].x = gap + i * (doorW + gap);
        doors[i].y = height * 0.28;
        doors[i].w = doorW;
        doors[i].h = doorH;
    }
}
