import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./ticketpage.css";
import { Navigate, useNavigate } from 'react-router-dom';

/**
 * Ticketpage will create and display the ticket for the user after purchase
 * @returns 
 */
const Ticketpage = () => {
    const navigate = useNavigate();

    const [cardId, setCardId] = useState(sessionStorage.getItem("cardId"));
    const [seat, setSeatId] = useState(sessionStorage.getItem("seat"));

    const [purchasedPayment, setPurchasedPayment] = useState();

    // useRef hook to preserve values between renders. Prevent multiple function calls of createTicket()
    const runOnce = useRef(false); 

    /**
     * useEffect will call createTicket() on page load once 
     */
    useEffect(() => {
      if (runOnce.current) return; 
      createTicket();
      return () => (runOnce.current = true);
    })

    const createTicket = async () => {
        console.log(cardId);
        //create ticket
        let response2 = await fetch('http://localhost:8080/api/v1/ticket', {
          method: 'POST',
          body: JSON.stringify({
            id: null,
            paymentId: null,
            seatId: seat, // need seatId from previous page
            creditId: null,
            payment: {
              id: null,
              amount: null,
              paymentDate: null,
              cardId: parseInt(sessionStorage.getItem("cardId"))
            },
            credit: {
              code: sessionStorage.getItem("creditCode")
            },
            seat: null
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
            console.log(data)
            if (data.status != 400) {
              setPurchasedPayment(data);
              alert("Email confirmation has been sent!")
            } else {
              alert("Error in creating the ticket...")
              navigate("/");
            }
          });
      }

    return (
        <div className="ticketpage_container">
          <Header />
          <div>
            <h1>Ticket</h1>
            {console.log('cardId',sessionStorage.getItem("cardId"))}
            <div className="ticketpage_container">
              {
                purchasedPayment!=undefined ? (<div>
                <p>Ticket Id: {purchasedPayment && purchasedPayment.id}</p>
                <p>Movie: {purchasedPayment.showing && purchasedPayment.showing.movie.name}</p>
                <p>Showing time: {purchasedPayment.showing && purchasedPayment.showing.showtime.time}</p>
                <p>Seat: {purchasedPayment.seat && purchasedPayment.seat.seatNumber}</p>
                <p>Price: ${purchasedPayment.payment && purchasedPayment.payment.amount}</p>
                <p>Purchase Date: {purchasedPayment.payment && purchasedPayment.payment.paymentDate}</p>
                <button onClick={() => navigate("/")}>Confirm</button>
                  </div>) :
                  (
                    <div><p>Loading ticket information... please wait</p></div>
                  )
              }
            </div>
          </div>
        </div>
    
      )
            }

export default Ticketpage