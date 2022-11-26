import React, { useState } from "react";
import { Header } from '../../Components/Header/Header';
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

  const [movies, setMovies] = useState([
    {
      id: 0,
      name: "Black Panther: Wakanda Forever",
      image_url: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
      description: "Description 1",
      duration: 166,
      is_released: true,
    },
    {
      id: 1,
      name: "Avatar: The Way of Water",
      image_url: "https://preview.redd.it/k2u12aobjgy81.jpg?auto=webp&s=c1b783b53f910ee9a18c451a38015ce5c9c1f7fc",
      description: "Description 2",
      duration: 166,
      is_released: true, 
    },   
    {
      id: 3,
      name: "Black Adam",
      image_url: "https://www.theilluminerdi.com/wp-content/uploads/2022/09/black-adam-heroes.jpg",
      description: "Description 3",
      duration: 166,
      is_released: true,
    },   
  ])

  return (
    <div className="movie">
      <Header />
      <div>
        <div className="movie_container">
          <h1>Movie</h1>
          <label>List of movies:</label>
          <div>
            {movies.map((movie) => <Movie movie={movie} />)}
          </div>
          {/* <b> Select a showtime </b>
        <select id="myList" onchange="showtimes()">
          <option> ---Choose a showtime--- </option>
          <option> ? </option>
          <option> ?? </option>
          <option> ??? </option>
          <option> ???? </option>
        </select>
        <p>
          {" "}
          Input:
          <input type="text" id="favourite" size="20"></input>
<<<<<<< HEAD
          <button type="button" id ="select" class ="btn btn-primary"> Select a seat </button>
        </p>
=======
        </p> */}
>>>>>>> c71752077b729c3335c884c98c10af09b182046f
        <Back />
        </div>
      </div>
    </div>
  );
};

const selectSeat = () => {

}


export default Moviepage;
