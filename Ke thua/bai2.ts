class Point2D{
    protected _x:number;
    protected _y:number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }
    set x(value: number) {
        this._x = value;
    }
    get y(): number {
        return this._y;
    }
    set y(value: number) {
        this._y = value;
    }
    getxy():object{
        return {
            x: this.x,
            y: this.y
        }
    }
    setxy(x:number,y:number):void{
        this._x=x;
        this._y=y;
    }
}

class Point3D extends Point2D{
    private _z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }
    set z(value: number) {
        this._z = value;
    }
    getxyz():object{
        return {
            x: this.x,
            y:this.y,
            z:this.z
        }
    }
    setxyz(x:number,y:number,z:number):void{
        this._x=x;
        this._y=y;
        this._z=z;
    }
}

let point3d=new Point3D(3,4,5);
point3d.setxyz(6,7,8);
console.log(point3d.getxyz());
