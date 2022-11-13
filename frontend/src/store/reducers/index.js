import { combineReducers } from "redux";
import { loginReducer, tokenReducer } from "./loginReducers";
import { memoryReducer } from "./memoryReducers";

const reducers = combineReducers({
  user: loginReducer,
  token: tokenReducer,
  memories: memoryReducer,
});

export default reducers;
