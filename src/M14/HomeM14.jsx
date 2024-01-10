import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { BannerCustom } from "./components/BannerCustom";
import { PricingPlan } from "./components/PricingPlan";
import { Footer } from "./components/Footer";

const defaultTheme = createTheme();
function HomeM14() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Banner/HeroUnit */}
      <BannerCustom />

      {/* Pricing Plan */}
      <PricingPlan />

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default HomeM14;
