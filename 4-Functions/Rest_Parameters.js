"use strict";
// ... rest operator/spread operator
//function ke parameter me agr triple dot lagaya to aap wahaan par saare diye gaye args ko ek hi variable me as an array rakh rahe ho
function abc(...arr) {
    console.log(arr);
}
abc(1, 2, 3, 4, 5, 6, 7, 8, 9);
function people(...args) {
    console.log(args[0]);
}
people("ayush", "rohit", "aman");
//spread
var rrr = [1, 2, 3, 4, 5];
var rrr2 = [...rrr];
