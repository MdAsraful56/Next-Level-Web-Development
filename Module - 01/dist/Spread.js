"use strict";
{
    const marks1 = [23, 45, 56, 76, 54];
    const marks2 = [93, 35, 86, 26, 34];
    marks1.push(...marks2);
    const user1 = {
        name: 'Ashraful',
        roll: 12234,
    };
    const user2 = {
        name: 'Shanto',
        roll: 12234,
    };
    const userList = Object.assign(Object.assign({}, user1), user2);
}
