"use strict";
{
    // Statics.ts
    // class Counter {
    //     count: number = 0;
    //     increment() {
    //         return this.count = this.count + 1;
    //     };
    //     decrement() {
    //         return this.count = this.count - 1;
    //     };
    // }
    // const counter01 = new Counter();
    // const counter02 = new Counter();
    // console.log(counter01.increment()); // 1
    // console.log(counter01.increment()); // 2
    // console.log(counter01.increment()); // 3
    // console.log(counter02.increment()); // 1
    // console.log(counter02.increment()); // 2
    // console.log(counter02.increment()); // 3
    class Counter {
        increment() {
            return Counter.count = Counter.count + 1;
        }
        ;
        decrement() {
            return Counter.count = Counter.count - 1;
        }
        ;
        static increment10() {
            return Counter.count = Counter.count + 10;
        }
    }
    Counter.count = 0; // Static property
    ;
    const counter01 = new Counter();
    const counter02 = new Counter();
    console.log(counter01.increment()); // 1
    console.log(counter01.increment()); // 2    
    console.log(counter01.increment()); // 3
    console.log(counter02.increment()); // 4
    console.log(counter02.increment()); // 5
    console.log(counter02.increment()); // 6
    console.log(Counter.increment10());
    console.log(Counter.increment10());
    console.log(Counter.increment10());
}
