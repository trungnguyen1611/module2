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
    function Shape(name, color) {
        this._name = name;
        this._color = color;
    }
    Object.defineProperty(Shape.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(name, color, side1, side2, side3) {
        var _this = _super.call(this, name, color) || this;
        _this._side1 = 3;
        _this._side2 = 4;
        _this._side3 = 5;
        _this._side1 = side1;
        _this._side2 = side2;
        _this._side3 = side3;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "side1", {
        get: function () {
            return this._side1;
        },
        set: function (value) {
            this._side1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side2", {
        get: function () {
            return this._side2;
        },
        set: function (value) {
            this._side2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "side3", {
        get: function () {
            return this._side3;
        },
        set: function (value) {
            this._side3 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "Area", {
        get: function () {
            return Math.sqrt(this.Perimeter * (this.Perimeter - this.side1) * (this.Perimeter - this.side2) * (this.Perimeter - this.side3));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "Perimeter", {
        get: function () {
            return this.side1 + this.side2 + this.side3;
        },
        enumerable: false,
        configurable: true
    });
    return Triangle;
}(Shape));
var triangle = new Triangle('tamgiac', 'blue', 4, 5, 6);
triangle.side1 = 5;
console.log(triangle.Perimeter);
console.log(triangle.Area);
