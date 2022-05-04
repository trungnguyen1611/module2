var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, birthday, email, phone) {
        this.name = "";
        this.gender = Gender.Other;
        this.email = "";
        this.phone = "";
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Staff;
}());
var staffList = [];
staffList.push(new Staff('Nguyen Van A,', Gender.Male, new Date(), "nguyenvana@gmail.com", "0123456789"));
staffList.push(new Staff('Nguyen Van B,', Gender.Male, new Date(), "nguyenvanb@gmail.com", "0987654321"));
function showStaff(staff) {
    console.log(staff);
}
staffList.forEach(showStaff);
showStaff(staffList[0]);
