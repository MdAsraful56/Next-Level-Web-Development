/**There are 2 kiends of function .
* 1. Normal Function
* 2. Arrow Function */

function sum(num1 : number, num2 : number) {
    return num1 + num2;
}
// sum(12, '2')  is this not possible 


function divier(num1 : number, num2 : number = 10) {
    return num1 / num2
}    // defaults data save 


const sumArrow = (num1 : number, num2 : number) => num1 + num2;

const stringAdd = (first : string, last : string) : string => { return first + " " + last };


// object --> function --> method

const poorUser = {
    name : 'Ashraful',
    balance : 0,
    addBalence (balance : number) : string {
        return `My Current Balance is ${this.balance + balance}`
    }
};


const array : number[] = [1,2,3,4,5,6];

const newArray : number[] = array.map( (Element : number) : number => Element*Element )