import React, { useState } from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import crownLogo from "../../Assets/crownlogowhite.jpg";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="header_container">
      <div className="corner"> {isLoggedIn? (<p>Welcome Registered User</p>) : (<p>Welcome Guest User!</p>)} </div>
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
