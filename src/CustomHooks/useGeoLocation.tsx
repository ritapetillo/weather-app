import axios from "axios";
import { useEffect, useState } from "react";

const useGeoLocation = (city: string) => {
  const [coordinates, setCoordinates] = useState();
  const fetchCoordinates = async (city: string) => {
    try {
      const res = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      );
      const res_coordinates = res.data.results[0].geometry;
      console.log(res.data);
      setCoordinates(res_coordinates);
    } catch (err) {
      console.log(err);
    }
  };


  return [coordinates, fetchCoordinates];
};

export default useGeoLocation;
