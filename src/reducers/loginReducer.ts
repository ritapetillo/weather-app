import {
  LoginDispachTypes,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGOUT,
  GET_FAVORITES,
} from "../actions/types";

export interface ISearchState {
  loading: boolean;
  user: any | {};
  error_msg?: string;
  isAuth: boolean;
  favoriteCities: [];
}

const defaultState: ISearchState = {
  loading: false,
  user: {},
  error_msg: "",
  isAuth: false,
  favoriteCities: [],
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
        isAuth: true,
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
    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favoriteCities: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
