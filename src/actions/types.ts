import { City, WeeklyForecast } from "../Interfaces/WeeklyForeact";

export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const SEARCH_CITY = "SEARCH_CITY";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const GET_FAVORITES = "GET_FAVORITES";

export interface SearchResult {
  id: number;
  title: string;
  cover: string;
  artist: string;
}

//LOGIN
export interface LoginLoading {
  type: typeof LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
}

export interface Logout {
  type: typeof LOGOUT;
}

export interface GetFavorites {
  type: typeof GET_FAVORITES;
  payload: [];
}
//SEARCH

export interface SearchLoading {
  type: typeof SEARCH_LOADING;
}
export interface SearchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: WeeklyForecast;
}
export interface SearchCity {
  type: typeof SEARCH_CITY;
  payload: City;
}
export interface SearchFail {
  type: typeof SEARCH_FAIL;
}

export type SearchDispachTypes =
  | SearchLoading
  | SearchSuccess
  | SearchFail
  | SearchCity;

export type LoginDispachTypes =
  | LoginLoading
  | LoginSuccess
  | LoginFail
  | Logout
  | GetFavorites;
