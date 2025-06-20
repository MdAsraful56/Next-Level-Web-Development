import express, { Request, Response } from "express";
import { User } from "../models/users.model";
import { z } from "zod";



export const usersRoutes = express.Router();



// using zod for validation
const createUserSchemaZod = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    age: z.number(),
    password: z.string(),
    role: z.string().optional()
})





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
usersRoutes.post("/create-user", async (req: Request, res: Response): Promise<void> => {
    try {
        const body = await createUserSchemaZod.parseAsync(req.body);

        const user = await User.create(body);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {}
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid data",
            error: error instanceof z.ZodError ? error.errors : error
        });
    }
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