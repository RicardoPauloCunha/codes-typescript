"use strict";
var tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar game to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
var leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "New characters"],
};
// Usar classes para implementar objetos
var CreatGame = /** @class */ (function () {
    function CreatGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreatGame;
}());
