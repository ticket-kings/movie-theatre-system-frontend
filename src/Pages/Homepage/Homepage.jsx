import React from "react";
import "./homepage.css";

import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <div className ="home_container">
        <h1>Ticket Kings Movie Theatre</h1>
          <h2> Book a movie now! </h2>
          <input type="searchMovie" placeholder='Movie' />
          <button>Search for Movie</button>
          <button onClick={() => navigate("/movie")}>View all Movies</button>
        </div>
      </div>
  );
};

export default Homepage;
