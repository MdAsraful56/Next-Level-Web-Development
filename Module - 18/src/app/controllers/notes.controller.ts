import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
// import { Note } from "../models/notes.model";



export const notesRoutes = express.Router();

// get all notes
notesRoutes.get("/", async (req: Request, res: Response) => {
    const notes = await Note.find();
    res.status(200).json({
        success: true,
        notes
    });
});


// create note 
notesRoutes.post("/create-note", async (req: Request, res: Response) => {

    // Approach - 01
    // const myNote = new Note({
    //     title: "My First Note",
    // })
    // await myNote.save();


    // Approach - 02
    const body = req.body;
    const note = await Note.create(body);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    });
});


// get note by id
notesRoutes.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const note = await Note.findById(id);
    res.status(200).json({
        success: true,
        message: "Single Note fetched successfully",
        note
    });
});


// update note by id
notesRoutes.patch("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;

    const note = await Note.findByIdAndUpdate(id, body, { new: true });
    // const note = await Note.findOneAndUpdate(id, body, { new: true });
    // const note = await Note.updateOne({ _id: id }, body, { new: true });


    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        note
    });
});


// delete note by id
notesRoutes.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    });
});