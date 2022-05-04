import {Student} from "./Student";

export class StudentManager {
    studentList: Student[] = [];

    constructor() {

    }

    addStudent(student: Student) {
        this.studentList.push(student);

    }

    showList() {
        return this.studentList;
    }

    deleteStudent(student: Student) {
        this.studentList.splice(this.studentList.indexOf(student), 1);
    }

}
