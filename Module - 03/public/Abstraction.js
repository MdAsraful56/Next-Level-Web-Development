"use strict";
{
    class Car01 {
        start() {
            console.log("Car started");
        }
        stop() {
            console.log("Car stopped");
        }
        move() {
            console.log("Car is moving");
        }
        tast() {
            console.log("Car is tast");
        }
    }
    const car = new Car01();
    car.start(); // Car started
    car.stop(); // Car stopped
    car.move(); // Car is moving
    car.tast(); // Car is tast
    // Abstract class give a idea of a class that is not complete and need to be extended by other classes.
    class Car {
        tast() {
            console.log("Car is tast");
        }
    }
    class ToytaCar extends Car {
        start() {
            console.log("ToytaCar started");
        }
        stop() {
            console.log("ToytaCar stopped");
        }
        move() {
            console.log("ToytaCar is moving");
        }
    }
}
