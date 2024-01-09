import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./routes/RootRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <RootRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
