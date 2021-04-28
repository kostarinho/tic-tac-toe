import { useReducer, useContext } from 'react';
// import { jumpTo, move } from '../../models/tic-tac-toe/actions';
// import { initialState, reducer } from '../../models/tic-tac-toe/reducer';
// import { calculateWinner } from '../../libraries/tic-tac-toe';
import { GameContext } from '../../App';
import { Board } from '../board';
import './game.css';

// export const GameContext = createContext(initialState);

const Game = () => {

    // const [state, dispatch] = useReducer(reducer, initialState)

    // const { history, stepNumber, xIsNext , current } = state;

    // const JumpTo = (move) => dispatch(jumpTo(move));

    // const handleClick = (i) => {
    //     const squares = [...current.squares]
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }
    //     squares[i] = xIsNext ? 'X' : 'O';

    //     dispatch(move({ squares }))
    // }

    // const current = history[stepNumber];
    // const winner = calculateWinner(current.squares);
    // const squares = [...history[stepNumber].squares];


    const { state, JumpTo } = useContext(GameContext);

    const moves = state.history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game Start';
        return (
            <li key={move}>
                <button onClick={() => JumpTo(move)}>{desc}</button>
            </li>
        );
    })

    const status = state.winner
        ? 'Winner: ' + state.winner
        : 'Next player: ' + (state.xIsNext ? 'X' : 'O');

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
}

export default Game;