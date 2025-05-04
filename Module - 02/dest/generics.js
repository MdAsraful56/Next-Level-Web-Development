"use strict";
{
    // generics type 
    console.log('generics type');
    // const marks : number[] = [76,54,23,69];
    // const marks : Array<number> = [76,54,23,69];
    const marks = [76, 54, 23, 69];
    // const subjects : string[] = ['Math', 'Physics', 'Chemistry'];
    // const subjects : Array<string> = ['Math', 'Physics', 'Chemistry'];
    const subjects = ['Math', 'Physics', 'Chemistry'];
    // const boolArray : boolean[] = [true, false, true];
    // const boolArray : Array<boolean> = [true, false, true];
    const boolArray = [true, false, true];
    const users = [
        {
            name: 'Sohel Rana',
            age: 25
        },
        {
            name: 'Sinthya',
            // age: '18'
            age: 17
        }
    ];
    const user = ['Ashraful', 'Nayma'];
    const userWithId = [1234, {
            name: 'Asrf',
            email: 'asrf@gmail.com'
        }];
    console.log(userWithId);
}
