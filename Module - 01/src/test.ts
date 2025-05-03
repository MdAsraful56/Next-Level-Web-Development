console.log('Hello World');

type User = {
    name: string;
    age: number;
    adderss ?: string;
}

const person : User = {
    name: 'Ashraful',
    age: 20,
}

console.log(person.name);
console.log(person.age);