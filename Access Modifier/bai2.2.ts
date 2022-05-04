import {Staff} from "./bai2";
import {StaffManager} from "./bai2.1";
let staff1=new Staff('Nguyen','Trung',new Date(1998,11,16),'Soc Son','Staff');
let staff2=new Staff('Tran','Duong',new Date(1997,6,16),'Ha Noi','Staff');
let staff3=new Staff('Le','Khuong',new Date(1995,9,9),'Hoai Duc','Boss');

StaffManager.addStaff(staff1);
StaffManager.addStaff(staff2);
StaffManager.addStaff(staff3);
StaffManager.showInfoStaff(StaffManager.list);
StaffManager.setInfo(staff1,{firstName:'Le',lastName:'Thinh'});
