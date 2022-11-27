import React, { useCallback, useState } from "react";
import "./header.css";

import { useNavigate } from "react-router-dom";
import crownLogo from "../../Assets/crownlogowhite.jpg";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //useToggle();
  
  // const updateLogin = () => {
  //   if (sessionStorage.getItem("isLoggedIn") != 1) {
  //     setIsLoggedIn(true);
  //   }
  //   console.log("test")
  // }

  // updateLogin();
  // console.log(isLoggedIn)

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
        <button onClick={() => navigate("/")}>
          Home
          </button>
          {isLoggedIn?
          <button onClick={() => navigate("/")}>Logout</button> : 
          <div> <button onClick={() => navigate("/login")}>Login</button> 
          <button onClick={() => navigate("/register")}>Registration</button> 
          </div>
          }
      </div>
    </div>
  );
};

// const useToggle = (initialState = false) => {
//   // Initialize the state
//   const [state, setState] = useState(initialState);
  
//   // Define and memorize toggler function in case we pass down the component,
//   // This function change the boolean value to it's opposite value
//   const toggle = useCallback(() => setState(state => !state), []);
  
//   return [state, toggle]
// }
