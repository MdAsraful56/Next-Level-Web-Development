const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

const arr2 = [11,12,13,...arr];

console.log(arr2);



const arrfn = (...para) => {
    let a = para;
    return a;
}

console.log(arrfn(1,2,3,4,5));