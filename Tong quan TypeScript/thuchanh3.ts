class Circle{
    public color:string;
    public radius:number;
    constructor(color:string,radius:number) {
        this.color=color;
        this.radius=radius;
    }
}

let circleList:Circle[]=[];

circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 15));
circleList.push(new Circle("blue", 20));

console.log(circleList);

function showCircle(circle: Circle){
    console.log(`Hình tròn này có màu ${circle.color}
    và bán kính là ${circle.radius}`)
}

circleList.forEach(showCircle);