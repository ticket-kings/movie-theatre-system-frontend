import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./ticketpage.css";
import { Navigate, useNavigate } from 'react-router-dom';

const Ticketpage = () => {
    const navigate = useNavigate();

    const [cardId, setCardId] = useState(sessionStorage.getItem("cardId"));
    const [seat, setSeatId] = useState(sessionStorage.getItem("seat"));

    const [purchasedPayment, setPurchasedPayment] = useState();

    const runOnce = useRef(false);

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
            creditId: sessionStorage.getItem("couponId"),
            payment: {
              id: null,
              amount: null,
              paymentDate: null,
              cardId: cardId
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
            } else {
              navigate("/");
            }
          });
      }

    return (
        <div className="ticketpage_container">
          <Header />
          <div>
            <h1>Ticket</h1>
            <div className="ticketpage_container">
              {
                purchasedPayment!=undefined ? (<div>
                <p>Ticket Id: {purchasedPayment && purchasedPayment.id}</p>
                <p>Movie: {purchasedPayment.showing && purchasedPayment.showing.movie.name}</p>
                <p>Showing time: {purchasedPayment.showing && purchasedPayment.showing.showtime.time}</p>
                <p>Seat: {purchasedPayment.seat && purchasedPayment.seat.seatNumber}</p>
                <p>Price: ${purchasedPayment.payment && purchasedPayment.payment.amount}</p>
                <p>Purchase Date: {purchasedPayment.payment && purchasedPayment.payment.paymentDate}</p>
                <button>Email Confirmation</button>
                  </div>) :
                  (
                    <div><p>No Ticket</p></div>
                  )
              }
              <Back />
            </div>
          </div>
        </div>
    
      )
            }

export default Ticketpage