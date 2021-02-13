import React from "react";
import moment from "moment";
import "../Styles/Temperature.scss";
import { City, Current } from "../Interfaces/WeeklyForeact";
import { ProgressBar } from "react-bootstrap";
interface Props {
  city: City;
  current: Current;
}

const Temparature = ({ city, current }: Props) => {
  return (
    <div className="temperature">
      {current && city && (
        <>
          <h1>
            {Math.round(current?.temp)} <span>&#8451;</span>
          </h1>
          <h4>{city.name}</h4>
          <span>
            Feels like {current?.feels_like} • Humidity:{current?.humidity}
          </span>
          {current.uvi && current.uvi > 0 && (
            <ProgressBar
              variant="warning"
              now={current.uvi * 100}
              label={`UVI`}
            />
          )}
          <span> UVI:{current?.uvi} </span>
        </>
      )}
    </div>
  );
};

export default Temparature;
