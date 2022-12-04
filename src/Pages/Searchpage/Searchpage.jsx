import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie";
import { Back } from "../../Components/Back/Back";
import "./searchpage.css";

/**
 * Searchpage shows movies that the user has searched for
 * @returns div containing list of searched movies
 */
const Searchpage = () => {
  const [movies, setMovies] = useState([]);
  
  let searchedMovie = sessionStorage.getItem("searchedMovie")

  /**
   * Fetch data of searched movies
   */
  const fetchData = async () => {
    await fetch(`http://localhost:8080/api/v1/movie/search?name=`+searchedMovie)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  };

  /**
   * useEffect fetches searched movie data on page load
   */
  useEffect(() => {
    fetchData();
  }, []);

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

export default Searchpage;
