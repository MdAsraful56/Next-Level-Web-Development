import { useAppSelector } from "@/redux/hooks";
import Question from "../components/Quiz/Question";
import QuizSummary from "../components/Quiz/QuizSummary";

const Home = () => {
  // const { } = useAppSelector((state) => state.quiz);
  const quiz = useAppSelector((state) => state.quiz);
  const quizCompleted = quiz.currentQuestionIndex >= quiz.questions.length - 1;

  return (
    <div>
      <h1 className="text-3xl p-2 text-center font-bold">
        Welcome to Quiz App
      </h1>
      {!quizCompleted ? <Question /> : <QuizSummary />}
    </div>
  );
};

export default Home;
