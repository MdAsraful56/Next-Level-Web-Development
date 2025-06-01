"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filepath = path_1.default.join(__dirname, "../db/todos.json");
// main route 
app.get('/', (req, res) => {
    res.send('Hay, This is Todo App server');
});
// get all todos route 
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    // console.log(data);
    res.json(JSON.parse(data));
});
// post create a single route 
app.post('/todos/create-todo', (req, res) => {
    const { title, body } = req.body;
    // console.log(title, body);
    const newTodo = { title, body, date: new Date().toISOString() };
    const allTodos = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    const parseAllTodos = JSON.parse(allTodos);
    parseAllTodos.push(newTodo);
    fs_1.default.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2));
    res.send('Todo created successfully');
});
exports.default = app;
