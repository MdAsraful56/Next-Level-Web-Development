"use strict";
let anythings;
anythings = 'Hello Mama';
// anythings = 1234;
// ( anythings as string).toLocaleLowerCase();
// console.log(anythings);
// console.log(1234567890);
const kgToGm = (value) => {
    if (typeof value === 'number') {
        // console.log(`This number is ${value}`);
        return value * 1000;
    }
    else {
        // console.log(`Others data ${value}`);
        const convertNumber = parseFloat(value) * 1000;
        // console.log('now converted number' ,convertNumber);
        return convertNumber;
    }
};
const result = kgToGm(39);
console.log(result);
try {
}
catch (error) {
    console.log(error.massege);
}
