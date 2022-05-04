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
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Object.defineProperty(Circle.prototype, "Radius", {
        get: function () {
            return this.radius;
        },
        set: function (radius) {
            this.radius = radius;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return "A Circle with radius="
            + this.Radius;
    };
    return Circle;
}());
var ComparableCircle = /** @class */ (function (_super) {
    __extends(ComparableCircle, _super);
    function ComparableCircle(radius) {
        return _super.call(this, radius) || this;
    }
    ComparableCircle.prototype.compareTo = function (obj) {
        if (this.Radius > obj.Radius)
            console.log("The current circle is larger.");
        else if (this.Radius < obj.Radius)
            console.log("The current circle is smaller.");
        else
            console.log("both circle equal.");
    };
    return ComparableCircle;
}(Circle));
var circle = [];
circle.push(new ComparableCircle(10), new ComparableCircle(20), new ComparableCircle(30));
circle[0].Radius = 25;
circle[0].compareTo(circle[1]);
