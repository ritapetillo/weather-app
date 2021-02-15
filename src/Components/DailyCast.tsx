import React from "react";
import "../Styles/DailyCast.scss";
import sun from "../Assets/icons/svg/045-sun.svg";
import { Daily } from "../Interfaces/WeeklyForeact";
interface Props {
  day: string;
  forecast: Daily;
}
const DailyCast = ({ day, forecast }: Props) => {
  return (
    <div className="dailycast">
      <span>{day}</span>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/icons/${forecast.weather[0].icon}.svg`}
        />
      </div>
      <div>
        <span className="dailycast__max">{Math.floor(forecast.temp.max)}°</span>
        <span className="dailycast__min">
          {" "}
          {Math.floor(forecast.temp.min)}°
        </span>
      </div>
    </div>
  );
};

export default DailyCast;
