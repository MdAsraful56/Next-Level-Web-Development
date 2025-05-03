"use strict";
/**There are 2 kiends of function .
* 1. Normal Function
* 2. Arrow Function */
function sum(num1, num2) {
    return num1 + num2;
}
// sum(12, '2')  is this not possible 
function divier(num1, num2 = 10) {
    return num1 / num2;
} // defaults data save 
const sumArrow = (num1, num2) => num1 + num2;
const stringAdd = (first, last) => { return first + " " + last; };
// object --> function --> method
const poorUser = {
    name: 'Ashraful',
    balance: 0,
    addBalence(balance) {
        return `My Current Balance is ${this.balance + balance}`;
    }
};
const array = [1, 2, 3, 4, 5, 6];
const newArray = array.map((Element) => Element * Element);
