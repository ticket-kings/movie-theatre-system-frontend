import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./paymentpage.css";
import { useNavigate } from 'react-router-dom';

const Paymentpage = () => {
  const [name, setName] = useState("Default name");
  //const [password, setPassword] = useState("Default password");
  //const [creditCode, setCreditCode] = useState("Default password");
  const [email, setEmail] = useState("Default Email");
  const [cardNumber, setCardNumber] = useState("Default Credit Card Number");
  const [cardExpiryDate, setExpiryDate] = useState("Default Credit Card Expire Date");
  const [cvv, setCvv] = useState("Default CVV");
  //const [cardId, setCardId] = useState("Default CardId");

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const [userId, setUserId] = useState();

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
          expiryDate: cardExpiryDate,
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

  useEffect(() => {
    if (sessionStorage.getItem("userId") != null && sessionStorage.getItem("userId") != "null") {
      setLoggedIn(true);
      setUserId(sessionStorage.getItem("userId"));
      fetchData(sessionStorage.getItem("userId"));
    }
  }, [])

  const backend_endpoint = "http://localhost:8080";

  const fetchData = async (id) => {
    await fetch(`${backend_endpoint}/api/v1/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardNumber(data.card.cardNumber);
        setExpiryDate(data.card.expiryDate);
        setCvv(data.card.cvv);
      })
      .catch((error) => console.log(error));
  };

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
    setCardNumber(e.target.value);
  }

  const updateExpireDate = (e) => {
    setExpiryDate(e.target.value);
  }

  const updateCvv = (e) => {
    setCvv(e.target.value);
  }

  return (
    <div className="paymentpage_container">
      <Header />
      <div>
        <h1>Ticket Purchase</h1>
        <div className="paymentpage_container">
          {loggedIn==false ? ( <div> 
            <form>
            <p>Please input the below information to purchase a ticket:</p>
            <label htmlFor="name">First Name</label><br></br>
            <input id="name" type="text" onChange={updateName} placeholder='name..' required /><br></br>

            <label htmlFor="email">Email Address</label><br></br>
            <input id="email" type="text" onChange={updateEmail} placeholder='email..' /><br></br>

            <label htmlFor="cardNumber">Credit Card Number</label><br></br>
            <input id="cardNumber" type="text" onChange={updateCard} placeholder='credit card number..' /><br></br>

            <label htmlFor="creditCardExpiryDate">Credit Card Expiry Date</label><br></br>
            <input id="creditCardExpiryDate" type="text" onChange={updateExpireDate} placeholder='dd/mm/yy' /><br></br>

            <label htmlFor="cvv">CVV</label><br></br>
            <input id="cvv" type="text" onChange={updateCvv} placeholder='CVV..' /><br></br>

            <label htmlFor="creditCode">Coupon Code</label><br></br>
            <input id="creditCode" type="text" onChange={updateCredit} placeholder='Coupon code (credit)' /><br></br>

            <button id="login" type="button" onClick={() => createGuestUser()}>Complete Purchase as Guest </button>
          </form>
          </div> ) : 
          (<div> 
            <h2>Hello Registered User ({sessionStorage.getItem("firstName")})</h2>
            <h2>You already have a billing within our system</h2>
            <p>Credit Card ending in {cardNumber.slice(-4)}</p>
            <p>Expiry Date: {cardExpiryDate}</p>
            <input id="creditCode" type="text" onChange={updateCredit} placeholder='Coupon code (credit)' /><br></br>
            <button id="login" type="button" onClick={(e) => console.log(e)}>Complete Purchase as Registered User </button>
          </div> )}
          
          <Back />
        </div>
      </div>
    </div>

  )
}

export default Paymentpage