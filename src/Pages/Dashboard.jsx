import React from "react";
import MainDash from "../Components/MainDash";
import SideBar from "../Components/SideBar";
import "../Styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MainDash />
      <SideBar />
    </div>
  );
};

export default Dashboard;
