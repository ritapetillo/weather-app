import React from "react";
import "../Styles/DailyCast.scss";
import sun from "../Assets/icons/svg/045-sun.svg";
import { Daily } from "../Interfaces/WeeklyForeact";
import { Col } from "react-bootstrap";
interface Props {
  day: string;
  forecast: Daily;
}
const DailyCast = ({ day, forecast }: Props) => {
  return (
    <Col className="dailycast" sm={4} md={3} lg={2}>
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
    </Col>
  );
};

export default DailyCast;
