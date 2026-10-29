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

//returns true when the mouse is over a rectangle with the given position and size

function isOver(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

//draws one door and gives it a lighter look when the mouse hovers over it

function drawDoor(x, y, w, h, hovered) {
    if (hovered) {
        tint(255);
    } else {
        tint(180);
    }
    image(doorImage, x + w / 2, y + h / 2, w, h);
    noTint();
}

//spooky spooky hallway

function drawHallway() {
    background(20, 15, 25);
    noStroke();
    fill(35, 28, 28);
    rect(0, height * 0.78, width, height * 0.22);
}

//draws the jumpscare image in the center of the screen with some random offset for shake effect
function drawJumpscare(img) {
    background(0);
    const h = height;
    const w = h * img.width / img.height;
    image(img, width / 2 + random(-15, 15), height / 2 + random(-15, 15), w, h);
}

//Draws a title with smaller text underneath

function drawText(title, subtitle) {
    fill(255);
    noStroke();
    textSize(height * 0.08);
    text(title, width / 2, height * 0.12);
    textSize(height * 0.035);
    text(subtitle, width / 2, height * 0.2);
}

//Opens a door. A safe door wins the game, anything else is a jumpscare.

function openDoor(door) {
    endTime = millis();

    if (door.behind === "safe") {
        state = "win";
    } else {
        state = "jumpscare";
        scaredBy = door.behind;
        playJumpscare();
    }
}