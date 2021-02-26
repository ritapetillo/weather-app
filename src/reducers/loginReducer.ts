import {
  LoginDispachTypes,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
} from "../actions/types";

export interface ISearchState {
  loading: boolean;
  user: any | {};
  error_msg?: string;
}

const defaultState: ISearchState = {
  loading: false,
  user: {},
  error_msg: "",
};

const loginReducer = (
  state: ISearchState = defaultState,
  action: LoginDispachTypes
): ISearchState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error_msg: "",
      };

    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        user: {},
        error_msg: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: {},
        loading: false,
        error_msg: "There are no results for this research",
      };
    default:
      return state;
  }
};

export default loginReducer;
