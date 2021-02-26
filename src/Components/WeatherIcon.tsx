import React, { useMemo } from "react";
import cloud from "../Assets/icons/svg/098-cloud.svg";

interface Props {
  variation: string;
}
const WeatherIcon = ({ variation }: Props) => {
  const image = useMemo(() => {
    switch (variation) {
      case "Cloud":
        return cloud;
      default:
        return cloud;
    }
  }, [variation]);

  return (
    <div>
      <img src={image} />
    </div>
  );
};

export default WeatherIcon;
