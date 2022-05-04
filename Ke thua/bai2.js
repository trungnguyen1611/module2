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
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point2D.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2D.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Point2D.prototype.getxy = function () {
        return {
            x: this.x,
            y: this.y
        };
    };
    Point2D.prototype.setxy = function (x, y) {
        this._x = x;
        this._y = y;
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this._z = z;
        return _this;
    }
    Object.defineProperty(Point3D.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
        },
        enumerable: false,
        configurable: true
    });
    Point3D.prototype.getxyz = function () {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        };
    };
    Point3D.prototype.setxyz = function (x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    };
    return Point3D;
}(Point2D));
var point3d = new Point3D(3, 4, 5);
point3d.setxyz(6, 7, 8);
console.log(point3d.getxyz());
