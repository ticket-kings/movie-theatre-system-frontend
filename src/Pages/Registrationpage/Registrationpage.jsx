import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import "./registrationpage.css";

const Registrationpage = () => {
  const [username, setUsername] = useState("Default username");
  const [password, setPassword] = useState("Default password");
  const [verifiedPassword, setVerifiedPassword] = useState("Default password");

  const register = async () => {
    console.log(username);
    console.log(password);
    console.log(verifiedPassword);

    let response = await fetch('http://localhost:8080/api/v1/user/registered')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((response) => {
        if (!response.ok) {
          throw new Error('Incorrect Username and/ or Password');
        } else {
          window.location.href = () => navigate("/");
        }
        response.json()
      })
      .then((data) => console.log(data))
      .catch((error) => {
        alert('Incorrect Username and/ or Password')
      })
    sessionStorage.setItem("username", username)
    sessionStorage.setItem('password', password)
  }


const updateUsername = (e) => {
  setUsername(e.target.value);
}

const updatePassword = (e) => {
  setPassword(e.target.value);
}

const updateVerifiedPassword = (e) => {
  setVerifiedPassword(e.target.value);
}

  return (
    <div className="registration">
      <Header />
      <div>
        <h1>Register</h1>
        <div className="registration">
          <p>Please input the below information to register:</p>
          <input type="email" placeholder='email'/>
          <input id="username" type="username" onChange = {updateUsername} placeholder='username' /> 
          <input id="password" type="password" onChange = {updatePassword} placeholder='password' /> 
          <input id="verifyPassword" type="verfiedpassword" onChange={updateVerifiedPassword} placeholder='password' />
          <button id="login" type="button" onClick={() => register()}>Register </button>
          </div>
        </div>
      </div>
  
  )
}

export default Registrationpage