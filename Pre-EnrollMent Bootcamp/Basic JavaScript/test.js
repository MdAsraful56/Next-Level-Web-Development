var a;
a = 10;
console.log(a);

function One1() {
    console.log('One1');
}

One1();

function One() {
    console.log('One');
    two();
}

function two() {
    console.log('Two');
    three();
}

function three() {
    console.log('Three');
}

One();
two();
three();