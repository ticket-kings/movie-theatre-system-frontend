import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import "./registrationpage.css";

/**
 * Registrationpage is for new customers who want to create a Registered User.
 * They are required to fill out all information including billing information, since there is an annual fee.
 * @returns div containing inputs to create a Registered User
 */
const Registrationpage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("Default name");
  const [password, setPassword] = useState("Default password");
  const [verifiedPassword, setVerifiedPassword] = useState("Default password");
  const [address, setAddress] = useState("Default Address");
  const [email, setEmail] = useState("Default Email");
  const [cardNumber, setCard] = useState("Default Credit Card Number");
  const [cardExpire, setExpire] = useState("Default Credit Card Expire Date");
  const [cvv, setCvv] = useState("Default CVV");

  /**
   * Handles input error checking before calling the actual register() function
   */
  const handleRegister = () => {
    if (name == 'Default name') {
      alert("Please enter a valid name.")
    } else if (email == "Default Email") {
      alert("Please enter a valid email address")
    } else if (address == "Default Address") {
      alert("Please enter a valid address")
    } else if (password == 'Default password' || password.length < 4) {
      alert("Please enter a valid password.")
    } else if (password != verifiedPassword) {
      alert("Passwords do not match.")
    } else if (cardNumber.length != 12) {
      alert("Card Number needs to be 12 numbers")
    } else if (cardExpire.length != 4) {
      alert("Expiry Date should be 4 numbers (MMYY)")
    } else if (cvv.length != 3) {
      alert("CVV should be 3 numbers")
    } else {
      register();
    }
  }

  /**
   * Register function will send a POST create to the server to create a new Registered User
   */
  const register = async () => {
    let response = await fetch('http://localhost:8080/api/v1/user/registered', {
        method: 'POST',
        body: JSON.stringify({
          id: null,
          name: name,
          emailAddress: email,
          creditId: null,
          cardId: null,
          card: {
            id: null,
            cardNumber: cardNumber,
            expiryDate: cardExpire,
            cvv: cvv,
            payments: null
          },
          address: address,
          password: verifiedPassword
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Email address is already in use.")
          } else {
            alert("Congratulations " + name + "! You are now a registered user! Email notification with your account information has been sent.")
            return response.json()
          }
        }).catch((error) => {
          alert(error);
        })
        .then((data) => {
          console.log(data)
          sessionStorage.setItem("userId", data.id); // Sets userId sessionStorage, which immediately sets user as logged in
          navigate("/");
        });
  }

  // onChange event handlers for inputs
  const updateName = (e) => {
    setName(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const updateVerifiedPassword = (e) => {
    setVerifiedPassword(e.target.value);
  }

  const updateAddress = (e) => {
    setAddress(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updateCard = (e) => {
    setCard(e.target.value);
  }

  const updateExpireDate = (e) => {
    setExpire(e.target.value);
  }

  const updateCvv = (e) => {
    setCvv(e.target.value);
  }

  return (
    <div className="registration">
      <Header />
      <div>
        <h1>Register</h1>
        <div className="registration">
          <form>
            <p>Please input the below information to register:</p>
            <label htmlFor="name">First Name</label><br></br>
            <input id="name" type="text" onChange={updateName} placeholder='Name' required /><br></br>

            <label htmlFor="email">Email Address</label><br></br>
            <input id="email" type="text" onChange={updateEmail} placeholder='Email' /><br></br>

            <label htmlFor="address">Home Address</label><br></br>
            <input id="address" type="text" onChange={updateAddress} placeholder='Address' /><br></br>

            <label htmlFor="password">Password</label><br></br>
            <input id="password" type="password" onChange={updatePassword} placeholder='Password (more than 4 characters)' /><br></br>

            <label htmlFor="verifyPassword">Verify Password</label><br></br>
            <input id="verifyPassword" type="password" onChange={updateVerifiedPassword} placeholder='Verify Password' /><br></br>

            <label htmlFor="cardNumber">Credit Card Number (ex. 614012345678)</label><br></br>
            <input id="cardNumber" type="number" onChange={updateCard} placeholder='Credit Card Number (12 Digits)' /><br></br>

            <label htmlFor="creditCardExpire">Credit Card Expiry Date (ex. 0124)</label><br></br>
            <input id="creditCardExpire" type="number" onChange={updateExpireDate} placeholder='MMYY'/><br></br>

            <label htmlFor="cvv">CVV (ex. 143)</label><br></br>
            <input id="cvv" type="number" onChange={updateCvv} placeholder='CVV (3 Digits)' /><br></br>

            <button id="login" type="button" onClick={() => handleRegister()}>Register </button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Registrationpage