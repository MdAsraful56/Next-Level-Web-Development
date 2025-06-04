"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = __importDefault(require("../../config/mongodb"));
const mongodb_2 = require("mongodb");
const todosRouter = express_1.default.Router();
const db = mongodb_1.default.db("todosDB");
const collection = db.collection("todos");
// get all todos route 
todosRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield collection.find({}).toArray();
    res.json(todos);
}));
// post create a single route 
todosRouter.post('/create-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    yield collection.insertOne({
        title, description, priority,
        isCompleted: false,
        createdAt: new Date(),
    });
    const todos = yield collection.find({}).toArray();
    res.json(todos);
}));
// get single todo 
todosRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todo);
}));
// delete single todo
todosRouter.delete('/delete-todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield collection.deleteOne({ _id: new mongodb_2.ObjectId(id) });
    // const todos = await collection.find({}).toArray();
    res.json(data);
}));
// update single todo
todosRouter.put('/update-todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, description, priority, isCompleted } = req.body;
    const data = yield collection.updateOne({ _id: new mongodb_2.ObjectId(id) }, {
        $set: {
            title,
            description,
            priority,
            isCompleted,
            updatedAt: new Date(),
        }
    }, { upsert: true });
    const todo = yield collection.findOne({ _id: new mongodb_2.ObjectId(id) });
    res.json(todo);
}));
exports.default = todosRouter;
