import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  const renerSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board-wrapper">
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
