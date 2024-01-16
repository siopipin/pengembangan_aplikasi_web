import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <div>
      <div>
        Navbar

        <a href="/login">Login</a>
      </div>
      <HomePage />
      <LoginPage />
    </div>
  );
}

export default App;
