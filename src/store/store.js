import cardReducer from "./card/cardReducer";
import { createStore, combineReducers } from "redux";

export const store = createStore(
  combineReducers({
    app: cardReducer,
  })
);
