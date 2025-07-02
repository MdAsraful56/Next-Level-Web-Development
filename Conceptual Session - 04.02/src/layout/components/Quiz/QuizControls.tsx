import { Button } from "@/components/ui/button";
import { nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControls = () => {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const isAnswerSelection = userAnswers[currentQuestionIndex] !== null;

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };
  const handleNext = () => {
    if (isAnswerSelection) {
      dispatch(nextQuestion());
    }
  };

  return (
    <div className="flex justify-between mt-4 space-x-4 px-5">
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default QuizControls;
