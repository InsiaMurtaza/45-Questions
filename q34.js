"use strict";
let favoritePizzas = ["chicken fajita", "fajita sizilian", "chicken tikka", "malai tikka"];
for (let i = 0; i < favoritePizzas.length; i++) {
    if (i === 0) {
        console.log(`${favoritePizzas[i]} is mouth watering`); // i is index number of array
    }
    else if (i === 1) {
        console.log(`${favoritePizzas[i]} is sizzling!`);
    }
    else if (i === 2) {
        console.log(`${favoritePizzas[i]} is good in taste.`);
    }
    else {
        console.log(`${favoritePizzas[i]} is yummy.`);
    }
}
