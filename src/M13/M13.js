import axios from "axios";
import { useEffect } from "react";

export const M13 = () => {
  // axios get data dari local
  // url= https://8c04-103-165-239-161.ngrok-free.app

  const ambilDataServer = async () => {
    try {
      const response = await axios.get(
        "https://8c04-103-165-239-161.ngrok-free.app/web/users"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ambilDataServer();
  }, []);

  return (
    <div>
      <h1>Hallo</h1>
    </div>
  );
};
