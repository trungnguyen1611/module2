export class QuadraticEquation{
    a:number;
    b:number;
    c:number;

    constructor(a:number,b:number,c:number){
        this.a=a;
        this.b=b;
        this.c=c;
    }
    getta(){
        return this.a;
    }
    getb(){
        return this.b;
    }
    getc(){
        return this.c;
    }
    seta(a){
        this.a=a;
    }
    setb(b){
        this.b=b;
    }
    setc(c){
        this.c=c;
    }
    getDelta(){
        let delta:number=this.b*this.b+4*this.a*this.c;
        return delta;
    }
    getRoot1(){
        let result1:number=0;
        if(this.getDelta()>0){
            result1=(0-this.b-Math.pow(this.getDelta(),0.5))/(2*this.a);
        }
        else if(this.getDelta()==0){
            result1=0-this.b/(2*this.a);
        }
        else{
            console.log('vo nghiem');
        }
        return result1;
    }
    getRoot2(){
        let result2:number=0;
        if(this.getDelta()>0){
            result2=(0-this.b+Math.pow(this.getDelta(),0.5))/(2*this.a);
        }
        else if(this.getDelta()==0){
            result2=0-this.b/(2*this.a);
        }
        else{
            console.log('vo nghiem');
        }
        return result2;
    }
}