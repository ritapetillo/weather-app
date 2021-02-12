import React, { useMemo } from "react";
import moment from "moment";
import "../Styles/Today.scss";
import sun from "../Assets/icons/svg/045-sun.svg";

const Today = () => {
  const weatherIcon = useMemo(() => {
    return sun;
  }, []);
  return (
    <div className="today">
      <div>
        <img src={weatherIcon} alt="" />
      </div>
      <div>
        <h4>Today</h4>
        <span className="today__day">
          {moment(new Date()).format("ddd, MMM Do")}
        </span>
      </div>
    </div>
  );
};

export default Today;
