"use strict";
//function tppes
// function abcd(name:string, cb:(value:string)=>void) {
// }
// abcd("ayush", (value:string) => {
//     console.log(value);
// })
function abcded(name, age, cb) {
    cb("hey");
}
abcded("ayush", 22, (arg) => {
    console.log(arg);
});
