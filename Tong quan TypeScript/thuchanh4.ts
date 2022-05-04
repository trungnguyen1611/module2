enum Gender{
    Male,
    Female,
    Other
}

class Staff{
    name: string=``;
    gender:Gender=Gender.Other;
    birthday?:Date;
    email:string=``;
    phone:string=``;
    constructor(name:string,gender:Gender,birthday:Date,email:string,phone:string) {
        this.name=name;
        this.gender=gender;
        this.birthday=birthday;
        this.email=email;
        this.phone=phone;
    }
}

let staffList: Staff[]=[];

staffList.push(new Staff('Nguyen Van A,',Gender.Male,new Date(),`nguyenvana@gmail.com`,`0123456789`));
staffList.push(new Staff('Nguyen Van B,',Gender.Male,new Date(),`nguyenvanb@gmail.com`,`0987654321`));

function showStaff(staff:Staff):void{
    console.log(staff);
}

staffList.forEach(showStaff);
showStaff(staffList[0]);