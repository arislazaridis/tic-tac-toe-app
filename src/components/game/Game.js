import React, { useState } from "react";
import Board from "../board/Board";
import "./game.css";
import GamePlayer from "./components/GamePlayer";
import GameStatus from "./components/GameStatus";
import calculateWinner from "./utils/calculateWinner";

const initialState = {
  player1: "",
  player2: "",
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const Game = () => {
  const [state, setState] = useState(initialState);

  const makeMove = (squareIndex) => {
    const { winner, player1, player2, squares, xIsNext } =
      state || initialState;

    if (winner || squares[squareIndex]) {
      return;
    }

    if (!player1 || !player2) {
      alert("Please give tha players names");
      return;
    }

    const newSquares = squares.slice();

    newSquares[squareIndex] = xIsNext ? "X" : "O";

    const newWinner = calculateWinner(newSquares);
    console.log(state);
    setState({
      ...state,
      winner: newWinner,
      squares: newSquares,
      xIsNext: !xIsNext,
    });
  };

  const gameData = state || initialState;
  const { winner, xIsNext, player1, player2, squares } = gameData;

  return (
    <div className="game">
      <GameStatus
        winner={winner}
        xIsNext={xIsNext}
        player1={player1}
        player2={player2}
      />
      <div className="game-board">
        <Board
          squares={state.squares} //pernaei ton pinaka me kena squares
          onSquareClick={(squareIndex) => makeMove(squareIndex)}
        />
      </div>
      <div className="wrapper">
        <GamePlayer
          label="Player 1"
          player={player1}
          setPlayer={(e) => setState({ ...state, player1: e.target.value })}
        />
        <GamePlayer
          label="Player 2"
          player={player2}
          setPlayer={(e) => setState({ ...state, player2: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Game;
