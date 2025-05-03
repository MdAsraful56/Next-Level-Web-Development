"use strict";
var _a, _b;
// Ternary, optional chaining & nullish coalescing operator
{
    const age = 30;
    if (age < 18) {
        console.log('Not Adult');
    }
    else {
        console.log('Adult');
    }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);
    const isAuth = undefined;
    const result1 = isAuth !== null && isAuth !== void 0 ? isAuth : 'Guest';
    const person01 = {
        name: 'Ashraful',
        adderss: {
            city: 'ctg',
            road: '123 road',
            persentAddress: 'c block 12 house'
        }
    };
    const parmentalAdderss = (_b = (_a = person01 === null || person01 === void 0 ? void 0 : person01.adderss) === null || _a === void 0 ? void 0 : _a.parmentalAdderss) !== null && _b !== void 0 ? _b : 'No Permenal Adderss';
    console.log(parmentalAdderss);
}
