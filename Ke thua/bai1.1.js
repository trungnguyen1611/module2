"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bai1_1 = require("./bai1");
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(radius, color, height) {
        var _this = _super.call(this, radius, color) || this;
        _this._height = height;
        return _this;
    }
    Object.defineProperty(Cylinder.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "volume", {
        get: function () {
            return Math.pow(this.radius, 2) * Math.PI * this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "area", {
        get: function () {
            return 2 * (Math.pow(this.radius, 2) * Math.PI) + 2 * Math.PI * this.radius * this.height;
        },
        enumerable: false,
        configurable: true
    });
    return Cylinder;
}(bai1_1.Circle));
var circle1 = new bai1_1.Circle(5, 'blue');
var cylinder1 = new Cylinder(5, 'red', 6);
console.log("dien tich hinh tron: ".concat(circle1.area));
console.log("chu vi hinh tron: ".concat(circle1.perimeter));
console.log("dien tich toan phan hinh tru: ".concat(cylinder1.area));
console.log("the tich hinh tru: ".concat(cylinder1.volume));
