import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";



const app: Application = express();

const noteSchema = new Schema({
    title: String,
    content: String,
})


const Note = model("Note", noteSchema);


// all note 
app.get("/", (req: Request, res: Response) => {
    res.send('Welcome to Node App API');
});

// create note 
app.post("/create-note", async (req: Request, res: Response) => {
    const myNote = new Note({
        title: "My First Note",
        content: "This is the content of my first note."
    })

    await myNote.save();

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    });
});










export default app;