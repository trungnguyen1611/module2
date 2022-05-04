export enum IFan{
    SLOW =1,
    MEDIUM,
    FAST
}
export class Fan{
    private speed: IFan= IFan.SLOW;
    private on:boolean=false;
    private radius:number=5;
    private color:string='blue';

    constructor(speed:number,status:boolean,radius:number,color:string) {
        this.speed=speed;
        this.on=status;
        this.radius=radius;
        this.color=color;
    }

    get Speed(){
        if(this.on==false){
            this.speed=0;
        }
        return this.speed;
    }
    get On(){
        return this.on;
    }
    get Radius(){
        return this.radius;
    }
    get Color(){
        return this.color;
    }
    set Speed(speed){
        this.speed=speed;
    }
    set On(on){
        this.on=on;
    }
    set Radius(radius){
        this.radius=radius;
    }
    set Color(color){
        this.color=color;
    }
}