import axios from "axios";
import { useEffect, useState } from "react";
import { City } from "../Interfaces/WeeklyForeact";

const useGeoLocation = (query: string) => {
  const [city, setCity] = useState();
  const fetchCity = async (city: string) => {
    try {
      const res: any = await axios.get(
        `${process.env.REACT_APP_API_URL}?q=${query}&key=${process.env.REACT_APP_API_KEY}`
      );
      const city: any = res.data.city;
      console.log(res.data);
      setCity(city);
    } catch (err) {
      console.log(err);
    }
  };

  return [city, fetchCity];
};

export default useGeoLocation;
