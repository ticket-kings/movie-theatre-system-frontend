import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import "./registrationpage.css";

const Registrationpage = () => {
  const [name, setName] = useState("Default name");
  const [password, setPassword] = useState("Default password");
  const [verifiedPassword, setVerifiedPassword] = useState("Default password");
  const [address, setAddress] = useState("Default Address");
  const [email, setEmail] = useState("Default Email");
  const [cardNumber, setCard] = useState("Default Credit Card Number");
  const [cardExpire, setExpire] = useState("Default Credit Card Expire Date");
  const [cvv, setCvv] = useState("Default CVV");

  const register = async () => {
    console.log(name);
    console.log(password);
    console.log(verifiedPassword);

    if (name == 'Default name') {
      alert("Please enter a valid name.")
    } else if (email == "Default Email") {
      alert("Please enter a valid email address")
    } else if (address == "Default Address") {
      alert("Please enter a valid address")
    } else if (password == 'Default password') {
      alert("Please enter a valid password.")
    } else if (password != verifiedPassword) {
      alert("Passwords do not match.")
    } else {
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
            alert("Congratulations " + name + "! You are now a registered user!")
            return response.json()
          }
        }).catch((error) => {
          alert(error);
        })
        .then((data) => {
          console.log(data)
        });
    }
  }

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
            <input id="name" type="text" onChange={updateName} placeholder='name..' required /><br></br>

            <label htmlFor="email">Email Address</label><br></br>
            <input id="email" type="text" onChange={updateEmail} placeholder='email..' /><br></br>

            <label htmlFor="address">Home Address</label><br></br>
            <input id="address" type="text" onChange={updateAddress} placeholder='address..' /><br></br>

            <label htmlFor="password">Password</label><br></br>
            <input id="password" type="text" onChange={updatePassword} placeholder='password..' /><br></br>

            <label htmlFor="verifyPassword">Verify Password</label><br></br>
            <input id="verifyPassword" type="text" onChange={updateVerifiedPassword} placeholder='verify password..' /><br></br>

            <label htmlFor="cardNumber">Credit Card Number</label><br></br>
            <input id="cardNumber" type="text" onChange={updateCard} placeholder='credit card number..' /><br></br>

            <label htmlFor="creditCardExpire">Credit Card Expiry Date</label><br></br>
            <input id="creditCardExpire" type="text" onChange={updateExpireDate} placeholder='dd/mm/yy' /><br></br>

            <label htmlFor="cvv">CVV</label><br></br>
            <input id="cvv" type="text" onChange={updateCvv} placeholder='CVV..' /><br></br>


            <button id="login" type="button" onClick={() => register()}>Register </button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Registrationpage