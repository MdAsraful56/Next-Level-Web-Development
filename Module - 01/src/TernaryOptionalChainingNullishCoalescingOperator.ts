// Ternary, optional chaining & nullish coalescing operator
{

    const age : number = 30;

    if (age < 18) {
        console.log('Not Adult');
    } else {
        console.log('Adult');
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);

    const isAuth = undefined;
    const result1 = isAuth ?? 'Guest'

    type User = {
        name: string;
        adderss: {
            city: string;
            road: string;
            parmentalAdderss ?: string;
            persentAddress: string;
        }
    }


    const person01 : User = {
        name: 'Ashraful',
        adderss: {
            city: 'ctg',
            road: '123 road',
            persentAddress: 'c block 12 house'
        }
    }

    const parmentalAdderss = person01?.adderss?.parmentalAdderss ?? 'No Permenal Adderss';
    console.log(parmentalAdderss)


}