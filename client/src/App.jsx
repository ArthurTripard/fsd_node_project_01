import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

import NavBar from "./conponents/NavBar";
import Home from "./conponents/Home";
import Login from "./conponents/Login";
import Register from "./conponents/Register";
import Article from "./conponents/Article";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleLogin = data => {
    setUser(data.user);
    setToken(data.token);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
