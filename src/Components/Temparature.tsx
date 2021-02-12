import React from "react";
import moment from "moment";
import "../Styles/Temperature.scss";
import { City, List } from "../Interfaces/WeeklyForeact";
interface Props {
  city: City;
  todayWeather: List
}

const Temparature = ({ city ,todayWeather}: Props) => {
  return (
    <div className="temperature">
      <h1>
        28 <span>&#8451;</span>
      </h1>
      <h4>{city.name}</h4>
      <span>L: 32 • H: 40</span>
      <span>Feels like 32 • Sunset 20:15</span>
    </div>
  );
};

export default Temparature;
