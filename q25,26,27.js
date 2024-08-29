"use strict";
let alien_color = "red";
if (alien_color.match("green")) {
    console.log("It is alive");
}
else if (alien_color.match("yellow")) {
    console.log("Its going to die");
}
else if (alien_color.match("red")) {
    console.log("It is dead");
}
else {
    console.log("Invalid color!");
}
