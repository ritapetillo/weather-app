import React, { useMemo } from "react";
import moment from "moment-timezone";

import "../Styles/HourlyCast.scss";
import { Current } from "../Interfaces/WeeklyForeact";
const arrayHours: number[] = [1, 2, 3, 4, 5, 6];
interface Props {
  hourly: Current[];
  timezone: string;
}
const HourlyCast = ({ hourly, timezone }: Props) => {
  const hourlyWeather = useMemo(
    () => (
      <div>
        {arrayHours.map((num, i) => (
          <div>
            <span>{moment().tz(timezone).add(num, "hours").format("h a")}</span>
            <img
              src={`${process.env.PUBLIC_URL}/icons/${hourly[i].weather[0].icon}.svg`}
            />
            <span className="hourly-cast__table-conditions">
              {`${Math.floor(hourly[i].temp)}`} <span>&#8451;</span>
            </span>
          </div>
        ))}
      </div>
    ),
    [hourly]
  );
  return (
    <div className="hourly-cast">
      <h5>Hourly weather</h5>
      <div className="hourly-cast__table">{hourlyWeather}</div>
    </div>
  );
};

export default HourlyCast;
