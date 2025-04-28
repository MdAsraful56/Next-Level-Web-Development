let abc = undefined; 

function scp() {
    abc = 10;
    console.log(abc);
}

scp();
console.log(abc);

// -----------------------------------------------

const xyz = 'Hello';

function p() {
    xyz;
    console.log(xyz)
}

p();

// console.log(xyz);


// --------------------------------------------------------------------


function hay() {
    let sum = 0;
    for (let i = 0; i < 11; i++) {
        console.log(i);
        sum += i;
    }
    // console.log(sum);
    return sum;
}

console.log(hay());