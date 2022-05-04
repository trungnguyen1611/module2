interface Comparable{
    compareTo(obj: Object):void;
}

class Circle{
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    get Radius(): number{
        return this.radius;
    }
    set Radius(radius: number){
        this.radius = radius;
    }
    toString(): string {
        return "A Circle with radius="
            + this.Radius;
    }
}

class ComparableCircle extends Circle implements Comparable{

    constructor(radius: number) {
        super(radius);
    }
    compareTo(obj: ComparableCircle): void {
        if(this.Radius>obj.Radius)
            console.log("The current circle is larger.");
        else if(this.Radius<obj.Radius)
            console.log("The current circle is smaller.");
        else console.log("both circle equal.");
    }
}

let circle=[];
circle.push(new ComparableCircle(10),new ComparableCircle(20),new ComparableCircle(30));
circle[0].Radius=25;
circle[0].compareTo(circle[1]);