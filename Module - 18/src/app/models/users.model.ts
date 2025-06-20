import { model, Schema } from "mongoose";
import IUser from "../interfaces/user.interface";
import validator from 'validator';


const userSchema = new Schema<IUser>(
    {
        name: { 
            type: String, 
            required: true, 
            trim: true,
            minlength: [3, "your name char atlast 3 + "],
            maxlength: [20, "your name maxlenteh 20 ."]
        },
        email: { 
            type: String, 
            required: [true, "vai email dite hoybo"], 
            unique: [true, 'vai same email ase '], 
            trim: true ,
            lowercase: true,
            // coustom validator & validate 
            // validate: {
            //     validator: function(value) {
            //         return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
            //     },
            //     message: function(props) {
            //         return `Email ${props.value} is not valid`
            //     }
            // }

            validate: [validator.isEmail, "vai email ta valid na. ayta ami deksi validaror npm library diye check korechi"]

        },
        age: { 
            type: Number, 
            required: true, 
            min: [18, "Age must be atlast 18, your value {VALUE}"], 
            max: 50 
        },
        password: { 
            type: String,
            required: true,
            // lowercase: true
        },
        role: {
            type: String,
            uppercase: true,
            enum: {
                values: ["USER", "ADMIN"],
                message: "vai right role dete hoybo"
            },
            default: "USER"
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export const User = model<IUser>("User", userSchema);