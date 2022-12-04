import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Back } from "../../Components/Back/Back";
import "./checkticketpage.css";

/**
 * Checkticketpage is for a customer to check their ticket information using the ticketId
 * @returns div containing page to check ticket information
 */
const Checkticketpage = () => {

  const [ticketId, setTicketId] = useState();

  const [retrievedTicket, setRetrievedTicket] = useState();

  /**
   * Function to handle empty input
   */
  const handleCheck = () => {
    if (ticketId == undefined) {
        alert("Please enter a valid ticket number")
    } else {
        fetchTicket();
    }
  }

  /**
   * Fetch information about specific ticket given the ticketId
   */
  const fetchTicket = async () => {
    await fetch(`http://localhost:8080/api/v1/ticket/${ticketId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status != 400) {
            setRetrievedTicket(data);
        } else {
            alert("Ticket does not exist")
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="checkticket">
      <Header />
      <div>
        <div className="checkticket_container">
            {console.log(retrievedTicket)}
          <h1>Check your Tickets</h1>
          <input type="number" placeholder="Ticket Number" onChange={(e) => setTicketId(e.target.value)}/>
          <button onClick={() => handleCheck()}>Check</button>
          <div>
            {retrievedTicket!= undefined ? (
            <div>
                <p>Ticket Id: {retrievedTicket.id}</p>  
                <p>Movie: {retrievedTicket.showing.movie.name}</p>
                <p>Showing Time: {retrievedTicket.showing.showtime.time}</p>
                <p>Seat Number: {retrievedTicket.seat.seatNumber}</p>
            </div> ) : (<p></p>)}
          </div>
          <Back />
        </div>
      </div>
    </div>
  );
};

export default Checkticketpage;
