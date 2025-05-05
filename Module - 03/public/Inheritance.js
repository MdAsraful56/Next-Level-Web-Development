"use strict";
{
    // this is a parent class
    class Parent {
        constructor(id, name, age, adderss) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.adderss = adderss;
        }
        getSleep(numberOfHours) {
            console.log(`Student ${this.name} sleeps for ${numberOfHours} hours.`);
            // console.log(`Student ${this.name} is a good student.`);
        }
    }
    // this is a child class that extends the parent class
    class Student extends Parent {
        constructor(id, name, age, adderss) {
            super(id, name, age, adderss); // call the parent constructor
        }
    }
    const student01 = new Student(1, "John Doe", 20, "123 Main St");
    console.log(student01);
    student01.getSleep(12);
    class Teacher extends Parent {
        constructor(id, name, age, adderss, subject, level) {
            super(id, name, age, adderss); // call the parent constructor
            this.subject = subject;
            this.level = level;
        }
        getWork(numberOfHours) {
            console.log(`Teacher ${this.name} works for ${numberOfHours} hours.`);
        }
    }
    const teacher01 = new Teacher(1, "John Doe", 20, "123 Main St", "Math", "High School");
    console.log(teacher01);
    teacher01.getSleep(8);
    teacher01.getWork(8);
}
