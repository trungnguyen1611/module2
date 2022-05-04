export class StopWatch {
    startTime: Date;
    endTime: Date;

    constructor(start?: Date, end?: Date) {
        this.startTime = start;
        this.endTime = end;
    }

    now(){
        this.startTime=new Date();
        console.log(this.startTime.toLocaleTimeString());
    }
    start(){
        this.startTime=new Date();
        console.log(this.startTime.toLocaleTimeString());
    }
    stop(){
        this.endTime=new Date();
        console.log(this.endTime.toLocaleTimeString());
    }
    getElapsedTime() {
        console.log(`${(this.endTime.getTime()-
        this.startTime.getTime())/1000} giây`)
    }
}




