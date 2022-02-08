import React, { useState } from "react";
import Board from "../board/Board";
import "./game.css";
import GamePlayer from "./components/GamePlayer";
import GameStatus from "./components/GameStatus";
import useTicTacToeModel from "../../models/useTicTacToeModel";

const Game = () => {
  const { winner, player1, player2, xIsNext, state, setState, makeMove } =
    useTicTacToeModel();

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
          squares={state.squares}
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
