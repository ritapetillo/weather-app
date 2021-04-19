import { Dispatch } from "redux";
import {
  LoginDispachTypes,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_FAVORITES,
} from "./types";
import { WeeklyForecast } from "../Interfaces/WeeklyForeact";

import axios from "axios";

export const loginAction = (email: string, password: string) => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const credentials = { email, password };
    const resp = await axios.post(
      `${process.env.REACT_APP_API_AUTH}/login`,
      credentials,
      {
        withCredentials: true,
      }
    );
    const tokens = await resp.data;
    console.log(tokens);

    const userResp = await axios.get(
      `${process.env.REACT_APP_API_AUTH}/me`,

      {
        withCredentials: true,
      }
    );
    const user = await userResp.data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const getCurrentUser = () => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });

    const userResp = await axios.get(
      `${process.env.REACT_APP_API_AUTH}/me`,

      {
        withCredentials: true,
      }
    );
    const user = await userResp.data;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logoOut = () => async (dispatch: Dispatch<LoginDispachTypes>) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });

    const userResp = await axios.post(
      `${process.env.REACT_APP_API_AUTH}/logout`,
      "",

      {
        withCredentials: true,
      }
    );
    console.log(userResp);

    dispatch({
      type: LOGOUT,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const getFavoriteCities = () => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    console.log("here");
    const req = await axios.get(
      `${process.env.REACT_APP_API_AUTH}/favorite-cities`,

      {
        withCredentials: true,
      }
    );
    const favCities = await req.data;
    dispatch({
      type: GET_FAVORITES,
      payload: favCities,
    });
    // console.log(favCities);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const addFavoriteCity = (city: string) => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    const addCity = await axios.put(
      `${process.env.REACT_APP_API_AUTH}/addcity/` + city,
      "",

      {
        withCredentials: true,
      }
    );
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const removeFavoriteCity = (city: string) => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    const removeCity = await axios.put(
      `${process.env.REACT_APP_API_AUTH}/remove-city/` + city,
      "",

      {
        withCredentials: true,
      }
    );
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
