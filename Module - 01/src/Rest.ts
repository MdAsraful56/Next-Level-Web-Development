{

    const greetingFriends = (friend1 : string, friend2 : string, friend3 : string) => {
        console.log(`Hi ${friend1}, ${friend2}, ${friend3}`)
    }

// greetingFriends('abir', 'malek', 'rohim', 'korim')  is not possible becaouse parameter 3 . you jinput 4 parameter

const greetingFriends1 = (...friends : string[]) => {
    // console.log(`HI ${friends}`) error
    friends.forEach((element : string) => console.log(element))
}


}