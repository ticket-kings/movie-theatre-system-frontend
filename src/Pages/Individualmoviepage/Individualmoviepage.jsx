import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import seatIcon from "../../Assets/seat.png"
import "./individualmoviepage.css";

const Individualmoviepage = () => {

    const [seats, setSeats] = useState([
        {
            price: 10,
            seat_number: "A1",
            premium: true,
            reserved: false,
            showtime_id: 1,
        },
        {
            price: 10,
            seat_number: "A2",
            premium: true,
            reserved: true,
            showtime_id: 1,
        },
        {
            price: 10,
            seat_number: "A3",
            premium: true,
            reserved: true,
            showtime_id: 1,
        },
    ])

    const [chosenSeat, setChosenSeat] = useState();

    const chooseSeat = (seat) => {
        setChosenSeat(seat.seat_number)
    }

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
      <div>
        <h2>Seats</h2>
        <div className="seats">
        {seats.map((seat) => (<div>{seat.seat_number}<img src={seatIcon} width={30} onClick={() => chooseSeat(seat)}/></div>))}
        </div>
        <p>Your chosen seat is: {chosenSeat}</p>
      </div>
    </div>
  );
};

export default Individualmoviepage;
