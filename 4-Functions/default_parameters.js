"use strict";
function abcd(name, age, gender = "not to be disclosed") {
    console.log(name, age, gender);
}
// here we have declared a function with a default parameter which is gender
abcd("ayush", 22, "male");
abcd("rohit", 22);
