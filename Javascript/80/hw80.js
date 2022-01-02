'use strict';

class Student {

    constructor(firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    }

}

const a = new Student('Joe', 'Biden', 78, 50);
const b = new Student('Donald', 'Trump', 66, 82);
const c = new Student('Miriam', 'Baskin', 21, 100);

const students = [a, b, c];

function printStudents1() {
    console.log(arguments);
}

printStudents1(a, b, c);
printStudents1(students);

function printStudents2(...students) {
    console.log(students);
}

console.log(a, b, c);

function swap() {
    const newStudentArray = Object.assign(students);
    console.log(newStudentArray);
    newStudentArray.forEach(s => {
        var temp = s.firstName;
        s.firstName = s.lastName;
        s.lastName = temp;
    });
}

swap();