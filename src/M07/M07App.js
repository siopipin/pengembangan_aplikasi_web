import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { AppBarCustom } from "./components/AppBarCustom";
import { BannerCustom } from "./components/BannerCustom";
import { PricingPlan } from "./components/PricingPlan";
import { Footer } from "./components/Footer";

const defaultTheme = createTheme();
function M07App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Appbar */}
      <AppBarCustom />

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
