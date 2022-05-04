import {IFan} from "./bai3";
import {Fan} from "./bai3";
let fan1=new Fan(1,true,5,'blue');
let fan2=new Fan(2,true,10,'red');
let fan3=new Fan(3,false,7,'green');

function toString(fan:Fan){
    if(fan.On==true){
        console.log(`fan is on: speed: ${fan.Speed}; radius: ${fan.Radius}; color: ${fan.Color}`)
    }
    else{
        console.log(`fan is off: speed: ${fan.Speed}; radius: ${fan.Radius}; color: ${fan.Color}`)
    }
}
toString(fan1);
toString(fan3);