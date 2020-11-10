import cardReducer from "./card/cardReducer";
import { createStore, combineReducers } from "redux";

export default createStore(
  combineReducers({
    app: cardReducer,
  })
);
