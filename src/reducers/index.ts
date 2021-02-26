import { combineReducers } from "redux";
import { loginAction } from "../actions/authActions";
import loginReducer from "./loginReducer";
import searchRedcer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchRedcer,
  user: loginReducer,
});
export default rootReducer;
