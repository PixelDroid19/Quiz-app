import { useState } from "react";
import { Next } from "./Hook/useFunctions";
import { questions } from "./Data.js/Data";
import { BarOption } from "./Components/BarOption/BarOption";
import { BarRounds } from "./Components/BarRounds/BarRounds";
import "./App.css";

const App = (props) => {
  console.log(props.UserName)
  const { Pos, Name, Score, Wrong, Correct } =
    localStorage.getItem("User") === null
      ? { Pos: 0, Name: props.UserName, Score: 0, Wrong: "", Correct: "" }
      : JSON.parse(localStorage.getItem("User"));

  //State
  const [score, setScore] = useState(Score);
  const [showScore, setShowScore] = useState(false);
  const [Rounds, setRounds] = useState(Pos);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [CorrectAnswer, setCorrectAnswer] = useState(Correct);
  const [WrongAnswer, setWrongAnswer] = useState(Wrong);
  const Question = questions[Rounds];

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true && currentQuestion < Question.length - 1) {
      setScore(parseInt(score + Math.random() * (20 - 1)));
      setCorrectAnswer(parseInt(CorrectAnswer + 1));
      setCurrentQuestion(Next(currentQuestion, Question));
    } else {
      setWrongAnswer(parseInt(WrongAnswer + 1));
      if (currentQuestion < Question.length - 1) {
        setCurrentQuestion(Next(currentQuestion, Question));
      } else if (Rounds === questions.length - 1) {
        setShowScore(true);
        localStorage.removeItem("User");
      } else {
        setCurrentQuestion(0);
        setRounds(Rounds + 1);
      }
    }
  };

  return (
    <>
      {Rounds === questions.length - 1 ? (
        <></>
      ) : (
        <BarOption
          Name={Name}
          Rounds={Rounds}
          score={score}
          CorrectAnswer={CorrectAnswer}
          WrongAnswer={WrongAnswer}
        />
      )}
      <div className="app">
        {showScore ? (
          <div className="score-section">
            Jugador: {Name}
            <br />
            Puntuación {score} <br />
            Preguntas Correctas: {CorrectAnswer} <br />
            Preguntas Incorrectas: {WrongAnswer}
          </div>
        ) : (
          <>
            <BarRounds
              Rounds={Rounds}
              currentQuestion={currentQuestion}
              questions={questions}
              Question={Question}
            />

            <div className="answer-section">
              {Question[currentQuestion].answerOptions
                .sort(() => Math.random() - 0.5)
                .map((answerOption, index) => (
                  <button
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                    key={index}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
