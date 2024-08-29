"use strict";
let animals = ["cows", "goats", "sheep", "camels", "deers"];
for (let i = 0; i < animals.length; i++) {
    if (i === 0) {
        console.log(`${animals[i]}' milk is beneficial for humans.`);
    }
    else if (i === 1) {
        console.log(`${animals[i]}' meat which we call mutton has good fats.`);
    }
    else if (i === 2) {
        console.log(`${animals[i]}'s skin gives us wool.`);
    }
    else if (i === 3) {
        console.log(`People love to ride on ${animals[i]} at sea side.`);
    }
    else {
        console.log(`${animals[i]} give a good chase to their predators in jungle.`);
    }
}
