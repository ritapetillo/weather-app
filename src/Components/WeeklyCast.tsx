import React from "react";
import moment from "moment";
import DailyCast from "./DailyCast";
import "../Styles/WeeklyCast.scss";

const arrayDays: number[] = [1, 2, 3, 4, 5, 6, 7];

const WeeklyCast = () => {
  return (
    <div className="weeklycast">
      {arrayDays.map((n) => (
        <DailyCast day={moment().add(n, "day").format("dd")} />
      ))}
    </div>
  );
};

export default WeeklyCast;
