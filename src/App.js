import React from "react";
import { BrowserRouter } from "react-router-dom";
import RootRoutes from "./M14/routes/RootRoutes";
import { AppBarCustom } from "./M14/components/AppBarCustom";

function App() {
  return (
    <BrowserRouter>
      <AppBarCustom />
      <main>
        <RootRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
