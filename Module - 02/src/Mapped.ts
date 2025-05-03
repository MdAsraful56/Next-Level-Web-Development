{

const arrOfNumbers : number[] = [1, 2, 3, 4, 5, 6];

const arrOfStrings : string[] = arrOfNumbers.map((number) => {
    return number.toString();
})

console.log(arrOfStrings);

type AreaNumber = {
    height: number;
    width: number;
}

type AreaString = {
    [key in 'height' | 'width'] : string;
}

type AreaString01 = {
    [key in keyof AreaNumber] : string;
}


type AreaString02<T> = {
    [key in keyof T] : T[key];
}

const area : AreaString02<{height: string; width: number}> = {
    height: '123',
    width: 123
}





}