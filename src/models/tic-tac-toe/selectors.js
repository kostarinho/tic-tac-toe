const squares = (state) => state?.history[state.stepNumber].squares;

const history = (state) => state?.history;

const stepNumber = (state) => state?.stepNumber;

const xIsNext = (state) => state?.xIsNext;

const winner = (state) => state?.winner;

export { squares, history, stepNumber, xIsNext, winner };
