import { Staff } from "./bai2";

export class StaffManager{
    static list:Staff[]=[];

    static showInfoStaff(staff){
        console.log(staff);
    }
    static addStaff(staff:Staff){
        StaffManager.list.push(staff);
    }
    static deleteStaff(staff: Staff){
        StaffManager.list.splice(StaffManager.list.indexOf(staff));
    }
    static setInfo(staff:Staff,{firstName=staff.firstName,lastName=staff.lastName,birthday=staff.birthday,address=staff.address,role=staff.role}) {
        staff.firstName=firstName;
        staff.lastName=lastName;
        staff.birthday=birthday;
        staff.address=address;
        staff.role=role;
        console.log(staff);
        return staff;
    }
}