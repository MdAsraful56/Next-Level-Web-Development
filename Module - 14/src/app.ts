// const express = require('express')
import express, { Application, NextFunction, Request, Response } from "express"
import todosRouter from "./app/todos/Todos.routes"
import e from "express"
const app : Application = express()

// const todoSRouter = express.Router()
const userRouter = express.Router()


app.use(express.json())
app.use('/todos', todosRouter)
app.use('/users', userRouter)

// main route 
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log({
        url: req.url,
        method: req.method,
        headers: req.headers
    });
    next();
},
    
    (req : Request, res : Response, next: NextFunction) => {
    try {
        // console.log(something);
        res.send('Hay, This is Todo App server');
    } catch (error) {
        next(error);
    }
});


// 404 route
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

// error handling middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    // res.status(500).send('Internal Server Error');
    res.status(500).json({
        message: error.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
});

export default app;