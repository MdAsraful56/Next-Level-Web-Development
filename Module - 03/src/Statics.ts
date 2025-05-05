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
        static count: number = 0; // Static property

        increment() { // Static method
            return Counter.count = Counter.count + 1;
        };
        decrement() { // Static method
            return Counter.count = Counter.count - 1;
        };
        static increment10() {
            return Counter.count = Counter.count + 10;
        }
    };

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