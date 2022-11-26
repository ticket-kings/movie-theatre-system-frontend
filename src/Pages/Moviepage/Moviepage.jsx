import React from "react";
//import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./moviepage.css";

const showtimes = () => {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").value =
    mylist.options[mylist.selectedIndex].text;
};

// Page for Individual Movies
const Moviepage = () => {
  return (
    <div className="movie">
      {/* <Header /> */}
      <div>
        <h1>Movie</h1>
        <div className="card">
          <label>List of movies:</label>
        </div>
        <b> Select a showtime </b>
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
          <button type="button" id ="select" class ="btn btn-primary"> Select a seat </button>
        </p>
        <Back />
      </div>
    </div>
  );
};

const selectSeat = () => {

}


export default Moviepage;
