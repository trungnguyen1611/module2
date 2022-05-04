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
    function Shape(color, filled) {
        this._color = color;
        this._filled = filled;
    }
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
    Object.defineProperty(Shape.prototype, "filled", {
        get: function () {
            return this._filled;
        },
        set: function (value) {
            this._filled = value;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "A Shape with color of ".concat(this._color, " and ").concat(this._filled ? 'filled' : 'not filled');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this._radius = radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getArea = function () {
        return Math.pow(this._radius, 2) * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this._radius * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "A Circle with ".concat(this._radius, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this._width = width;
        _this._length = length;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.getArea = function () {
        return 2 * (this._length + this._width);
    };
    Rectangle.prototype.getPerimeter = function () {
        return this._width * this._length;
    };
    Rectangle.prototype.toString = function () {
        return "A Rectangle with width=".concat(this.width, " and length=").concat(this.length, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        return _super.call(this, color, filled, side, side) || this;
    }
    Square.prototype.toString = function () {
        return "A Square with side=".concat(this.width, ", which is a subclass of ").concat(_super.prototype.toString.call(this));
    };
    return Square;
}(Rectangle));
var circle = new Circle('blue', false, 5);
console.log(circle.toString());
var retangle = new Rectangle('red', true, 5, 10);
var square = new Square('green', true, 5);
console.log(retangle.toString());
console.log(square.toString());
