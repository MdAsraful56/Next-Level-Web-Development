import express, { Request, Response } from "express";
import { User } from "../models/users.model";



export const usersRoutes = express.Router();

// get all users
usersRoutes.get("/", async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        message: "All users successfully",
        users
    });
});


// get single user by id 
usersRoutes.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.status(200).json({
        success: true,
        message: "Single user successfully",
        user
    });
});


// create user 
usersRoutes.post("/create-user", async (req: Request, res: Response) => {
    const body = req.body;
    const user = await User.create(body);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user
    });
});


// update user by id
usersRoutes.patch("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;

    const user = await User.findByIdAndUpdate(id, body, { new: true });

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user
    });
});


// delete user by id
usersRoutes.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
});