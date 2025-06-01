// const express = require('express')
import express, { Application, Request, Response } from "express"
import fs from "fs"
import path from "path"
const app : Application = express()

app.use(express.json())

const filepath = path.join(__dirname, "../db/todos.json")

// main route 
app.get('/', (req : Request, res : Response) => {
    res.send('Hay, This is Todo App server')
});
// get all todos route 
app.get('/todos', (req : Request, res : Response) => {
    const data = fs.readFileSync(filepath, { encoding: 'utf-8' })
    // console.log(data);
    res.json(JSON.parse(data));
});
// post create a single route 
app.post('/todos/create-todo', (req : Request, res : Response) => {
    const { title, body } = req.body;
    // console.log(title, body);
    const newTodo = { title, body, date: new Date().toISOString() };
    const allTodos = fs.readFileSync(filepath, { encoding: 'utf-8' });
    const parseAllTodos = JSON.parse(allTodos);
    parseAllTodos.push(newTodo);
    fs.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2));
    res.send('Todo created successfully');
});

export default app;