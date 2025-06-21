import { Types } from "mongoose";

interface INote {
    title: string;
    content: string;
    category: "work" | "personal" | "other" | "study";
    pinned: boolean;
    tags: {
        label: string;
        color: string;
    };
    userId: Types.ObjectId;
}

export default INote;