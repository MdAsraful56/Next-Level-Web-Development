// import { Types } from "mongoose";
import { hash } from './../../../node_modules/bcryptjs/index';

interface IUser extends UserInstanceMethods {
    name: string;
    email: string;
    age: number;
    password: string;
    role: "USER" | "ADMIN";
    address: IAddress;
    hashPassword(password: string): Promise<string>;
};

export interface IAddress {
    city: string;
    // state: string;
    country: string;
    zipCode: number;
}

export interface UserInstanceMethods {
    hashPassword(password: string): Promise<string>;
}



export default IUser;