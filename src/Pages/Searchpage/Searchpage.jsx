import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie";
import { Back } from "../../Components/Back/Back";
import "./searchpage.css";

// const showtimes = () => {
//   var mylist = document.getElementById("myList");
//   document.getElementById("favourite").value =
//     mylist.options[mylist.selectedIndex].text;
// };

// Page for Individual Movies
const Searchpage = () => {
  const [movies, setMovies] = useState([]);
  
  let searchedMovie = sessionStorage.getItem("searchedMovie")

  const fetchData = async () => {
    await fetch(`http://localhost:8080/api/v1/movie/search?name=`+searchedMovie)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  };

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
            {movies && movies.map((movie, index) => (
              <Movie movie={movie} key={index} />
            ))}
          </div>
          <Back />
        </div>
      </div>
    </div>
  );
};

export default Searchpage;
