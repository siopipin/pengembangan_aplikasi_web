import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import { AppBarCustom } from "./components/appbar";
import { RootRoutes } from "./utils/RootRoutes";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <AppBarCustom />
        <Container
          sx={{
            p: 4,
            backgroundColor: "whitesmoke",
          }}
        >
          <RootRoutes />
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
