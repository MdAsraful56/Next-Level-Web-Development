"use strict";
{
    class Student {
        constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
        goodStudent() {
            console.log(`Student ${this.name} is a good student.`);
        }
    }
    const student01 = new Student(1, "John Doe", 20);
    const student02 = new Student(2, "Jane Smith", 22);
    student01.age = 21; // Update age
    console.log(student01);
    console.log(student02);
    student01.goodStudent(); // Call method
    // using parameter properties 
    class Animal {
        constructor(name, age, sound) {
            this.name = name;
            this.age = age;
            this.sound = sound;
        }
    }
    const dog = new Animal('DJ Dog', 5, 'Woof!');
    const cat = new Animal('DJ Cat', 3, 'Meow!');
    console.log(dog, cat);
}
