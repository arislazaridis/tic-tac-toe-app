import React from "react";
import Square from "../square/Square";
import "./board.css";

//args: adeio board kai i func
function Board({ squares, onSquareClick }) {
  const renderSquare = (squareIndex) => (
    <Square
      value={squares[squareIndex]}
      onClick={() => onSquareClick(squareIndex)}
    />
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
