import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (email === "admin@gmail.com") {
      navigate(`/dashboard/${email}`);
    } else {
      navigate("/");
    }
  }

  return (
    <div>
      <form>
        <input type="email" placeholder="Isi Email" value={email} />
        <input type="password" placeholder="Isi Password" value={pass} />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
