import React from "react";
import "./back.css";

import { useNavigate } from "react-router-dom";

/**
 * Back contains a button that will navigate the user to the previous page
 * @returns Back button
 */
export const Back = () => {
    const navigate = useNavigate();

  return (
    <div className="back">
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};