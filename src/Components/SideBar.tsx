import React, { useEffect } from "react";
import "../Styles/SideBar.scss";
import moment from "moment";
import Today from "./Today";
import Temparature from "./Temparature";
import HourlyCast from "./HourlyCast";
import { useSelector } from "react-redux";
import { RootStore } from "../store";
import { ISearchState } from "../reducers/searchReducer";
import { City, WeeklyForecast } from "../Interfaces/WeeklyForeact";

const SideBar = () => {
  const search: ISearchState = useSelector((state: RootStore) => state.search);
  const results: any = useSelector((state: RootStore) => state.search.results);
  const city: City | "" = useSelector((state: RootStore) => state.search.city);

  useEffect(() => {
    console.log(city);
  }, [results]);
  return (
    <div className="sidebar">
      {city && results.hourly ? (
        <>
          <div className="sidebar__top"></div>
          <Today current={results.current} />
          <Temparature city={city} current={results.current} />
          <HourlyCast hourly={results.hourly} timezone={results.timezone} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBar;
