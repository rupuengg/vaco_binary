import { combineReducers } from "redux";
import loanReducer from "./loanReducer";

export const rootRecuer = combineReducers({
  loan: loanReducer
});

export default rootRecuer;
