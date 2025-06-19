interface INote {
    title: string;
    content: string;
    category: "work" | "personal" | "other" | "study";
    pinned: boolean;
    tags: {
        label: string;
        color: string;
    };
}

export default INote;