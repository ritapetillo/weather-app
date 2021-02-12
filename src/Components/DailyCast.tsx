import React from "react";
import "../Styles/DailyCast.scss";
import sun from "../Assets/icons/svg/045-sun.svg";
interface Props {
  day: string;
}
const DailyCast = ({ day }: Props) => {
  return (
    <div className="dailycast">
      <img src={sun} alt="" />
      <div>
        <span className="dailycast__max">9</span>
        <span className="dailycast__min">4</span>
      </div>
      <span>{day}</span>
    </div>
  );
};

export default DailyCast;
