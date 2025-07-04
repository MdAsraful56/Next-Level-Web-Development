import { quizData } from "@/layout/components/Quiz/quizData";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface QuizState {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  // quizCompleted: boolean;
}

// Define the initial state using that type
const initialState: QuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  // quizCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
  },
});

export const { setAnswer, nextQuestion, previousQuestion } = quizSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.quiz.questions;

export default quizSlice.reducer;
