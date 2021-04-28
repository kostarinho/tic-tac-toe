import { useReducer, createContext } from 'react';
import { initialState, reducer } from './models/tic-tac-toe/reducer';
import { jumpTo, move } from './models/tic-tac-toe/actions';
import { Game } from './components/game';

export const GameContext = createContext(initialState);

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { stepNumber, xIsNext } = state;
    console.log(state)


    const JumpTo = (move) => dispatch(jumpTo(move));

    const Move = (i) => {
        const squares = [...state.history[stepNumber].squares]
        if (squares[i] || state.winner) return;

        squares[i] = xIsNext ? 'X' : 'O';

        dispatch(move({ squares }))
    }

    return (
        <GameContext.Provider value={{ state, JumpTo, Move }}>
            <Game />
        </GameContext.Provider>
    );
}
export default App;

