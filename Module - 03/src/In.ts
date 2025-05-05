{
    // in grouds 

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }


    const getUser = (user: NormalUser | AdminUser) => {
        // user.name; // OK
        if ('role' in user) {
            // user.role; // OK
            console.log(`Admin User: ${user.name}, Role: ${user.role}`);
        } else {
            console.log(`Normal User: ${user.name}`);
        }
    }


    const normalUser : NormalUser = { name: 'Rain'};
    const addminUser : AdminUser = { name: 'Ashraful', role: 'Admin'};

    getUser(normalUser); // Normal User: Rain
    getUser(addminUser); // Admin User: Ashraful, Role: Admin



}