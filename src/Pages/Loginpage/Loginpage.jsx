import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import "./loginpage.css";

import { useNavigate } from "react-router-dom";



const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Default email");
  const [password, setPassword] = useState("Default password");

  const handleLogin = () => {
    if (email == 'Default email') {
      alert("Please enter a valid email.")
    } else if (password == "Default password") {
      alert("Please enter a valid password.")
    } else {
      login();
    }
  }

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
      sessionStorage.setItem("userId", data.id);
      sessionStorage.setItem("firstName", data.name);
    })
    .catch((error) => {
      alert(error)
    });
  }

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