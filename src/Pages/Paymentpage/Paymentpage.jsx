import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./paymentpage.css";
import { useNavigate } from 'react-router-dom';

const Paymentpage = () => {
  const [name, setName] = useState("Default name");
  //const [password, setPassword] = useState("Default password");
  //const [creditCode, setCreditCode] = useState("Default password");
  const [email, setEmail] = useState("Default Email");
  const [cardNumber, setCard] = useState("Default Credit Card Number");
  const [cardExpire, setExpire] = useState("Default Credit Card Expire Date");
  const [cvv, setCvv] = useState("Default CVV");
  //const [cardId, setCardId] = useState("Default CardId");

  const navigate = useNavigate();

  const navigateToTicketPage = () => {
    navigate('/ticket');
  }

  const createGuestUser = async () => {
    console.log(name);
    if (name == 'Default name') {
      alert("Please enter a valid name.")
    } else if (email == "Default Email") {
      alert("Please enter a valid email address")
    } else {
    //creating guest user
    let response1 = await fetch('http://localhost:8080/api/v1/user/guest', {
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
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((response) => response.json())  
      .catch((error) => {
        alert(error);
      })
      .then((data) => {
        sessionStorage.setItem("cardId", data.cardId)
        console.log(data);
        navigateToTicketPage();
      });
  }
  }



  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateCredit = (e) => {
    setCreditCode(e.target.value);
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
    <div className="paymentpage_container">
      <Header />
      {console.log("User Id",sessionStorage.getItem("userId"))}
      {(sessionStorage.getItem("userId") == null || sessionStorage.getItem("userId") == "null") ? console.log(true) : console.log(false)}
      <div>
        <h1>Ticket Purchase</h1>
        <div className="paymentpage_container">
          <form>
            <p>Please input the below information to purchase a ticket:</p>
            <label htmlFor="name">First Name</label><br></br>
            <input id="name" type="text" onChange={updateName} placeholder='name..' required /><br></br>

            <label htmlFor="email">Email Address</label><br></br>
            <input id="email" type="text" onChange={updateEmail} placeholder='email..' /><br></br>

            {/* <label htmlFor="password">Password</label><br></br>
            <input id="password" type="text" onChange={updatePassword} placeholder='password..' /><br></br>

            <label htmlFor="verifyPassword">Verify Password</label><br></br>
            <input id="verifyPassword" type="text" onChange={updateVerifiedPassword} placeholder='verify password..' /><br></br> */}

            <label htmlFor="creditCode">Coupon Code</label><br></br>
            <input id="creditCode" type="text" onChange={updateCredit} placeholder='coupon code..' /><br></br>

            <label htmlFor="cardNumber">Credit Card Number</label><br></br>
            <input id="cardNumber" type="text" onChange={updateCard} placeholder='credit card number..' /><br></br>

            <label htmlFor="creditCardExpire">Credit Card Expiry Date</label><br></br>
            <input id="creditCardExpire" type="text" onChange={updateExpireDate} placeholder='dd/mm/yy' /><br></br>

            <label htmlFor="cvv">CVV</label><br></br>
            <input id="cvv" type="text" onChange={updateCvv} placeholder='CVV..' /><br></br>

            <button id="login" type="button" onClick={() => createGuestUser()}>Complete Purchase </button>
          </form>
          <Back />
        </div>
      </div>
    </div>

  )
}

export default Paymentpage