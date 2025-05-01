{

    const marks1 : number[] = [23, 45, 56, 76, 54];
    const marks2 : number[] = [93, 35, 86, 26, 34];

    marks1.push(...marks2);


    const user1 : {
        name : string;
        roll : number
    } = {
        name : 'Ashraful',
        roll : 12234,
    }


    const user2 : {
        name : string;
        roll : number
    } = {
        name : 'Shanto',
        roll : 12234,
    }

    const userList = {
        ...user1,
        ...user2
    }


}