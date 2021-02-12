import React from "react";
import moment from "moment";
import "../Styles/HourlyCast.scss";
const arrayHours: number[] = [1, 2, 3, 4, 5, 6];
const HourlyCast = () => {
  return (
    <div className="hourly-cast">
      <h4>Hourly wather</h4>
      <div className="hourly-cast__table">
        <div>
          {arrayHours.map((num) => (
            <div>
              <span>{moment().add(num, "hours").format("h a")}</span>
              Sun
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyCast;
