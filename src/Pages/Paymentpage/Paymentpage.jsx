import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./paymentpage.css";
import { useNavigate } from 'react-router-dom';

const Paymentpage = () => {
  const [name, setName] = useState("Default name");
  //const [password, setPassword] = useState("Default password");
  const [creditCode, setCreditCode] = useState();
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
    } else if (cardNumber.length != 12) {
      alert("Card Number needs to be 12 numbers")
    } else if (cardExpiryDate.length != 4) {
      alert("Expiry Date should be 4 numbers (MMYY)")
    } else if (cvv.length != 3) {
      alert("CVV should be 3 numbers")
    } else {
    //creating guest user
    let response1 = await fetch('http://localhost:8080/api/v1/user/guest', {
      method: 'POST',
      body: JSON.stringify({
        id: null,
        name: name,
        emailAddress: email,
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

  const checkCoupon = async () => {
    await fetch(`${backend_endpoint}/api/v1/credit/${creditCode}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status != 400) {
          var string = "Coupon is valid. Amount is " + data.amount;
          alert(string)
        } else {
          alert("Coupon is invalid.")
        }

      })
      .catch((error) => console.log(error));
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

            <label htmlFor="cardNumber">Credit Card Number (ex. 614012345678)</label><br></br>
            <input id="cardNumber" type="number" onChange={updateCard} placeholder='Credit Card Number (12 Digits)'  /><br></br>

            <label htmlFor="creditCardExpiryDate">Credit Card Expiry Date (ex. 0124)</label><br></br>
            <input id="creditCardExpiryDate" type="number" onChange={updateExpireDate} placeholder='MMYY' /><br></br>

            <label htmlFor="cvv">CVV (ex. 143)</label><br></br>
            <input id="cvv" type="number" onChange={updateCvv} placeholder='CVV (3 Digits)'/><br></br>

            <label htmlFor="creditCode">Coupon Code</label><br></br>
            <input id="creditCode" type="text" onChange={updateCredit} placeholder='Credit Coupon Code (Optional)' /><br></br>

            <button onClick={() => checkCoupon()}>Check Coupon</button>
            <br></br><br></br>
            <button id="login" type="button" onClick={() => createGuestUser()}>Complete Purchase as Guest </button>
          </form>
          </div> ) : 
          (<div> 
            <h2>Hello Registered User ({sessionStorage.getItem("firstName")})</h2>
            <h2>You already have a billing within our system</h2>
            <p>Credit Card ending in {cardNumber.slice(-4)}</p>
            <p>Expiry Date: {cardExpiryDate}</p>
            <input id="creditCode" type="text" onChange={updateCredit} placeholder='Coupon code (credit)' /><br></br>
            <buttpn onClick={() => checkCoupon()}>Check Coupon</buttpn>
            <button id="login" type="button" onClick={(e) => console.log(e)}>Complete Purchase as Registered User </button>
          </div> )}
          
          <Back />
        </div>
      </div>
    </div>

  )
}

export default Paymentpage