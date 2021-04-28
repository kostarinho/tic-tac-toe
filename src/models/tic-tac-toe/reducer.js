import { calculateWinner } from '../../libraries/tic-tac-toe';
import { move, jumpTo } from './actions';

const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true,
};

const reducer = (state, action) => {

    switch (action.type) {
        case move.type:
            // const { history, stepNumber } = state;
            const newHistory = [...state.history, action.payload]
            const newStepNumber = state.history.length
            const winner = calculateWinner(action.payload.squares);

            return {
                ...state,
                history: newHistory,
                stepNumber: newStepNumber,
                xIsNext: !state.xIsNext,
                winner,
            }
        case jumpTo.type:
            return {
                ...state,
                stepNumber: action.payload,
                xIsNext: (action.payload % 2) === 0,
                winner: calculateWinner(state.history[action.payload].squares)
            };
        default:
            return state;
    }
};

export { initialState, reducer };