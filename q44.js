"use strict";
function make_sandwich(...ingredients) {
    return console.log(`This sandwich is made up of ${ingredients.join(",")}`);
}
make_sandwich("chicken", "bbqsauce", "cheese");
make_sandwich("veggies", "thousand island sauce");
make_sandwich("egg", "chicken", "mayonnaise");
