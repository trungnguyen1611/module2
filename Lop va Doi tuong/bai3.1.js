"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bai3_1 = require("./bai3");
var fan1 = new bai3_1.Fan(1, true, 5, 'blue');
var fan2 = new bai3_1.Fan(2, true, 10, 'red');
var fan3 = new bai3_1.Fan(3, false, 7, 'green');
function toString(fan) {
    if (fan.On == true) {
        console.log("fan is on: speed: ".concat(fan.Speed, "; radius: ").concat(fan.Radius, "; color: ").concat(fan.Color));
    }
    else {
        console.log("fan is off: speed: ".concat(fan.Speed, "; radius: ").concat(fan.Radius, "; color: ").concat(fan.Color));
    }
}
toString(fan1);
toString(fan3);
