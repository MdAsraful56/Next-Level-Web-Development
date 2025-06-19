import express, { Application, Request, Response } from "express";
import { notesRoutes } from "./app/controllers/notes.controller";


const app: Application = express();

app.use(express.json());


app.use("/notes", notesRoutes);




// all routes
app.get("/", (req: Request, res: Response) => {
    res.send('Welcome to Node App API');
});




export default app;