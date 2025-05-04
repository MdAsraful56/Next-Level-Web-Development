"use strict";
// Problems.ts
// Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.
// Instructions:
// Create a TypeScript program.
// Print the following message to the console:
// Hello World, I will complete this course successfully and become a Next level Web Developer!
// Answer - 01 
const welcomeMessage = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log(welcomeMessage);
// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.
// Instructions:
// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.
// Answer - 02
function takes(name, age, role) {
    return { name, age, role };
}
const result = takes('Ashraful', 20, 'admin');
console.log(result);
const person = {
    Name: 'Ashraful',
    Address: 'Dosmontara',
    Income: 12000,
    Job: false,
    Skills: ['HTML', 'CSS', 'JS', 'React'],
    Marital: false
};
console.log(person);
//Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.
// Instructions:
// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine
// Answer - 04
