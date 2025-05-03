"use strict";
{
    const greetingFriends = (friend1, friend2, friend3) => {
        console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
    };
    // greetingFriends('abir', 'malek', 'rohim', 'korim')  is not possible becaouse parameter 3 . you jinput 4 parameter
    const greetingFriends1 = (...friends) => {
        // console.log(`HI ${friends}`) error
        friends.forEach((element) => console.log(element));
    };
}
