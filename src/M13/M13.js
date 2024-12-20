import axios from "axios";
import { useEffect, useState } from "react";

export const M13 = () => {
    const [nama, setNama] = useState("TI-A");

  const ambilDataServer = async () => {
    try {
      const response = await axios.get(
        "https://3f7f-103-165-239-161.ngrok-free.app/web/users",
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      console.log("ini response");
      console.log(response.status);
      console.log(response.data.dataUsers);
      console.log(response.data.dataUsers[0]);
      console.log(response.data.dataUsers[0].name);
      console.log(response.data.dataUsers[1].email);

      setNama(response.data.dataUsers[0].name)
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("hallo ini data");

    ambilDataServer();
  }, []);

  return (
    <div>
      <h1>{nama}</h1>
    </div>
  );
};
