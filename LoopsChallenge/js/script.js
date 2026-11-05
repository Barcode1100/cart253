/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    for (let gradientY = 0; gradientY <= height; gradientY++) {
        let red = map(gradientY, 0, height, gradientY, 255, 100);
        stroke(red, 34, 123)
        line(0, gradientY, width, gradientY);

    }

    let x = 0;
    let hshade = 0;
    while (x <= width) {
        line(x, 0, x, height);
        x += 50;
        hshade += 25;
    }

    let y = 0;
    let vshade = 0;
    while (y <= height) {
        line(0, y, width, y);
        y += 50;
        vshade += 25;
    }
}