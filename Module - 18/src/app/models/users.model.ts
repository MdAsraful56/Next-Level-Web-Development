import { Model, model, Schema } from "mongoose";
import IUser, { IAddress, UserInstanceMethods } from "../interfaces/user.interface";
import validator from 'validator';
import { string } from "zod";
import bcrypt from "bcryptjs";


const addressSchema = new Schema<IAddress>(
    {
        city: {
            type: String,
            // required: true,
            trim: true
        },
        // state: {
        //     type: String,
        //     required: true,
        //     trim: true
        // },
        country: {
            type: String,
            // required: true,
            trim: true
        },
        zipCode: {
            type: Number,
            // required: true
        }
    }, 
    {
        _id: false, // to not create a separate _id for this subdocument
        versionKey: false
    }
);


const userSchema = new Schema<IUser, Model<IUser>, UserInstanceMethods>(
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
            // required: true,
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
        },
        // address: addressSchema,
        address: {
            type: addressSchema,
            // required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);


userSchema.method("hashPassword", async function(plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    this.password = password;
    this.save();
})

export const User = model<IUser>("User", userSchema);