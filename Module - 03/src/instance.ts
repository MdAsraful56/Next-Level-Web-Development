{
    // Type guard using instance of

    class Animal {
        constructor(public name: string, public age: number) {}
        eat() {
            console.log(`${this.name} is eating.`);
        }
    };

    class Dog extends Animal {
        bark() {
            console.log(`${this.name} says Woof!`);
        }
    };

    class Cat extends Animal {
        meow() {
            console.log(`${this.name} says Meow!`);
        }
    };

    class Bird extends Animal {
        fly() {
            console.log(`${this.name} is flying!`);
        }
    };

    const getAnimal = (animal : Animal) => {
        if (animal instanceof Dog) {
            animal.bark();
        } else if (animal instanceof Cat) {
            animal.meow();
        } else if (animal instanceof Bird) {
            animal.fly();
        } else {
            console.log(`${animal.name} is an unknown animal.`);
        }
    }


const dog = new Dog("Dog", 5);
const cat = new Cat("Cat", 3);

console.log(dog);
console.log(cat);

getAnimal(dog);
getAnimal(cat);


}