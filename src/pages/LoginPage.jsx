import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();

  const doLogin = async () => {
    try {
      //lakukan login ke server
      const response = await axios.post(
        "http://localhost:3001/web/auth/login",
        {
          id: username,
          password,
        }
      );

      if(response.status === 200) {
        // simpan data login atau session login ke local storage
        localStorage.setItem('statusLogin', true)
        localStorage.setItem('token', response.data.token)

        console.log(response.data.token);
        // dan ganti state menjadi berhasil login.
        // jika berhasil simpan data maka direct ke url '/'


      } else {
        console.log(response.status);
      }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Container sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Card sx={{ maxWidth: 300 }}>
          <CardContent>
            <TextField
              label="Username"
              size="small"
              sx={{ mr: 2, mb: 2, width: "100%" }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              size="small"
              sx={{ mr: 2, mb: 2, width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={doLogin}
                variant="contained"
                color="primary"
                sx={{}}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
