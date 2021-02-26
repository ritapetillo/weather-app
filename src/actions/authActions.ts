import { Dispatch } from "redux";
import {
  LoginDispachTypes,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
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
