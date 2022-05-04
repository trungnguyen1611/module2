interface Resizeable{
    resize(percent: number):number;
}

class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
}

class Circle extends Shape implements Resizeable{
    radius: number;
    resize(percent:number):number {
        return this.radius*percent/100;
    }

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
}

let circle=new Circle('thinhngu',10);
circle.resize(150);
console.log(circle.calculateArea());