import type { RootState } from "@/redux/store";
import type { ITask } from "@/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    task : ITask[]
}



const initialState: IInitialState = {
    task: [
        {
            id: "23456789",
            title: "How to use Redux Toolkit",
            description: "First, you need to install Redux Toolkit and React-Redux.",
            isCompleted: false,
            dueDate: "2025-01-01T00:00:00.000Z",
        },
        {
            id: "23456789",
            title: "How to use Redux Toolkit",
            description: "First, you need to install Redux Toolkit and React-Redux.",
            isCompleted: true,
            dueDate: "2025-01-01T00:00:00.000Z",
        }
    ]
};


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
});




export const selectTasks = (state: RootState) => {
    return state.tasks.task;
}


export default taskSlice.reducer;