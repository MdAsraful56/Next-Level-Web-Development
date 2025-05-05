"use strict";
{
    const getUser = (user) => {
        // user.name; // OK
        if ('role' in user) {
            // user.role; // OK
            console.log(`Admin User: ${user.name}, Role: ${user.role}`);
        }
        else {
            console.log(`Normal User: ${user.name}`);
        }
    };
    const normalUser = { name: 'Rain' };
    const addminUser = { name: 'Ashraful', role: 'Admin' };
    getUser(normalUser); // Normal User: Rain
    getUser(addminUser); // Admin User: Ashraful, Role: Admin
}
