import { useContext } from "react";
import { GameContext } from "../../App";
import './square.css';

const Square = ({ id }) => {
    const { state, Move } = useContext(GameContext);
    return (
        <button className="square" onClick={() => Move(id)}>
            {state.history[state.stepNumber].squares[id]}
        </button>
    )
};

export default Square;