import React from "react";
import "./goUp.css";

export const GoUp = () => {
  return (
    <a href="#navbar">
      <div className="up d-flex justify-content-center align-items-center">
        <span className="fas fa-angle-double-up text-primary fs-2"></span>
      </div>
    </a>
  );
};
