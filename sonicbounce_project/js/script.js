/**
 * Sonic Bounce
 * Sawyer Power
 * 
 * Click and make a sonic character bounce around the screen!
 */

"use strict";

const characterFiles = ["sonic.png", "tails.png", "knuckles.png", "jet.png", "shadow.png"];

const startCount = 0;    // how many balls are made at the start 

const maxSpeed = 20;      // the fastest a ball can move in any direction (raise this to go faster)

let images = [];   // character images array

let balls = [];    // made by createBall()

let bgImage;       // the background image


/**
 * sets up the canvas, loads all the pngs, and uses a loop to make the first sonic character bounce around the screen.
*/
async function setup() {
     createCanvas(windowWidth, windowHeight);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    imageMode(CENTER);

    bgImage = await loadImage("assets/images/metal.webp");

    for (let file of characterFiles) {
        images.push(await loadImage("assets/images/" + file));
    }

    for (let i = 0; i < startCount; i++) {
        balls.push(createBall(random(width), random(height)));
    }

}


/**
 * runs every frame then moves and draws every ball in the array.
*/
function draw() {
    // Background image, stretched to fill the whole canvas

    image(bgImage, width / 2, height / 2, width, height);

    for (let ball of balls) {
        moveBall(ball);
        drawBall(ball);
    }
}

//Returns a new ball object at the given position with a random character,

function createBall(x, y) {
    const img = random(images);
    const size = random(10, 200);

    return {
        x: x,
        y: y,
        vx: random(-maxSpeed, maxSpeed),
        vy: random(-maxSpeed, maxSpeed),
        img: img,
        w: size,
        h: size * img.height / img.width   // keeps the png's shape
    };
}

//Moves a ball and makes it bounce off the edges of the screen.

function moveBall(ball) {
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x < ball.w / 2 || ball.x > width - ball.w / 2) {
        ball.vx *= -1;
        ball.x = constrain(ball.x, ball.w / 2, width - ball.w / 2);
    }

    if (ball.y < ball.h / 2 || ball.y > height - ball.h / 2) {
        ball.vy *= -1;
        ball.y = constrain(ball.y, ball.h / 2, height - ball.h / 2);
    }
}

// draws one sonic character at the given position and size

function drawBall(ball) {
    image(ball.img, ball.x, ball.y, ball.w, ball.h);
}

// Click to add a new ball at the mouse
function mousePressed() {
    balls.push(createBall(mouseX, mouseY));
}

// Keeps the sketch filling the browser window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}