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
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.show = function () {
        return "I am a shape. My name is ".concat(this.name);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.resize = function (percent) {
        return this.radius * percent / 100;
    };
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return Math.PI * this.radius * 2;
    };
    return Circle;
}(Shape));
var circle = new Circle('thinhngu', 10);
circle.resize(150);
console.log(circle.calculateArea());
