import React from "react";
import styleButton from "./styles/button.module.css";
import style from "./styles/login.module.css";
import { useNavigate } from "react-router-dom";

function HomeM06() {
  const navigate = useNavigate();
  function handleClickLogout() {
    navigate("/");
  }
  return (
    <div className={style.container}>
      <button
        className={styleButton.button}
        title="Logut"
        onClick={handleClickLogout}
      > Logout </button>
    </div>
  );
}

export default HomeM06;
