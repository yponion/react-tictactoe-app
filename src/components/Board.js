import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  };

  const renerSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">Next Player: X, O</div>
      <div className="border-row">
        {renerSquare(0)}
        {renerSquare(1)}
        {renerSquare(2)}
      </div>
      <div className="border-row">
        {renerSquare(3)}
        {renerSquare(4)}
        {renerSquare(5)}
      </div>
      <div className="border-row">
        {renerSquare(6)}
        {renerSquare(7)}
        {renerSquare(8)}
      </div>
    </div>
  );
};

export default Board;
