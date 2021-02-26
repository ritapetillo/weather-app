import {
  SearchDispachTypes,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
  SEARCH_LOADING,
  SEARCH_CITY,
} from "../actions/types";
import { WeeklyForecast, City } from "../Interfaces/WeeklyForeact";

export interface ISearchState {
  loading: boolean;
  results: WeeklyForecast | {};
  error_msg?: string;
  city: City | "";
}

const defaultState: ISearchState = {
  loading: false,
  results: {},
  error_msg: "",
  city: "",
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
    case SEARCH_CITY:
      return {
        ...state,
        loading: false,
        city: action.payload,
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
