import React, { useState } from 'react'
import { Header } from '../../Components/Header/Header';
import { Back } from "../../Components/Back/Back";
import "./ticketpage.css";

const Ticketpage = () => {
    return (
      <div className="Ticket">
        {/* <Header /> */}
        <div>
          <h1>Payment</h1>
          <b> Payment </b>
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
  
  export default Ticketpage