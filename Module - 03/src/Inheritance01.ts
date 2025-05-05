{

class Person {
    constructor(public name: string, public age: number){}
}

class Student extends Person {
    constructor(name: string, age: number, public studentId: number) {
        super(name, age); // Call the parent constructor
    }

    study(numberOfHours: number) {
        console.log(`${this.name} is studying for ${numberOfHours} hours.`);
    }  
}

const student01 = new Student("Ashraful", 20, 12345);
console.log(student01); // Student { name: 'John Doe', age: 20, studentId: 12345 }
student01.study(3);

class Empoloyee extends Person {
    constructor(name: string, age: number, public employeeId: number) {
        super(name, age); // Call the parent constructor
    }

    work(numberOfHours: number) {
        console.log(`${this.name} is working for ${numberOfHours} hours.`);
    }  
}

const employee01 = new Empoloyee("Shanto", 30, 67890);
console.log(employee01); // Empoloyee { name: 'Jane Smith', age: 30, employeeId: 67890 }
employee01.work(8);


}