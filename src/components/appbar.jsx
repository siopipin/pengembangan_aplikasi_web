import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export const AppBarCustom = () => {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            href="/"
            variant="text"
          >
            Home
          </Button>
        </Typography>
        <Button href="/login" variant="contained" color="primary">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
