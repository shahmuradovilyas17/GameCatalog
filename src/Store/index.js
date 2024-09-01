import { createStore } from "redux";
import { reducer } from "./Library/reducer";

export const store = createStore(reducer);
