interface IUser {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
};


export default IUser;