import React from 'react'
import { Header } from '../../Components/Header/Header';
import "./loginpage.css";

const Loginpage = () => {
  return (
    <div className="login">
      <Header />
      <div>
        <h1>Login</h1>
        <div className="login">
          <p>Please login if you are a registered user</p>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password' />
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Loginpage