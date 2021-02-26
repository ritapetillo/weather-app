import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Styles/NavBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchResults } from "../actions/searchActions";
import useGeoLocation from "../CustomHooks/useGeoLocation";
import { signIn, signInAxios } from "../Lib/auth";
import firebase from "../Lib/firebase";
import ModalLogin from "./ModaLoginl";
import { SettingsPhoneTwoTone } from "@material-ui/icons";
// import useGeoLocation from "react-ipgeolocation";
import useGeoIp from "usegeoip";
import { getCurrentUser } from "../actions/authActions";
// import { signIn } from "../Lib/auth";
// import firebase from "../Lib/firebase";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchCity, setCity] = useState("");
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useGeoLocation("");
  const [show, setShow] = useState(false);
  const { city, countryCode } = useGeoIp();
  const user = useSelector((state) => state.user.user.user);

  useEffect(() => {
    dispatch(getCurrentUser());
    console.log(user);
  }, []);

  useEffect(() => {
    dispatch(searchResults(city));
    console.log(city);
    // console.log(firebase.auth().currentUser);
    console.log(user);
  }, [city]);

  const handleSearch = async () => {
    try {
      console.log(searchCity);
      dispatch(searchResults(searchCity));
      setCoordinates(searchCity);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => setShow(false);
  const handleOpen = () => {
    setShow(true);
  };
  // const handleLogin = async () => {
  //   try {
  //     // const login = await signIn();
  //     const login = await signIn();
  //     const loginaxios = await signInAxios(login.additionalUserInfo.profile);
  //     console.log(login);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
              value={searchCity}
              onChange={(e) => {
                setCity(e.target.value);
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
      <ModalLogin show={show} handleClose={handleClose} />
      {user ? (
        <>
          {" "}
          <div onClick={handleOpen}>
            {" "}
            Hi {user.firstName} <span className="ml-3">LOGOUT</span>
          </div>
        </>
      ) : (
        <div onClick={handleOpen}>LOGIN</div>
      )}
    </div>
  );
};

export default NavBar;
