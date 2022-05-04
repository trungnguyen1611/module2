"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bai3_1 = require("./bai3");
var bai3_2 = require("./bai3");
var staffList = [];
var staff1 = new bai3_1.Staff('Nguyen Van A', bai3_2.Gender.Male, new Date('1990-01-01'), 'nguyena@gmail.com', '0123456789');
var staff2 = new bai3_1.Staff('Nguyen Van B', bai3_2.Gender.Male, new Date('1990-12-12'), 'nguyenb@gmail.com', '0987654321');
var staff3 = new bai3_1.Staff('Nguyen Thi C', bai3_2.Gender.Female, new Date('1990-09-09'), 'nguyenc@gmail.com', '0989989889');
function showStaff(staff) {
    console.log(staff);
}
function addStaff(staff) {
    staffList.push(staff);
}
function deleteStaff(staff) {
    staffList.splice(staff, 1);
}
addStaff(staff1);
addStaff(staff2);
addStaff(staff3);
staffList.forEach(showStaff);
deleteStaff(1);
staffList.map(showStaff);
