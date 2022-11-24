import React from "react";
import "./homepage.css";

import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <p className = "corner"> Welcome Guest User! </p>
      <Header />
      <div className ="home">
        <h1>Ticket Kings Movie Theatre</h1>
          <p> Book a movie now! </p>
          <input type="searchMovie" placeholder='Movie' />
          <button>Search for Movie</button>
          <button> View all Movies</button>
        </div>
      </div>
  );
};

export default Homepage;
