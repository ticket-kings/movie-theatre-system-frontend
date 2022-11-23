import React from "react";
import "./homepage.css";

import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <div>
        <h1>Ticket Kings Movie Theatre</h1>
        <div className="card">
          <p>Movies</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
