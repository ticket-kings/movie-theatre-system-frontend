import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import "./loginpage.css";

import { useNavigate } from "react-router-dom";

/**
 * Loginpage for users who have already signed up as a Registered User
 * @returns div containing login inputs
 */
const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Default email");
  const [password, setPassword] = useState("Default password");

  /**
   * Function is called when the login button is clicked.
   * Will handle the error checking before calling the actual login function.
   */
  const handleLogin = () => {
    if (email == 'Default email') {
      alert("Please enter a valid email.")
    } else if (password == "Default password") {
      alert("Please enter a valid password.")
    } else {
      login();
    }
  }

  /**
   * Login function which is called inside of handleLogin().
   * This will send a GET request to the specific URL and retrieve a response from the server.
   * Will log the user in if the credentials are correct; otherwise, an error will be sent back.
   */
  const login = async() => {
    let response = await fetch('http://localhost:8080/api/v1/user/registered/login?email=' + email + '&password=' + password)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Incorrect Email and/ or Password');
      } else {
        sessionStorage.setItem("email", email);
        sessionStorage.setItem('isLoggedIn',"true");
        navigate('/');
        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
      sessionStorage.setItem("userId", data.id); // Add userId to sessionStorage, which is used for many purposes
      sessionStorage.setItem("firstName", data.name); // Storages name in sessionStorage for display in Header
      window.location.reload();
    })
    .catch((error) => {
      alert(error)
    });
  }

  // onChange event handlers for inputs
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <Header />
      <div>
        <h1>Login</h1>
        <div className="login">
          <p>Please login if you are a registered user:</p>
          <label htmlFor="email">Email Address</label><br></br>
          <input id="email" type="user" onChange={updateEmail} placeholder='Email' />
          <label htmlFor="password">Password</label><br></br>
          <input id="password" type="password" onChange={updatePassword} placeholder='Password' />
          <button id="login" type="button" onClick={() => handleLogin()} >Login</button>
        </div>
      </div>
    </div>
  )


}

export default Loginpage

// login.addEventListener('click', signIn);