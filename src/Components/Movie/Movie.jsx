import React from "react";
import "./movie.css";

import { useNavigate } from "react-router-dom";

/**
 * Movie is the movie component that is rendered multiple times in the Moviepage and Searchpage.
 * Displays the movie name, image from a url, description, duration.
 * The image is clickable and takes the user to the Individualmoviepage
 * @param {*} param0 movie data is passed in as a prop
 * @returns div containing a container for the movie information
 */
export const Movie = ({ movie }) => {
  const navigate = useNavigate();

  /**
   * Navigate to the individual movie page for that specific movie given the movieId
   * @param {*} movieId movieId for the specific movie
   */
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