import { createStore } from "redux";
import rootReducer from "./reducer";

export const reduxStore = createStore(rootReducer); 