interface IUser {
    name: string;
    email: string;
    age: number;
    password: string;
    role: "USER" | "ADMIN";
};


export default IUser;