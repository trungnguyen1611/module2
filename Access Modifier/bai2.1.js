"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
var StaffManager = /** @class */ (function () {
    function StaffManager() {
    }
    StaffManager.showInfoStaff = function (staff) {
        console.log(staff);
    };
    StaffManager.addStaff = function (staff) {
        StaffManager.list.push(staff);
    };
    StaffManager.deleteStaff = function (staff) {
        StaffManager.list.splice(StaffManager.list.indexOf(staff));
    };
    StaffManager.setInfo = function (staff, _a) {
        var _b = _a.firstName, firstName = _b === void 0 ? staff.firstName : _b, _c = _a.lastName, lastName = _c === void 0 ? staff.lastName : _c, _d = _a.birthday, birthday = _d === void 0 ? staff.birthday : _d, _e = _a.address, address = _e === void 0 ? staff.address : _e, _f = _a.role, role = _f === void 0 ? staff.role : _f;
        staff.firstName = firstName;
        staff.lastName = lastName;
        staff.birthday = birthday;
        staff.address = address;
        staff.role = role;
        console.log(staff);
        return staff;
    };
    StaffManager.list = [];
    return StaffManager;
}());
exports.StaffManager = StaffManager;
