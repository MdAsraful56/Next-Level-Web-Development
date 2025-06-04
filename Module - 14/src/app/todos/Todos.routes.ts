import express, { Application, Request, Response } from "express";
import path from "path";
import client from "../../config/mongodb";
import { ObjectId } from "mongodb";

const todosRouter = express.Router();

const db = client.db("todosDB");
const collection = db.collection("todos");


// get all todos route 
todosRouter.get('/', async (req : Request, res : Response) => {
    const todos = await collection.find({}).toArray();
    res.json(todos);
});


// post create a single route 
todosRouter.post('/create-todo', async(req : Request, res : Response) => {
    const { title, description, priority } = req.body;
    await collection.insertOne({
        title, description, priority,
        isCompleted: false,
        createdAt: new Date(),
    })
    const todos = await collection.find({}).toArray();
    res.json(todos);
});


// get single todo 
todosRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = await collection.findOne({ _id: new ObjectId(id) });
    res.json(todo);
});


// delete single todo
todosRouter.delete('/delete-todo/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await collection.deleteOne({ _id: new ObjectId(id) });
    // const todos = await collection.find({}).toArray();
    res.json(data);
});


// update single todo
todosRouter.put('/update-todo/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const { title, description, priority, isCompleted } = req.body;
    const data = await collection.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                title,
                description,
                priority,
                isCompleted,
                updatedAt: new Date(),
            }
        },
        { upsert: true }
    );
    const todo = await collection.findOne({ _id: new ObjectId(id) });
    res.json(todo);
});





export default todosRouter;