/**
 * Phillips CD-i Demake
 * Sawyer Power
 *
 */

"use strict";

let morshuVideo;
let started = false;
let showShop = false;
let shopShown = false;   // makes sure that the shop menu only appears once

const PAUSE_TIME = 10;   // seconds into the video where it pauses

const yesBtn = { x: 190, y: 330, w: 100, h: 50 };
const noBtn  = { x: 350, y: 330, w: 100, h: 50 };


function setup() {
    createCanvas(640, 480);

    morshuVideo = createVideo(["assets/videos/morshuvid.mp4"]);
    morshuVideo.hide();
    morshuVideo.volume(1);
}


function draw() {
      background(0);
    image(morshuVideo, 0, 0, width, height);

    // Trigger the shop menu based on the video's own clock
    if (started && !shopShown && morshuVideo.time() >= PAUSE_TIME) {
        morshuVideo.pause();
        showShop = true;
        shopShown = true;
    }

    if (showShop) {
        drawShopScreen();
    }
}

//this will give us the shop menu and call the drawButton function to draw the buttons on the screen
function drawShopScreen() {
    fill(0, 220);
    noStroke();
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("0 Rupees", width / 2, 150);
    textSize(28);
    text("Buy?", width / 2, 230);

    drawButton(yesBtn, "Yes");
    drawButton(noBtn, "No");
}


//draws the buttons and adds a hover effect when the mouse is over the button
function drawButton(btn, label) {
    stroke(255);
    strokeWeight(2);
    fill(isInside(btn) ? 80 : 0);
    rect(btn.x, btn.y, btn.w, btn.h);

    noStroke();
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

//checks to see if the mouse is inside the button's area
function isInside(btn) {
    return mouseX > btn.x && mouseX < btn.x + btn.w &&
           mouseY > btn.y && mouseY < btn.y + btn.h;
}

//starts the video when the mouse is pressed and sets the timer to 10 seconds
function mousePressed() {
    if (!started) {
        morshuVideo.play();
        started = true;
        return;
    }

    // Only the Yes button closes the shop screen
    if (showShop && isInside(yesBtn)) {
        showShop = false;
        morshuVideo.play();
    }
}