export class Circle{
    protected _radius:number;
    protected _color:string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }
    get radius(): number {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
    }
    get color(): string {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }
    get area(){
        return Math.pow(this._radius,2)*Math.PI;
    }
    get perimeter(){
        return 2*this._radius*Math.PI;
    }
}
