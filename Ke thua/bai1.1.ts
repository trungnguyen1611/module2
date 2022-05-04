import {Circle} from "./bai1";
class Cylinder extends Circle{
    private _height:number;
    constructor(radius,color,height) {
        super(radius,color);
        this._height=height;
    }
    get height(): number {
        return this._height;
    }
    set height(value: number) {
        this._height = value;
    }
    get volume(){
        return Math.pow(this.radius,2)*Math.PI*this.height;
    }
    get area(){
        return 2*(Math.pow(this.radius,2)*Math.PI)+2*Math.PI*this.radius*this.height;
    }
}

let circle1=new Circle(5,'blue');
let cylinder1=new Cylinder(5,'red',6);
console.log(`dien tich hinh tron: ${circle1.area}`);
console.log(`chu vi hinh tron: ${circle1.perimeter}`);
console.log(`dien tich toan phan hinh tru: ${cylinder1.area}`);
console.log(`the tich hinh tru: ${cylinder1.volume}`);

