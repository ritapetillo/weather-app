import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../Styles/Maindash.scss";
import Highlights from "./Highlights";
import NavBar from "./NavBar";
import WeeklyCast from "./WeeklyCast";

const MainDash = () => {
  useEffect(() => {}, []);
  return (
    <div className="maindash">
      <NavBar />
      <h4>Weekly</h4>
      {/* component city */}

      <WeeklyCast />
      <Highlights />
    </div>
  );
};

export default MainDash;
