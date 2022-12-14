import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import seatIcon from "../../Assets/seatinverse.png";
import seatReservedIcon from "../../Assets/seatinversetaken.png";
import { Back } from "../../Components/Back/Back";
import "./individualmoviepage.css";

/**
 * Individual movie page after clicking on the movie from the movie list.
 * Contains information about the movie, and allows the user to purchase tickets.
 * User will need to pick the showtime, pick the seats, then click on the button to go next.
 * @returns div containing individual movie information and showtime/seat choosing
 */
const Individualmoviepage = () => {
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [showtime, setShowtime] = useState([]);

  const [chosenShowtime, setChosenShowtime] = useState();
  const [chosenSeat, setChosenSeat] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  const backend_endpoint = "http://localhost:8080";

  /**
   * Function to fetch data of the movie
   */
  const fetchMovie = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie/${params.movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data)) // Change this dynamically for chosen movie!
      .catch((error) => console.log(error));
  };

  /**
   * Function to fetch the showtime of the movie
   */
  const fetchShowtimes = async () => {
    await fetch(`${backend_endpoint}/api/v1/movie/${params.movieId}/showtimes`)
      .then((res) => res.json())
      .then((data) => setShowtime(data))
      .catch((error) => console.log(error));
  };

  /**
   * useEffect will fetch the movie and showtime data on page load
   */
  useEffect(() => {
    fetchMovie();
    fetchShowtimes();
  }, []);

  /**
   * Function will be called when user picks a showtime.
   * This will allow for the showtime to be displayed, and
   * also display the seats for the given showtime
   * @param {*} index 
   */
  const chooseShowtime = (index) => {
    setChosenShowtime(showtime[index].id);
    setSeats(showtime[index].seats);
  };

  /**
   * This function will be called when user click on an available seat.
   * This will store the seatId into storage for use in the payment page.
   * It will also set the seat variable to the seat object, for use in displaying info.
   * @param {*} seat 
   */
  const chooseSeat = (seat) => {
    sessionStorage.setItem("seat", seat.id)
    setChosenSeat(seat);
  };

  /**
   * Function will be called when the user clicks on an unavailable seat.
   * Will display a message that the seat is taken.
   * @param {*} seat 
   */
  const chooseTakenSeat = (seat) => {
    let string = "Seat " + seat.seatNumber + " is reserved! Please choose another."
    window.alert(string)
  };

  /**
   * This function is called when the user clicks on the button to proceed after choosing seats.
   */
  const navigateToPaymentPage = () => {
    sessionStorage.removeItem("creditCode"); // Remove the creditCode from sessionStorage
    if (chosenSeat.id == undefined) {
      window.alert("Please choose a seat");
    } else {
      navigate(`/movie/`+movie.id+'/payment') // Navigate to payment page
    }
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
                {console.log(seat.seatNumber, seat.reserved)}
                {seat.seatNumber}
                {seat.reserved==false ? (                 
                <img
                  src={seatIcon}
                  width={30}
                  onClick={() => chooseSeat(seat)}
                />
                ) : (                 
                <img
                  src={seatReservedIcon}
                  width={30}
                  onClick={() => chooseTakenSeat(seat)}
                />
                )}
              </div>
            ))}
        </div>
        <div className="seats">
          {chosenShowtime &&
            seats &&
            seats.slice(5, 10).map((seat, index) => (
              <div key={index}>
                {seat.seatNumber}
                {seat.reserved==false ? (                 
                <img
                  src={seatIcon}
                  width={30}
                  onClick={() => chooseSeat(seat)}
                />
                ) : (                 
                <img
                  src={seatReservedIcon}
                  width={30}
                  onClick={() => chooseTakenSeat(seat)}
                />
                )}
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
        {chosenSeat.id == undefined ? null : (<button onClick={() => navigateToPaymentPage()}>Get Tickets</button>)}
      </div>
      <Back />
    </div>
  );
};

export default Individualmoviepage
