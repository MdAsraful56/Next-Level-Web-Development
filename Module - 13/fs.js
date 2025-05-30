const fs = require('fs');


fs.writeFileSync('hello.txt', 'Hi, My name is Ashraful Islam', 'utf8');

const data = fs.readFileSync('hello.txt', 'utf8');
console.log(data);


