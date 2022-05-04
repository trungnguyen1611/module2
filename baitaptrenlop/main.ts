import {Student} from "./Student";
import {StudentManager} from "./StudentManager";
let student1 = new Student("trung","c0322h1",10);
let student2 = new Student("dung","c0322h1",1);
let student3 = new Student("hong","c0322h1",8);
let student4 = new Student("hai","c0322h1",10);
let student5 = new Student("tuan","c0322h1",9);
let studentManager = new StudentManager();

studentManager.addStudent(student1);
studentManager.addStudent(student2);
studentManager.addStudent(student3);
studentManager.addStudent(student4);
studentManager.addStudent(student5);


console.log(studentManager.studentList);

function analyse(lisStudent) {

    let yeu:Student[]=[];
    let kha:Student[]=[];
    let gioi:Student[]=[];

    for (let i = 0; i < lisStudent.length; i++) {
        if(lisStudent[i].point<6){
            yeu.push(lisStudent[i]);
        }
        if (lisStudent[i].point>6&&lisStudent[i].point<8){
            kha.push(lisStudent[i]);
        }
        if (lisStudent[i].point>=8){
            gioi.push(lisStudent[i]);
        }
    }

    return {
        1: yeu.length,
        2: kha.length,
        3: gioi.length
    }

}

console.log(analyse(studentManager.studentList));
