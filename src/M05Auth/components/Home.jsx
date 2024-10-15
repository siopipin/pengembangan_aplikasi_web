import React from "react";
import { getUser, removeUser } from "../auth";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Home</p>
      {user.role === "admin" && <Link to={"/dashboard"}>Go to dashboard</Link>}
      <button onClick={handleLogout}>Logout!</button>
    </div>
  );
}

export default Home;
