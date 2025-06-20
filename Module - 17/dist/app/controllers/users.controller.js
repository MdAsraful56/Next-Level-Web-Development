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
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_model_1 = require("../models/users.model");
exports.usersRoutes = express_1.default.Router();
// get all users
exports.usersRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_model_1.User.find();
    res.status(200).json({
        success: true,
        message: "All users successfully",
        users
    });
}));
// get single user by id 
exports.usersRoutes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield users_model_1.User.findById(id);
    res.status(200).json({
        success: true,
        message: "Single user successfully",
        user
    });
}));
// create user 
exports.usersRoutes.post("/create-user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield users_model_1.User.create(body);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        user
    });
}));
// update user by id
exports.usersRoutes.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    const user = yield users_model_1.User.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user
    });
}));
// delete user by id
exports.usersRoutes.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield users_model_1.User.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
}));
