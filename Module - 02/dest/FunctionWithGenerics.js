"use strict";
{
    // FunctionWithGenerics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric('Dhaka');
    const resGeneric2 = createArrayWithGeneric(12345);
    const resGeneric03 = createArrayWithGeneric({
        name: 'Asraful Islam',
        id: 1234,
        study: {
            JSC: 2018,
            SSC: 2021,
            HSC: 2023
        }
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result10 = createArrayWithTuple('mama', { age: 10, group: 'A+' });
    const addCouresToStudent = (student) => {
        const coures = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { coures });
    };
    const student01 = addCouresToStudent({ name: 'Nayma', age: 16 });
    console.log(student01);
}
