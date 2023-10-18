import React from "react";
import Login from "./components/Login";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import User from "./components/Dashboard/User";
import Post from "./components/Dashboard/Post";
import NotFound from "./components/Dashboard/NotFound";

const M05App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
          <Route path="user" element={<User />} />
          <Route path="post" element={<Post />} />
        </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default M05App;
