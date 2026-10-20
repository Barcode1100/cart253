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


function mousePressed() {
    if (!started) {
        morshuVideo.loop();
        started = true;
        timer = 10;
    }
}