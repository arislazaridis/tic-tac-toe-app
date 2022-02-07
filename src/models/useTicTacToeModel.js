import React, { useState } from "react";
import calculateWinner from "../components/game/utils/calculateWinner";

const initialState = {
  player1: "",
  player2: "",
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
};

const useTicTacToeModel = () => {
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

  return {
    winner,
    xIsNext,
    player1,
    player2,
    squares,
    makeMove,
    state,
    setState,
  };
};

export default useTicTacToeModel;
