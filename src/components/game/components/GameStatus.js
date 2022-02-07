import React from "react";

const GameStatus = ({ winner, xIsNext, player1, player2 }) => {
  const prevPlayer = xIsNext ? player2 : player1;
  const nextPlayer = xIsNext ? player1 : player2;
  const winnerName = winner === "draw..." ? winner : prevPlayer;

  const status = winner
    ? "Winner: " + winnerName
    : "Next player: " + nextPlayer;

  return <div className="status">{status}</div>;
};

export default GameStatus;
