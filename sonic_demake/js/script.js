/**
 * Sonic 1 Demake
 * Sawyer Power
 * 
 * Play as sonic, click to jump and make sure you collect as many rings as you can!
 */

"use strict";

const groundY = 360;   // lines up with the grass in the background
const speed = 9;
const playerRadius = 30;   // half the size the player image is drawn at

let sonic;    
let motobug;   
let ringImage; 
let bgImage;   

let playerY = groundY - playerRadius;
let playerSpeedY = 0;
let score = 0;
let gameOver = false;

// Ring 1
let ring1X = 800;
let ring1Y = groundY - 30;

// Ring 2 (up high, you have to jump for it)
let ring2X = 1200;
let ring2Y = groundY - 110;

// Motobug
let motobugX = 1000;

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
 * the main draw loop, draws the background, player, rings and bugs, and checks for collisions.
*/
function draw() {
    // Background (it already has the ground in it)
    image(bgImage, width / 2, height / 2, width, height);

    if (!gameOver) {
        // Player jumping and falling
        playerSpeedY += 0.8;
        playerY += playerSpeedY;
        if (playerY > groundY - playerRadius) {
            playerY = groundY - playerRadius;
            playerSpeedY = 0;
        }

        // Move ring 1
        ring1X -= speed;
        if (ring1X < -50) {
            ring1X = width + random(100, 400);
        }

        // Move ring 2
        ring2X -= speed;
        if (ring2X < -50) {
            ring2X = width + random(100, 400);
        }

        // Move motobug
        motobugX -= speed;
        if (motobugX < -50) {
            motobugX = width + random(100, 400);
        }

        // Check ring 1
        if (dist(120, playerY, ring1X, ring1Y) < 42) {
            score++;
            ring1X = width + random(100, 400);
        }

        // Check ring 2
        if (dist(120, playerY, ring2X, ring2Y) < 42) {
            score++;
            ring2X = width + random(100, 400);
        }

        // Check motobug
        if (dist(120, playerY, motobugX, groundY - 25) < 45) {
            gameOver = true;
        }
    }

    