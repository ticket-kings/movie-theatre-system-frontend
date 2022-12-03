import React, { useState } from 'react'

import "./homepage.css";

import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie";

const Homepage = () => {
  const navigate = useNavigate();
  const [ticketId, setTicketId] = useState("Default TicketId");
  const [movie, setMovie] = useState("Default Movie");

  const cancelTicket = async () => {
    let response = await fetch('http://localhost:8080/api/v1/ticket/'+ticketId, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        alert("Invalid ticket number")
      });
  }

  const searchMovie = () => {
    sessionStorage.setItem("searchedMovie", movie)
    navigate('/search');
  }

  const updateTicketId = (e) => {
    setTicketId(e.target.value)
  }

  const updateMovie = (e) => {
    setMovie(e.target.value)
  }



  return (
    <div className="home">
      <Header />
      <div className="home_container">
        <h1>Ticket Kings Movie Theatre</h1>
        <h2> Book a movie now! </h2>
        <input type="searchMovie" onChange = {updateMovie} placeholder='Movie' />
        <button id = "search" onClick= {() => searchMovie()} >Search for Movie</button>
        <button onClick={() => navigate("/movie")}>View all Movies</button> <br></br><br></br><br></br>

        <button onClick={() => navigate("/checkticket")}>Have ticket? Check your ticket here</button>
        <br></br><br></br>

        <label htmlFor="cancel" type="text"> Would you like to cancel a ticket? </label> <br></br>
        <input htmlFor="cancel" type="text" onChange={updateTicketId} placeholder="Ticket ID" /> <br></br>
        <button id="cancel" onClick={() => cancelTicket()}> Cancel Ticket</button>

      </div>
    </div>
  );
};

export default Homepage;
