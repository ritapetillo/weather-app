import React, { useEffect, useState } from "react";
import "../Styles/SideBar.scss";
import moment from "moment";
import Today from "./Today";
import Temparature from "./Temparature";
import HourlyCast from "./HourlyCast";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../store";
import { ISearchState } from "../reducers/searchReducer";
import { City, WeeklyForecast } from "../Interfaces/WeeklyForeact";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  addFavoriteCity,
  getFavoriteCities,
  removeFavoriteCity,
} from "../actions/authActions";

const SideBar = () => {
  const search: ISearchState = useSelector((state: RootStore) => state.search);
  const results: any = useSelector((state: RootStore) => state.search.results);
  const city: City | "" = useSelector((state: RootStore) => state.search.city);
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootStore) => state.user?.favoriteCities
  );
  const [added, setAdded] = useState(false);
  useEffect(() => {
  
    if (city) {
      // const isAdded = favorites && favorites?.some((fav) => fav === city.name);
      // setAdded(isAdded);
    }
  }, [results]);
  return (
    <div className="sidebar">
      {city && results.hourly ? (
        <>
          <span className="favorite">
            {!added ? (
              <>
                <AddIcon
                  onClick={async () => {
                    await dispatch(addFavoriteCity(city.name));
                    dispatch(getFavoriteCities());
                    setAdded(!added);
                  }}
                />
                <span>Add to Favorite</span>
              </>
            ) : (
              <>
                <RemoveIcon
                  onClick={async () => {
                    await dispatch(removeFavoriteCity(city.name));
                    dispatch(getFavoriteCities());
                    setAdded(!added);
                  }}
                />
                <span>Remove from Favorite</span>
              </>
            )}
          </span>
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
