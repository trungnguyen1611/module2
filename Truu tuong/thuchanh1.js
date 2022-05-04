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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.makeSound = function () {
        return "Tiger: roarrrrr!";
    };
    return Tiger;
}(Animal));
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    return Fruit;
}());
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.makeSound = function () {
        return "Chicken: Cluck Cluck";
    };
    Chicken.prototype.howToEat = function () {
        return "Could be fried";
    };
    return Chicken;
}(Animal));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.howToEat = function () {
        return "Apple could be slided";
    };
    return Apple;
}(Fruit));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Orange.prototype.howToEat = function () {
        return "Orange could be juiced";
    };
    return Orange;
}(Fruit));
var animal = [];
animal.push(new Chicken(), new Tiger());
console.log(animal[0].makeSound());
console.log(animal[1].makeSound());
animal.forEach(function (value, index) {
    if (value instanceof Chicken) {
        console.log(value.howToEat());
    }
});
var fruit = [];
fruit.push(new Apple(), new Orange());
console.log(fruit[0].howToEat());
console.log(fruit[1].howToEat());
