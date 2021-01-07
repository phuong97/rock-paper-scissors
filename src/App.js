import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import PublicNavbar from "./PublicNavbar";
import ChoiceCard from "./ChoiceCard";
import React, { useState } from "react";
function App() {
  const [playerName, setPlayerName] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerResult, setPlayerResult] = useState("tie");
  const [playerScore, setPlayerScore] = useState(0);

  const [computerChoice, setComputerChoice] = useState("");
  const [computerResult, setComputerResult] = useState("tie");
  const [computerScore, setComputerScore] = useState(0);

  //-------------------
  const shapes = ["rock", "paper", "scissors"];

  const randomMove = (move) => {
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    setComputerChoice(newComputerChoice);
    setPlayerChoice(move);
    calculateWinner(newComputerChoice, move);
  };

  const calculateWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setPlayerResult("tie");
      setComputerResult("tie");
    }
    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        setPlayerResult("lose");
        setComputerResult("win");
        setComputerScore(computerScore + 1);
      } else {
        setPlayerResult("win");
        setComputerResult("lose");
        setPlayerScore(playerScore + 1);
      }
    }
    //-------------------------------
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        setPlayerResult("lose");
        setComputerResult("win");
        setComputerScore(computerScore + 1);
      } else {
        setPlayerResult("win");
        setComputerResult("lose");
        setPlayerScore(playerScore + 1);
      }
    }
    //-------------------------------
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        setPlayerResult("lose");
        setComputerResult("win");
        setComputerScore(computerScore + 1);
      } else {
        setPlayerResult("win");
        setComputerResult("lose");
        setPlayerScore(playerScore + 1);
      }
    }
  };

  const restart = () => {
    setPlayerChoice("");
    setPlayerResult("tie");
    setPlayerScore(0);
    setComputerChoice("");
    setComputerResult("tie");
    setComputerScore(0);
  };

  //----- Name-----
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  /* <ChoiceCard color="red" />
        <ChoiceCard color="white" />
        <ChoiceCard color="blue" /> */

  return (
    <div className="App">
      {/* ---NavBar--- */}
      <PublicNavbar />
      {/* nameCheckbox */}
      Name : <input type="text" onChange={handleChange} />
      {/* ---ChoiceCard--- */}
      <Container>
        <div className="d-flex justify-content-between m-3">
          <ChoiceCard
            title={playerName}
            winner={playerResult}
            shape={playerChoice}
            score={playerScore}
          />
          <ChoiceCard
            title="Computer"
            winner={computerResult}
            shape={computerChoice}
            score={computerScore}
          />
        </div>
        <ButtonGroup>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("rock")}
          >
            Play 👊
          </Button>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("paper")}
          >
            Play 🤚
          </Button>
          <Button
            variant="outline-dark"
            className="mx-1"
            onClick={() => randomMove("scissors")}
          >
            Play ✌
          </Button>
          <Button variant="dark" onClick={restart}>
            Restart
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export default App;
