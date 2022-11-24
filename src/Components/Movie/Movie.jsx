import React from "react";
import "./movie.css";

import { useNavigate } from "react-router-dom";
import crownLogo from "../../Assets/crown.png";

export const Movie = () => {
  const navigate = useNavigate();

  return (
    <div className = "movie">
      <button onClick={() => navigate("/movie")}>Movie Selection</button>
    </div>
  );
};