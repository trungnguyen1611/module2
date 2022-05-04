"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = exports.IFan = void 0;
var IFan;
(function (IFan) {
    IFan[IFan["SLOW"] = 1] = "SLOW";
    IFan[IFan["MEDIUM"] = 2] = "MEDIUM";
    IFan[IFan["FAST"] = 3] = "FAST";
})(IFan = exports.IFan || (exports.IFan = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, status, radius, color) {
        this.speed = IFan.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
        this.speed = speed;
        this.on = status;
        this.radius = radius;
        this.color = color;
    }
    Object.defineProperty(Fan.prototype, "Speed", {
        get: function () {
            if (this.on == false) {
                this.speed = 0;
            }
            return this.speed;
        },
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "On", {
        get: function () {
            return this.on;
        },
        set: function (on) {
            this.on = on;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (radius) {
            this.radius = radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    return Fan;
}());
exports.Fan = Fan;
