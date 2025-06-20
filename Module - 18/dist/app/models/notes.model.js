"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, default: "" },
    category: {
        type: String,
        enum: ["work", "personal", "other", "study"],
        default: "other"
    },
    pinned: {
        type: Boolean,
        default: false
    },
    tags: {
        label: { type: String, required: true },
        color: { type: String, default: "blue" }
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
