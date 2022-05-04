"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.studentList = [];
    }
    StudentManager.prototype.addStudent = function (student) {
        this.studentList.push(student);
    };
    StudentManager.prototype.showList = function () {
        return this.studentList;
    };
    StudentManager.prototype.deleteStudent = function (student) {
        this.studentList.splice(this.studentList.indexOf(student), 1);
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
