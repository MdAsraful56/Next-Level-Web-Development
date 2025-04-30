const obj = {
    name: 'Ashraful',
    age: 20,
    adderss: {
        village: 'Dosmontara',
        post: 8040,
    }
}

console.log(obj);

const {name, adderss} = obj;
console.log(name);

const {village} = obj.adderss;
console.log(village);