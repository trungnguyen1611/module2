"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.getta = function () {
        return this.a;
    };
    QuadraticEquation.prototype.getb = function () {
        return this.b;
    };
    QuadraticEquation.prototype.getc = function () {
        return this.c;
    };
    QuadraticEquation.prototype.seta = function (a) {
        this.a = a;
    };
    QuadraticEquation.prototype.setb = function (b) {
        this.b = b;
    };
    QuadraticEquation.prototype.setc = function (c) {
        this.c = c;
    };
    QuadraticEquation.prototype.getDelta = function () {
        var delta = this.b * this.b + 4 * this.a * this.c;
        return delta;
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        var result1 = 0;
        if (this.getDelta() > 0) {
            result1 = (0 - this.b - Math.pow(this.getDelta(), 0.5)) / (2 * this.a);
        }
        else if (this.getDelta() == 0) {
            result1 = 0 - this.b / (2 * this.a);
        }
        else {
            console.log('vo nghiem');
        }
        return result1;
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        var result2 = 0;
        if (this.getDelta() > 0) {
            result2 = (0 - this.b + Math.pow(this.getDelta(), 0.5)) / (2 * this.a);
        }
        else if (this.getDelta() == 0) {
            result2 = 0 - this.b / (2 * this.a);
        }
        else {
            console.log('vo nghiem');
        }
        return result2;
    };
    return QuadraticEquation;
}());
exports.QuadraticEquation = QuadraticEquation;
