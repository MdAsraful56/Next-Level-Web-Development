import type { RootState } from "@/redux/store";
import type { ITask } from "@/Types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();

      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };

      state.task.push(taskData);
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.tasks.task;
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
