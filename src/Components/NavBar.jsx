import React, { useEffect, useMemo, useRef, useState } from "react";
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
import {
  getCurrentUser,
  getFavoriteCities,
  logoOut,
} from "../actions/authActions";
import useConvertedTime from "../CustomHooks/useConvertedTime";
import { useHistory } from "react-router-dom";

// import { signIn } from "../Lib/auth";
// import firebase from "../Lib/firebase";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useGeoLocation("");
  const [show, setShow] = useState(false);
  const { city, countryCode } = useGeoIp();
  const user = useSelector((state) => state.user.user.user);
  const history = useHistory();
  const cityToSearch = useRef();
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getFavoriteCities());
    console.log(user);
  }, []);

  useEffect(() => {
    dispatch(searchResults(city));
  }, [city]);

  const handleSearch = async () => {
    try {
      dispatch(searchResults(cityToSearch.current.value));
      setCoordinates(cityToSearch.current.value);
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
              ref={cityToSearch}
              onChange={(e) => {
                console.log(e.target.value);
                setSearchCity(e.target.value);
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
          <div>
            {" "}
            Hi {user.firstName}{" "}
            <span
              className="auth_button"
              className="ml-3 auth_button auth_logout"
              onClick={() => {
                setShow(false);
                dispatch(logoOut());
                history.push("/");
              }}
            >
              LOGOUT
            </span>
          </div>
        </>
      ) : (
        <div className="auth_button" onClick={() => handleOpen()}>
          LOGIN
        </div>
      )}
    </div>
  );
};

export default NavBar;
