{

    // Abstraction 

    // idea 

    interface Vicoule01 {
        start(): void;
        stop(): void;
        move(): void;
    }

    class Car01 implements Vicoule01 {
        start(): void {
            console.log("Car started");
        }
        stop(): void {
            console.log("Car stopped");
        }
        move(): void {
            console.log("Car is moving");
        }
        tast() : void {
            console.log("Car is tast");
        }
    }


    const car = new Car01();
    car.start(); // Car started
    car.stop(); // Car stopped
    car.move(); // Car is moving
    car.tast(); // Car is tast


    // Abstract class give a idea of a class that is not complete and need to be extended by other classes.
    abstract class Car implements Vicoule01 {
        abstract start(): void;
        abstract stop(): void;
        abstract move(): void;
        tast() : void {
            console.log("Car is tast");
        }
    }

    class ToytaCar extends Car {
        start(): void {
            console.log("ToytaCar started");
        }
        stop(): void {
            console.log("ToytaCar stopped");
        }
        move(): void {
            console.log("ToytaCar is moving");
        }
    }

}