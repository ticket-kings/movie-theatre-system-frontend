import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import seatIcon from "../../Assets/seat.png";
import "./individualmoviepage.css";

const Individualmoviepage = () => {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});

  const [chosenSeat, setChosenSeat] = useState();

  const chooseSeat = (seat) => {
    setChosenSeat(seat.seatNumber);
  };

  const getTickets = () => {
    console.log("Tickets");
  };

  const backend_endpoint = "http://localhost:8080";

  const fetchMovie = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie`)
      .then((res) => res.json())
      .then((data) => setMovie(data[0]))
      .catch((error) => console.log(error));
  };

  const fetchSeats = async () => {
    await fetch(`${backend_endpoint}/api/v1/showtime`)
      .then((res) => res.json())
      .then((data) => setSeats(data[0].seats)) // Change this dynamically for chosen showtime!
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovie();
    fetchSeats();
  }, []);

  return (
    <div className="productpage_container">
      <Header />
      {console.log(movie)}
      <div className="individualproduct_container">
        <h1>{movie.name}</h1>
        <img
          src={movie.imageUrl}
          width={400}
          height={600}
        />
        <p>{movie.description}</p>
        <p>$10.00</p>
      </div>

      <div>
        <h2>Showtimes:</h2>
        <button>Showtime 1 (not implemented yet)</button>
        <button>Showtime 2 (not implemented yet)</button>
      </div>

      <div>
        <h2>Seats:</h2>
        <div className="seats">
          {seats &&
            seats.slice(0, 5).map((seat, index) => (
              <div key={index}>
                {seat.seatNumber}
                <img
                  src={seatIcon}
                  width={30}
                  onClick={() => chooseSeat(seat)}
                />
              </div>
            ))}
        </div>
        <div className="seats">
          {seats &&
            seats.slice(5, 10).map((seat, index) => (
              <div key={index}>
                {seat.seatNumber}
                <img
                  src={seatIcon}
                  width={30}
                  onClick={() => chooseSeat(seat)}
                />
              </div>
            ))}
        </div>
        <p>Your chosen seat is: {chosenSeat}</p>
      </div>
      <div className="addtocart_button">
        <button onClick={() => getTickets()}>Get Tickets</button>
      </div>
    </div>
  );
};

export default Individualmoviepage;
