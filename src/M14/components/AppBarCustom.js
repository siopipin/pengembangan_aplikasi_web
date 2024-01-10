import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export function AppBarCustom() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInStatus");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      const storedUserId = localStorage.getItem("id");
      const storedToken = localStorage.getItem("token");
      setUserId(storedUserId);
      setToken(storedToken);
    } else {
      setIsLoggedIn(false);
      setUserId('');
      setToken('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInStatus');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserId('');
    setToken('');
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Company name
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
         
        </nav>
        {
          isLoggedIn ? (<li>Welcome, user {userId} <Button onClick={handleLogout}>Logout</Button> </li>)  
          : 
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
        }
      </Toolbar>
    </AppBar>
  );
}
