import React from 'react'
import { Header } from '../../Components/Header/Header';
import "./registrationpage.css";

const Registrationpage = () => {
  return (
    <div className="registration">
      <Header />
      <div>
        <h1>Register</h1>
        <div className="card">
          <p>Please input the below information to register:</p>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password' />
          <input type="password" placeholder='verify password' />
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Registrationpage