import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import seatIcon from "../../Assets/seatinverse.png";
import { Back } from "../../Components/Back/Back";
import "./individualmoviepage.css";

const Individualmoviepage = () => {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});

  const [chosenShowtime, setChosenShowtime] = useState();
  const [chosenSeat, setChosenSeat] = useState();

  const chooseShowtime = (showtime) => {
    setChosenShowtime(showtime);
    // Fetch new seats for the specific showtime
  };

  const chooseSeat = (seat) => {
    setChosenSeat(seat.seatNumber);
  };

  const navigateToPaymentPage = () => {
    //navigate(`/movie/`+movie.id+'/ticket')
    navigate('/ticket');
  };

  const backend_endpoint = "http://localhost:8080";

  const fetchMovie = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie`)
      .then((res) => res.json())
      .then((data) => setMovie(data[0])) // Change this dynamically for chosen movie!
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
    <div className="moviepage_container">
      <Header />
      <div className="individualmovie_container">
        <h1>{movie.name}</h1>
        <img src={movie.imageUrl} width={400} height={600} />
        <p>{movie.description}</p>
        <p>$10.00</p>
      </div>

      <div>
        <h2>Showtimes:</h2>
        <button onClick={() => chooseShowtime(1)}>
          Showtime 1 (not fully implemented yet)
        </button>
        <button onClick={() => chooseShowtime(2)}>
          Showtime 2 (not fully implemented yet)
        </button>
        <p>Your chosen showtime is: {chosenShowtime}</p>
      </div>

      <div>
        <h2>Seats:</h2>
        <div className="seats">
          {chosenShowtime &&
            seats &&
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
          {chosenShowtime &&
            seats &&
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
        <button onClick={() => navigateToPaymentPage()}>Get Tickets</button>
      </div>
      <Back/>
    </div>
  );
};

export default Individualmoviepage;
