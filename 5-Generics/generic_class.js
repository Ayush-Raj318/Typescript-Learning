"use strict";
class BottleMaker {
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("hey");
let b2 = new BottleMaker(12);
console.log(b1, b2);
