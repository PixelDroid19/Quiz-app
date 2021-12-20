import React from "react";

export const BarRounds = (props) => {
  return (
    <div className="question-section">
      <div className="question-count">
        <div className="BoxCount">
          <span>Rondas {parseInt(props.Rounds) + 1}</span>/{props.questions.length}
          <br />
        </div>
        <div className="BoxCount">
          <span>Preguntas {props.currentQuestion + 1}</span>/{props.Question.length}
        </div>
      </div>
      <div className="question-text">
        {props.Question[props.currentQuestion].questionText}
      </div>
    </div>
  );
};
