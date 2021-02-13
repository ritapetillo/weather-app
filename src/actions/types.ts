import { City, WeeklyForecast } from "../Interfaces/WeeklyForeact";

export const SEARCH_LOADING = "SEARCH_LOADING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const SEARCH_CITY = "SEARCH_CITY";

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
