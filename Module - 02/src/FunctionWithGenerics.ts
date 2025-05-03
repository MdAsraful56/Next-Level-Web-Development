{

    // FunctionWithGenerics

    const createArray = (param: string) : string[] => {
        return [param];
    }

    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return [param]
    }


const result = createArray('Bangladesh');
const resGeneric = createArrayWithGeneric<string>('Dhaka');
const resGeneric2 = createArrayWithGeneric<number>(12345);

interface UserDetiels {
    name: string;
    id: number;
    study: {
        JSC: number;
        SSC: number;
        HSC: number;
    }
}

const resGeneric03 = createArrayWithGeneric<UserDetiels>({
    name: 'Asraful Islam',
    id: 1234,
    study: {
        JSC: 2018,
        SSC: 2021,
        HSC: 2023
    }
});






const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T, Q] => {
    return [param1, param2];
}

const result10 = createArrayWithTuple<string, {age: number; group: string}>('mama',{age: 10, group: 'A+'})


const addCouresToStudent = <T>(student: T) => {
    const coures = 'Next Level Web Development';

    return {
        ...student,
        coures
    }
}

const student01 = addCouresToStudent<{name: string; age: number}>({name: 'Nayma', age: 16})

console.log(student01);



}