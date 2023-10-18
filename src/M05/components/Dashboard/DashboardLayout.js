import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/dashboard-style.css";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Dashboard</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
