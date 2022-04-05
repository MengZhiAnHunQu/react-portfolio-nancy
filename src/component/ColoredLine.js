import React from "react";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export default function App() {
  return (
    <div>
      <ColoredLine color="#f364ab" />
    </div>
  );
}
