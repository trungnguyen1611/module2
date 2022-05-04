class Shape{
    private _name:string;
    private _color:string;

    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }
}

class Triangle extends Shape{
    private _side1:number=3;
    private _side2:number=4;
    private _side3:number=5;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    get side1(): number {
        return this._side1;
    }
    set side1(value: number) {
        this._side1 = value;
    }
    get side2(): number {
        return this._side2;
    }
    set side2(value: number) {
        this._side2 = value;
    }
    get side3(): number {
        return this._side3;
    }
    set side3(value: number) {
        this._side3 = value;
    }
    get Area(){
        return Math.sqrt(this.Perimeter*(this.Perimeter-this.side1)*(this.Perimeter-this.side2)*(this.Perimeter-this.side3))
    }
    get Perimeter(){
        return this.side1+this.side2+this.side3;
    }
}

let triangle=new Triangle('tamgiac','blue',4,5,6);
triangle.side1=5
console.log(triangle.Perimeter)
console.log(triangle.Area)