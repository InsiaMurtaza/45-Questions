"use strict";
function make_album(name, title, tracks) {
    let album = { name, title };
    let album1 = { tracks };
    if (tracks) {
    }
    return album.name + " " + " " + album.title + " " + album1.tracks;
}
console.log(make_album("Atif Aslam", "Humain Pyar hai Pakistan se"));
console.log(make_album("Ali Zafar", "PSL song"));
console.log(make_album("Rahat Fateh Ali Khan", "Pakistan Pakistan", 7));
