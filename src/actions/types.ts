import { WeeklyForecast } from "../Interfaces/WeeklyForeact";

export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
<<<<<<< Updated upstream

export interface SearchResult {
  id: number;
  title: string;
  cover: string;
  artist: string;
}
=======
export const SEARCH_CITY = "SEARCH_CITY";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FAIL = "LOGIN_FAIL";

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
//SEARCH
>>>>>>> Stashed changes
export interface SearchLoading {
  type: typeof SEARCH_LOADING;
}
export interface SearchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: WeeklyForecast;
}
export interface SearchFail {
  type: typeof SEARCH_FAIL;
}

<<<<<<< Updated upstream
export type SearchDispachTypes = SearchLoading | SearchSuccess | SearchFail;
=======
export type SearchDispachTypes =
  | SearchLoading
  | SearchSuccess
  | SearchFail
  | SearchCity;

export type LoginDispachTypes = LoginLoading | LoginSuccess | LoginFail;
>>>>>>> Stashed changes
