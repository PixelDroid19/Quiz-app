import React from "react";
import { UserData } from "../../Obj/Obj";
import { Button } from "../Button/Button";
import "./BarOption.css";

export const BarOption = (props) => {
  function SaveOption() {
    const SaveData = new UserData(
      props.Name,
      props.Rounds,
      props.score,
      props.CorrectAnswer,
      props.WrongAnswer
    );
    localStorage.setItem("User", JSON.stringify(SaveData));
  }

  return (
    <div className="BarOption">
      <Button
        name="Guardar"
        color="black"
        backgroundColor={"green"}
        onClick={SaveOption}
      />
      <p style={{ fontWeight: "600" }}>Jugador: {props.Name}<br/> Puntuación: {props.score}</p>
    </div>
  );
};
