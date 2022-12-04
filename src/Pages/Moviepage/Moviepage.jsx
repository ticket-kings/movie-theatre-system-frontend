import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie"; // Movie is an important component for this page, contains all movie details
import { Back } from "../../Components/Back/Back";
import "./moviepage.css";

/**
 * Moviepage which displays movies to the users.
 * For Guest Users, this page will only display the movies that have been released to the public.
 * For Registered Users, this page will display all movies in the database.
 * @returns div displaying a list of movies
 */
const Moviepage = () => {
  const [movies, setMovies] = useState([]);

  const backend_endpoint = "http://localhost:8080";

  /**
   * Function to fetch all movies from the database
   */
  const fetchData = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  };

  /**
   * useEffect will fetch all movie data on page load
   */
  useEffect(() => {
    fetchData();
  }, []);

  // Render out a Movie component for every movie in the object (depending on if they are a Guest or Registered User)
  return (
    <div className="movie">
      <Header />
      <div>
        <div className="movie_container">
          <h1>Movie</h1>
          <label>List of movies:</label>
          <div>
            {movies &&
              movies.map((movie, index) => (
                <div key={index}>
                  {(movie.isReleased==false && sessionStorage.getItem("userId") == null) ? ( <div></div> ) : <Movie movie={movie}  />}
                </div>
              ))}
          </div>
          <Back />
        </div>
      </div>
    </div>
  );
};

export default Moviepage;
