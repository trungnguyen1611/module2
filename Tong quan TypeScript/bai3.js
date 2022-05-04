"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, birthday, email, phone) {
        this.name = '';
        this.gender = Gender.Other;
        this.email = '';
        this.phone = '';
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Staff;
}());
exports.Staff = Staff;
