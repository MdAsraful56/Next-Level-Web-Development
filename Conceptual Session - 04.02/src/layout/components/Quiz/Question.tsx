import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControls from "./QuizControls";

const Question = () => {
  const dispatch = useAppDispatch();

  const { questions, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = userAnswers[currentQuestionIndex];

  const handleAnswerChange = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuestionIndex,
        answer: ans,
      })
    );
    // console.log(ans);
  };

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="">
            {currentQuestion.options.map((option, index) => (
              <Button
                variant={option === currentAnswer ? "default" : "outline"}
                onClick={() => handleAnswerChange(option)}
                className="w-full mt-3"
                key={index}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardContent>
        <QuizControls />
      </Card>
    </div>
  );
};

export default Question;
