import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAdmin, isAuthenticated, setUser } from "../auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      setUser({ username, role: "admin" });
    } else if (username === "user" && password === "user") {
      setUser({ username, role: "user" });
    }

    if (isAuthenticated()) {
      if (isAdmin()) {
        navigate("/dashboard/");
      } else {
        navigate("/home");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button>Login</button>
    </form>
  );
}

export default Login;
