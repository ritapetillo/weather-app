import React from "react";
import moment from "moment";
import DailyCast from "./DailyCast";
import "../Styles/WeeklyCast.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../store";

const arrayDays: number[] = [1, 2, 3, 4, 5, 6, 7];

const WeeklyCast = () => {
  const results: any = useSelector((state: RootStore) => state.search.results);

  return (
    <div className="weeklycast">
      {results.daily &&
        arrayDays.map((n, i) => (
          <DailyCast
            forecast={results.daily[i]}
            day={moment().add(n, "day").format("dd")}
          />
        ))}
    </div>
  );
};

export default WeeklyCast;
