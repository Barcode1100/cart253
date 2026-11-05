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

let images = [];      // one loaded png for each file in characterFiles
let followers = [];   // the line itself, it starts empty

let shake = 0;                     // how hard the screen is shaking
let flash = 0;                     // how bright the flash is
let flashColor = [255, 255, 255];  // what color the flash is

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
 * runs every frame. characters that are still posing stay put (Gackt also makes the
 * screen shake and strobe). everyone else shrinks and follows the one in front.
*/
function draw() {
    background(40);

    for (let i = 0; i < followers.length; i++) {
        const follower = followers[i];

        if (isPosing(follower)) {
            // Gackt's radiant entrance is just constant shaking and a strobing flash in random colors
            if (follower.isGackt) {
                shake = 30;
                if (frameCount % 6 === 0) {
                    flash = 220;
                    flashColor = [random(255), random(255), random(255)];
                }
            }
            continue;
        }

        // Shrink down to normal size
        follower.grow = lerp(follower.grow, 1, 0.08);

        // The first one follows the mouse, everyone else follows the one in front
        let leader = { x: mouseX, y: mouseY };
        if (i > 0) {
            leader = followers[i - 1];
        }

        //  They move closer, but stop once they are close enough
        if (dist(follower.x, follower.y, leader.x, leader.y) > spacing) {
            follower.x = chase(follower.x, leader.x, 0.15);
            follower.y = chase(follower.y, leader.y, 0.15);
        }
    }

    // Everything shakes during an entrance
    push();
    translate(random(-shake, shake), random(-shake, shake));
    for (let follower of followers) {
        drawFollower(follower);
    }
    pop();

    // Flash that fades out
    if (flash > 1) {
        noStroke();
        fill(flashColor[0], flashColor[1], flashColor[2], flash);
        rect(0, 0, width, height);
    }

    // Gackt's name slams onto the screen while hes there so people know whats up
    for (let follower of followers) {
        if (follower.isGackt && isPosing(follower)) {
            fill(255, 0, 0);
            textSize(height * 0.15);
            text("GACKT", width / 2, height * 0.85);
        }
    }

    shake *= 0.9;
    flash *= 0.88;
}

// Returns true if the character is still doing their entrance thing

function isPosing(follower) {
    return millis() - follower.born < follower.poseTime;
}

// returns a new character, most start 1.8x bigger at a random spot near the middle
//Gackt starts in the middle and is larger while he also poses longer cause hes special.

function createFollower(img, isGackt) {
    return {
        img: img,
        isGackt: isGackt,
        born: millis(),
        poseTime: isGackt ? 2500 : 700,
        grow: isGackt ? height / characterSize : 1.8,
        x: isGackt ? width / 2 : random(width * 0.25, width * 0.75),
        y: isGackt ? height / 2 : random(height * 0.35, height * 0.65),
        w: characterSize * img.width / img.height,   // keeps the png's shape
        h: characterSize                             // every character is the same height
    };
}

