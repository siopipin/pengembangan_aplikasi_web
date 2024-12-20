import axios from "axios";
import { useEffect } from "react";

export const M13 = () => {
  // axios get data dari local
  // url= https://8c04-103-165-239-161.ngrok-free.app

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
      <h1>Hallo</h1>
    </div>
  );
};
