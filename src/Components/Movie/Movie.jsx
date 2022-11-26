import React from "react";
import "./movie.css";

import { useNavigate } from "react-router-dom";

export const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const navigateToMoviePage = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  return (
    <div>
      <p>{movie.name}</p>
      <img className="page_movie_image"
      src={movie.imageUrl}
      width={200}
      height={280}
      onClick={() => navigateToMoviePage(movie.id)}
      />
      <div>
      <p>{movie.description}</p>
      <h3>Duration: </h3> <p>{movie.duration}</p>
      </div>
    </div>
  );
};