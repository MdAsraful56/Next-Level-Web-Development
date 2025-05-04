"use strict";
{
    // Constraints 
    const addCouresToStudent = (student) => {
        const coures = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { coures });
    };
    const student01 = addCouresToStudent({
        id: 134,
        name: 'Asraful',
        email: 'try.mdasraful56@gmail.com',
        isHaveComputer: true
    });
    const student02 = addCouresToStudent({
        id: 134,
        name: 'Rain',
        email: 'try.mdrain56@gmail.com',
        // isHaveComputer: true
    });
    // type Owner = 'bike' | 'car' | 'ship';
    // type Owner02 = keyof Vehicle;
    // const person03 :Owner02 = '';
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const student11 = {
        name: 'Ashraful',
        age: 1234
    };
    const result11 = getPropertyValue(student11, 'name');
    console.log(result11);
    const bookMarks = {
        math: 69,
        english: 40,
        bangla: 80
    };
    const result12 = getPropertyValue(bookMarks, 'math');
    console.log(result12);
}
