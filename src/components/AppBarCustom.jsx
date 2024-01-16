import {
  AppBar,
  Toolbar,
  Tooltip,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

export const AppBarCustom = () => {
  return (
    <Container maxWidth="md">
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Home</Typography>

          <Link to="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
