import React from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import crownLogo from "../../Assets/crownlogowhite.jpg";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header_container">
      <p className="corner"> Welcome Guest User! </p>
      <div className="header_logo">
        <a href="/">
          <img src={crownLogo} className="logo" alt="crown logo" />
        </a>
      </div>
      <div className="header_login">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Registration</button>
      </div>
    </div>
  );
};
