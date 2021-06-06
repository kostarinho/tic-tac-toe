import { createContext } from "react";
import { initialState } from "./tic-tac-toe/reducer";

export const GameContext = createContext(initialState);
