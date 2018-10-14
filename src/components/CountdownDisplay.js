import React from "react";
const countdownDisplay = ({ message, secondsLeft, timer }) => {
  if (secondsLeft === 0) clearInterval(timer);
  return (
    <div style={{ backgroundColor: "#FFFFFF", margin: "0 20px 0 20px" }}>
      <span>{message ? message : "Time left: " + secondsLeft}</span>
    </div>
  );
};

export default countdownDisplay;
