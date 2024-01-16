import {
  TextField,
  Container,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";

export const LoginPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: "400px" }}>
        <CardContent>
          <TextField
            id="outlined-basic"
            label="login"
            onChange={(e) => console.log(e.target.value)}
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="password"
            onChange={(e) => console.log(e.target.value)}
            sx={{ width: "100%", mt: 1 }}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
