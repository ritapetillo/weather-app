import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import useConvertedTime from "../CustomHooks/useConvertedTime";
import "../Styles/Highlights.scss";
import HighlightBox from "./HighlightBox";
import { RootStore } from "../store";
import { WeeklyForecast } from "../Interfaces/WeeklyForeact";

const Highlights = () => {
  const results = useSelector((state: RootStore) => state.search.results);

  useEffect(() => {
    console.log(results.current);
  }, [results]);
  const sunriseConverted = useConvertedTime(
    results.current?.sunrise,
    results.timezone
  );
  const sunsetConverted = useConvertedTime(
    results.current?.sunset,
    results.timezone
  );

  return (
    <div className="highlights">
      <h4>Today Highlights</h4>
      <Row className="highlights__section">
        {sunsetConverted && sunriseConverted && (
          <>
            <HighlightBox
              title="Sunrise"
              value={sunriseConverted}
              icon={"sunrise"}
            />
            <HighlightBox
              title="Sunset"
              value={sunsetConverted}
              icon={"sunset"}
            />
          </>
        )}
        <HighlightBox
          title="Wind Speed"
          value={`${results.current?.wind_speed} km/h`}
          icon={"wind"}
        />
        <HighlightBox
          title="Humidity"
          value={`${results.current?.humidity} %`}
          icon={"humidity"}
        />
        <HighlightBox
          title="Visibility"
          value={`${results.current?.visibility / 1000} km`}
          icon={"visibility"}
        />
        <HighlightBox
          title="Pressure"
          value={`${results.current?.pressure} mbar`}
          icon={"pressure"}
        />
      </Row>
    </div>
  );
};

export default Highlights;
