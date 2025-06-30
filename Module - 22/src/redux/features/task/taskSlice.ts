import type { RootState } from "@/redux/store";
import type { ITask } from "@/Types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [],
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };
      // state.task.push(taskData);

      const taskData = createTask(action.payload);
      state.task.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.task.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task.isCompleted
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    // updateTask: (state, action: PayloadAction<string>) => {},
  },
});

export const selectTasks = (state: RootState) => {
  return state.tasks.task;
};

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
