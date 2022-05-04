"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var StudentManager_1 = require("./StudentManager");
var student1 = new Student_1.Student("trung", "c0322h1", 10);
var student2 = new Student_1.Student("dung", "c0322h1", 1);
var student3 = new Student_1.Student("hong", "c0322h1", 8);
var student4 = new Student_1.Student("hai", "c0322h1", 10);
var student5 = new Student_1.Student("tuan", "c0322h1", 9);
var studentManager = new StudentManager_1.StudentManager();
studentManager.addStudent(student1);
studentManager.addStudent(student2);
studentManager.addStudent(student3);
studentManager.addStudent(student4);
studentManager.addStudent(student5);
console.log(studentManager.studentList);
function analyse(lisStudent) {
    var yeu = [];
    var kha = [];
    var gioi = [];
    for (var i = 0; i < lisStudent.length; i++) {
        if (lisStudent[i].point < 6) {
            yeu.push(lisStudent[i]);
        }
        if (lisStudent[i].point > 6 && lisStudent[i].point < 8) {
            kha.push(lisStudent[i]);
        }
        if (lisStudent[i].point >= 8) {
            gioi.push(lisStudent[i]);
        }
    }
    return {
        1: yeu.length,
        2: kha.length,
        3: gioi.length
    };
}
console.log(analyse(studentManager.studentList));
