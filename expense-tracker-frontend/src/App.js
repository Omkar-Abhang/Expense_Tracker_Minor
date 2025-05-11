import React ,{useState}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router,Route,Routes ,Navigate} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login ";
import {jwtDecode} from "jwt-decode";


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded); // Inspect the full payload
      const email = decoded.sub || decoded.email || decoded.username;
      console.log("Logged in as:", email);
      localStorage.setItem("email", email);
    }
    setIsLoggedIn(true);
  };

  return (
      
<Router>
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin}  />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
   
  );
}

export default App;
