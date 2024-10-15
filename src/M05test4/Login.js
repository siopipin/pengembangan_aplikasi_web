import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //hook useNavigate
  const navigate = useNavigate();

  const doLogin = () => {
    if (username === "user" && password === "user") {
      alert("Login Berhasil");
      // navigatsi ke '/'
        navigate('/about')
    } else {
      alert("Login Gagal");
    }
  };
  return (
    <div>
      <form onSubmit={doLogin}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
