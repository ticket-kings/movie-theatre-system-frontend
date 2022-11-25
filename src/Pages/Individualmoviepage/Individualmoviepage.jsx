import React from "react";
import { Header } from "../../Components/Header/Header";
import "./individualmoviepage.css";

const Individualmoviepage = () => {

    const getTickets = () => {
        console.log("Tickets")
    }

  return (
    <div className="productpage_container">
      <Header />
      <div className="individualproduct_container">
        <h1>Movie Name</h1>
        <img
        src="https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
        width={400}
        height={600}
        />
        <p>Movie Description</p>
        <p>Movie Price</p>
        <div className="addtocart_button">
            <button onClick={() => getTickets()} >Get Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Individualmoviepage;
