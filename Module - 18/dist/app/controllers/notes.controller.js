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
exports.notesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const notes_model_1 = require("../models/notes.model");
// import { Note } from "../models/notes.model";
exports.notesRoutes = express_1.default.Router();
// get all notes
exports.notesRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield notes_model_1.Note.find();
    res.status(200).json({
        success: true,
        notes
    });
}));
// create note 
exports.notesRoutes.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Approach - 01
    // const myNote = new Note({
    //     title: "My First Note",
    // })
    // await myNote.save();
    // Approach - 02
    const body = req.body;
    const note = yield notes_model_1.Note.create(body);
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    });
}));
// get note by id
exports.notesRoutes.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const note = yield notes_model_1.Note.findById(id);
    res.status(200).json({
        success: true,
        message: "Single Note fetched successfully",
        note
    });
}));
// update note by id
exports.notesRoutes.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    const note = yield notes_model_1.Note.findByIdAndUpdate(id, body, { new: true });
    // const note = await Note.findOneAndUpdate(id, body, { new: true });
    // const note = await Note.updateOne({ _id: id }, body, { new: true });
    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        note
    });
}));
// delete note by id
exports.notesRoutes.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield notes_model_1.Note.findByIdAndDelete(id);
    res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    });
}));
