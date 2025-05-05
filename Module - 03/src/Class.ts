{

class Student {
    id: number;
    name: string;
    age: number; 

    constructor(id: number, name: string, age: number) {
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
    constructor(public name: string, public age: number, public sound: string) {

    }
}

const dog = new Animal('DJ Dog', 5, 'Woof!');
const cat = new Animal('DJ Cat', 3, 'Meow!');

console.log(dog, cat);




}