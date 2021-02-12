import {
  SearchDispachTypes,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
  SEARCH_LOADING,
} from "../actions/types";
import { WeeklyForecast } from "../Interfaces/WeeklyForeact";

export interface ISearchState {
  loading: boolean;
  results: WeeklyForecast | {};
  error_msg?: string;
}

const defaultState: ISearchState = {
  loading: false,
  results: {},
  error_msg: "",
};

const searchReducer = (
  state: ISearchState = defaultState,
  action: SearchDispachTypes
): ISearchState => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
        error_msg: "",
      };
    case SEARCH_LOADING:
      return {
        ...state,
        loading: true,
        results: {},
        error_msg: "",
      };
    case SEARCH_FAIL:
      return {
        ...state,
        results: {},
        loading: false,
        error_msg: "There are no results for this research",
      };
    default:
      return state;
  }
};

export default searchReducer;
