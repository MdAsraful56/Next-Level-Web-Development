"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const todosRouter = express_1.default.Router();
const filepath = path_1.default.join(__dirname, "../../../db/todos.json");
// get all todos route 
todosRouter.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    // console.log(data);
    res.json(JSON.parse(data));
});
// post create a single route 
todosRouter.post('/create-todo', (req, res) => {
    const { title, body } = req.body;
    // console.log(title, body);
    const newTodo = { title, body, date: new Date().toISOString() };
    const allTodos = fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
    const parseAllTodos = JSON.parse(allTodos);
    parseAllTodos.push(newTodo);
    fs_1.default.writeFileSync(filepath, JSON.stringify(parseAllTodos, null, 2));
    res.send('Todo created successfully');
});
exports.default = todosRouter;
