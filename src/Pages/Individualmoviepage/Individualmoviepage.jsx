import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import seatIcon from "../../Assets/seatinverse.png";
import { Back } from "../../Components/Back/Back";
import "./individualmoviepage.css";

const Individualmoviepage = () => {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [showtime, setShowtime] = useState([]);

  const [chosenShowtime, setChosenShowtime] = useState();
  const [chosenSeat, setChosenSeat] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  const backend_endpoint = "http://localhost:8080";

  const fetchMovie = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie/${params.movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data)) // Change this dynamically for chosen movie!
      .catch((error) => console.log(error));
  };

  const fetchShowtimes = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie/${params.movieId}/showtimes`)
      .then((res) => res.json())
      .then((data) => setShowtime(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovie();
    fetchShowtimes();
  }, []);

  const chooseShowtime = (index) => {
    setChosenShowtime(showtime[index].id);
    setSeats(showtime[index].seats);
  };

  const chooseSeat = (seat) => {
    setChosenSeat(seat);
  };

  const navigateToPaymentPage = () => {
    sessionStorage.setItem("seat", chosenSeat)
    if(sessionStorage.getItem("IsLoggedIn") != "True") {
      navigate(`/movie/`+movie.id+'/payment')
    }
    
    //navigate("/ticket");
  };

  return (
    <div className="moviepage_container">
      <Header />
      <div className="individualmovie_container">
        <h1>{movie && movie.name}</h1>
        <img src={movie && movie.imageUrl} width={400} height={600} />
        <p>{movie && movie.description}</p>
        <p>$10.00</p>
      </div>

      <div>
        <h2>Showtimes:</h2>
        <button onClick={() => chooseShowtime(0)}>
          {showtime[0] && <p>Showtime {showtime[0].id} at {showtime[0].time}</p>}
        </button>
        <button onClick={() => chooseShowtime(1)}>
          {showtime[1] && <p>Showtime {showtime[1].id} at {showtime[1].time}</p>}
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
        {chosenSeat.seatNumber ? (
          <p>
            Your chosen seat is: {chosenSeat.seatNumber} (showtime ID{" "}
            {chosenSeat.showtimeId})
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="addtocart_button">
        <button onClick={() => navigateToPaymentPage()}>Get Tickets</button>
      </div>
      <Back />
    </div>
  );
};

export default Individualmoviepage;
