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
<<<<<<< Updated upstream
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}?q=${search}&appid=${process.env.REACT_APP_API_KEY}`
=======
    const res_city = await axios.get(
      `${process.env.REACT_APP_API_URI}?q=${search}`
>>>>>>> Stashed changes
    );
    console.log(res);

    dispatch({
      type: SEARCH_SUCCESS,
      payload: res.data,
    });
<<<<<<< Updated upstream
=======
    if (city) {
      const res_weather = await axios.get(
        `${process.env.REACT_APP_API_URI}/full?lat=${city.coord.lat}&lon=${city.coord.lon}`
      );

      dispatch({
        type: SEARCH_SUCCESS,
        payload: res_weather.data,
      });
    }
>>>>>>> Stashed changes
  } catch (err) {
    dispatch({
      type: SEARCH_FAIL,
    });
  }
};
