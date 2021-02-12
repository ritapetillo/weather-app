import React, { useEffect } from "react";
import "../Styles/Maindash.scss";
import NavBar from "./NavBar";
import WeeklyCast from "./WeeklyCast";

const MainDash = () => {

  useEffect(() => {
    
    
  },[])
  return (
    <div className="maindash">
      <NavBar />
      <h2>
        Wheather <span>Foreacast</span>
      </h2>
      {/* component city */}

      <WeeklyCast />
    </div>
  );
};

export default MainDash;
