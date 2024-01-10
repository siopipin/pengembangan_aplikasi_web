import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import axios from "axios";

import { useNavigate } from "react-router-dom"

const Login = () => {
  const [id, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const submitLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/web/auth/login",
        {
          id,
          password,
        }
      );

      //dibagian ini harus cek response.status
      if(response.status === 200) {
          console.log("Success", response.data);
          localStorage.setItem('loggedInStatus', 'true');
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('id', response.data.id);

          navigate('/home')
      } else {
        console.log("Login Failed", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Style
  const paperStyle = {
    padding: 20,
    width: 380,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  //component login
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <HttpsIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="UserID"
          value={id}
          onChange={(e) => setUserID(e.target.value)}
          placeholder="Enter ID"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />

        <Button
          type="submit"
          onClick={submitLogin}
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
