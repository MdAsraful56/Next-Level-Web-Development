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
// const express = require('express')
const express_1 = __importDefault(require("express"));
const Todos_routes_1 = __importDefault(require("./app/todos/Todos.routes"));
const app = (0, express_1.default)();
// const todoSRouter = express.Router()
const userRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use('/todos', Todos_routes_1.default);
app.use('/users', userRouter);
// main route 
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log({
        url: req.url,
        method: req.method,
        headers: req.headers
    });
    next();
}), (req, res, next) => {
    try {
        // console.log(something);
        res.send('Hay, This is Todo App server');
    }
    catch (error) {
        next(error);
    }
});
// 404 route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Route not found'
    });
});
// error handling middleware
app.use((error, req, res, next) => {
    console.error(error);
    // res.status(500).send('Internal Server Error');
    res.status(500).json({
        message: error.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
});
exports.default = app;
