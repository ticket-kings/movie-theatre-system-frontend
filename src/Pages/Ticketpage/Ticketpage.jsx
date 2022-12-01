import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./ticketpage.css";

const Ticketpage = () => {
    const [cardId, setCardId] = useState(sessionStorage.getItem("cardId"));
    const [seat, setSeatId] = useState(sessionStorage.getItem("seat"));

    const createTicket = async () => {
        console.log(cardId);
        //create ticket
        let response2 = await fetch('http://localhost:8080/api/v1/ticket', {
          method: 'POST',
          body: JSON.stringify({
            id: null,
            paymentId: null,
            seatId: seat, // need seatId from previous page
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
          });
      }

    return (
        <div className="ticketpage_container">
          <Header />
          <div>
            <h1>Ticket</h1>
            <div className="ticketpage_container">
              <form>
                <button id="login" type="button" onClick={() => createTicket()}>Print Ticket </button>
              </form>
              <Back />
            </div>
          </div>
        </div>
    
      )
            }

export default Ticketpage