"use strict";
// Destructuring
{
    // object Destructuring
    const user = {
        id: 123234,
        name: {
            firstName: 'Md',
            lastName: 'Ashraful'
        },
        contact: 123456781234,
        adderss: 'Uganda'
    };
    const { id, name: { firstName: mainName } } = user;
    // array Destructuring
    const friends = ['Rain', 'Raisa', 'Nayma', 'Sayma', 'Sinthya', 'Ahona'];
    const [, , Lover, ...rest] = friends;
}
