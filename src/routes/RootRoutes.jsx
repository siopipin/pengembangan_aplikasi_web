import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/now_playing" element={<Home url="now_playing" />} />
      <Route path="/popular" element={<Home url="popular" />} />
      <Route path="/top_rated" element={<Home url="top_rated" />} />
      <Route path="/upcoming" element={<Home url="upcoming" />} />
    </Routes>
  );
};

export default RootRoutes;
