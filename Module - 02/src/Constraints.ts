{
    // Constraints 

    const addCouresToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
        const coures = 'Next Level Web Development';
    
        return {
            ...student,
            coures
        }
    }


    const student01 = addCouresToStudent({
        id: 134,
        name: 'Asraful',
        email: 'try.mdasraful56@gmail.com',
        isHaveComputer: true
    })

    
    const student02 = addCouresToStudent({
        id: 134,
        name: 'Rain',
        email: 'try.mdrain56@gmail.com',
        // isHaveComputer: true
    })



// ---------------------------------------

type Vehicle = {
    bike: string;
    car: string;
    ship: string
}

// type Owner = 'bike' | 'car' | 'ship';
// type Owner02 = keyof Vehicle;

// const person03 :Owner02 = '';



const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
}

const student11 : {name: string; age: number} = {
    name: 'Ashraful',
    age: 1234
}

const result11 = getPropertyValue(student11, 'name');
console.log(result11);

const bookMarks : {
    math: number;
    english: number;
    bangla: number
} = {
    math: 69,
    english: 40,
    bangla: 80
}

const result12 = getPropertyValue(bookMarks, 'math');
console.log(result12);




}