import React, { useEffect } from "react";
import "../Styles/SideBar.scss";
import moment from "moment";
import Today from "./Today";
import Temparature from "./Temparature";
import HourlyCast from "./HourlyCast";
import { useSelector } from "react-redux";
import { RootStore } from "../store";
import { ISearchState } from "../reducers/searchReducer";
import { WeeklyForecast, City } from "../Interfaces/WeeklyForeact";

const SideBar = () => {
  const search: ISearchState = useSelector((state: RootStore) => state.search);
  const results: any = useSelector((state: RootStore) => state.search.results);

  useEffect(() => {
    console.log(results.city);
  }, [results]);
  return (
    <div className="sidebar">
      {results.city && (
        <>
          <div className="sidebar__top"></div>
          <Today />
          <Temparature city={results.city} todayWeather={results.list[0]} />
          <HourlyCast />
        </>
      )}
    </div>
  );
};

export default SideBar;
