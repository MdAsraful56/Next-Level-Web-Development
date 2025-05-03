// interface

type User1 = {
    name: string;
    roll: number
}

interface User2 {
    name: string;
    roll: number;
}



const person1 : User1 ={
    name: 'Ashraful',
    roll: 1234
}

const person2 : User2 ={
    name: 'Ashraful',
    roll: 1234
}

console.log(person1);
console.log(person2);


type UserWithRole1 = User1 & {
    role: string;
}

interface UserWithRole2 extends User2 {
    role: string;
}

interface UserWithRole3 extends User1 {
    role: string;
}


const person3 : UserWithRole1 = {
    name: 'Nayma',
    roll: 1235,
    role: 'GF'
}
const person4 : UserWithRole2 = {
    name: 'Nayma',
    roll: 1235,
    role: 'GF'
}
const person5 : UserWithRole3 = {
    name: 'Nayma',
    roll: 1235,
    role: 'GF'
}

console.log(person3);
console.log(person4);
console.log(person5);



// array 

type Roll = number[];
interface Roll2 {
    [index : number] : number;
}

const rollNumber : Roll = [1,2,3,4,5,6];
const rollNumber2 : Roll2 = [1,2,3,4,5,6];

console.log(rollNumber);
console.log(rollNumber2);


type Add = (x: number, y: number) => number;
interface Add2 {
    (x: number, y: number) : number
}

const add : Add = (x, y) => x + y;
const add2 : Add2 = (x, y) => x + y;

console.log(add(12, 34));
console.log(add2(12, 39));
