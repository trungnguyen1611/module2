class Point {
    x:number;
    y:number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    displayName = "Point";
    distance(b) {
        let dx = this.x - b.x;
        let dy = this.y - b.y;

        return Math.sqrt(dx*dx+dy*dy);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(10, 10);

console.log(p1.displayName);
console.log(p1.distance(p2));