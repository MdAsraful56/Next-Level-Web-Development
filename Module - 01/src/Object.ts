// Reference Types --->> Object 

const user : {
    firstName : string;
    mideleName : string;
    lastName : string;
    isMerried : boolean
} = {
    firstName : 'Ashraful',
    mideleName : 'Islam',
    lastName : 'Asrf',
    isMerried : false
}


const user2 : {
    firstName : string;
    mideleName ?: string;  //Optional data types 
    lastName : string;
    isMerried : boolean;
    company : 'Howlader Enterprice'  // literl type 
    readonly isHappy : boolean;
} = {
    firstName : 'Md',
    lastName : 'Asraful',
    isMerried : false,
    company : 'Howlader Enterprice',
    isHappy : true
}

// user2.isHappy = false   can't assien this value becouse isHappy is readonly