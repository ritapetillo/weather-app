import { combineReducers } from "redux";
import searchRedcer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchRedcer,
});
export default rootReducer;
