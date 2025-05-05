{
    // Polymorphism.ts 

    class Person {
        getSleep() {
            console.log("I am sleeps for 8 hours.");
        }
    };

    class Student extends Person {
        getSleep() {
            console.log("I am sleeps for 7 hours.");
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log("I am sleeps for 5 hours.");
        }
    }

    const getSleepInHours = ( parem: Person) => {
        parem.getSleep();
    }

    const person01 = new Person();
    const person02 = new Student();
    const person03 = new Developer();

    getSleepInHours(person01); // I am sleeps for 8 hours.
    getSleepInHours(person02); // I am sleeps for 7 hours.
    getSleepInHours(person03); // I am sleeps for 5 hours.

    // --------------------------------------------------------------------------------------------------

    class Shape {
        getArea() {
            return 0;
        };
    };

    class Circle extends Shape {
        constructor(public radius: number) {
            super();
        };

        getArea() {
            return Math.PI * this.radius * this.radius;
        };
    };

    class Rectangle extends Shape {
        constructor(public width: number, public height: number) {
            super();
        };

        getArea() {
            return this.width * this.height;
        };
    };

    class Triangle extends Shape {
        constructor(public base: number, public height: number) {
            super();
        };

        getArea() {
            return (this.base * this.height) / 2;
        };
    };

    const getShapeArea = (pram: Shape) => {
        console.log(pram.getArea());
    }


    const shape01 = new Shape();
    const shape02 = new Circle(5);
    const shape03 = new Rectangle(5, 10);
    const shape04 = new Triangle(5, 10);

    getShapeArea(shape01); // 0
    getShapeArea(shape02); // 78.53981633974483
    getShapeArea(shape03); // 50
    getShapeArea(shape04); // 25

}