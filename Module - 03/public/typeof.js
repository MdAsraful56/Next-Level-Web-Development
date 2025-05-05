"use strict";
{
    const add = (a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            return `This is a string: ${a.toString()} + ${b.toString()}`;
        }
    };
    console.log(add(5, 10)); // 15
    console.log(add("5", "10")); // This is a string: 5 + 10
    console.log(add(5, "10")); // This is a string: 5 + 10
    console.log(add("5", 10)); // This is a string: 5 + 10
}
