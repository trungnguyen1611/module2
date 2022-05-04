var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));
console.log(circleList);
function showCircle(circle) {
    console.log("H\u00ECnh tr\u00F2n n\u00E0y c\u00F3 m\u00E0u ".concat(circle.color, "\n    v\u00E0 b\u00E1n k\u00EDnh l\u00E0 ").concat(circle.radius));
}
circleList.forEach(showCircle);
