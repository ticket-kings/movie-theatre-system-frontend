import React, { useState } from "react";
import { Header } from "../../Components/Header/Header";
import "./adminpage.css";

const Adminpage = () => {
  const [adminPass, setAdminPass] = useState();
  const [authenticate, setAuthenticate] = useState(false);

  const authenticateAdmin = () => {
    if (adminPass == "612") {
      setAuthenticate(true);
    }
  };

  return (
    <div className="adminpage">
      <div>
        <h1>Welcome Admin</h1>
        {authenticate == false ? (
          <div>
            <label>What is the Password? (Hint! The code for this course... ENSF ___?)</label>
            <br></br>
            <input
              placeholder="Password"
              onChange={(e) => setAdminPass(e.target.value)}
            />
            <br></br>
            <button onClick={() => authenticateAdmin()}>Authenticate</button>
          </div>
        ) : (
          <div>
            <input placeholder="movieId" />
            <button>Release movie to Register Users Movie</button>
            <br></br>
            <br></br>
            <input placeholder="movieId" />
            <button>Release a Movie to All Users (With Announcement)</button>
            <br></br>
            <br></br>
            <input placeholder="name" />
            <input placeholder="emailAddress" />
            <input placeholder="card.cardNumber" />
            <input placeholder="card.expiryDate" />
            <input placeholder="card.cvv" />
            <input placeholder="address" />
            <input placeholder="password" />
            <button>Add a Registered User</button>
            <br></br>
            <br></br>
            <input placeholder="userId" />
            <button>Remove a Registered User</button>
            <br></br>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adminpage;
