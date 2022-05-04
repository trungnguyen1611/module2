import {Staff} from "./bai3";
import {Gender} from "./bai3";
let staffList:Staff[]=[];
let staff1=new Staff('Nguyen Van A',Gender.Male,new Date('1990-01-01'),'nguyena@gmail.com','0123456789');
let staff2=new Staff('Nguyen Van B',Gender.Male,new Date('1990-12-12'),'nguyenb@gmail.com','0987654321');
let staff3=new Staff('Nguyen Thi C',Gender.Female,new Date('1990-09-09'),'nguyenc@gmail.com','0989989889');
function showStaff(staff:Staff){
    console.log(staff);
}
function addStaff(staff:Staff){
    staffList.push(staff);
}
function deleteStaff(staff:number){
    staffList.splice(staff,1);
}

addStaff(staff1);
addStaff(staff2);
addStaff(staff3);
staffList.forEach(showStaff);
deleteStaff(1);
staffList.map(showStaff);
