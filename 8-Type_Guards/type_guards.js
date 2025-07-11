"use strict";
function abcd(arg) {
    if (typeof arg === "number") {
        return "number";
    }
    else if (typeof arg === "string") {
        return "string";
    }
    else {
        throw new Error("pagal hogaya hai kay friends");
    }
}
console.log(abcd(12));
console.log(abcd("hello"));
//abcd(true); //this will give error
