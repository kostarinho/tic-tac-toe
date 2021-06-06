import { useReducer } from "react";
import { initialState, reducer } from "./models/tic-tac-toe/reducer";
// import { jumpTo, move } from "./models/tic-tac-toe/actions";
import { GameContext } from "./models/context";
import { Game } from "./components/game";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <Game />
    </GameContext.Provider>
  );
};
export default App;
