{
    // generics type 

    console.log('generics type');

    type GenericsArray<T> = Array<T>;

    // const marks : number[] = [76,54,23,69];
    // const marks : Array<number> = [76,54,23,69];
    const marks : GenericsArray<number> = [76,54,23,69];


    // const subjects : string[] = ['Math', 'Physics', 'Chemistry'];
    // const subjects : Array<string> = ['Math', 'Physics', 'Chemistry'];
    const subjects : GenericsArray<string> = ['Math', 'Physics', 'Chemistry'];


    // const boolArray : boolean[] = [true, false, true];
    // const boolArray : Array<boolean> = [true, false, true];
    const boolArray : GenericsArray<boolean> = [true, false, true];


    const users : GenericsArray<{name: string, age: number}> =[
        {
            name: 'Sohel Rana',
            age: 25
        },
        {
            name: 'Sinthya',
            // age: '18'
            age: 17
        }
    ]


// generics tuple 


type GenericsTuple<X, Y>  = [X, Y];

const user : GenericsTuple<string, string> = ['Ashraful', 'Nayma'];

const userWithId : GenericsTuple<number, {name: string, email: string}> = [1234, {
    name: 'Asrf',
    email: 'asrf@gmail.com'
}];

console.log(userWithId);





}