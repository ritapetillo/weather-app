import { Dispatch } from "redux";
import {
  SearchDispachTypes,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
  SEARCH_LOADING,
} from "./types";
import { WeeklyForecast } from "../Interfaces/WeeklyForeact";

import axios from "axios";

export const searchResults = (search: string) => async (
  dispatch: Dispatch<SearchDispachTypes>
) => {
  try {
    dispatch({
      type: SEARCH_LOADING,
    });
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}?q=${search}&appid=${process.env.REACT_APP_API_KEY}`
    );
    console.log(res);

    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
    });
  }
};
