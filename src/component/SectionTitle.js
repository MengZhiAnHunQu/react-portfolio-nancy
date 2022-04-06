import React from "react";

export const SectionTitle = ({ title }) => {
  return (
    <div
      className="section-title fw-bolder text-center p-5"
      style={{ fontFamily: "Merriweather" }}
    >
      {title}
      <hr />
    </div>
  );
};
