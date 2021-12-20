import React from "react";

export const BarRounds = (props) => {
  return (
    <div className="question-section">
      <div className="question-count">
        <div className="BoxCount">
          <span>Rondas</span>
          <span>
            {parseInt(props.Rounds) + 1}/{props.questions.length}
          </span>
        </div>

        <div className="BoxCount">
          <span>Preguntas</span>
          <span>
            {props.currentQuestion + 1}/{props.Question.length}
          </span>
        </div>
      </div>
      <div className="question-text">
        {props.Question[props.currentQuestion].questionText}
      </div>
    </div>
  );
};
