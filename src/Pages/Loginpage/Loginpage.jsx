import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import "./loginpage.css";



const Loginpage = () => {
  const [username, setUsername] = useState("Default username");
  const [password, setPassword] = useState("Default password");

  const signIn = async () => {
    console.log(username);
    console.log(password);

    let response = await fetch('http://localhost:8080/api/v1/user/registered/login?id=' + username + '&password=' + password)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Incorrect Username and/ or Password');
        } else {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem('password', password);
          () => navigate("/"); // Not working? Need to navigate to homepage after login.
          return response.json()
        }})
      .then((data) => console.log(data))
      .catch((error) => {
        alert(error)
      });

  }


  const updateUsername = (e) => {
    setUsername(e.target.value);
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
          <input id="username" type="user" onChange={updateUsername} placeholder='user name' />
          <input id="password" type="password" onChange={updatePassword} placeholder='password' />
          <button id="login" type="button" onClick={() => signIn()} >Login</button>
        </div>
      </div>
    </div>
  )


}

export default Loginpage

// login.addEventListener('click', signIn);