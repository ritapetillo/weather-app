import React from "react";
import MainDash from "../Components/MainDash";
import SideBar from "../Components/SideBar";
import "../Styles/Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <MainDash />
    </div>
  );
};

export default Dashboard;
