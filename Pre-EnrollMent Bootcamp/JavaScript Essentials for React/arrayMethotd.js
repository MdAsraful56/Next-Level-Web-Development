const arrays = [1,2,3,4,5];

const newArr = arrays.forEach(array => {
    const newa = `${array + 1}`;
    // console.log(newa);
    return newa;    //forEach method is not return 
})

// console.log(newArr)


const newArray = arrays.map(array => {
    const newa = `${array + 1}`;
    // console.log(newa);
    return newa
})

// console.log(newArray);


const number = [1,2,3,4,5,6,7,8,9,10];
console.log(number);

console.log(number.filter(element => element > 4).map(el => el * 2).reduce((acc, curr) => acc + curr))