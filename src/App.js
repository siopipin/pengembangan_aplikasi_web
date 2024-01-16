import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { AppBarCustom } from "./components/AppBarCustom";
import { Container, ThemeProvider, createTheme } from "@mui/material";

const themeCustome = createTheme({});

function App() {
  return (
    <BrowserRouter>
      {/* buat dulu themprovider */}
      <ThemeProvider theme={themeCustome}>
        <Container maxWidth="md" sx={{ backgroundColor: "whitesmoke"}}>
          <AppBarCustom />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
