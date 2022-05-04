"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var thuchanh2_1 = require("./thuchanh2");
function distance(circle1, circle2, d) {
    var distance = Math.pow(circle1.radius - circle2.radius, 2)
        + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circle1 = new thuchanh2_1.default(9);
var circle2 = new thuchanh2_1.default(5);
console.log(distance(circle1, circle2, 24));
