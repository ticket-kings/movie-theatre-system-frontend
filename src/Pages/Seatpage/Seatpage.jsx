import React from 'react'
import { Header } from '../../Components/Header/Header';
import "./seatpage.css";

const Seatpage = () => {
    return (
      <div className="movie">
        {/* <Header /> */}
        <div>
          <h1>Movie</h1>
          <b> Select a seat </b>
          <p>
            {" "}
            Input:
            <input type="text" id="favourite" size="20"></input>
            <button type="button" id ="select" class ="btn btn-primary"> Select </button>
          </p>
          <Back />
        </div>
      </div>
    );
  };
  
  export default Seatpage;