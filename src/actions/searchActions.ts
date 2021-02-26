import { Dispatch } from "redux";
import {
  SearchDispachTypes,
  SEARCH_FAIL,
  SEARCH_SUCCESS,
  SEARCH_LOADING,
  SEARCH_CITY,
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

    const res_city = await axios.get(
      `${process.env.REACT_APP_API_URI}?q=${search}`
    );
    const city = await res_city.data.city;

    dispatch({
      type: SEARCH_CITY,
      payload: city,
    });

    if (city) {
      const res_weather = await axios.get(
        `${process.env.REACT_APP_API_URI}/full?lat=${city.coord.lat}&lon=${city.coord.lon}`)


      dispatch({
        type: SEARCH_SUCCESS,
        payload: res_weather.data,
      });
    }

  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
    });
  }
};
