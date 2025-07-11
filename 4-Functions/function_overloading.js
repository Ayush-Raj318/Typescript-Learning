"use strict";
// pehle function signature create karenge fir batayemge ko functiom kya return karega
function bac(a, b) {
    if (typeof a === "string" && typeof b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("Something is Wrong");
}
bac('HEY');
bac("hey", 12);
