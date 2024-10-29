import {
  Box,
  Button,
  Container,
  CssBaseline,
  GlobalStyles,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { AppBarCustom } from "./components/AppBarCustom";
import { BannerCustom } from "./components/BannerCustom";
import { PricingPlan } from "./components/PricingPlan";
import { Footer } from "./components/Footer";

const defaultTheme = createTheme();
function M07App() {
  const dec = () => 1 + 1;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Appbar */}
      <AppBarCustom />

      <Container maxWidth="lg">
        <Button onClick={dec} variant="contained">
          Welcome
        </Button>
        <Typography variant="h1" sx={{ color: "#1DCE7B" }}>
          Welcome To My Blog
        </Typography>

        <Box width={200} sx={{ display: "flex", flexDirection: "column" }}>
          <TextField type="email" variant="outlined" sx={{mb: 1}} />
          <TextField type="password" variant="outlined" />

          <Button sx={{mt: 2}} variant="contained">Submit</Button>
        </Box>
      </Container>

      {/* Banner/HeroUnit */}
      <BannerCustom />

      {/* Pricing Plan */}
      <PricingPlan />

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default M07App;
