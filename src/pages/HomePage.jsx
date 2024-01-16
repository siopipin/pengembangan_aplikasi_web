import { Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const HomePage = () => {
  //untuk menyimpan props maka saya perlu props dan state.
  const [users, setUsers] = useState([]);

  //axios bisa jalan jika saya panggil fungsi dimana? yang bisa jalan jika saya panggil fungsi ini?
  //buat useEffect untuk panggil data ke server.
  const getDataFromServer = async () => {
    const response = await axios.get("http://localhost:3001/web/users");
    console.log(response.data);
    console.log(response.status);
    if (response.status === 200) {
      setUsers([...response.data.results]);
    }
  };

  useEffect(() => {
    //akan panggil fungsi get API menggunakan axios
    getDataFromServer();
  }, []);

  //jika server saya respon dengan status code ===  200 maka simpan data ke props users
  //test apakah data ada pada props
  console.log(`data user: ${users[0].name}`);
  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h3">Home</Typography>

      {/* tampilkan list user */}
      <List>
        {users.map((user, index) => (
          <div key={index}>
            {/* tampilkan dalam bentuk list */}
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    {/*tampilkan icon. */}
                    <AccountCircleIcon />
                </ListItemAvatar>
                <ListItemText>{user.name}</ListItemText>?
            </ListItem>
          </div>
        ))}
      </List>
    </Container>
  );
};
