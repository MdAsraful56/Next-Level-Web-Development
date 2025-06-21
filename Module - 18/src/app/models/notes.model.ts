import { model, Schema } from "mongoose";
import INote from "../interfaces/note.interface";

const noteSchema = new Schema<INote>(
    {
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
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        }
    }, 
    {
        versionKey: false,
        timestamps: true
    }
);




export const Note = model("Note", noteSchema);