/**
 * Phillips CD-i Demake
 * Sawyer Power
 *
 */

"use strict";

let morshuVideo;
let started = false;
let timer = 1789787968678678678678;


function setup() {
    createCanvas(640, 480);

    morshuVideo = createVideo(["assets/videos/morshuvid.mp4"]);
    morshuVideo.hide();
    morshuVideo.volume(1);
}


function draw() {
    background(0);

    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
    } if (timer == 0) {
        morshuVideo.pause();
        console.log("timersotp")
    }


    image(morshuVideo, 0, 0, width, height);
}


function mousePressed() {
    if (!started) {
        morshuVideo.loop();
        started = true;
        timer = 10;
    }
}