import React from "react";
import { Link } from "react-router-dom";
import { removeUser } from "../auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard.</p>
      <Link to="/home">Go to Home</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
