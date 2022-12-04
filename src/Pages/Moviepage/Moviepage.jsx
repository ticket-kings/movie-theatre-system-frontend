import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { Movie } from "../../Components/Movie/Movie";
import { Back } from "../../Components/Back/Back";
import "./moviepage.css";

// const showtimes = () => {
//   var mylist = document.getElementById("myList");
//   document.getElementById("favourite").value =
//     mylist.options[mylist.selectedIndex].text;
// };

// Page for Individual Movies
const Moviepage = () => {
  const [movies, setMovies] = useState([]);

  const backend_endpoint = "http://localhost:8080";

  const fetchData = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie`)
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
