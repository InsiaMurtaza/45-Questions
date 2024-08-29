"use strict";
let age = 15;
if (age >= 0 && age < 2) {
    console.log("I am a baby");
}
else if (age >= 2 && age < 4) {
    console.log("I am a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("I am a kid");
}
else if (age >= 13 && age < 20) {
    console.log("I am a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("I am an adult");
}
else if (age >= 65) {
    console.log("I have grown older");
}
else {
    console.log("Invalid age!");
}
