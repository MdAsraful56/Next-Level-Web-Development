import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hooks";

const getPerformanceMessage = (percentage: number) => {
  if (percentage >= 80) {
    return {
      message: "Excellent",
      color: "bg-green-800",
    };
  } else if (percentage >= 60) {
    return {
      message: "Good",
      color: "bg-yellow-500",
    };
  } else if (percentage >= 40) {
    return {
      message: "Average",
      color: "bg-orange-500",
    };
  } else {
    return {
      message: "Poor",
      color: "bg-red-600",
    };
  }
};

const QuizSummary = () => {
  const { questions, userAnswers } = useAppSelector((state) => state.quiz);

  const correctAnswerCount = questions.reduce((count, question, index) => {
    if (question.correctAnswer === userAnswers[index]) {
      return count + 1;
    }
    return count;
  }, 0);

  const inCorrectAnswerCount = questions.length - correctAnswerCount;

  const correctAnswerPercentage = Math.round(
    (Number(correctAnswerCount) / questions.length) * 100
  );

  const { message, color } = getPerformanceMessage(correctAnswerPercentage);

  return (
    <div className="flex justify-center mt-10">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Quiz Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-medium mb-4">
            You got {correctAnswerCount} out of {questions.length}
          </h2>
          <div className="mb-4">
            <Progress
              value={correctAnswerPercentage}
              className={`h-4 rounded-full ${color}`}
            />
          </div>
          <div className="mb-2 flex justify-between font-medium">
            <span className="text-sm">{correctAnswerPercentage}%</span>
            <span className="text-sm">Performance: {message}</span>
          </div>
          <div className="mb-4">
            <p className="text-sm">
              <strong>Incorrect Answer: {inCorrectAnswerCount} </strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
