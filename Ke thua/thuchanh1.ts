class Shape{
    private _color:string;
    private _filled:boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }
    get filled(): boolean {
        return this._filled;
    }
    set filled(value: boolean) {
        this._filled = value;
    }
    toString():string {
        return `A Shape with color of ${this._color} and ${this._filled?'filled':'not filled'}`
    }
}

class Circle extends Shape{
    private _radius:number;
    constructor(color,filled,radius:number) {
        super(color,filled);
        this._radius=radius;
    }

    get radius(): number {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
    }
    getArea(){
        return Math.pow(this._radius,2)*Math.PI;
    }
    getPerimeter(){
        return 2*this._radius*Math.PI;
    }
    toString():string {
        return `A Circle with ${this._radius}, which is a subclass of ${super.toString()}`;
    }
}

class Rectangle extends Shape{
    _width:number;
    _length:number;
    constructor(color,filled,width:number,length:number) {
        super(color,filled);
        this._width=width;
        this._length=length;
    }

    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
    }
    get length(): number {
        return this._length;
    }
    set length(value: number) {
        this._length = value;
    }
    getArea(){
        return 2*(this._length+this._width);
    }
    getPerimeter(){
        return this._width*this._length;
    }
    toString():string {
        return `A Rectangle with width=${this.width} and length=${this.length}, which is a subclass of ${super.toString()}`
    }
}

class Square extends Rectangle{
    constructor(color,filled,side) {
        super(color,filled,side,side);
    }
    toString():string {
        return `A Square with side=${this.width}, which is a subclass of ${super.toString()}`
    }
}
let circle=new Circle('blue',false,5);
console.log(circle.toString());
let retangle=new Rectangle('red',true,5,10);
let square=new Square('green',true,5);
console.log(retangle.toString());
console.log(square.toString());