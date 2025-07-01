import Question from "../components/Quiz/Question";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl p-2 text-center font-bold">
        Welcome to Quiz App
      </h1>
      <Question />
    </div>
  );
};

export default Home;
