import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import "./loginpage.css";

import { useNavigate } from "react-router-dom";



const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Default email");
  const [password, setPassword] = useState("Default password");


  const signIn = async () => {
    console.log(email);
    console.log(password);

    let response = await fetch('http://localhost:8080/api/v1/user/registered/login?email=' + email + '&password=' + password)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Incorrect Username and/ or Password');
        } else {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem('password', password);
          sessionStorage.setItem('isLoggedIn',true);
          navigate('/');
          return response.json()
        }
      })
      .then((data) => {
        console.log(data)
        let firstName = data.firstName;
        sessionStorage.setItem("fistName", firstName);
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
          <p>Please login if you are a registered user</p>
          <input id="email" type="user" onChange={updateEmail} placeholder='email address' />
          <input id="password" type="password" onChange={updatePassword} placeholder='password' />
          <button id="login" type="button" onClick={() => signIn()} >Login</button>
        </div>
      </div>
    </div>
  )


}

export default Loginpage

// login.addEventListener('click', signIn);