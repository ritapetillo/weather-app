import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/NavBar.scss";
import { useDispatch } from "react-redux";
import { searchResults } from "../actions/searchActions";
import useGeoLocation from "../CustomHooks/useGeoLocation";
import { signIn } from "../Lib/auth";
import firebase from "../Lib/firebase";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useGeoLocation("");

  useEffect(() => {
    dispatch(searchResults("Miami"));
    console.log(firebase.auth().currentUser);
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
  const handleLogin = async () => {
    try {
      const login = await signIn();
      console.log(login);
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
  return (
    <div className="navBar">
      {navbar}
      <div onClick={handleLogin}>LOGIN</div>
    </div>
  );
};

export default NavBar;
