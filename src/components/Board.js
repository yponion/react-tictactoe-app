import React, { Component } from "react";
import Square from "./Square";
import "./Board.css";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
  }

  renerSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="status">Next Player: X, O</div>
        <div className="border-row">
          {this.renerSquare(0)}
          {this.renerSquare(1)}
          {this.renerSquare(2)}
        </div>
        <div className="border-row">
          {this.renerSquare(3)}
          {this.renerSquare(4)}
          {this.renerSquare(5)}
        </div>
        <div className="border-row">
          {this.renerSquare(6)}
          {this.renerSquare(7)}
          {this.renerSquare(8)}
        </div>
      </div>
    );
  }
}
