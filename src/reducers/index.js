import { combineReducers } from "redux";
import message from "./message";
import timer from "./timer";

export default combineReducers({
  timer,
  message
});
