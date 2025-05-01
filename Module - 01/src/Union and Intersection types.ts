// Union and Intersection types
{

// union type 

type FontenDeveloper = 'junierDev' | 'No skill Dve';
type FullStakeDevloper = 'Expart Dev' | 'some Skill Dev';

type Devloper = FontenDeveloper | FullStakeDevloper;

const newDev : FontenDeveloper = 'No skill Dve';
const dev : Devloper = 'some Skill Dev';

type User = {
    name: string;
    age: number;
    gender: 'Male' | 'Famale'
}

const user1 : User ={
    name: 'Ashraful',
    age: 20,
    gender: 'Male'
}


// Intersection types

type FontenDev = {
    skills : string[];
    desiganition1 : 'Fonten Developar'
}

type BackenDev = {
    skills : string[];
    desiganition2 : 'Backen Developar'
}

type FullStakeDev = FontenDev & BackenDev;

const newDeveloper : FullStakeDev = {
    skills: ['HTML', 'CSS', 'JS', 'TS'],
    desiganition1: 'Fonten Developar',
    desiganition2: 'Backen Developar'
}








}