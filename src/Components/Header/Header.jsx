import React from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import crownLogo from "../../Assets/crown.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={crownLogo} className="logo" alt="crown logo" />
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Registration</button>
    </div>
  );
};
