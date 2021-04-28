// const [ values , setValues ] = useState (
//     {
//     history: [{
//     squares: Array(9).fill(null)
//     }],
//     stepNumber: 0,
//     xIsNext: true
//     }
//  )

//  export const history = (state) => state?.history;

// export const stepNumber = (state) => state?.stepNumber;

// export const xIsNext = (state) => state?.xIsNext;


//  init the state ----------------------------------
// constructor(props) {
//   super(props);
//   this.state = {
//     history: [{
//     squares: Array(9).fill(null)
//     }],
//     stepNumber: 0,
//     xIsNext: true
//   };
// }
// ---------------------------------------------------

// const JumpTo = (move) => {
//     setValues({
//         ...values,  
//         stepNumber: move,
//         xIsNext: (move % 2) ===0
//     })
// };

// ---------------------------------
// jumpTo(step) {
//   this.setState({
//     stepNumber: step,
//     xIsNext: (step % 2) ===0,
//   });
// }
// ---------------------------------

// const handleClick = (i) => {

//     const history = values.history.slice(0, values.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//         return;
//     }
//     squares[i] = values.xIsNext ? 'X' : 'O';


//     setValues({
//         ...values,
//         history: history.concat([{
//             squares: squares
//         }]),
//         stepNumber: history.length,
//         xIsNext: !values.xIsNext,
//     })

    
//     ---------------------------------
//     this.setState({
//         history: history.concat([{
//             squares: squares
//         }]),
//         stepNumber: history.length,
//         xIsNext: !values.xIsNext,
//     });
//     ---------------------------------

// }

// handleClick(i) {
//   const history = this.state.history.slice(0, this.state.stepNumber +1);
//   const current = history[history.length - 1];
//   const squares = current.squares.slice();
//   if (calculateWinner(squares) || squares[i]) {
//     return;
//   }
//   squares[i] = this.state.xIsNext ? 'X' : 'O';
//   this.setState({
//     history: history.concat([{
//       squares: squares
//     }]),
//     stepNumber: history.length,
//     xIsNext: !this.state.xIsNext,
//   });
// }

//   const history = this.state.history;



// import React, { useReducer, useContext } from 'react';
// import { jumpTo, move } from '../../models/tic-tac-toe/actions';
// import { initialState, reducer } from '../../models/tic-tac-toe/reducer';
// import { calculateWinner } from '../../libraries/tic-tac-toe';

// const Context = React.createContext()
// const ContextJumpTo = React.createContext()
// const ContextHandleClick = React.createContext()


// export function useMyContext() {
//     return useContext(Context)
// }
// export function useJumpTo() {
//     return useContext(ContextJumpTo)
// }
// export function useMyHandeClick() {
//     return useContext(ContextHandleClick)
// }

// export function ContextProvider({ children }) {
//     const [values, dispatch] = useReducer(reducer, initialState)
//     const { history, stepNumber, xIsNext } = values;
//     const current = history[stepNumber];
//     const winner = calculateWinner(current.squares);


//     const JumpTo = (move) => dispatch(jumpTo(move));

//     const handleClick = (i) => {
//         const squares = [...current.squares]
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = xIsNext ? 'X' : 'O';

//         dispatch(move({ squares }))
//     }


//     return (
//         <Context.Provider value={values}>
//             <ContextHandleClick.Provider value={handleClick} >
//                 {children}
//             </ContextHandleClick.Provider>
//             <ContextJumpTo.Provider value={JumpTo} >
//                 {children}
//             </ContextJumpTo.Provider>
//         </Context.Provider>
//     )

// }












//---------------------------


// import { useReducer, useContext } from 'react';
// // import { jumpTo, move } from '../../models/tic-tac-toe/actions';
// // import { initialState, reducer } from '../../models/tic-tac-toe/reducer';
// import {GameContext} from '../../App';
// // import { calculateWinner } from '../../libraries/tic-tac-toe';
// import { Board } from '../board';
// import './game.css';
// import { stepNumber } from './tests';


// // export const GameContext = createContext(initialState);

// const Game = () => {
    
//     // const [state, dispatch] = useReducer(reducer, initialState)

//     // const { history, stepNumber, xIsNext , current } = state;

//     // const JumpTo = (move) => dispatch(jumpTo(move));

//     // const handleClick = (i) => {
//     //     const squares = [...current.squares]
//     //     if (calculateWinner(squares) || squares[i]) {
//     //         return;
//     //     }
//     //     squares[i] = xIsNext ? 'X' : 'O';

//     //     dispatch(move({ squares }))
//     // }

//     // const current = history[stepNumber];
//     // const winner = calculateWinner(current.squares);
//     // const squares = [...history[stepNumber].squares];

//     // const moves = history.map((step, move) => {
//     //     const desc = move ?
//     //         'Go to move #' + move :
//     //         'Go to game Start';
//     //     return (
//     //         <li key={move}>
//     //             <button onClick={() => JumpTo(move)}>{desc}</button>
//     //         </li>
//     //     );
//     // })

//     // const status =
//     // state.winner
//     //  ? 'Winner: ' + state.winner 
//     //  : 'Next player: ' + (xIsNext ? 'X' : 'O');


//      const { state, handleClick, status, moves} = useContext(GameContext);
     
//     return (
        
//         // <GameContext.Provider value={{ squares }}>
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={{...state.history[stepNumber].squares}}
//                         onClick={handleClick}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         //  </GameContext.Provider>
//     );
// }

// export default Game;
