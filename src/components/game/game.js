import { GameContext } from "../../models/context";
import { history, xIsNext, winner } from "../../models/tic-tac-toe/selectors";
import { withProps } from "../../models/utils";
import { jumpTo } from "../../models/tic-tac-toe/actions";
import { Board } from "../board";
import "./game.css";

const Game = ({ winner, history, xIsNext, jumpTo }) => {
  const JumpTo = (move) => jumpTo(move);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game Start";
    return (
      <li key={move}>
        <button onClick={() => JumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default withProps(
  GameContext,
  {
    history,
    xIsNext,
    winner,
  },
  {
    jumpTo,
  }
)(Game);
