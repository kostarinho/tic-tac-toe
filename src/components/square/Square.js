import { move } from "../../models/tic-tac-toe/actions";
import {
  squares,
  history,
  stepNumber,
  xIsNext,
  winner,
} from "../../models/tic-tac-toe/selectors";
import "./square.css";
import { withProps } from "../../models/utils";
import { GameContext } from "../../models/context";

const Square = ({
  id,
  history,
  stepNumber,
  xIsNext,
  winner,
  squares,
  move,
}) => {
  const moves = (i) => {
    const squares = [...history[stepNumber].squares];
    if (squares[i] || winner) return;

    squares[i] = xIsNext ? "X" : "O";

    move({ squares });
  };

  return (
    <button className="square" onClick={() => moves(id)}>
      {squares[id]}
    </button>
  );
};

export default withProps(
   GameContext,
  { squares, history, stepNumber, xIsNext, winner },
  { move }
)(Square);


