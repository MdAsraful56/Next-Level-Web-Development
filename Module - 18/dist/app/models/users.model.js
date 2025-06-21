"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const addressSchema = new mongoose_1.Schema({
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
}, {
    _id: false, // to not create a separate _id for this subdocument
    versionKey: false
});
const userSchema = new mongoose_1.Schema({
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
        trim: true,
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
        validate: [validator_1.default.isEmail, "vai email ta valid na. ayta ami deksi validaror npm library diye check korechi"]
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
}, {
    versionKey: false,
    timestamps: true
});
userSchema.method("hashPassword", function (plainPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const password = yield bcryptjs_1.default.hash(plainPassword, 10);
        this.password = password;
        this.save();
    });
});
exports.User = (0, mongoose_1.model)("User", userSchema);
