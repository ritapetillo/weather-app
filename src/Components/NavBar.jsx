import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/NavBar.scss";
import { useDispatch } from "react-redux";
import { searchResults } from "../actions/searchActions";
import useGeoLocation from "../CustomHooks/useGeoLocation";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useGeoLocation("");

  useEffect(() => {
    dispatch(searchResults("Miami"));
  }, []);

  const handleSearch = async () => {
    try {
      console.log(city);
      dispatch(searchResults(city));
      setCoordinates(city);
      console.log(coordinates);
    } catch (err) {
      console.log(err);
    }
  };
  const navbar = useMemo(() => {
    if (!active) {
      return (
        <div className="navBar__not-active">
          <SearchIcon onClick={() => setActive(!active)} />
        </div>
      );
    } else {
      return (
        <div className="navBar__active">
          <div className="navBar__active-search">
            <SearchIcon onClick={() => setActive(!active)} />
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                console.log(city);
              }}
            />
            <span onClick={handleSearch}>Search</span>
          </div>
        </div>
      );
    }
  }, [active, city]);
  return <div className="navBar">{navbar}</div>;
};

export default NavBar;
