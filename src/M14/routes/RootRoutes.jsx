import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeM14 from "../HomeM14";
import Login from "../Login";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={< HomeM14 />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RootRoutes;