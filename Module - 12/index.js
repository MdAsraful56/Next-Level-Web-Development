const { a, b, sum} = require('./index2.js');
const { a: a2, b: b2, sum: sum2 } = require('./index3.js');

console.log(a);

console.log(sum(10, 20));
console.log(sum(a, b));

console.log(a2);
console.log(b2);
console.log(sum2(10, 20, 30));
console.log(sum2(a2, b2, 30));