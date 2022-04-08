import React from "react";
import "./goUp.css";
import arrow from "../images/arrow.png";

export const GoUp = () => {
  return (
    <a href="#navbar">
      <div className="up d-flex justify-content-center align-items-center ">
        <img src={arrow} alt="" width="50%" />
      </div>
    </a>
  );
};
