import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";
import React from "react";

<div>
  <img src={rock} alt="Rock Paper Scissors" />
  <img src={paper} alt="Rock Paper Scissors" />
  <img src={scissors} alt="Rock Paper Scissors" />
</div>;
function ChoiceCard(props) {
  return (
    // <div className={`${props.color} choice-card text-center `}>
    //   Hello there!
    // </div>

    <div
      className={`${
        props.winner === "winner"
          ? "border-success"
            ? props.winner === "lose"
            : "border-danger"
          : "border-dark"
      }choice-card text-center `}
    >
      <h2 className="text-center">{props.title}</h2>
      <img
        src={
          props.shape === "rock"
            ? rock
            : props.shape === "paper"
            ? paper
            : scissors
        }
        alt={props.shape}
      />
    </div>
  );
}

export default ChoiceCard;
